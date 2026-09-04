"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { label: 'サービス', href: '/services' },
  { label: 'パートナー制度', href: '/partners' },
  { label: '求人募集', href: '/recruit' },
  { label: '会社概要', href: '/company' },
  { label: 'お知らせ', href: '/news' },
  { label: 'ブログ', href: '/blog' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-white">
        <div className="w-full mx-auto px-6 sm:px-12 lg:px-24 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.sessionStorage.setItem('force-home-transition', 'true')
              }
            }}
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
            {navItems.map(item => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

              return (
              <Link key={item.label} href={item.href} className="relative inline-flex flex-col items-center gap-1 hover:text-gray-900 transition-colors">
                <span>{item.label}</span>
                <span className={`text-lg leading-none text-[#C7B299] ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  ・
                </span>
              </Link>
              )
            })}
            <Link
              href="/contact"
              data-mogcia-id="header-contact"
              data-mogcia-event="contact_click"
              className="inline-flex items-center gap-2 rounded-full bg-[#C7B299] px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-[#9a8062]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                <path d="m4.5 7 7.5 6 7.5-6" />
              </svg>
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
            data-mogcia-id="mobile-menu-contact"
            data-mogcia-event="contact_click"
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
