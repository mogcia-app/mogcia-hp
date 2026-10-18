import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { SectionLabel, SoftContact, tone, type Tone } from '@/components/PageFrame'

type FlowItem = [string, string]
type FaqItem = [string, string]

type Props = {
  eyebrow: string
  title: string
  lead: string
  description: string
  image: string
  imageAlt: string
  concerns: string[]
  scope: string[]
  pricing: ReactNode
  flow: FlowItem[]
  cases?: ReactNode
  faqs: FaqItem[]
  color?: Tone
}

const palette: Tone[] = ['sky', 'pink', 'butter', 'lilac', 'mint', 'peach']

export default function ServiceDetailPage({ eyebrow, title, lead, description, image, imageAlt, concerns, scope, pricing, flow, cases, faqs, color = 'sky' }: Props) {
  const others = palette.filter(item => item !== color)
  const priceTone: Tone = color === 'butter' ? 'peach' : 'butter'
  const caseTone: Tone = color === 'pink' ? 'lilac' : 'pink'
  const rotate = (index: number) => tone[[color, ...others][index % palette.length]].chip

  return <main className="bg-white text-ink">
    <section className="page-shell pb-20 pt-12 md:pb-28 md:pt-16">
      <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　<Link href="/services">Service</Link>　／　{title}</p>
      <div className="mt-12 grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <div>
          <SectionLabel label={eyebrow} color={color} />
          <h1 className="mt-5 text-balance text-[clamp(1.5rem,7vw,2rem)] font-black leading-[1.5] tracking-[-.04em] sm:text-4xl md:text-6xl">{title}</h1>
          <p className="mt-7 text-xl font-black leading-9"><span className="bg-no-repeat [background-position:0_88%] [background-size:100%_.45em]" style={{ backgroundImage: `linear-gradient(${tone[color].chip},${tone[color].chip})` }}>{lead}</span></p>
          <p className="mt-5 max-w-xl text-sm leading-8 text-ink-soft">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="button button-dark text-xs">無料で相談する →</Link><a href="#price" className="button button-light text-xs">料金を見る</a></div>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem]" style={{ backgroundColor: tone[color].band }}><Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1023px) 100vw, 58vw" className="object-contain" /></div>
      </div>
    </section>

    <section className="py-20 md:py-28" style={{ backgroundColor: tone[color].band }}><div className="page-shell grid gap-12 lg:grid-cols-[.62fr_1.38fr]">
      <div><SectionLabel number="01" label="For you" color={color} /><h2 className="mt-5 text-3xl font-black leading-[1.45]">こんなお悩みから<br />ご相談いただけます</h2></div>
      <div className="grid gap-3 sm:grid-cols-2">{concerns.map((item, index) => <div key={item} className="flex min-h-28 items-start gap-4 rounded-[1.1rem] bg-white p-6"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-[11px] font-black" style={{ backgroundColor: rotate(index) }}>{String(index + 1).padStart(2, '0')}</span><p className="pt-1 text-sm font-bold leading-7">「{item}」</p></div>)}</div>
    </div></section>

    <section className="page-shell py-20 md:py-28"><div className="grid gap-12 lg:grid-cols-[.62fr_1.38fr]">
      <div><SectionLabel number="02" label="What we support" color={others[0]} /><h2 className="mt-5 text-3xl font-black">対応内容</h2></div>
      <div className="grid border-t border-ink sm:grid-cols-2">{scope.map((item, index) => <div key={item} className={`flex items-center gap-4 border-b border-ink/15 py-6 sm:px-6 ${index % 2 === 1 ? 'sm:border-l' : 'sm:pl-0'}`}><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full" style={{ backgroundColor: rotate(index) }} aria-hidden><svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.2 5 8.5l4.5-5" /></svg></span><p className="text-sm font-bold leading-7">{item}</p></div>)}</div>
    </div></section>

    <section id="price" className="scroll-mt-24 py-20 md:py-28" style={{ backgroundColor: tone[priceTone].band }}><div className="page-shell"><SectionLabel number="03" label="Price" color={priceTone} /><h2 className="mt-5 text-3xl font-black">料金</h2><div className="mt-10 [&_article]:rounded-[1.1rem] [&_article]:border-transparent [&_.border]:rounded-[1.1rem]">{pricing}</div></div></section>

    <section className="page-shell py-20 md:py-28"><SectionLabel number="04" label="Flow" color={others[2]} /><h2 className="mt-5 text-3xl font-black">ご相談からの流れ</h2><div className="mt-10 grid border-t border-ink md:grid-cols-4">{flow.map(([itemTitle, body], index) => <article key={itemTitle} className={`py-7 md:px-6 ${index > 0 ? 'border-t border-ink/15 md:border-l md:border-t-0' : 'md:pl-0'} ${index >= 4 ? 'md:border-t md:border-ink/15' : ''} ${index === 4 ? 'md:border-l-0 md:pl-0' : ''}`}><p className="grid h-12 w-12 place-items-center rounded-full font-display text-sm font-black" style={{ backgroundColor: rotate(index) }}>{String(index + 1).padStart(2, '0')}</p><h3 className="mt-4 text-sm font-black">{itemTitle}</h3><p className="mt-3 text-xs leading-6 text-ink-soft">{body}</p></article>)}</div></section>

    {cases ? <section className="py-20 md:py-28" style={{ backgroundColor: tone[caseTone].band }}><div className="page-shell"><SectionLabel number="05" label="Cases" color={caseTone} /><h2 className="mt-5 text-3xl font-black">支援事例</h2><div className="mt-10 [&_article]:rounded-[1.25rem]">{cases}</div></div></section> : null}

    <section className="page-shell grid gap-12 py-20 md:py-28 lg:grid-cols-[.55fr_1fr]"><div><SectionLabel number={cases ? '06' : '05'} label="FAQ" color="mint" /><h2 className="mt-5 text-3xl font-black">よくある質問</h2></div><div className="border-t border-ink">{faqs.map(([question, answer], index) => <details key={question} className="group border-b border-ink/20 py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold"><span><small className="mr-4 font-display">Q{index + 1}</small>{question}</span><span className="group-open:rotate-45">＋</span></summary><p className="pl-9 pt-4 text-xs leading-7 text-ink-soft">{answer}</p></details>)}</div></section>

    <SoftContact body="まだ内容がまとまっていなくても大丈夫。目的や今の状況を聞きながら、必要なことを一緒に整理します" />
    <Footer />
  </main>
}
