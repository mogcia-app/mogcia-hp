import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mogcia.net'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-en',
  display: 'swap',
})

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-ja',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'MOGCIA - 戦略も、体験も、運用もすべて、ひとつの仕組みで。',
  description: 'AIとテクノロジーで戦略から、実装・運用までを一気通貫で支援するIT企業です。',
  other: {
    'google-site-verification': 'LHrNgdIlh6Lg9TM4sbVkqzoCiRWifXjkAJiK0OSUNOs',
  },
  openGraph: {
    title: 'MOGCIA - 戦略も、体験も、運用もすべて、ひとつの仕組みで。',
    description: 'AIとテクノロジーで戦略から、実装・運用までを一気通貫で支援するIT企業です。',
    url: '/',
    siteName: 'MOGCIA',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/MG%20Logo.png',
        width: 500,
        height: 500,
        alt: 'MOGCIA ロゴ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MOGCIA - 戦略も、体験も、運用もすべて、ひとつの仕組みで。',
    description: 'AIとテクノロジーで戦略から、実装・運用までを一気通貫で支援するIT企業です。',
    images: ['/MG%20Logo.png'],
  },
  icons: {
    icon: '/ficon.png',
    apple: '/ficon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJp.variable}`}>
        <PageTransition />
        <Header />
        {children}
      </body>
    </html>
  )
}
