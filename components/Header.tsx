"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import LineIcon from '@/components/LineIcon'

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
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur-md">
      <div className="relative">
        <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-12 xl:px-16">
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
              className="h-auto w-[56px] lg:w-[64px]"
              priority
            />
          </Link>

          <nav className="hidden items-center lg:flex">
            <div className="flex items-center gap-5 text-[13px] text-neutral-600 xl:gap-7">
            {navItems.map(item => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

              return (
              <Link key={item.label} href={item.href} className="relative inline-flex h-[76px] items-center whitespace-nowrap transition-colors hover:text-neutral-950">
                <span>{item.label}</span>
                <span className={`absolute inset-x-0 bottom-0 h-[2px] bg-[#C7B299] transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
              </Link>
              )
            })}
            </div>

            <div className="ml-6 flex items-center gap-4 border-l border-neutral-200 pl-6 xl:ml-8 xl:pl-8">
              <a
                href="https://lin.ee/XjMOCFI"
                target="_blank"
                rel="noopener noreferrer"
                data-mogcia-id="header-line"
                data-mogcia-event="line_click"
                className="inline-flex items-center gap-2 whitespace-nowrap text-xs font-medium text-[#06a94a] transition-colors hover:text-[#047f38]"
              >
                <LineIcon className="h-5 w-5" />
                LINEで相談
              </a>
              <Link
                href="/contact"
                data-mogcia-id="header-contact"
                data-mogcia-event="contact_click"
                className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-[#C7B299] px-5 py-3 text-[11px] font-medium text-white transition-colors hover:bg-[#9a8062]"
              >
                お問い合わせ
                <span className="h-px w-5 bg-current transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </nav>

          <button
            className="inline-flex h-10 items-center text-[11px] uppercase tracking-[0.2em] text-neutral-600 lg:hidden"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-neutral-100 bg-white px-6 py-7 shadow-[0_18px_40px_rgba(0,0,0,0.06)] sm:px-10 lg:hidden">
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm text-neutral-700">
            {navItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="block border-b border-neutral-100 pb-3 transition-colors hover:text-neutral-950"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
            ))}
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
            href="https://lin.ee/XjMOCFI"
            target="_blank"
            rel="noopener noreferrer"
            data-mogcia-id="mobile-menu-line"
            data-mogcia-event="line_click"
            className="flex items-center justify-center gap-2 rounded-full border border-[#06c755]/40 px-5 py-3 text-xs font-medium text-[#06a94a] transition-colors hover:bg-[#06c755] hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            <LineIcon className="h-5 w-5" />
            LINEで相談
            </a>
            <Link
            href="/contact"
            data-mogcia-id="mobile-menu-contact"
            data-mogcia-event="contact_click"
            className="flex items-center justify-center rounded-full bg-[#C7B299] px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-[#9a8062]"
            onClick={() => setMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
