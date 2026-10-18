import type { Metadata } from 'next'

export const siteName = '株式会社MOGCIA'

export const defaultDescription =
  '福岡・天神のIT企業、株式会社MOGCIAは、AI・システム開発、SNS運用、LP・Web制作、マーケティング支援を、企画から運用・改善まで一貫して支援します'

export const defaultOgTitle = '株式会社MOGCIA | AI・SNS・Web・システム開発'

export const withoutTerminalPeriod = (value: string) => value.replace(/[。．]+$/u, '')

export function createPageMetadata(title: string, pathname: string): Metadata {
  const cleanTitle = withoutTerminalPeriod(title)
  return {
    title: cleanTitle,
    description: defaultDescription,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: cleanTitle,
      description: defaultDescription,
      url: pathname,
    },
    twitter: {
      title: cleanTitle,
      description: defaultDescription,
    },
  }
}
