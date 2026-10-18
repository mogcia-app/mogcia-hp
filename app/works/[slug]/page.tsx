import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import { SectionHead, SoftContact, tone } from '@/components/PageFrame'
import { stories } from '@/lib/site-data'

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
  return {
    title: `${story.client}の支援事例 | 株式会社MOGCIA`,
    description: story.answer,
    alternates: { canonical: `/works/${story.slug}` },
    openGraph: { title: story.problem, description: story.answer, url: `/works/${story.slug}` },
  }
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const story = stories.find(item => item.slug === params.slug)
  if (!story) notFound()
  const others = stories.filter(item => item.slug !== story.slug).slice(0, 2)

  return <main className="bg-white text-ink">
    <section className="page-shell pb-16 pt-12 md:pt-20">
      <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　<Link href="/works">Works</Link>　／　{story.client}</p>
      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-end">
        <div>
          <div className="flex flex-wrap gap-2 text-[10px] font-bold"><span className="rounded-full px-3 py-1.5" style={{ backgroundColor: tone.lilac.chip }}>{story.industry}</span><span className="rounded-full px-3 py-1.5" style={{ backgroundColor: productColor[story.product] ?? '#f3f4f4' }}>{story.product}</span></div>
          <h1 className="mt-7 text-3xl font-black leading-[1.55] tracking-[-.02em] md:text-[2.5rem]">{story.problem}</h1>
          <p className="mt-5 text-[13px] font-bold text-ink-soft">{story.client}｜{story.clientDetail}</p>
        </div>
        <dl className="border-t border-ink text-xs leading-7">
          {[
            ['業種', story.industry], ['ご支援内容', story.product], ['規模・内容', story.clientDetail], ['期間', story.period],
          ].map(([term, value]) => <div key={term} className="grid grid-cols-[7rem_1fr] gap-3 border-b border-ink/10 py-3.5"><dt className="font-bold text-ink-soft">{term}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
    </section>

    <section className="page-shell grid gap-10 pt-16 md:pt-20 lg:grid-cols-[.55fr_1fr]">
      <SectionHead number="01" label="Before" color="sky" title="ご相談のきっかけ" />
      <p className="border-t border-ink pt-7 text-[15px] leading-9 text-[#2f3a4c]">{story.before}</p>
    </section>

    <section className="page-shell pt-24 md:pt-28">
      <SectionHead number="02" label="Approach" color="butter" title="取り組んだこと" />
      <div className="mt-12 grid border-t border-ink md:grid-cols-3">
        {story.approach.map((step, index) => <article key={step.mark} className={'border-b border-ink/15 py-8 md:px-7 ' + (index > 0 ? 'md:border-l' : 'md:pl-0')}>
          <p className="grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full font-display text-3xl font-black" style={{ backgroundColor: [tone.sky.chip, tone.pink.chip, tone.lilac.chip][index] }}>{step.mark}</p>
          <h3 className="mt-5 text-[15px] font-black">{step.title}</h3><p className="mt-3 text-xs leading-7 text-ink-soft">{step.body}</p>
        </article>)}
      </div>
    </section>

    <section className="page-shell pt-24 md:pt-28">
      <SectionHead number="03" label="After" color="pink" title="変わったこと" />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {story.metrics.map(metric => <div key={metric.label} className="flex flex-col gap-2 rounded-[1.25rem] p-7" style={{ backgroundColor: tone.butter.band }}><span className="font-display text-4xl font-black tracking-[-.05em]">{metric.value}</span><span className="text-xs text-ink-soft">{metric.label}</span></div>)}
        <div className="flex flex-col justify-center rounded-[1.25rem] p-7" style={{ backgroundColor: tone.butter.band }}><p className="text-sm font-bold leading-8">{story.after}</p></div>
      </div>
    </section>

    <section className="page-shell pt-24 md:pt-28">
      <SectionHead number="04" label="Scale" color="lilac" title="規模感と進め方" note="内容や状況によって変わるため、まずは気軽にご相談ください。" />
      <div className={'mt-12 grid border-t border-ink ' + (story.scaleItems ? 'md:grid-cols-4' : 'md:grid-cols-3')}>
        {(story.scaleItems ?? [
          { label: '期間', value: story.period }, { label: '体制', value: story.team }, { label: story.scaleLabel ?? '費用の目安', value: story.price },
        ]).map(({ label, value }, index) => <div key={label} className={'flex flex-col gap-2.5 border-b border-ink/15 py-7 md:px-7 ' + (index > 0 ? 'md:border-l' : 'md:pl-0')}><span className="text-[11px] font-bold text-ink-soft">{label}</span><span className="text-base font-black leading-7">{value}</span></div>)}
      </div>
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {story.timeline.map((step, index) => <li key={step.time + step.label} className="flex flex-col gap-2.5">
          <span className="flex items-center gap-2.5"><span className={'h-3 w-3 rounded-full ' + (index === story.timeline.length - 1 ? 'border-2 bg-white' : '')} style={index === story.timeline.length - 1 ? { borderColor: tone.lilac.dot } : { backgroundColor: tone.lilac.dot }} /><span className="h-px flex-1 bg-ink" /></span>
          <span className="text-[10px] font-bold text-ink-soft">{step.time}</span><span className="text-sm font-black">{step.label}</span>
        </li>)}
      </ol>
    </section>

    <section className="page-shell py-24 md:py-28">
      <div className="flex items-end justify-between border-b border-ink pb-4"><h2 className="font-display text-3xl font-black tracking-[-.04em]">Other works</h2><Link href="/works" className="text-[11px] font-bold">一覧へ →</Link></div>
      <div className="grid md:grid-cols-2">{others.map((item, index) => <Link href={'/works/' + item.slug} key={item.slug} className={'group grid grid-cols-[8rem_1fr] items-center gap-6 border-b border-ink/15 py-7 md:grid-cols-[10rem_1fr] ' + (index === 1 ? 'md:border-l md:pl-7' : 'md:pr-7')}><div className="relative aspect-[3/2] overflow-hidden bg-[#f6f7f8]"><Image src={item.image} alt={item.product + 'の事例'} fill unoptimized sizes="10rem" className="object-contain" /></div><div><span className="text-[10px] font-bold text-ink-soft">{item.product}</span><p className="mt-2 text-[15px] font-black leading-7">{item.problem}</p></div></Link>)}</div>
    </section>

    <SoftContact title={<>似たお悩み、<br />ありませんか？</>} body="まずは気軽にお話を聞かせてください" />
    <Footer />
  </main>
}
