import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import FloatingContact from '@/components/FloatingContact'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mogcia.jp'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'MOGCIA - AIが支え、人の創造力が未来を動かす',
  description: 'AIコンサルティング・DX支援・プロダクト開発で企業の未来を共創するMOGCIAの公式サイト。',
  openGraph: {
    title: 'MOGCIA - AIが支え、人の創造力が未来を動かす',
    description: 'AIコンサルティング・DX支援・プロダクト開発で企業の未来を共創するMOGCIAの公式サイト。',
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
    title: 'MOGCIA - AIが支え、人の創造力が未来を動かす',
    description: 'AIコンサルティング・DX支援・プロダクト開発で企業の未来を共創するMOGCIAの公式サイト。',
    images: ['/MG%20Logo.png'],
  },
  icons: {
    icon: '/MG%20Logo.png',
    apple: '/MG%20Logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <PageTransition />
        <Header />
        {children}
        <FloatingContact />
      </body>
    </html>
  )
}

