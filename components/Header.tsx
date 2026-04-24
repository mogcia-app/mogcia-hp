"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { label: 'サービス', href: '/services' },
  { label: 'パートナー制度', href: '/partners' },
  { label: '求人募集', href: '/recruit' },
  { label: '会社概要', href: '/company' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-white">
        <div className="w-full mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center"
          >
            <Image
              src="/m.png"
              alt="MOGCIA"
              width={160}
              height={48}
              className="h-auto w-[56px] md:w-[72px]"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map(item => (
              <Link key={item.label} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-black px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-neutral-800"
            >
              お問い合わせ
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
        <div className="md:hidden bg-white px-6 py-6 space-y-4 text-sm text-gray-700">
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
    </header>
  )
}
