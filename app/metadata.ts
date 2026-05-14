import type { Metadata } from 'next'

export const siteName = '株式会社MOGCIA'

export const defaultDescription =
  '福岡・天神のIT企業、株式会社MOGCIA。AI開発、SNS運用代行、LP・Web制作を一気通貫で支援。宿泊業向けAIチャット「Roomly」、社内AI「upmo」、SNS運用AI「Signal」など自社プロダクトも展開しています。'

export const defaultOgTitle = '株式会社MOGCIA | 福岡のAI開発・SNS運用代行・Web制作'

export function createPageMetadata(title: string): Metadata {
  return {
    title,
    description: defaultDescription,
    openGraph: {
      title,
      description: defaultDescription,
    },
    twitter: {
      title,
      description: defaultDescription,
    },
  }
}
