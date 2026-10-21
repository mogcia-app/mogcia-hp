import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { products } from '@/lib/site-data'
import { PageHeader, SectionLabel, SoftContact, tone } from '@/components/PageFrame'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata('サービス | 株式会社MOGCIA', '/services')

const productImages = [
  '/our-products-selmo.png',
  '/our-products-commo.png',
  '/our-products-roomly.png',
  '/our-products-upmo.png',
  '/our-products-signal.png',
  '/our-products-ismo.png',
]

const productColors = ['#F7DF83', '#D7C5F7', '#F6B2B5', '#BCDCF7', '#F6C08F', '#FDDDE5'] as const

const idealCompanies = [
  ['相談先を一本化したい', 'AI・SNS・Web・システムを別々の会社へ依頼せず、全体を見ながら進めたい会社'],
  ['専任担当がいない', 'ITやマーケティングの専任者がいなくても、課題整理から実行まで伴走してほしい会社'],
  ['つくった後も任せたい', '制作や導入だけで終わらず、運用・分析・改善まで継続して進めたい会社'],
  ['小さく始めて育てたい', '最初から大きな仕組みを導入せず、必要な範囲から試し、現場に合わせて育てたい会社'],
]

const productProblems = [
  '営業の振り返りや教育が、上司・担当者の経験に依存している',
  'LINEで集めた顧客情報を、予約や再来店につなげられていない',
  'ホテルのフロントに、客室からの同じ問い合わせが集中している',
  '社内資料が散らばり、必要な情報を探す時間や質問対応が増えている',
  'SNSで何を投稿し、どこを改善すべきか判断できない',
  'アクセス数は見えても、問い合わせにつながらない原因が分からない',
]

const support: [string, string, string[], string, [string, string]?][] = [
  ['SNS運用代行', '企画から投稿制作、分析・改善まで。見つけてもらえる発信を、続けられる形にします。', ['企画・投稿設計', '撮影・制作', '投稿・分析・改善'], '/services/sns'],
  ['LP・HP・EC制作', '伝えたい価値と導線を整理し、公開後の改善まで見据えたサイトをつくります。', ['構成・原稿作成', 'デザイン・実装', '公開後の改善'], '/services/web'],
  ['SNS・Web一体支援', 'SNSで知ってもらい、Webで詳しく伝え、応募や問い合わせにつながる導線をつくります。', ['採用支援', '認知・問い合わせ', '個別見積もり'], '/services/marketing'],
  ['販促物制作', '目的や届けたい相手を整理し、デザインから印刷・製造、納品まで対応します。', ['名刺・パンフレット', 'チラシ・看板', 'ショップカード・卓上POP'], '/services/promotion'],
  ['システム開発', '業務や現場の流れを整理し、必要な機能を一緒に考えながら、使い続けられる仕組みをつくります。', ['業務整理・要件設計', 'システム・AI開発', '運用・改善'], '/services/system'],
  ['プランニング', '何をすればよいか決まっていない段階から、必要な施策と進め方を一緒に整理します。', ['相談無料', 'オンライン・対面', '時間・回数の一律制限なし'], '/services/consulting', ['政治・行政分野の広報支援', '/services/public']],
]

const supportTones = ['sky','pink','butter','lilac','mint','peach'] as const

const supportImages = [
  '/sns-service.png',
  '/web-service.png',
  '/company-service.png',
  '/promotional-service.png',
  '/now-at-mogcia-02.png',
  '/consulting-service.png',
]

const combinations: { name: string; target: string; body: string; color: 'sky' | 'pink' | 'butter' | 'mint'; items: [string, string][] }[] = [
  { name: '宿泊まるごとプラン', target: 'ホテル・旅館の方へ', body: 'ホテル・旅館の集客から、滞在中の案内、宿泊後の再訪まで。', color: 'sky', items: [['SNS運用', '知ってもらう'], ['Roomly.', '滞在中の案内'], ['commo.', '再訪につなげる']] },
  { name: '集客スタートプラン', target: 'これから集客を始めたい方へ', body: '魅力を伝える場所と、知ってもらう流れをまとめてつくります。', color: 'pink', items: [['LP制作', '魅力を伝える場所'], ['SNS運用', '知ってもらう'], ['Signal.', '次の一手を提案']] },
  { name: '集客改善プラン', target: '発信しているのに成果が見えない方へ', body: 'SNSとWebの反応を見ながら、発信とページを継続的に改善します。', color: 'butter', items: [['Signal.', 'SNSの改善提案'], ['ismo.', 'Webの反応を分析'], ['LP改善', 'ページを直す']] },
  { name: 'チーム強化プラン', target: '育成や社内の情報共有に悩む方へ', body: '営業練習と社内情報の検索をAIで支え、育成を仕組みにします。', color: 'mint', items: [['selmo.', '営業練習'], ['upmo', '社内情報の検索'], ['AI開発', '自社に合わせる']] },
]


const flow: [string, string, string][] = [
  ['Hi', 'ご相談・ご提案', 'まだ内容がまとまっていなくても大丈夫です。まずは今のお悩みを聞かせてください。'],
  ['M', 'つくる', '目的と使う人に合わせて、企画・設計・制作を進めます。'],
  ['O', 'まわす', '現場で無理なく使い続けられるよう、運用まで一緒に整えます。'],
  ['G', 'そだてる', '反応や数字を見ながら改善し、事業とともに育てていきます。'],
]

const faqs: [string, string][] = [
  ['相談だけでも大丈夫ですか？', 'はい。内容が固まっていない段階でも、課題の整理から一緒に進めます。'],
  ['LINEから相談できますか？', 'はい。MOGCIA公式LINEからお気軽にご相談いただけます。'],
  ['プロダクトは1つだけでも導入できますか？', 'はい。必要なものを1つから導入できます。'],
  ['福岡以外の企業でも対応できますか？', 'はい。オンラインで全国の企業さまに対応しています。'],
  ['費用はどれくらいかかりますか？', '内容と規模を伺ったうえで、事前にお見積もりをご案内します。'],
]

export default function Services() {
  return <main className="bg-white text-ink">
    <PageHeader crumbs={[['サービス']]} title="Services" color="pink" diagonalAccent showTitlePeriod lead={<>プロダクトと伴走で<br />やりたいことを、つなげる。</>} body="AI・SNS・Webを組み合わせ、つくるところから運用・改善まで。必要な支援をひとつの流れで届けます。" />

    <section className="page-shell py-24 md:py-32"><div className="grid gap-12 lg:grid-cols-[.62fr_1.38fr] lg:gap-20">
      <div><SectionLabel number="01" label="Good match" color="mint"/><h2 className="mt-5 text-3xl font-black leading-[1.45]">こんなチームと、<br />相性がいいです</h2><p className="mt-5 max-w-sm text-xs leading-7 text-ink-soft">会社の規模や業種ではなく、進め方の相性。相談しながら、いっしょに動かしていきたい方に向いています。</p><p className="mt-8 -rotate-2 text-xl leading-tight text-ink/45 [font-family:'Bradley_Hand','Segoe_Print','Chalkboard_SE','Klee',cursive]">Good ideas<br/>grow together.</p></div>
      <div className="grid gap-3 sm:grid-cols-2">{idealCompanies.map(([title,body],index)=>{const colors=[tone.sky.band,tone.pink.band,tone.butter.band,tone.mint.band];const chips=[tone.sky.chip,tone.pink.chip,tone.butter.chip,tone.mint.chip];return <article key={title} className="relative min-h-[13rem] overflow-hidden rounded-[1.5rem] p-6 md:p-7" style={{backgroundColor:colors[index]}}><span className="grid h-10 w-10 place-items-center rounded-full font-display text-[10px] font-black" style={{backgroundColor:chips[index]}}>0{index+1}</span><h3 className="mt-5 text-lg font-black">{title}</h3><p className="mt-3 text-xs leading-7 text-ink-soft">{body}</p><span className="pointer-events-none absolute -bottom-8 -right-3 font-display text-[7rem] font-black leading-none text-white/45" aria-hidden>0{index+1}</span></article>})}</div>
    </div></section>

    <section id="products" className="scroll-mt-24 bg-[#FFF6D9] py-24 md:py-32"><div className="page-shell">
      <div><SectionLabel number="02" label="Products" color="butter"/><h2 className="mt-5 text-3xl font-black">プロダクト</h2><p className="mt-4 max-w-xl text-xs leading-6 text-ink-soft">集客、接客、社内業務を支える自社プロダクト。課題に合わせて組み合わせられます。</p></div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{products.map((product,index)=>{const productColor=productColors[index%productColors.length];return <article key={product.name} className="flex min-h-[23rem] flex-col rounded-[1.5rem] bg-white p-5" style={{'--card-accent':productColor} as CSSProperties}><div className="relative aspect-[3/2] overflow-hidden bg-white"><Image src={productImages[index]} alt={`${product.name}のプロダクトビジュアル`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-contain"/></div><div className="mt-5 flex items-start justify-between gap-3"><div><h3 className="font-logo text-xl font-black">{product.name}</h3><p className="mt-2 text-xs font-black">{product.lead}</p></div><span className="text-[9px] text-ink-soft">{product.label}</span></div><div className="mt-4 border-l-2 pl-3" style={{borderColor:productColor}}><p className="text-[9px] font-bold text-ink-soft">解決すること</p><p className="mt-1 text-[11px] font-bold leading-5">{productProblems[index]}</p></div><p className="mt-4 text-[11px] leading-5 text-ink-soft">{product.description}</p><div className="mt-auto pt-7"><a href={product.href} target="_blank" rel="noreferrer" className="inline-flex min-h-10 w-fit items-center border border-ink bg-white px-4 text-[10px] font-black" style={{boxShadow:`4px 4px 0 ${productColor}`}}>詳しく見る ↗</a></div></article>})}</div>
    </div></section>

    <section id="support" className="page-shell scroll-mt-24 py-24 md:py-32">
      <div><SectionLabel number="03" label="Support" color="sky"/><h2 className="mt-5 text-3xl font-black">支援サービス</h2><p className="mt-4 max-w-xl text-xs leading-6 text-ink-soft">プロダクトだけでは届きにくい、戦略・制作・運用の領域も伴走します。</p></div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{support.map((item,index)=>{const t=supportTones[index%supportTones.length];return <article key={item[0]} className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white transition-transform duration-300 hover:-translate-y-1">
        <div className="relative aspect-[3/2] overflow-hidden" style={{backgroundColor:tone[t].band}}>{supportImages[index]?<Image src={supportImages[index]} alt={`${item[0]}のサービスイメージ`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-contain"/>:<span className="absolute inset-0 grid place-items-center font-display text-[8px] font-bold uppercase tracking-[.16em] text-ink/30">Image placeholder</span>}<span className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white font-display text-[11px] font-black">0{index+1}</span></div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h3 className="text-lg font-black tracking-[-.02em] md:text-xl"><Link href={item[3]} className="after:absolute after:inset-0">{item[0]}</Link></h3>
          <p className="mt-3 text-xs leading-6 text-ink-soft">{item[1]}</p>
          <ul className="mt-5 flex flex-col gap-2 border-t border-ink/10 pt-5">{item[2].map(point=><li key={point} className="flex items-start gap-2.5 text-xs font-bold leading-5"><span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full" style={{backgroundColor:tone[t].chip}} aria-hidden><svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.2 5 8.5l4.5-5"/></svg></span>{point}</li>)}</ul>
          {item[4] && <Link href={item[4][1]} className="relative z-10 mt-4 flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold transition-opacity hover:opacity-80" style={{backgroundColor:tone[t].band}}><span><span className="mr-2 text-[10px] text-ink-soft">こんな支援も</span>{item[4][0]}</span><span aria-hidden>→</span></Link>}
          <div className="mt-auto pt-6"><span className="inline-flex min-h-10 w-fit items-center gap-5 border border-ink bg-white px-4 text-xs font-black" style={{boxShadow:`4px 4px 0 ${tone[t].chip}`}}>{item[3]==='/contact'?'相談してみる':'詳しく見る'}<span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span></span></div>
        </div>
      </article>})}</div>
    </section>

    <section id="combo" className="scroll-mt-24 bg-[#F5F5F3] py-24 text-ink md:py-32"><div className="page-shell">
      <div><SectionLabel number="04" label="Combinations" color="lilac"/><h2 className="mt-5 text-3xl font-black">組み合わせ例</h2><p className="mt-4 max-w-xl text-xs leading-6 text-ink-soft">業種や課題に合わせて、必要なものだけを組み合わせます。</p></div>
      <div className="mt-12 grid gap-4 md:grid-cols-2">{combinations.map(plan=><article key={plan.name} className="flex flex-col overflow-hidden rounded-[1.5rem] bg-white">
        <div className="px-6 py-5 md:px-7" style={{backgroundColor:tone[plan.color].chip}}><p className="text-[11px] font-bold">{plan.target}</p><h3 className="mt-1 text-xl font-black">{plan.name}</h3></div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <p className="text-xs leading-6 text-ink-soft">{plan.body}</p>
          <div className="mt-6 flex flex-col gap-2 lg:flex-row lg:items-stretch">{plan.items.map(([label,role],index)=><div key={label} className="flex flex-col items-stretch gap-2 lg:flex-1 lg:flex-row lg:items-center"><div className="flex w-full flex-1 flex-col items-center justify-center rounded-xl border border-ink/10 px-3 py-4 text-center"><span className="font-logo text-sm font-black">{label}</span><span className="mt-1 text-[10px] leading-4 text-ink-soft">{role}</span></div>{index<plan.items.length-1&&<span className="w-full shrink-0 text-center font-display text-lg font-black lg:w-auto" style={{color:tone[plan.color].dot}} aria-hidden>+</span>}</div>)}</div>
          <Link href="/contact" className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5 text-xs font-bold">このプランについて相談する<span aria-hidden>→</span></Link>
        </div>
      </article>)}</div>
    </div></section>

    <section id="flow" className="page-shell scroll-mt-24 py-24 md:py-32"><SectionLabel number="05" label="Flow" color="pink"/><h2 className="mt-5 text-3xl font-black">ご相談から、つくる・まわす・そだてるまで</h2><div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{flow.map((item,index)=>{const flowTone=[tone.mint,tone.sky,tone.pink,tone.lilac][index];return <article key={item[0]} className="relative overflow-hidden rounded-[1.5rem] p-7" style={{backgroundColor:flowTone.band}}><span className="absolute -right-5 -top-7 font-display text-[6.5rem] font-black leading-none text-white/65" aria-hidden>{String(index+1).padStart(2,'0')}</span><p className="relative grid h-16 w-16 place-items-center rounded-full font-display text-2xl font-black" style={{backgroundColor:flowTone.chip}}>{item[0]}</p><h3 className="relative mt-6 text-sm font-black">{item[1]}</h3><p className="relative mt-3 text-[11px] leading-6 text-ink-soft">{item[2]}</p></article>})}</div></section>

    <section id="faq" className="page-shell grid scroll-mt-24 gap-12 pb-24 md:pb-32 lg:grid-cols-[.55fr_1fr]"><div><SectionLabel number="06" label="FAQ" color="mint"/><h2 className="mt-5 text-3xl font-black">よくある質問</h2></div><div className="border-t border-ink">{faqs.map(([question,answer],index)=><details key={question} className="group border-b border-ink/20 py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold"><span><small className="mr-4 font-display">Q{index+1}</small>{question}</span><span className="group-open:rotate-45">＋</span></summary><p className="pl-9 pt-4 text-xs leading-6 text-ink-soft">{answer}</p></details>)}</div></section>

    <SoftContact body="どれが合うか、プロダクト選びの段階から一緒に考えます" />
    <Footer/>
  </main>
}
