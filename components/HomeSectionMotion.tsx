'use client'

import { useEffect } from 'react'

export default function HomeSectionMotion() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section:not(.home-hero)'))
    sections.forEach((section, index) => section.classList.add('home-section-motion', index % 2 === 0 ? 'home-slide-left' : 'home-slide-right'))
    document.documentElement.classList.add('home-motion-ready')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    sections.forEach(section => observer.observe(section))

    return () => {
      observer.disconnect()
      sections.forEach(section => section.classList.remove('home-section-motion', 'home-slide-left', 'home-slide-right', 'is-visible'))
      document.documentElement.classList.remove('home-motion-ready')
    }
  }, [])

  return null
}
