import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import { DiagonalAccent, SectionHead, SoftContact, tone } from '@/components/PageFrame'
import { stories } from '@/lib/site-data'
import { withoutTerminalPeriod } from '../../metadata'

const productColor: Record<string, string> = {
  'commo.': '#D7C5F7', 'Roomly.': '#F7C8C8', 'upmo': '#BCDCF7', 'Signal.': '#F6C08F',
  'ismo.': '#F7C8DA', 'SNS運用代行': '#F6C08F', 'LP・HP・EC制作': '#BCDCF7',
  'SNS・Web一体支援': '#F6C08F', '販促物制作': '#E7C7D4', 'システム開発': '#BCDCF7', 'プランニング': '#D4D7DC',
}

export function generateStaticParams() {
  return stories.map(story => ({ slug: story.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const story = stories.find(item => item.slug === params.slug)
  if (!story) return { title: '事例が見つかりません | 株式会社MOGCIA', robots: { index: false } }
  const title = withoutTerminalPeriod(story.problem)
  const description = withoutTerminalPeriod(story.answer)
  return {
    title: `${story.client}の支援事例 | 株式会社MOGCIA`,
    description,
    alternates: { canonical: `/works/${story.slug}` },
    openGraph: { title, description, url: `/works/${story.slug}` },
  }
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const story = stories.find(item => item.slug === params.slug)
  if (!story) notFound()
  const others = stories.filter(item => item.slug !== story.slug).slice(0, 2)
  const [headline, ...subheadlineParts] = story.problem.split('。')
  const subheadline = subheadlineParts.join('。').trim()

  return <main className="bg-white text-ink">
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-20">
      <DiagonalAccent color="lilac" />
      <div className="page-shell relative z-10">
        <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　<Link href="/works">Works</Link>　／　{story.client}</p>
        <div className="mt-12 max-w-4xl">
          <div className="flex flex-wrap gap-2 text-[10px] font-bold"><span className="rounded-full px-3 py-1.5" style={{ backgroundColor: tone.lilac.chip }}>{story.industry}</span><span className="rounded-full px-3 py-1.5" style={{ backgroundColor: productColor[story.product] ?? '#f3f4f4' }}>{story.product}</span></div>
          <p className="mt-7 flex items-center gap-3 font-display text-[10px] font-black tracking-[.18em]"><span className="h-px w-10 bg-ink" />CASE STUDY</p>
          <h1 className="mt-4 max-w-4xl text-balance font-black tracking-[-.03em]"><span className="block text-[clamp(1.5rem,5.8vw,1.9rem)] leading-[1.5] sm:text-[2rem] md:text-[2.4rem]">{headline}{subheadline && '。'}</span>{subheadline && <span className="mt-3 block max-w-3xl text-[clamp(1.05rem,4vw,1.3rem)] leading-[1.7] tracking-[-.02em] text-[#39465A] sm:text-[1.3rem] md:text-[1.5rem]">{subheadline}</span>}</h1>
          <p className="mt-6 text-[13px] font-bold text-ink-soft">{story.client}　｜　{story.clientDetail}</p>
        </div>
        <dl className="mt-12 grid max-w-4xl border border-ink bg-white text-xs sm:grid-cols-2 lg:grid-cols-4" style={{ boxShadow: `6px 6px 0 ${tone.lilac.chip}` }}>
          {[
            ['業種', story.industry], ['ご支援内容', story.product], ['規模・内容', story.clientDetail], ['期間', story.period],
          ].map(([term, value]) => <div key={term} className="border-b border-ink/10 p-5 last:border-b-0 sm:border-r sm:odd:border-b lg:border-b-0"><dt className="text-[9px] font-bold text-ink-soft">{term}</dt><dd className="mt-2 font-black leading-6">{value}</dd></div>)}
        </dl>
      </div>
    </section>

    <section className="page-shell py-20 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[.55fr_1fr] lg:items-start">
        <SectionHead number="01" label="Before" color="sky" title="ご相談のきっかけ" />
        <div className="relative border border-ink bg-white p-7 md:p-9" style={{ boxShadow: `7px 7px 0 ${tone.sky.chip}` }}>
          <span className="font-display text-[9px] font-black tracking-[.18em] text-ink-soft">THE CHALLENGE</span>
          <p className="mt-4 text-[15px] font-bold leading-9 text-[#2f3a4c] md:text-base">{story.before}</p>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-24" style={{ backgroundColor: tone.butter.band }}><div className="page-shell">
      <SectionHead number="02" label="Approach" color="butter" title="つくる・まわす・育てる" note="仕組みをつくって終わりにせず、日々の運用と改善まで一緒に進めました。" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {story.approach.map((step, index) => <article key={step.mark} className="flex flex-col border border-ink bg-white p-7" style={{ boxShadow: `6px 6px 0 ${[tone.sky.chip, tone.pink.chip, tone.lilac.chip][index]}` }}>
          <div className="flex items-center justify-between"><p className="grid h-14 w-14 place-items-center rounded-full font-display text-2xl font-black" style={{ backgroundColor: [tone.sky.chip, tone.pink.chip, tone.lilac.chip][index] }}>{step.mark}</p><span className="font-display text-[9px] font-bold tracking-[.15em] text-ink-soft">STEP 0{index + 1}</span></div>
          <h3 className="mt-6 text-lg font-black">{step.title}</h3><p className="mt-3 text-xs leading-7 text-ink-soft">{step.body}</p>
        </article>)}
      </div>
    </div></section>

    <section className="bg-white py-20 md:py-24"><div className="page-shell">
      <SectionHead number="03" label="After" color="pink" title="支援後の変化" note="取り組みを通して生まれた変化です。" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {story.metrics.map((metric, index) => <div key={metric.label} className="flex min-h-40 flex-col justify-between border border-ink bg-white p-7" style={{ boxShadow: `6px 6px 0 ${[tone.pink.chip, tone.mint.chip][index % 2]}` }}><span className="font-display text-4xl font-black tracking-[-.05em] md:text-5xl">{metric.value}</span><span className="mt-5 text-xs font-bold text-ink-soft">{metric.label}</span></div>)}
        <div className="flex flex-col justify-center border border-ink bg-white p-7" style={{ boxShadow: `6px 6px 0 ${tone.butter.chip}` }}><span className="font-display text-[9px] font-black tracking-[.16em] text-ink-soft">OUTCOME</span><p className="mt-3 text-sm font-bold leading-8">{story.after}</p></div>
      </div>
    </div></section>

    <section className="page-shell py-20 md:py-24">
      <SectionHead number="04" label="Scale" color="lilac" title="プロジェクトの概要" note="同じようなお悩みをご相談いただく際の、規模感と進め方の目安です。" />
      <div className={'mt-10 grid gap-4 ' + (story.scaleItems ? 'md:grid-cols-4' : 'md:grid-cols-3')}>
        {(story.scaleItems ?? [
          { label: '期間', value: story.period }, { label: '体制', value: story.team }, { label: story.scaleLabel ?? '費用の目安', value: story.price },
        ]).map(({ label, value }, index) => <div key={label} className="flex min-h-32 flex-col justify-between border border-ink bg-white p-6" style={{ boxShadow: `5px 5px 0 ${[tone.lilac.chip, tone.sky.chip, tone.mint.chip, tone.pink.chip][index % 4]}` }}><span className="font-display text-[9px] font-black tracking-[.15em] text-ink-soft">{String(index + 1).padStart(2, '0')} / {label}</span><span className="mt-5 text-base font-black leading-7">{value}</span></div>)}
      </div>
      <h3 className="mt-14 text-base font-black">進行イメージ</h3>
      <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {story.timeline.map((step, index) => <li key={step.time + step.label} className="relative border border-ink bg-white p-5" style={{ boxShadow: `4px 4px 0 ${tone.lilac.chip}` }}>
          <span className="font-display text-[9px] font-black tracking-[.14em] text-ink-soft">STEP {String(index + 1).padStart(2, '0')}</span>
          <span className="mt-4 block text-[11px] font-bold text-ink-soft">{step.time}</span><span className="mt-1 block text-sm font-black leading-6">{step.label}</span>
        </li>)}
      </ol>
    </section>

    <section className="py-20 md:py-24" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell">
      <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="font-display text-[10px] font-bold uppercase tracking-[.18em] text-ink-soft">More case studies</p><h2 className="mt-3 text-3xl font-black">ほかの支援事例</h2></div><Link href="/works" className="inline-flex min-h-11 items-center border border-ink bg-white px-5 text-xs font-black" style={{ boxShadow: `4px 4px 0 ${tone.lilac.chip}` }}>事例一覧を見る →</Link></div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">{others.map((item, index) => <Link href={'/works/' + item.slug} key={item.slug} className="group grid gap-5 border border-ink bg-white p-5 sm:grid-cols-[11rem_1fr] sm:items-center" style={{ boxShadow: `6px 6px 0 ${[tone.sky.chip, tone.pink.chip][index]}` }}><div className="relative aspect-[4/3] overflow-hidden bg-[#f6f7f8]"><Image src={item.image} alt={item.product + 'の事例'} fill sizes="11rem" className="object-contain p-3 transition-transform group-hover:scale-105" /></div><div><span className="text-[10px] font-bold text-ink-soft">{item.product}の事例</span><p className="mt-2 text-[15px] font-black leading-7">{item.problem}</p><span className="mt-4 inline-block text-xs font-black">詳しく見る →</span></div></Link>)}</div>
    </div></section>

    <SoftContact title={<>似たお悩み、<br />ありませんか？</>} body="まずは気軽にお話を聞かせてください" />
    <Footer />
  </main>
}
