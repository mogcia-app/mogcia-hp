import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { renderBrandText } from '@/components/BrandText'
import Footer from '@/components/Footer'
import { createPageMetadata } from '../metadata'
import { newsCategories, newsItems } from '@/lib/news'

export const metadata: Metadata = createPageMetadata('お知らせ | 株式会社MOGCIA')

const newsItemsPerPage = 10
const totalNewsPages = Math.ceil(newsItems.length / newsItemsPerPage)

type NewsPageProps = {
  searchParams?: {
    page?: string
  }
}

export default function NewsPage({ searchParams }: NewsPageProps) {
  const currentPage = Math.min(
    Math.max(Number(searchParams?.page ?? '1') || 1, 1),
    totalNewsPages,
  )
  const startIndex = (currentPage - 1) * newsItemsPerPage
  const visibleNewsItems = newsItems.slice(startIndex, startIndex + newsItemsPerPage)

  return (
    <main className="bg-[#F7F4F1] text-[#1F1F1F]">
      <section className="relative overflow-hidden px-6 pb-24 pt-36 md:px-10 md:pb-28 md:pt-40 lg:px-16 lg:py-32 xl:px-20">
        <Image
          src="/news.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[center_12%] lg:block"
        />
        <Image
          src="/d2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_32%] scale-110 lg:hidden"
        />
        <div className="relative mx-auto w-full max-w-[1320px]">
          <div className="max-w-2xl">
            <p className="text-xs text-neutral-500">ホーム　〉　お知らせ</p>
            <h1 className="mt-10 text-[2.3rem] font-light leading-[1.1] tracking-[-0.04em] md:text-5xl">
              お知らせ
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-8 text-neutral-600 md:text-base">
              MOGCIAからの最新情報をお届けします。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="relative mx-auto w-full max-w-[1320px] rounded-[8px] border border-white/70 bg-white p-6 shadow-[0_24px_90px_rgba(92,78,62,0.10)] md:p-10">
          <div>
            <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-6">
              {newsCategories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-xs transition-colors ${
                    index === 0
                      ? 'border-[#C7B299] bg-[#C7B299] text-white'
                      : 'border-[#E7E1DA] bg-white text-neutral-600 hover:bg-[#F7F4F1]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="divide-y divide-[#E7E1DA]">
              {visibleNewsItems.map(item => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group grid gap-3 py-8 transition-colors hover:bg-[#F7F4F1] md:grid-cols-[120px_120px_1fr_32px] md:items-center md:px-3"
                >
                  <time className="text-sm text-neutral-500">{item.date}</time>
                  <span className="w-fit rounded-full bg-[#F7F4F1] px-3 py-1 text-[11px] text-[#8f7a61]">
                    {item.category}
                  </span>
                  <h2 className="text-base font-light leading-7 text-[#1F1F1F] md:text-lg">
                    {renderBrandText(item.title)}
                  </h2>
                  <span className="hidden text-xl text-[#C7B299] transition-transform group-hover:translate-x-1 md:block">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex gap-2">
              {Array.from({ length: totalNewsPages }, (_, index) => index + 1).map(page => (
                <Link
                  key={page}
                  href={page === 1 ? '/news' : `/news?page=${page}`}
                  className={`h-10 w-10 rounded-full border text-sm ${
                    page === currentPage
                      ? 'border-[#C7B299] bg-[#C7B299] text-white'
                      : 'border-[#E7E1DA] bg-white text-neutral-600 hover:bg-[#F7F4F1]'
                  } inline-flex items-center justify-center`}
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
