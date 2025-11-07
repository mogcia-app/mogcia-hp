"use client"

import { useEffect, useRef, useState } from 'react'

const FADE_DURATION = 600
const DISPLAY_DURATION = 5000

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const displayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fadeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (shouldRender && videoRef.current) {
      const video = videoRef.current
      video.currentTime = 0
      const playPromise = video.play()

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay might fail; fallbackとして静止状態のままでも問題なし
        })
      }

      return () => {
        video.pause()
      }
    }
  }, [shouldRender])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const referrer = document.referrer
    let isExternalReferrer = false

    if (referrer) {
      try {
        const referrerOrigin = new URL(referrer).origin
        isExternalReferrer = referrerOrigin !== window.location.origin
      } catch (error) {
        isExternalReferrer = true
      }
    }

    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
    const navigationEntry = navigationEntries[0]
    const isReload = navigationEntry?.type === 'reload'

    if (!isExternalReferrer && !isReload) {
      return
    }

    setShouldRender(true)
    requestAnimationFrame(() => setIsVisible(true))

    displayTimeout.current = setTimeout(() => {
      setIsVisible(false)
      fadeTimeout.current = setTimeout(() => {
        setShouldRender(false)
        const currentVideo = videoRef.current
        if (currentVideo) {
          currentVideo.pause()
          currentVideo.currentTime = 0
        }
      }, FADE_DURATION)
    }, DISPLAY_DURATION)

    return () => {
      if (displayTimeout.current) {
        clearTimeout(displayTimeout.current)
        displayTimeout.current = null
      }
      if (fadeTimeout.current) {
        clearTimeout(fadeTimeout.current)
        fadeTimeout.current = null
      }
    }
  }, [])

  if (!shouldRender) {
    return null
  }

  return (
    <div
      className={`pointer-events-auto fixed inset-0 z-[2000] overflow-hidden bg-white transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDuration: `${FADE_DURATION}ms` }}
    >
      <div className="flex h-full w-full items-center justify-center p-6">
        <video
          ref={videoRef}
          className="w-full max-w-[480px] max-h-[70vh] object-contain"
          src="/3M%20Logo.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </div>
  )
}

