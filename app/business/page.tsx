import Link from 'next/link'
import Footer from '@/components/Footer'
import { PageHeader, SectionHead, SoftContact, tone, type Tone } from '@/components/PageFrame'
import { products } from '@/lib/site-data'

export const metadata = { title: '法人のご担当者さまへ | MOGCIA', description: '会社紹介・サービス・プロダクトの資料と、社内でご検討いただくための情報をまとめています' }

const materials: [string, string, string, Tone][] = [
  ['会社紹介資料', 'MOGCIAの考え方・支援体制・取り組みをまとめた資料です', 'PDF・個別送付', 'sky'],
  ['サービス資料', 'SNS運用代行・Web制作・販促物・システム開発の支援内容をまとめています', 'PDF・個別送付', 'pink'],
  ['プロダクト資料', '自社プロダクトの機能・活用方法・導入についてご案内します', 'PDF・個別送付', 'lilac'],
]

const reasons: [string, string, string, Tone][] = [
  ['01', 'プロダクトと、伴走の両方', '自社プロダクトと、制作・運用の伴走支援。課題に合わせて組み合わせられます', 'sky'],
  ['02', '24時間連絡OK・土日も相談可能', '契約中は時間を気にせず連絡でき、土日の打ち合わせにも対応しています', 'pink'],
  ['03', 'つくって、まわして、そだてる', '公開して終わりではなく、レポートと改善提案で成果まで伴走します', 'mint'],
]

const faqs: [string, string][] = [
  ['見積書や提案書を作ってもらえますか？', 'はい。内容を伺ったうえで、社内で共有・検討しやすい形にまとめてお送りします。'],
  ['秘密保持契約（NDA）は結べますか？', 'はい。ご相談の段階から対応可能です。貴社指定の書式がある場合もお知らせください。'],
  ['請求書払いに対応していますか？', 'はい。法人のお客さまは請求書払いに対応しています。支払条件は事前に確認のうえ決定します。'],
  ['福岡以外の会社でも依頼できますか？', 'はい。オンラインミーティングを活用し、全国の企業さまに対応しています。'],
  ['まだ要件が決まっていなくても相談できますか？', 'はい。課題や社内状況を伺い、必要な施策と進め方を整理するところからご一緒します。'],
]

const reviewItems = ['目的と解決したい課題', '支援範囲と役割分担', '概算費用と契約条件', '導入・制作スケジュール', '運用開始後のサポート', '社内共有用の補足資料']

const businessFlow: [string, string, string, Tone][] = [
  ['01', 'ご相談', '現状の課題や、社内で検討している内容をお聞かせください', 'sky'],
  ['02', '整理・ご提案', '必要な支援範囲、進め方、体制を整理してご提案します', 'pink'],
  ['03', 'お見積もり', '内容と条件を確認し、社内検討に必要な資料をお送りします', 'butter'],
  ['04', 'ご契約・開始', '契約手続き後、担当者と進め方を確認してスタートします', 'mint'],
]

const productTones: Tone[] = ['butter', 'lilac', 'pink', 'sky', 'peach', 'mint']

export default function BusinessPage() {
  return <main className="bg-white text-ink">
    <PageHeader color="lilac" diagonalAccent crumbs={[['法人のご担当者さまへ']]} title="Business" lead={<>社内で検討しやすい<br />資料、そろえています</>} body="会社紹介やサービス・プロダクトの資料をご用意しています。稟議や社内共有にもご活用ください。" />

    <section id="materials" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="01" label="Materials" color="sky" title="ご用意している資料" note="フォームからリクエストいただくと、担当者よりお送りします" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">{materials.map(([title, body, meta, color]) => <Link key={title} href="/contact" className="group flex flex-col rounded-[1.5rem] p-3" style={{ backgroundColor: tone[color].band }}>
        <div className="relative grid aspect-[4/3] place-items-center rounded-[1.1rem] bg-white">
          <div className="flex h-[70%] w-[46%] flex-col justify-between rounded-lg p-4 shadow-[0_12px_30px_-18px_rgba(30,41,59,.45)]" style={{ backgroundColor: tone[color].chip }} aria-hidden><span className="font-logo text-[10px] font-black">MOGCIA</span><span className="text-[11px] font-black leading-4">{title}</span></div>
        </div>
        <div className="flex flex-1 flex-col p-5"><h3 className="text-lg font-black">{title}</h3><p className="mt-2 text-xs leading-6 text-ink-soft">{body}</p><div className="mt-auto flex items-center justify-between pt-5 text-xs font-bold"><span className="text-ink-soft">{meta}</span><span>リクエスト <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span></span></div></div>
      </Link>)}</div>
      <div className="mt-6 flex flex-wrap gap-2">{products.map((p, i) => <span key={p.name} className="flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-bold" style={{ backgroundColor: tone[productTones[i % productTones.length]].band }}><span className="h-2 w-2 rounded-full" style={{ backgroundColor: tone[productTones[i % productTones.length]].dot }} aria-hidden />{p.name}</span>)}<span className="px-2 py-2 text-[11px] text-ink-soft">の個別資料もご用意しています</span></div>
    </section>

    <section className="py-24 md:py-32" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell grid gap-12 lg:grid-cols-[.62fr_1fr] lg:gap-20">
      <div><SectionHead number="02" label="For internal review" color="lilac" title={<>社内で検討しやすい<br />情報をそろえます</>} /><p className="mt-6 max-w-md text-xs leading-7 text-ink-soft">担当者さまだけで判断を抱えずに済むよう、上長や関係部署へ説明するための情報も整理してお渡しします。</p></div>
      <div className="rounded-[1.75rem] bg-white p-7 md:p-10"><p className="text-[10px] font-bold tracking-[.18em] text-ink-soft">ご提案時に整理すること</p><div className="mt-6 grid gap-x-8 md:grid-cols-2">{reviewItems.map((item, index) => <p key={item} className="flex items-center gap-4 border-t border-ink/15 py-5 text-sm font-bold"><span className="font-display text-[10px] text-ink-soft">{String(index + 1).padStart(2, '0')}</span>{item}</p>)}</div></div>
    </div></section>

    <section id="reasons" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.butter.band }}><div className="page-shell">
      <SectionHead number="03" label="Why MOGCIA" color="butter" title="MOGCIAが選ばれる理由" action={<Link href="/works" className="border-b border-ink pb-1 text-xs font-bold">導入事例を見る →</Link>} />
      <div className="mt-10 grid gap-4 md:grid-cols-3">{reasons.map(([no, title, body, color]) => <article key={no} className="rounded-[1.5rem] bg-white p-7">
        <p className="grid h-16 w-16 place-items-center rounded-full font-display text-xl font-black" style={{ backgroundColor: tone[color].chip }}>{no}</p>
        <h3 className="mt-5 text-lg font-black">{title}</h3>
        <p className="mt-2.5 text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
    </div></section>

    <section className="page-shell py-24 md:py-32">
      <SectionHead number="04" label="Flow" color="mint" title="ご相談から開始まで" note="内容が固まっていない段階からでも進められます" />
      <div className="mt-12 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">{businessFlow.map(([no, title, body, color], index) => <article key={no} className={`border-b border-ink/15 py-8 sm:px-7 ${index > 0 ? 'sm:border-l' : 'sm:pl-0'}`}><span className="grid h-14 w-14 place-items-center rounded-full font-display text-sm font-black" style={{ backgroundColor: tone[color].chip }}>{no}</span><h3 className="mt-6 text-lg font-black">{title}</h3><p className="mt-3 text-xs leading-7 text-ink-soft">{body}</p></article>)}</div>
    </section>

    <section id="faq" className="page-shell scroll-mt-24 grid gap-12 py-24 md:py-32 lg:grid-cols-[.55fr_1fr]">
      <SectionHead number="05" label="FAQ" color="pink" title="ご担当者さまからよくある質問" />
      <div className="grid gap-3">{faqs.map(([q, a], index) => <details key={q} className="group rounded-[1.5rem] px-6 py-5" style={{ backgroundColor: tone.pink.band }} open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold"><span><small className="mr-4 font-display">Q{index + 1}</small>{q}</span><span className="group-open:rotate-45">＋</span></summary><p className="pl-9 pt-4 text-xs leading-6 text-ink-soft">{a}</p></details>)}</div>
    </section>

    <SoftContact body="資料のリクエストや、社内検討に向けたご相談もお気軽にどうぞ" />
    <Footer />
  </main>
}
