import type { MetadataRoute } from 'next'
import { guideArticles } from '@/lib/guide-data'
import { stories } from '@/lib/site-data'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mogcia.net'

const routes = [
  '',
  '/company',
  '/services',
  '/services/consulting',
  '/services/marketing',
  '/services/sns',
  '/services/web',
  '/services/system',
  '/services/promotion',
  '/services/public',
  '/works',
  '/guide',
  '/support',
  '/business',
  '/partners',
  '/recruit',
  '/diagnosis',
  '/coffee',
  '/contact',
  '/proposal',
  '/security-policy',
  '/privacy-policy',
  '/terms-of-service',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : route === '/services' ? 0.9 : 0.7,
  }))

  const guidePages = guideArticles.map((article) => ({
    url: `${baseUrl}/guide/${article.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  const workPages = stories.map((story) => ({
    url: `${baseUrl}/works/${story.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [...staticPages, ...guidePages, ...workPages]
}
