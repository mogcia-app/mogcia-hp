import Link from 'next/link'
import Footer from '@/components/Footer'
import { DiagonalAccent, SectionHead, SectionLabel, SoftContact, tone, type Tone } from '@/components/PageFrame'
import { stories } from '@/lib/site-data'

export const metadata = { title: '政治・行政分野の広報支援 | MOGCIA', description: '議員・首長の皆さまの日々の活動を、地域の方にわかりやすく届けるための広報・ブランディングを支援しています' }

const supports: [string, string, Tone][] = [
  ['01', '活動報告・政策発信のためのSNS運用支援', 'sky'],
  ['02', 'プロフィール写真撮影・ビジュアルの整備', 'pink'],
  ['03', '活動報告チラシ・リーフレット・Webサイトの制作', 'butter'],
  ['04', '発信内容の分析・改善提案', 'mint'],
]

const caseSlugs = ['politics-social-j', 'politics-news-e', 'politics-contact-f']
const caseTones: Tone[] = ['sky', 'lilac', 'mint']

const accept = ['日々の活動報告・政策発信', 'プロフィール写真・ビジュアルの整備', '活動報告の印刷物・Webサイト制作', '発信内容の分析・改善提案']
const decline = ['選挙期間中のSNS運用', '選挙用投稿の企画・作成', 'そのほか選挙運動に関わる業務']

export default function PublicServicePage() {
  const cases = caseSlugs.map(slug => stories.find(s => s.slug === slug)).filter((s): s is NonNullable<typeof s> => !!s)

  return <main className="bg-white text-ink">
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-16">
      <DiagonalAccent color="lilac" />
      <div className="page-shell relative z-10">
      <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　<Link href="/services">Service</Link>　／　政治・行政分野の広報支援</p>
      <div className="mt-12">
        <div className="max-w-3xl">
          <SectionLabel label="Public relations" color="lilac" />
          <h1 className="mt-5 text-balance text-[clamp(1.5rem,7vw,2rem)] font-black leading-[1.75] tracking-[-.02em] sm:text-4xl sm:leading-[1.5] md:text-[3.5rem] md:leading-[1.35]">政治・行政分野の<br />広報支援</h1>
          <p className="mt-7 max-w-xl text-sm leading-8 text-ink-soft">議員・首長の皆さまの日々の活動を、地域の方にわかりやすく届けるための広報・ブランディングを支援しています。議会での取り組みや政策を、SNS・Web・印刷物を通じて誠実に伝えるお手伝いをいたします。</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="button button-dark text-xs">相談する →</Link><a href="#notice" className="button button-light text-xs">ご依頼にあたって</a></div>
        </div>
      </div>
      </div>
    </section>

    <section id="support" className="scroll-mt-24 py-20 md:py-28" style={{ backgroundColor: tone.sky.band }}><div className="page-shell">
      <SectionHead number="01" label="What we support" color="sky" title="サービス内容" />
      <div className="mt-10 grid gap-3 sm:grid-cols-2">{supports.map(([no, text, color]) => <div key={no} className="flex min-h-28 items-center gap-5 rounded-[1.5rem] bg-white p-6 md:p-7">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full font-display text-base font-black" style={{ backgroundColor: tone[color].chip }}>{no}</span>
        <p className="text-[15px] font-black leading-7">{text}</p>
      </div>)}</div>
    </div></section>

    <section id="works" className="page-shell scroll-mt-24 py-20 md:py-28">
      <SectionHead number="02" label="Works" color="pink" title="実績" note="市議会議員・県議会議員・知事・国会議員の方々の広報支援に携わってまいりました。" action={<Link href="/works" className="border-b border-ink pb-1 text-xs font-bold">ほかの事例を見る →</Link>} />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">{cases.map((story, index) => { const color = caseTones[index % caseTones.length]; return <Link key={story.slug} href={`/works/${story.slug}`} className="group flex flex-col rounded-[1.5rem] p-3" style={{ backgroundColor: tone[color].band }}>
        <div className="flex flex-1 flex-col rounded-[1.1rem] bg-white p-6">
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold"><span className="rounded-full px-2.5 py-1" style={{ backgroundColor: tone[color].chip }}>{story.product}</span><span className="text-ink-soft">{story.client}</span></div>
          <h3 className="mt-4 text-[17px] font-black leading-[1.6]">{story.problem}</h3>
          <p className="mt-3 text-xs leading-6 text-ink-soft">{story.answer}</p>
          <figure className="mt-auto pt-5"><blockquote className="rounded-xl p-4 text-xs font-bold leading-6" style={{ backgroundColor: tone[color].band }}>「{story.quote}」</blockquote><figcaption className="mt-2 text-[10px] text-ink-soft">{story.quoteBy}</figcaption></figure>
          <span className="mt-4 text-xs font-bold">事例を詳しく見る <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
        </div>
      </Link> })}</div>
    </section>

    <section id="notice" className="scroll-mt-24 py-20 md:py-28" style={{ backgroundColor: tone.butter.band }}><div className="page-shell">
      <SectionHead number="03" label="Notice" color="butter" title="ご依頼にあたって" />
      <div className="mt-10 rounded-[1.5rem] bg-white p-7 md:p-10">
        <p className="text-sm font-bold leading-8">公職選挙法を遵守するため、選挙運動に関わる業務（選挙期間中のSNS運用、選挙用投稿の企画・作成等）はお受けしておりません。平時の政治活動における広報支援を専門としています。</p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl p-6" style={{ backgroundColor: tone.mint.band }}><p className="flex items-center gap-2.5 text-xs font-black"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tone.mint.dot }} aria-hidden />お受けしていること</p><ul className="mt-4 grid gap-2.5 text-[13px] leading-6">{accept.map(item => <li key={item} className="flex gap-2.5"><span aria-hidden>○</span>{item}</li>)}</ul></div>
          <div className="rounded-xl p-6" style={{ backgroundColor: tone.pink.band }}><p className="flex items-center gap-2.5 text-xs font-black"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tone.pink.dot }} aria-hidden />お受けしていないこと</p><ul className="mt-4 grid gap-2.5 text-[13px] leading-6">{decline.map(item => <li key={item} className="flex gap-2.5"><span aria-hidden>×</span>{item}</li>)}</ul></div>
        </div>
      </div>
    </div></section>

    <SoftContact body="日々の活動の届け方について、お気軽にご相談ください" />
    <Footer />
  </main>
}
