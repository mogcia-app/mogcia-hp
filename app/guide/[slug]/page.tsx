import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import { SectionLabel, SoftContact, tone, type Tone } from '@/components/PageFrame'
import { guideArticles, guideExtras } from '@/lib/guide-data'
import { withoutTerminalPeriod } from '../../metadata'

const categoryTone: Record<string, Tone> = { 'AI活用': 'sky', 'SNS': 'pink', 'Web・集客': 'butter', '採用': 'lilac', '業務効率化': 'mint', 'セキュリティ': 'peach' }

export function generateStaticParams() {
  return guideArticles.map(article => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = guideArticles.find(item => item.slug === params.slug)
  if (!article) return { title: '記事が見つかりません | 株式会社MOGCIA', robots: { index: false } }
  const title = withoutTerminalPeriod(article.title)
  const description = withoutTerminalPeriod(article.intro)
  return {
    title: `${title} | MOGCIA Guide`,
    description,
    alternates: { canonical: `/guide/${article.slug}` },
    openGraph: { title, description, url: `/guide/${article.slug}` },
  }
}

export default function GuideDetail({ params }: { params: { slug: string } }) {
  const article = guideArticles.find(item => item.slug === params.slug)
  if (!article) notFound()
  const color = categoryTone[article.category] ?? 'sky'
  const others = [
    ...guideArticles.filter(item => item.slug !== article.slug && item.category === article.category),
    ...guideArticles.filter(item => item.slug !== article.slug && item.category !== article.category),
  ].slice(0, 3)
  const extra = guideExtras[article.slug]

  return <main className="bg-white text-ink">
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-16" style={{ backgroundColor: tone[color].band }}>
      <span className="absolute -right-24 -top-20 h-80 w-80 rounded-full" style={{ backgroundColor: tone[color].chip }} aria-hidden />
      <div className="page-shell relative">
        <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　<Link href="/guide">Guide</Link>　／　{article.category}</p>
        <div className="mt-16 max-w-6xl">
          <div className="flex items-center gap-3"><SectionLabel label={article.category} color={color} /><span className="text-[10px] font-bold text-ink-soft">約{article.minutes}分で読めます</span></div>
          <h1 className="mt-7 text-balance text-[clamp(1.4rem,6.6vw,1.875rem)] font-black leading-[1.65] tracking-[-.035em] sm:text-3xl md:text-[2.65rem] lg:whitespace-nowrap xl:text-5xl">{article.title}</h1>
          <p className="mt-8 max-w-2xl text-sm leading-8 text-ink-soft">{article.intro}</p>
        </div>
      </div>
    </section>

    <article className="page-shell py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        {article.sections.map((section, index) => <section key={section.heading} className={index === 0 ? '' : 'mt-16 border-t border-ink/15 pt-16'}>
          <p className="font-display text-[10px] font-black tracking-[.18em] text-ink-soft">{String(index + 1).padStart(2, '0')}</p>
          <h2 className="mt-4 text-2xl font-black leading-[1.5] md:text-3xl">{section.heading}</h2>
          <div className="mt-6 space-y-5 text-sm leading-8 text-[#3d4757]">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          {section.points && <ul className="mt-7 grid gap-3 rounded-[1.5rem] p-6" style={{ backgroundColor: tone[color].band }}>{section.points.map(point => <li key={point} className="flex items-center gap-3 text-sm font-bold"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tone[color].dot }} aria-hidden />{point}</li>)}</ul>}
        </section>)}
        {extra && <>
          <section className="mt-16 border-t border-ink/15 pt-16">
            <p className="font-display text-[10px] font-black tracking-[.18em] text-ink-soft">PRACTICE</p>
            <h2 className="mt-4 text-2xl font-black leading-[1.5] md:text-3xl">{extra.practiceTitle}</h2>
            <p className="mt-6 text-sm leading-8 text-[#3d4757]">{extra.practiceIntro}</p>
            <ol className="mt-9 border-t border-ink">{extra.steps.map((step, index) => <li key={step.title} className="grid gap-4 border-b border-ink/15 py-7 sm:grid-cols-[3rem_10rem_1fr]"><span className="font-display text-xs font-black text-ink-soft">{String(index + 1).padStart(2, '0')}</span><strong className="text-sm leading-7">{step.title}</strong><p className="text-sm leading-8 text-[#3d4757]">{step.body}</p></li>)}</ol>
          </section>
          <section className="mt-16 border-t border-ink/15 pt-16">
            <p className="font-display text-[10px] font-black tracking-[.18em] text-ink-soft">CHECKLIST</p>
            <h2 className="mt-4 text-2xl font-black">実行前のチェック</h2>
            <ul className="mt-7 grid gap-3 rounded-[1.5rem] p-6 md:grid-cols-2 md:p-8" style={{ backgroundColor: tone[color].band }}>{extra.checklist.map(item => <li key={item} className="flex items-start gap-3 rounded-xl bg-white/75 p-4 text-sm font-bold leading-7"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] text-white" style={{ backgroundColor: tone[color].dot }}>✓</span>{item}</li>)}</ul>
            <div className="mt-7 border-l-4 p-5" style={{ borderColor: tone[color].dot, backgroundColor: tone[color].band }}><p className="text-[10px] font-bold tracking-[.14em] text-ink-soft">注意したいこと</p><p className="mt-3 text-sm leading-8">{extra.caution}</p></div>
          </section>
        </>}
      </div>
    </article>

    <section className="py-24 md:py-32" style={{ backgroundColor: tone[color].band }}><div className="page-shell">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="font-display text-[10px] font-black tracking-[.2em] text-ink-soft">KEEP READING</p><h2 className="mt-3 font-display text-4xl font-black tracking-[-.05em]">Other guides.</h2><p className="mt-4 text-xs leading-6 text-ink-soft">同じテーマの記事と、次におすすめの読み物です。</p></div><Link href="/guide" className="text-xs font-bold">Guide一覧へ →</Link></div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">{others.map((item, index) => { const itemColor = categoryTone[item.category] ?? 'sky'; return <Link href={`/guide/${item.slug}`} key={item.slug} className="group relative flex min-h-80 flex-col overflow-hidden rounded-[1.5rem] bg-white p-7 transition-transform duration-300 hover:-translate-y-1">
        <span className="pointer-events-none absolute -right-2 top-3 font-display text-[7rem] font-black leading-none opacity-70" style={{ color: tone[itemColor].band }} aria-hidden>{String(index + 1).padStart(2, '0')}</span>
        <div className="relative flex items-center justify-between gap-3"><span className="rounded-full px-3 py-1.5 text-[10px] font-bold" style={{ backgroundColor: tone[itemColor].chip }}>{item.category}</span><span className="text-[10px] font-bold text-ink-soft">約{item.minutes}分</span></div>
        <h3 className="relative mt-12 text-xl font-black leading-[1.65]">{item.title}</h3>
        <p className="relative mt-4 text-xs leading-7 text-ink-soft">{item.body}</p>
        <span className="relative mt-auto pt-6 text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">記事を読む →</span>
      </Link> })}</div>
    </div></section>

    <SoftContact title={<>自社の場合は、<br />どうすればいい？</>} body="記事を読んで気になったことも、お気軽にご相談ください" />
    <Footer />
  </main>
}
