import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import PageHeightSync from '@/components/PageHeightSync'
import { defaultDescription, defaultOgTitle } from './metadata'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mogcia.net'
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: '株式会社MOGCIA',
      alternateName: 'MOGCIA',
      url: siteUrl,
      logo: `${siteUrl}/mogcia-favicon.png`,
      description: defaultDescription,
      telephone: '+81-92-517-9804',
      email: 'info@mogcia.jp',
      address: {
        '@type': 'PostalAddress',
        postalCode: '810-0001',
        addressRegion: '福岡県',
        addressLocality: '福岡市中央区',
        streetAddress: '天神4-6-28 いちご天神ノースビル7階',
        addressCountry: 'JP',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: '福岡県' },
        { '@type': 'Country', name: '日本' },
      ],
      knowsAbout: ['AI活用', 'システム開発', 'SNS運用', 'Web制作', 'マーケティング', '業務効率化'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'MOGCIAの自社プロダクト',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'selmo.', description: '営業教育の属人化を解消する営業AI', url: 'https://selmotool.com/' } },
          { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'commo.', description: 'LINEで予約とリピートを育てる顧客接点支援', url: 'https://commotool.com/' } },
          { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Roomly.', description: 'ホテルのフロント問い合わせを分散する宿泊業向けチャット', url: 'https://roomlychat.com/' } },
          { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'upmo', description: '散らばった社内情報を検索できる社内AI', url: 'https://upmotool.com/' } },
          { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'Signal.', description: '投稿企画と改善を支援するSNS運用AI', url: 'https://www.signalapp.jp/' } },
          { '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: 'ismo.', description: 'WebとSNSの行動を改善へつなげるアクセス解析', url: 'https://www.ismo-data.com/' } },
        ],
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+81-92-517-9804',
          email: 'info@mogcia.jp',
          availableLanguage: 'Japanese',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'sales proposals',
          email: 'sales@mogcia.com',
          availableLanguage: 'Japanese',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'MOGCIA',
      inLanguage: 'ja-JP',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-logo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultOgTitle,
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
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
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'MOGCIA — Make AI work for you.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultOgTitle,
    description: defaultDescription,
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/mogcia-favicon.png',
    apple: '/mogcia-favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        <script
          defer
          src="https://ismo-data.app/mogcia-analytics.js"
          data-site-id="site-Kz26ZD6HZodwOvL6GP9jJqBr2ZC3"
          data-endpoint="https://asia-northeast1-ismo-67b86.cloudfunctions.net/collect"
          data-consent-mode="required"
        />
      </head>
      <body className={inter.variable}>
        <PageHeightSync />
        <Header />
        {children}
      </body>
    </html>
  )
}
