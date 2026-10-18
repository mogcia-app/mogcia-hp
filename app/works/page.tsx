import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import WorksExplorer from '@/components/WorksExplorer'
import { PageHeader, SectionHead, SoftContact, tone } from '@/components/PageFrame'
import { stories } from '@/lib/site-data'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata('支援事例 | 株式会社MOGCIA', '/works')

export default function Works() {
  const featured = stories[0]

  return <main className="bg-white text-ink">
    <PageHeader crumbs={[['Works']]} title="Works" color="lilac" diagonalAccent largeMobileTitle lead={<>こんなお悩みを、<br />いっしょに解決しました</>} body={<>ご相談のきっかけから、MOGCIAがお手伝いしたこと、その後の変化までをご紹介します。<span className="mt-1 block">※お客さまの社名は伏せて掲載しています。</span></>} />

    <section id="pickup" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.sky.band }}><div className="page-shell">
      <SectionHead number="01" label="Pick up" color="sky" title="ピックアップ" note="いま一番読んでほしいストーリーです。" />
      <Link href={`/works/${featured.slug}`} className="group mt-12 grid overflow-hidden bg-white lg:grid-cols-2">
        <div className="relative min-h-72 overflow-hidden bg-white lg:min-h-[28rem]"><Image src={featured.image} alt={featured.product + 'のプロダクトビジュアル'} fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-contain"/></div>
        <div className="flex flex-col gap-6 p-8 md:p-12">
          <div className="flex flex-wrap gap-2 text-[10px] font-bold"><span className="rounded-full bg-ink px-3 py-1.5 text-white">PICK UP</span><span className="rounded-full px-3 py-1.5" style={{ backgroundColor: tone.lilac.chip }}>{featured.industry}</span><span className="rounded-full bg-[#d7c5f7] px-3 py-1.5">{featured.product}</span></div>
          <h3 className="whitespace-pre-line text-2xl font-black leading-[1.6] md:text-[1.75rem]">{featured.problem}</h3>
          <dl className="border-t border-ink text-[13px] leading-7">
            <div className="grid gap-2 border-b border-ink/10 py-4 sm:grid-cols-[6rem_1fr]"><dt className="font-bold text-ink-soft">お悩み</dt><dd>{featured.problem}</dd></div>
            <div className="grid gap-2 border-b border-ink/10 py-4 sm:grid-cols-[6rem_1fr]"><dt className="font-bold text-ink-soft">やったこと</dt><dd className="whitespace-pre-line">{featured.answer}</dd></div>
          </dl>
          <div className="mt-auto flex flex-col gap-4 text-xs font-bold sm:flex-row sm:items-center sm:justify-between"><span className="text-ink-soft">{featured.client}</span><span className="button button-dark text-xs">ストーリーを読む →</span></div>
        </div>
      </Link>
    </div></section>

    <section id="stories" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="02" label="Stories" color="butter" title="ご相談ストーリー" note="ご相談の「目的」から、近い事例を探せます。" />
      <WorksExplorer />
    </section>

    <section id="voices" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.pink.band }}><div className="page-shell">
      <SectionHead number="03" label="Voices" color="pink" title="お客さまの声" note="一緒に取り組んだお客さまから、いただいた言葉です。" />
      <div className="mt-12 grid gap-4 md:grid-cols-3">{stories.slice(0, 3).map(story => <blockquote key={story.slug} className="flex min-h-64 flex-col gap-4 rounded-[1.25rem] bg-white p-7"><span className="font-display text-5xl font-black leading-none" style={{ color: tone.pink.dot }}>“</span><p className="text-sm font-bold leading-7">{story.quote}</p><footer className="mt-auto border-t border-ink/10 pt-4 text-[11px] text-ink-soft">{story.quoteBy}</footer></blockquote>)}</div>
    </div></section>

    <SoftContact title={<>次のWorksは、<br />あなたの会社かも</>} body="似たお悩みがあれば、まずは気軽にお話を聞かせてください" />
    <Footer />
  </main>
}
