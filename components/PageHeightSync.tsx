'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function PageHeightSync() {
  const pathname = usePathname()

  useEffect(() => {
    let frame: number | null = null

    const notifyHeightChange = () => {
      if (frame !== null) window.cancelAnimationFrame(frame)

      frame = window.requestAnimationFrame(() => {
        frame = null
        window.dispatchEvent(new Event('resize'))
        window.dispatchEvent(
          new CustomEvent('ismo:page-height-change', {
            detail: { height: document.documentElement.scrollHeight },
          }),
        )
      })
    }

    const resizeObserver = new ResizeObserver(notifyHeightChange)
    resizeObserver.observe(document.body)

    window.addEventListener('load', notifyHeightChange)
    document.addEventListener('animationend', notifyHeightChange, true)
    document.addEventListener('transitionend', notifyHeightChange, true)
    notifyHeightChange()

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('load', notifyHeightChange)
      document.removeEventListener('animationend', notifyHeightChange, true)
      document.removeEventListener('transitionend', notifyHeightChange, true)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [pathname])

  return null
}
