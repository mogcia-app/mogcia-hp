"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const FADE_DURATION = 1400
const PROGRESS_DURATION = 3400
const COMPLETE_POP_DURATION = 420
const COMPLETE_SETTLE_DURATION = 420

export default function PageTransition() {
  const pathname = usePathname()
  const [phase, setPhase] = useState<'hidden' | 'visible' | 'exiting'>('hidden')
  const [progress, setProgress] = useState(0)
  const [isCompleteAccentVisible, setIsCompleteAccentVisible] = useState(false)
  const frameRef = useRef<number | null>(null)
  const exitTimeout = useRef<number | null>(null)
  const cleanupTimeout = useRef<number | null>(null)
  const settleTimeout = useRef<number | null>(null)

  useEffect(() => {
    if (pathname !== '/') {
      return
    }

    const isForcedHomeTransition =
      typeof window !== 'undefined' &&
      window.sessionStorage.getItem('force-home-transition') === 'true'

    if (isForcedHomeTransition) {
      window.sessionStorage.removeItem('force-home-transition')
    }

    const referrer = document.referrer
    let isExternalReferrer = false

    if (referrer) {
      try {
        isExternalReferrer = new URL(referrer).origin !== window.location.origin
      } catch {
        isExternalReferrer = true
      }
    }

    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
    const navigationEntry = navigationEntries[0]
    const isReload = navigationEntry?.type === 'reload'
    const isInitialNavigation = navigationEntry?.type === 'navigate'

    if (!isForcedHomeTransition && !isExternalReferrer && !isReload && !isInitialNavigation) {
      return
    }

    setPhase('visible')
    setProgress(0)
    setIsCompleteAccentVisible(false)

    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const nextProgress = Math.min((elapsed / PROGRESS_DURATION) * 100, 100)
      setProgress(nextProgress)

      if (nextProgress < 100) {
        frameRef.current = window.requestAnimationFrame(tick)
        return
      }

      setIsCompleteAccentVisible(true)

      settleTimeout.current = window.setTimeout(() => {
        setIsCompleteAccentVisible(false)
        exitTimeout.current = window.setTimeout(() => {
          setPhase('exiting')
          cleanupTimeout.current = window.setTimeout(() => {
            setPhase('hidden')
          }, FADE_DURATION)
        }, COMPLETE_SETTLE_DURATION)
      }, COMPLETE_POP_DURATION)
    }

    frameRef.current = window.requestAnimationFrame(tick)

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
      if (exitTimeout.current) {
        clearTimeout(exitTimeout.current)
      }
      if (settleTimeout.current) {
        clearTimeout(settleTimeout.current)
      }
      if (cleanupTimeout.current) {
        clearTimeout(cleanupTimeout.current)
      }
    }
  }, [pathname])

  if (phase === 'hidden') {
    return null
  }

  const isExiting = phase === 'exiting'
  const isComplete = progress >= 100 && !isExiting
  const progressLabel = `${Math.round(progress)}%`

  return (
    <div
      className={`pointer-events-auto fixed inset-0 z-[2000] overflow-hidden bg-white transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting ? 'opacity-0 blur-2xl' : 'opacity-100 blur-0'
      }`}
      style={{ transitionDuration: `${FADE_DURATION}ms` }}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isCompleteAccentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-white" />
      </div>
      <div className="relative flex h-full w-full items-center justify-center px-8">
        <div
          className={`w-full max-w-[340px] transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isExiting
              ? '-translate-y-4 scale-[1.045] opacity-0 blur-sm'
              : isCompleteAccentVisible
                ? '-translate-y-1 scale-[1.03] opacity-100 blur-0'
                : 'translate-y-0 scale-100 opacity-100 blur-0'
          }`}
          style={{ transitionDuration: `${isExiting ? FADE_DURATION : 480}ms` }}
        >
          <Image
            src="/m.png"
            alt="MOGCIA"
            width={500}
            height={500}
            priority
            className="mx-auto h-auto w-[110px] md:w-[132px]"
          />
          <div className="mx-auto mt-7 w-full max-w-[240px]">
            <div
              className={`h-px w-full overflow-hidden bg-black/10 transition-all duration-500 ${
                isCompleteAccentVisible ? 'scale-y-[2.2] bg-black/15 shadow-[0_0_18px_rgba(0,0,0,0.14)]' : ''
              }`}
            >
              <div
                className={`relative h-full bg-black/80 transition-[width,transform,box-shadow,background-color] duration-150 ease-linear ${
                  isCompleteAccentVisible ? 'scale-x-100 bg-black shadow-[0_0_18px_rgba(0,0,0,0.2)]' : ''
                }`}
                style={{ width: `${progress}%` }}
              >
                <span
                  className={`absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#f4d35e] transition-all duration-500 ${
                    progress > 2 ? 'opacity-100' : 'opacity-0'
                  } ${isCompleteAccentVisible ? 'scale-125 shadow-[0_0_14px_rgba(244,211,94,0.9)]' : 'scale-100'}`}
                />
              </div>
            </div>
            <div
              className={`mt-2 flex items-center justify-between text-[10px] tracking-[0.24em] text-black/45 transition-all duration-500 ${
                isCompleteAccentVisible ? 'translate-y-[1px] text-black/60' : ''
              }`}
            >
              <span>Loading</span>
              <span>{progressLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
