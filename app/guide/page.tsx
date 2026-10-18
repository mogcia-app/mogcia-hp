import Link from 'next/link'
import Footer from '@/components/Footer'
import GuideExplorer, { type Guide } from '@/components/GuideExplorer'
import { PageHeader, SectionHead, SoftContact, tone } from '@/components/PageFrame'
import { guideArticles } from '@/lib/guide-data'

export const metadata = { title: 'Guide | MOGCIA', description: '中小企業のためのAI・SNS・Web活用ガイド。' }

const featured = guideArticles[0]
const guides: Guide[] = guideArticles

export default function GuidePage() {
  return <main className="bg-white text-ink">
    <PageHeader color="sky" diagonalAccent crumbs={[['Guide']]} title="Guide" lead={<>むずかしいことを、<br />やさしく</>} body="AI・SNS・Webを、自分たちで活かすためのガイドです。現場で実際にやってきたことを、できるだけわかりやすくまとめています。" />

    <section id="featured" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="01" label="Featured" color="sky" title="まずはここから" />
      <article className="relative mt-10 overflow-hidden rounded-[2rem] p-3" style={{ backgroundColor: tone.sky.band }}>
        <span className="pointer-events-none absolute -right-14 -top-20 font-display text-[14rem] font-black leading-none text-white/70" aria-hidden>01</span>
        <div className="relative grid min-h-[27rem] gap-10 rounded-[1.35rem] bg-white p-7 md:p-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:p-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[10px] font-bold"><span className="rounded-full px-2.5 py-1" style={{ backgroundColor: tone.sky.chip }}>AI活用</span><span className="text-ink-soft">約{featured.minutes}分で読めます</span></div>
            <p className="mt-8 font-display text-[10px] font-black tracking-[.22em] text-ink-soft">START HERE</p>
            <h3 className="mt-4 text-2xl font-black leading-[1.55] md:text-3xl">{featured.title}</h3>
            <p className="mt-5 max-w-xl text-xs leading-7 text-ink-soft">{featured.body}</p>
            <Link href={`/guide/${featured.slug}`} className="button button-dark mt-8 self-start text-xs lg:mt-auto">記事を読む →</Link>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[10px] font-bold tracking-[.16em] text-ink-soft">この記事でわかること</p>
            <ol className="mt-5 border-t border-ink">
              {['AIに任せやすい最初の仕事', '伝わりやすい頼み方の基本', '安全に使うための確認ポイント'].map((point, index) => <li key={point} className="grid grid-cols-[2.5rem_1fr] items-center border-b border-ink/15 py-5"><span className="font-display text-xs font-black text-ink-soft">0{index + 1}</span><span className="text-sm font-bold">{point}</span></li>)}
            </ol>
          </div>
        </div>
      </article>
    </section>

    <section id="list" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.pink.band }}><div className="page-shell">
      <SectionHead number="02" label="All guides" color="pink" title="テーマから探す" note="仕事の中で気になっているテーマから選べます" />
      <div className="mt-10"><GuideExplorer guides={guides} /></div>
    </div></section>

    <SoftContact title={<>読んでもわからない<br />ことは、聞いてください</>} body="ガイドの内容について、自社の場合どうすればいいかもご相談いただけます" />
    <Footer />
  </main>
}
