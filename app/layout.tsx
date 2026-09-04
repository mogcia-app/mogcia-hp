import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import { defaultDescription, defaultOgTitle } from './metadata'

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
  title: defaultOgTitle,
  description: defaultDescription,
  other: {
    'google-site-verification': 'LHrNgdIlh6Lg9TM4sbVkqzoCiRWifXjkAJiK0OSUNOs',
  },
  openGraph: {
    title: defaultOgTitle,
    description: defaultDescription,
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
    title: defaultOgTitle,
    description: defaultDescription,
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
      <head>
        <script
          defer
          src="https://ismo-data.app/mogcia-analytics.js"
          data-site-id="site-Kz26ZD6HZodwOvL6GP9jJqBr2ZC3"
          data-endpoint="https://asia-northeast1-ismo-67b86.cloudfunctions.net/collect"
          data-consent-mode="required"
        />
      </head>
      <body className={`${inter.variable} ${notoSansJp.variable}`}>
        <PageTransition />
        <Header />
        {children}
      </body>
    </html>
  )
}
