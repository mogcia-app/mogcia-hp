import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Footer from '@/components/Footer'
import { blogCategories, blogPosts, getAdjacentBlogPosts, getBlogPost, type BlogBlock } from '@/lib/blog'
import { createPageMetadata } from '../../metadata'

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug)

  if (!post) {
    return createPageMetadata('ブログ | 株式会社MOGCIA')
  }

  return createPageMetadata(`${post.title} | 株式会社MOGCIA`)
}

function renderBlock(block: BlogBlock, index: number) {
  if (block.type === 'h2') {
    return <h2 key={index} className="pt-8 text-xl font-light tracking-[-0.02em] text-[#1F1F1F] md:text-3xl">{block.text}</h2>
  }

  if (block.type === 'h3') {
    return <h3 key={index} className="pt-4 text-lg font-light text-[#1F1F1F] md:text-2xl">{block.text}</h3>
  }

  if (block.type === 'p') {
    return <p key={index} className="text-sm leading-8 text-neutral-700 md:text-base md:leading-9">{block.text}</p>
  }

  if (block.type === 'ul') {
    return (
      <ul key={index} className="space-y-3 text-sm leading-8 text-neutral-700 md:text-base">
        {block.items.map(item => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C7B299]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'ol') {
    return (
      <ol key={index} className="list-decimal space-y-3 pl-5 text-sm leading-8 text-neutral-700 md:text-base">
        {block.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    )
  }

  if (block.type === 'blockquote') {
    return (
      <blockquote key={index} className="border-l-4 border-[#C7B299] bg-[#F7F4F1] px-5 py-5 text-sm leading-8 text-neutral-700 md:px-6 md:text-base">
        {block.text}
      </blockquote>
    )
  }

  return (
    <div key={index} className="rounded-[20px] border border-[#E7E1DA] bg-[#F7F4F1] p-5 md:p-6">
      <p className="text-sm font-medium text-[#8f7a61]">{block.title}</p>
      <p className="mt-3 text-sm leading-8 text-neutral-700 md:text-base">{block.body}</p>
    </div>
  )
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) notFound()

  const { previous, next } = getAdjacentBlogPosts(post.slug)
  const relatedPosts = blogPosts.filter(item => item.category === post.category && item.slug !== post.slug).slice(0, 3)

  return (
    <main className="bg-[#F7F4F1] text-[#1F1F1F]">
      <section className="px-6 py-12 md:px-10 md:py-16 lg:px-16 xl:px-20">
        <div className="mx-auto grid w-full max-w-[1320px] gap-8 lg:grid-cols-[0.7fr_0.3fr]">
          <article className="rounded-[28px] border border-[#E7E1DA] bg-white p-6 shadow-[0_18px_60px_rgba(92,78,62,0.05)] md:p-10">
            <p className="text-xs text-neutral-500">
              <Link href="/" className="hover:text-[#8f7a61]">ホーム</Link>
              {' 〉 '}
              <Link href="/blog" className="hover:text-[#8f7a61]">ブログ</Link>
              {' 〉 '}
              {post.title}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <time className="text-sm text-neutral-500">{post.date}</time>
              <span className="rounded-full bg-[#F7F4F1] px-3 py-1 text-[11px] text-[#8f7a61]">
                {post.category}
              </span>
            </div>
            <h1 className="mt-6 text-2xl font-light leading-[1.28] tracking-[-0.03em] md:text-5xl">
              {post.title}
            </h1>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[24px] bg-[#F7F4F1]">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mx-auto mt-12 max-w-3xl space-y-7">
              {post.content.map(renderBlock)}
            </div>

            <div className="mx-auto mt-14 grid max-w-3xl gap-4 border-t border-[#E7E1DA] pt-8 md:grid-cols-2">
              {previous ? (
                <Link href={`/blog/${previous.slug}`} className="rounded-[18px] border border-[#E7E1DA] p-4 text-sm leading-7 hover:bg-[#F7F4F1]">
                  <span className="text-neutral-400">前の記事</span>
                  <p className="mt-2 text-neutral-800">{previous.title}</p>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/blog/${next.slug}`} className="rounded-[18px] border border-[#E7E1DA] p-4 text-sm leading-7 hover:bg-[#F7F4F1] md:text-right">
                  <span className="text-neutral-400">次の記事</span>
                  <p className="mt-2 text-neutral-800">{next.title}</p>
                </Link>
              ) : null}
            </div>

            {relatedPosts.length > 0 ? (
              <div className="mx-auto mt-12 max-w-3xl border-t border-[#E7E1DA] pt-8">
                <h2 className="text-2xl font-light tracking-[-0.02em]">関連記事</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {relatedPosts.map(item => (
                    <Link key={item.slug} href={`/blog/${item.slug}`} className="rounded-[18px] border border-[#E7E1DA] p-4 text-sm leading-7 hover:bg-[#F7F4F1]">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
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
                {blogPosts.slice(0, 3).map(item => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="block text-sm leading-7 text-neutral-700 hover:text-[#8f7a61]">
                    {item.title}
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
