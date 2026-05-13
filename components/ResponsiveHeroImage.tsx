"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

type ResponsiveHeroImageProps = {
  mobileSrc: string
  desktopSrc: string
  alt: string
  priority?: boolean
  mobileClassName?: string
  desktopClassName?: string
  quality?: number
}

export default function ResponsiveHeroImage({
  mobileSrc,
  desktopSrc,
  alt,
  priority = false,
  mobileClassName = "object-cover",
  desktopClassName = "object-cover",
  quality = 72,
}: ResponsiveHeroImageProps) {
  const [isDesktopViewport, setIsDesktopViewport] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    const syncViewport = (event?: MediaQueryListEvent) => {
      setIsDesktopViewport(event ? event.matches : mediaQuery.matches)
    }

    syncViewport()

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncViewport)
      return () => mediaQuery.removeEventListener("change", syncViewport)
    }

    mediaQuery.addListener(syncViewport)
    return () => mediaQuery.removeListener(syncViewport)
  }, [])

  return (
    <Image
      key={isDesktopViewport ? desktopSrc : mobileSrc}
      src={isDesktopViewport ? desktopSrc : mobileSrc}
      alt={alt}
      fill
      priority={priority}
      sizes="100vw"
      quality={quality}
      className={isDesktopViewport ? desktopClassName : mobileClassName}
    />
  )
}
