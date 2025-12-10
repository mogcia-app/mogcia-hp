"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navItems = [
  { label: '企業理念', href: '/philosophy' },
  { label: 'サービス', href: '/services' },
  { label: 'パートナー制度', href: '/partners' },
  { label: '私たちについて', href: '/about' },
  { label: '会社概要', href: '/company' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="relative border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-1 overflow-hidden">
          <span className="block h-full w-full bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900 animate-gradient-slide"></span>
        </div>
        <div className="w-full mx-auto px-6 sm:px-12 lg:px-24 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="grid grid-cols-[auto_auto] items-center gap-6 text-base md:text-lg font-light tracking-[0.35em] text-gray-900 uppercase"
          >
            <span className="ml-0 md:-ml-10">
              <Image src="/1M%20Logo.png" alt="MOGCIA ロゴ" width={32} height={32} priority />
            </span>
            <span>株式会社MOGCIA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map(item => (
              <Link key={item.label} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-gray-900 px-4 py-1 text-xs uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition-colors"
            >
              お問い合わせ
              <span className="h-px w-4 bg-gray-900 group-hover:bg-white"></span>
            </Link>
          </nav>

          <button
            className="md:hidden text-sm text-gray-700"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-b border-gray-200 bg-white/95 backdrop-blur px-6 py-6 space-y-4 text-sm text-gray-700">
          {navItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="block hover:text-gray-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            お問い合わせ
          </Link>
        </div>
      )}

      <style jsx global>{`
        .animate-gradient-slide {
          background-size: 200% 100%;
          animation: gradientSlide 6s linear infinite;
        }

        @keyframes gradientSlide {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </header>
  )
}


