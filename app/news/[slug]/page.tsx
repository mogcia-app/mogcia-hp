import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { renderBrandText } from '@/components/BrandText'
import Footer from '@/components/Footer'
import { newsItems } from '@/lib/news'
import { createPageMetadata } from '../../metadata'

type NewsDetailPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return newsItems.map(item => ({ slug: item.slug }))
}

export function generateMetadata({ params }: NewsDetailPageProps): Metadata {
  const item = newsItems.find(news => news.slug === params.slug)

  if (!item) {
    return createPageMetadata('お知らせ | 株式会社MOGCIA')
  }

  return createPageMetadata(`${item.title} | 株式会社MOGCIA`)
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const item = newsItems.find(news => news.slug === params.slug)

  if (!item) notFound()

  return (
    <main className="bg-[#F7F4F1] text-[#1F1F1F]">
      <section className="px-6 py-28 md:px-10 md:py-32 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[920px]">
          <Link href="/news" className="text-sm text-neutral-500 transition-colors hover:text-[#8f7a61]">
            ← お知らせ一覧へ
          </Link>
          <div className="mt-10 rounded-[32px] border border-[#E7E1DA] bg-white p-7 shadow-[0_18px_60px_rgba(92,78,62,0.05)] md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <time className="text-sm text-neutral-500">{item.date}</time>
              <span className="rounded-full bg-[#F7F4F1] px-3 py-1 text-[11px] text-[#8f7a61]">
                {item.category}
              </span>
            </div>
            <h1 className="mt-6 text-2xl font-light leading-[1.3] tracking-[-0.03em] md:text-4xl">
              {renderBrandText(item.title)}
            </h1>
            <div className="mt-10 space-y-5 text-sm leading-8 text-neutral-600 md:text-base">
              {item.body.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
