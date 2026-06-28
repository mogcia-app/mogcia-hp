import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/Footer'
import { blogCategories, blogPosts } from '@/lib/blog'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata('ブログ | 株式会社MOGCIA')

const popularPosts = blogPosts.slice(0, 3)

export default function BlogPage() {
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
          className="object-cover object-[center_42%] scale-105 lg:hidden"
        />
        <div className="relative mx-auto w-full max-w-[1320px]">
          <div className="max-w-2xl">
            <p className="text-xs text-neutral-500">ホーム　〉　ブログ</p>
            <h1 className="mt-10 text-[2.3rem] font-light leading-[1.1] tracking-[-0.04em] md:text-5xl">
              ブログ
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-8 text-neutral-600 md:text-base">
              AI・SNS・SaaSに関する知見や、MOGCIAの取り組みを発信しています。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto grid w-full min-w-0 max-w-[1320px] gap-8 lg:grid-cols-[0.7fr_0.3fr]">
          <div className="min-w-0 rounded-[24px] border border-[#E7E1DA] bg-white p-5 shadow-[0_18px_60px_rgba(92,78,62,0.05)] md:p-8">
            <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-8">
              {blogCategories.map((category, index) => (
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

            <div className="space-y-6">
              {blogPosts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group grid min-w-0 overflow-hidden rounded-[20px] border border-[#E7E1DA] bg-white transition-colors hover:bg-[#F7F4F1] md:grid-cols-[240px_1fr]"
                >
                  <div className="relative min-w-0 aspect-[16/10] md:aspect-auto">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="(min-width: 768px) 240px, 100vw"
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="min-w-0 p-5 md:p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <time className="text-sm text-neutral-500">{post.date}</time>
                      <span className="rounded-full bg-[#F7F4F1] px-3 py-1 text-[11px] text-[#8f7a61]">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="mt-4 break-words text-xl font-light leading-8 tracking-[-0.02em] text-[#1F1F1F] md:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 break-words text-sm leading-7 text-neutral-600">{post.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#8f7a61] transition-transform group-hover:translate-x-1">
                      Read More
                      <span className="h-px w-8 bg-current" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex gap-2">
              {[1, 2, 3].map(page => (
                <button
                  key={page}
                  type="button"
                  className={`h-10 w-10 rounded-full border text-sm ${
                    page === 1
                      ? 'border-[#C7B299] bg-[#C7B299] text-white'
                      : 'border-[#E7E1DA] bg-white text-neutral-600 hover:bg-[#F7F4F1]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          <aside className="min-w-0 space-y-6">
            <div className="rounded-[24px] border border-[#E7E1DA] bg-white p-6 shadow-[0_14px_44px_rgba(92,78,62,0.05)]">
              <h2 className="text-base font-semibold">カテゴリー</h2>
              <div className="mt-6 space-y-4">
                {blogCategories.map(category => (
                  <p key={category} className="flex items-center justify-between text-sm text-neutral-700">
                    <span>{category}</span>
                    <span className="text-[#C7B299]">›</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[#E7E1DA] bg-white p-6 shadow-[0_14px_44px_rgba(92,78,62,0.05)]">
              <h2 className="text-base font-semibold">人気の記事</h2>
              <div className="mt-6 space-y-4">
                {popularPosts.map(post => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block text-sm leading-7 text-neutral-700 hover:text-[#8f7a61]">
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}
