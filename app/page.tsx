'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AiGeneratedNotice from '@/components/AiGeneratedNotice'
import ProductsSection from '@/components/Products'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

const newsItems = [
  {
    date: '2025.12.05',
    title: 'upmoのテスト導入スタート',
    description: '企業の情報整理と業務改善を支援する AI ツールのテスト導入を複数社で開始しました。',
    tag: 'PRESS',
  },
  {
    date: '2025.08.15',
    title: 'Signal. テスト導入スタート',
    description: 'SNS運用の自動化を目指す AI ツールのテスト導入を複数社で開始しました。',
    tag: 'NEWS',
  },
  {
    date: '2025.01.08',
    title: 'MOGCIA Coffee POPUP',
    description: 'Choosebase SHIBUYA にて MOGCIA Coffee の販売を実施しました。',
    tag: 'EVENT',
  },
]

const newsTagStyles: Record<string, string> = {
  PRESS: 'bg-[#e8f1ff] text-[#2457a6]',
  NEWS: 'bg-[#edf7ee] text-[#2f6b3b]',
  EVENT: 'bg-[#fff1e7] text-[#a45a1c]',
}

const blogPosts = [
  {
    title: 'LP作成って、何から始めるべき？',
    image: '/blog5.jpg',
    href: '/blog/lp-start-guide',
    tag: 'お役立ち',
  },
  {
    title: 'SNS運用代行の流れとは？',
    image: '/sns2.png',
    href: '/blog/sns-management-flow',
    tag: 'プロダクト',
  },
  {
    title: 'チャット対応を入れても満足度が上がらない理由',
    image: '/blog3.jpg',
    href: '/blog/sns-operations',
    tag: 'お役立ち',
  },
  {
    title: 'SNS運用が続かない会社の共通点',
    image: '/blog2.jpg',
    href: '/blog/product-design',
    tag: 'お役立ち',
  },
  {
    title: '「導入したのに変わらない」会社に共通する問題',
    image: '/blog1.jpg',
    href: '/blog/ai-adoption',
    tag: 'お役立ち',
  },
]

const blogFilters = ['すべて', 'お役立ち', 'プロダクト'] as const

const heroBackgrounds = ['/mein1.jpg', '/mein2.jpg', '/mein3.jpg']
const heroMobileBackgrounds = ['/gt1.png', '/gt2.png', '/gt3.png']
const capabilityBannerItems = [
  'AI Development',
  'SNS Operations',
  'LP Production',
  'Web Production',
  'Roomly',
  'upmo',
  'Signal',
  'Strategy to Execution',
]

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null)
  const blogScrollerRef = useRef<HTMLDivElement | null>(null)
  const [aboutVisible, setAboutVisible] = useState(false)
  const [isDesktopViewport, setIsDesktopViewport] = useState(false)
  const [heroBackgroundIndex, setHeroBackgroundIndex] = useState(0)
  const [selectedBlogTag, setSelectedBlogTag] = useState<(typeof blogFilters)[number]>('すべて')

  const activeHeroBackgrounds = isDesktopViewport ? heroBackgrounds : heroMobileBackgrounds

  useEffect(() => {
    const node = aboutRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setAboutVisible(Boolean(entry?.isIntersecting))
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroBackgroundIndex(current => (current + 1) % heroBackgrounds.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const syncViewport = (event?: MediaQueryListEvent) => {
      setIsDesktopViewport(event ? event.matches : mediaQuery.matches)
    }

    syncViewport()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncViewport)
      return () => mediaQuery.removeEventListener('change', syncViewport)
    }

    mediaQuery.addListener(syncViewport)
    return () => mediaQuery.removeListener(syncViewport)
  }, [])

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-scroll-reveal]'),
    )

    if (nodes.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach(node => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  const scrollBlogCards = (direction: 'left' | 'right') => {
    const node = blogScrollerRef.current
    if (!node) return

    const amount = Math.min(node.clientWidth * 0.9, 420)
    node.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  const filteredBlogPosts =
    selectedBlogTag === 'すべて'
      ? blogPosts
      : blogPosts.filter(post => post.tag === selectedBlogTag)

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-neutral-950">
      <section className="relative min-h-[86vh] overflow-hidden">
        <div className="absolute inset-0">
          {activeHeroBackgrounds.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              fill
              priority={index === 0}
              sizes="100vw"
              quality={isDesktopViewport ? 75 : 68}
              className={`object-cover object-center transition-[opacity,transform] duration-[1800ms] ease-out md:object-[82%_center] ${
                index === heroBackgroundIndex
                  ? 'scale-100 opacity-100'
                  : 'scale-[1.02] opacity-0'
              }`}
            />
          ))}
        </div>
        <AiGeneratedNotice />
        <div className="relative mx-auto flex min-h-[86vh] w-full max-w-[1320px] items-end px-6 pb-14 md:px-10 md:pb-18 lg:px-16 lg:pb-24 xl:px-20">
          <div className="max-w-[680px]">
            <h1
              className="max-w-none text-[1.28rem] font-light leading-[1.22] tracking-[-0.035em] text-white opacity-0 md:text-[1.95rem] lg:text-[2.3rem] lg:leading-[1.14]"
              style={{ animation: 'slide-up 0.9s ease-out 0.1s forwards' }}
            >
              戦略も、体験も、運用も
              <span className="mt-2 block lg:mt-3">すべて、ひとつの仕組みで。</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-neutral-200 bg-[#ece9e1] py-6 md:py-7">
        <div className="marquee-track">
          {[0, 1].map(loop => (
            <div key={loop} className="marquee-row">
              {capabilityBannerItems.map(item => (
                <div
                  key={`${loop}-${item}`}
                  className="inline-flex items-center gap-5 whitespace-nowrap px-5 text-[0.76rem] uppercase tracking-[0.28em] text-neutral-800 md:px-6 md:text-[0.86rem]"
                >
                  <span>{item}</span>
                  <span className="h-[6px] w-[6px] rounded-full bg-neutral-950/50" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <ProductsSection />

      <section data-scroll-reveal className="scroll-reveal px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-12 xl:grid-cols-[0.62fr_1.38fr] xl:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">News</p>
              <h2 className="text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                お知らせ
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-600 md:text-base">
                MOGCIAの取り組みやプロダクトに関する最新情報を掲載しています。
              </p>
            </div>

            <div className="border-t border-neutral-200">
              {newsItems.map(item => (
                <article
                  key={`${item.date}-${item.title}`}
                  className="grid gap-3 border-b border-neutral-200 py-7 transition-colors duration-300 md:grid-cols-[140px_90px_1fr] md:gap-6"
                >
                  <p className="text-sm text-neutral-500">{item.date}</p>
                  <p
                    className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.24em] ${
                      newsTagStyles[item.tag] ?? 'bg-neutral-200 text-neutral-700'
                    }`}
                  >
                    {item.tag}
                  </p>
                  <div>
                    <h3 className="text-[1.15rem] font-light leading-[1.35] text-neutral-950 md:text-[1.35rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-[12px] leading-6 text-neutral-600 md:text-[13px]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className="scroll-reveal relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20"
        data-scroll-reveal
      >
        <Image
          src={isDesktopViewport ? '/mein3.jpg' : '/gt3.png'}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={isDesktopViewport ? 74 : 68}
          className="pointer-events-none object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/12 to-transparent" />
        <AiGeneratedNotice />
        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-[1320px] items-end">
          <div className="relative z-10 ml-auto max-w-3xl space-y-8 pb-4 md:pb-8">
            <div
              className={aboutVisible ? 'space-y-5 opacity-0' : 'space-y-5 opacity-100'}
              style={aboutVisible ? { animation: 'slide-up 0.9s ease-out 0.1s forwards' } : undefined}
            >
              <p className="text-[11px] uppercase tracking-[0.42em] text-white">About Us</p>
            </div>

            <div
              className={aboutVisible ? 'space-y-5 pt-1 opacity-0' : 'space-y-5 pt-1 opacity-100'}
              style={aboutVisible ? { animation: 'slide-up 0.9s ease-out 0.28s forwards' } : undefined}
            >
              <p className="text-[1.2rem] font-light leading-[1.5] tracking-[-0.02em] text-white md:text-[1.45rem]">
                MOGCIAは、AIとテクノロジーで
              </p>
              <p className="text-[1.2rem] font-light leading-[1.5] tracking-[-0.02em] text-white md:text-[1.45rem]">
                戦略も、体験も、運用も、ひとつの仕組みとして
                <br />
                設計から実装まで一気通貫で支援するIT企業です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-scroll-reveal className="scroll-reveal px-6 py-12 md:px-10 md:py-16 lg:px-16 xl:px-20">
        <div className="mx-auto grid w-full max-w-[1320px] gap-5 md:grid-cols-2 md:gap-6">
          <Link href="/recruit" className="group relative block aspect-[4/3] overflow-hidden">
            <Image
              src="/a.jpg"
              alt="About visual A"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/58" />
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
              <p className="text-lg font-light tracking-[0.08em] text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 md:text-2xl">
                求人募集
              </p>
            </div>
            <AiGeneratedNotice textClassName="text-white/15 md:text-white/20" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/0 transition-all duration-500 group-hover:bg-white/70" />
          </Link>
          <Link href="/company" className="group relative block aspect-[4/3] overflow-hidden">
            <Image
              src="/e.jpg"
              alt="About visual B"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[42%_center] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-black/50 transition-colors duration-500 group-hover:bg-black/58" />
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
              <p className="text-lg font-light tracking-[0.08em] text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 md:text-2xl">
                会社概要
              </p>
            </div>
            <AiGeneratedNotice textClassName="text-white/15 md:text-white/20" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/0 transition-all duration-500 group-hover:bg-white/70" />
          </Link>
        </div>
      </section>

      <section data-scroll-reveal className="scroll-reveal px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="mb-8 flex flex-col gap-6 md:mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Blog</p>
            </div>

            <div>
              <h2 className="text-[1.9rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.8rem]">
                ブログ
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {blogFilters.map(filter => {
                const isActive = selectedBlogTag === filter

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => {
                      setSelectedBlogTag(filter)
                      blogScrollerRef.current?.scrollTo({ left: 0, behavior: 'smooth' })
                    }}
                    className={`inline-flex rounded-full border px-4 py-2 text-[11px] tracking-[0.18em] transition-colors md:text-xs ${
                      isActive
                        ? 'border-neutral-950 bg-neutral-950 text-white'
                        : 'border-neutral-200 text-neutral-500 hover:border-neutral-950 hover:text-neutral-950'
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </div>

          <div ref={blogScrollerRef} className="overflow-x-auto pb-2">
            <div className="flex w-max gap-5 md:gap-6">
              {filteredBlogPosts.map(post => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group block w-[74vw] max-w-[420px] overflow-hidden border border-neutral-200 bg-white md:w-[38vw] lg:w-[30vw]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 38vw, 74vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                    <AiGeneratedNotice />
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-neutral-600">
                      {post.tag}
                    </p>
                    <h3 className="mt-4 text-[1rem] font-light leading-[1.5] text-neutral-950 md:text-[1.1rem]">
                      {post.title}
                    </h3>
                    <div className="mt-5 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-neutral-600 transition-transform duration-300 group-hover:translate-x-1">
                      Read More
                      <span className="h-px w-8 bg-current" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3">
            <button
              type="button"
              aria-label="Scroll blog left"
              onClick={() => scrollBlogCards('left')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Scroll blog right"
              onClick={() => scrollBlogCards('right')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
