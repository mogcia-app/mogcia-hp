import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import HomeSectionMotion from '@/components/HomeSectionMotion'
import OurProductsShowcase from '@/components/OurProductsShowcase'
import { DiagonalAccent, SectionHead, SoftContact, tone, type Tone } from '@/components/PageFrame'
import { guideArticles } from '@/lib/guide-data'
import { stories } from '@/lib/site-data'

const capabilityItems = ['AI DEVELOPMENT', 'SNS OPERATIONS', 'WEB DESIGN', 'SYSTEM DEVELOPMENT', 'FROM FUKUOKA']
const homeGuides = guideArticles.slice(0, 3)
const nowItems = [['01','CREATIVE','高校生チームが監修','SNS運用とLP・HP制作には、現役高校生チームも参加。若い世代の視点や感覚を、企画と表現に取り入れています。','/now-at-mogcia-01.png'],['02','ENGINEERING','エンジニアと仕組みをつくる','AI活用から業務システム、自社プロダクトまで。現場で使い続けられる仕組みをエンジニアと開発しています。','/now-at-mogcia-02.png'],['03','CROSSOVER','必要な専門性をつなぐ','相談内容に合わせて必要なメンバーが連携。ひとつの領域に閉じず、事業全体を見ながら進めます。','/now-at-mogcia-03.png']]
const nowCardShadows = ['#FBD9E2', '#D6E8F7', '#FCEBB0']
const newsItems = [['2026.06.20','PRODUCT','selmo. サービス紹介ページを公開しました'],['2026.06.12','PRODUCT','selmo. AIロープレ機能を公開しました'],['2026.06.05','UPDATE','selmo. テレアポ分析機能を追加しました']]
const newsTones: Tone[] = ['butter', 'sky', 'pink']
const workTones: Tone[] = ['sky', 'pink', 'mint']
const guideTones: Tone[] = ['sky', 'pink', 'mint']

const featureSteps: [string, string, string, Tone][] = [
  ['AI研修', '動画と講座で、基本と業務での使い方を覚える', 'STEP 1', 'butter'],
  ['導入の伴走', '月1回の定例とチャットで、社内に定着させる', 'STEP 2', 'mint'],
  ['仕組みづくり', 'AIでつくったツールの裏側を構築し、月額でお預かり', 'STEP 3', 'lilac'],
]
const featureUseCases = ['議事録・日報', '見積もり・請求', '問い合わせ対応', 'SNS投稿の下書き', '社内マニュアル検索', '採用・求人票']

const featuredServices: { no: string; tag: string; en: string; title: string; body: string; link: string; href: string; color: Tone; subs: [string, string, Tone][] }[] = [
  { no: '01', tag: '使い方から定着まで', en: 'AI CONSULTING', title: 'AIコンサルティング', body: 'AIをどこで使うかを整理し、研修と伴走で、社員が日々の業務に使える状態まで支援します。', link: 'AIコンサルティングを見る', href: '/services/ai', color: 'mint', subs: [['活用設計', '使える業務を見つける', 'mint'], ['AI研修', '基本から実務まで学ぶ', 'butter'], ['定着支援', '使い続ける習慣をつくる', 'peach']] },
  { no: '02', tag: '業務に合う仕組みを開発', en: 'AI & SYSTEM', title: 'AI導入・システム開発', body: '既製ツールでは合わない業務に。AI機能を組み込んだ社内ツールやシステムを設計・開発し、運用まで支えます。', link: 'システム開発を見る', href: '/services/system', color: 'sky', subs: [['業務整理', '必要な機能を見極める', 'sky'], ['設計・開発', '現場に合う形でつくる', 'lilac'], ['保守・運用', '公開後も改善を続ける', 'pink']] },
]

const whatWeDoItems: [string, string, string, string, Tone, string[], string][] = [
  ['03', 'SNS', 'SNS運用', '企画／制作／投稿運用／分析・改善', 'pink', ['発信を企画', '運用を改善'], '/services/sns'],
  ['04', 'WEB', 'Web制作', 'LP制作／HP制作／公開後の改善', 'lilac', ['魅力を設計', '成果へ改善'], '/services/web'],
  ['05', 'CONSULTING', 'コンサルティング', '事業整理／課題整理／改善提案', 'butter', ['課題を整理', '進み方を提案'], '/services'],
]

const problemItems: [string, React.ReactNode, string][] = [
  ['AI', <>AIを取り入れたいけれど、<br/>何から始めればいいかわからない</>, '#D6E8F7'],
  ['SNS', <>SNSで発信したいのに、<br/>企画や投稿がなかなか続かない</>, '#FBD9E2'],
  ['WEB', <>ホームページはあるけれど、<br/>問い合わせにつながらない</>, '#E4DAF8'],
  ['SYSTEM', <>手作業や属人化が増え、<br/>日々の業務が回りにくい</>, '#D5EFE5'],
  ['IDEA', <>課題がいくつもあり、<br/>どこに相談すればいいかわからない</>, '#FCEBB0'],
]

const sectionLabelColors: Record<string, string> = {
  'Our belief': '#F08FA8',
  'Now at MOGCIA': '#5DC3A0',
  'What we do': '#6FA8DC',
  'Latest updates': '#F2C94C',
  Contact: '#5DC3A0',
}

const SectionLabel = ({ children, number }: { children: React.ReactNode; number?: string }) => {
  const label = typeof children === 'string' ? children : ''
  const hasExternalDot = label === 'About MOGCIA'
  return <p className="flex items-center gap-2.5 font-display text-[10px] font-bold uppercase tracking-[.24em] text-ink-soft">{!hasExternalDot && <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: sectionLabelColors[label] ?? '#6FA8DC' }} aria-hidden />}{number ? `${number} — ` : ''}{children}</p>
}

export default function Home(){return <main className="home-page">
 <HomeSectionMotion />
 <section className="home-hero relative min-h-[720px] overflow-hidden md:min-h-[calc(100svh-5rem)]">
  <picture className="absolute inset-0">
   <source media="(max-width: 767px)" srcSet="/hero-visual-r.png"/>
   <Image src="/hero-visual.png" alt="" fill priority sizes="100vw" className="object-cover object-[58%_center] md:object-center"/>
  </picture>
  <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-white via-white/20 to-transparent md:block" aria-hidden/>
  <div className="page-shell relative z-10 min-h-[720px] py-12 md:min-h-[calc(100svh-5rem)] md:py-16">
   <div className="max-w-[47rem]">
    <p className="hero-copy-line hero-copy-line-one mb-6 font-logo text-[9px] font-bold uppercase tracking-[.22em] text-ink-soft md:text-[10px]">AI × Creative / Tenjin, Fukuoka</p>
    <h1 className="font-display text-[3.7rem] font-black leading-[.88] tracking-[-.075em] sm:text-[5rem] md:text-[6.7rem] lg:text-[7.8rem]"><span className="hero-copy-line hero-copy-line-one block">Make</span><span className="hero-copy-line hero-copy-line-one block">AI work</span><span className="hero-copy-line hero-copy-line-two block">for you.</span></h1>
   <p className="mt-8 hidden text-sm font-black tracking-[.1em] md:block md:text-base">つくって、まわして、そだてていく。</p>
   <p className="mt-4 hidden text-xs leading-6 text-ink-soft md:block md:text-sm md:leading-7">福岡・天神から、AIとクリエイティブで<br/>やりたいことが続く仕組みをつくる。</p>
  </div>
   <svg viewBox="0 0 92 92" className="pointer-events-none absolute right-[5%] top-[17%] h-20 w-20 rotate-6 md:hidden" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M48 8c1 12 4 18 15 20-11 2-15 8-16 20-2-12-6-18-16-20 11-2 15-8 17-20Z" strokeWidth="1.7"/>
    <path d="M20 48c.5 7 3 10 9 11-6 1-9 4-10 11-1-7-3-10-9-11 6-1 9-4 10-11Z" strokeWidth="1.4"/>
    <path d="M67 54c0 5 2 8 7 9-5 1-7 4-8 9-1-5-3-8-7-9 5-1 7-4 8-9Z" strokeWidth="1.4"/>
    <path d="M72 18c3-3 6-4 9-4M76 24c4 0 7 1 9 3" strokeWidth="1.5"/>
   <circle cx="38" cy="63" r="1.8" fill="currentColor" stroke="none"/>
   <circle cx="80" cy="42" r="1.4" fill="currentColor" stroke="none"/>
  </svg>
   <div className="pointer-events-none absolute left-[7%] top-[55%] -rotate-6 md:hidden" aria-hidden>
    <p className="text-lg leading-none [font-family:'Bradley_Hand','Segoe_Print','Chalkboard_SE','Klee',cursive]">hello, tomorrow!</p>
    <svg viewBox="0 0 92 42" className="ml-16 mt-1 h-9 w-20 rotate-[-8deg]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 34c20 2 39-1 55-10 9-5 15-11 21-19"/><path d="m69 8 10-3-1 10"/></svg>
   </div>
   <div className="absolute bottom-[6%] right-[3%] flex -rotate-6 items-start gap-2 md:bottom-[12%] md:gap-3"><p className="text-right text-lg leading-[.95] md:text-2xl lg:text-4xl [font-family:'Bradley_Hand','Segoe_Print','Chalkboard_SE','Klee',cursive]">Good ideas<br/>for a brighter<br/>tomorrow.</p><svg viewBox="0 0 48 48" aria-hidden="true" className="mt-1 h-7 w-7 md:h-10 md:w-10 lg:h-12 lg:w-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="24" cy="24" r="18"/><path d="M17 20h.01M31 20h.01M16 28c2.5 5 6 7 8 7s5.5-2 8-7M24 3v5"/></svg></div>
   <div className="absolute bottom-8 left-0 flex items-center gap-4 text-[10px] font-bold tracking-[.12em] md:bottom-10"><span className="h-10 w-px bg-ink"/>Scroll</div>
  </div>
 </section>

 <div className="hero-marquee soft-spectrum overflow-hidden border-y border-ink/10 py-4 font-display text-xs font-bold tracking-[.16em] text-ink md:py-5 md:text-sm"><div className="hero-marquee-track flex w-max">{[0,1].map(loop=><div key={loop} aria-hidden={loop===1} className="flex shrink-0 items-center">{capabilityItems.map(item=><span key={item} className="flex items-center whitespace-nowrap"><span className="px-8 md:px-12">{item}</span><span className="text-ink/30">◇</span></span>)}</div>)}</div></div>

 <section className="bg-white pb-8 pt-16 md:py-32">
  <div className="page-shell grid items-center gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-8">
   <div><SectionLabel number="01">Our belief</SectionLabel><div className="mt-5 max-w-3xl"><h2 className="text-3xl font-black leading-[1.45] tracking-[-.03em] md:text-5xl">やりたいことを<br/>いっしょに育てる</h2><div className="mt-8 border-l-2 border-[#F08FA8] pl-5"><p className="text-sm font-bold leading-8 md:text-base">「できたらいいな」を、続いていく形へ。</p><p className="mt-3 max-w-xl text-xs leading-7 text-ink-soft md:max-w-none md:whitespace-nowrap md:text-sm md:leading-8">アイデアを整理し、つくり、動かし、育てる。そのすべてを、いっしょに。</p></div><div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5"><Link href="/company" className="group inline-flex min-h-12 items-center gap-8 border border-ink bg-white px-5 text-xs font-black shadow-[5px_5px_0_#FBD9E2] transition-transform hover:-translate-y-0.5"><span>私たちについて</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link><span className="font-display text-[8px] font-bold uppercase tracking-[.18em] text-ink/30">Make · Operate · Grow</span></div></div></div>
   <div className="relative w-full lg:scale-[1.06] lg:origin-right">
    <Image src="/our-belief.png" alt="アイデアを一緒に積み上げ、育てていく人々" width={1536} height={1024} sizes="(max-width: 1023px) 100vw, 62vw" className="h-auto w-full" />
    <p className="absolute right-[5%] top-[1%] -rotate-6 text-right text-base leading-[1.05] text-ink/80 md:text-2xl [font-family:'Bradley_Hand','Segoe_Print','Chalkboard_SE','Klee',cursive]">Better ideas<br/>grow together.</p>
    <div className="absolute left-[35%] top-[18%] -rotate-3 text-center [font-family:'Bradley_Hand','Segoe_Print','Chalkboard_SE','Klee',cursive]"><span className="text-2xl font-medium md:text-4xl">M</span><p className="text-[7px] uppercase tracking-[.12em] md:text-[9px]">Make</p><p className="mt-0.5 text-[7px] md:text-[9px]">つくる</p></div>
    <div className="absolute bottom-[15%] left-[25%] rotate-2 text-center [font-family:'Bradley_Hand','Segoe_Print','Chalkboard_SE','Klee',cursive]"><span className="text-2xl font-medium md:text-4xl">O</span><p className="text-[7px] uppercase tracking-[.12em] md:text-[9px]">Operate</p><p className="mt-0.5 text-[7px] md:text-[9px]">まわす</p></div>
    <div className="absolute right-[11%] top-[28%] rotate-3 text-center [font-family:'Bradley_Hand','Segoe_Print','Chalkboard_SE','Klee',cursive]"><span className="text-2xl font-medium md:text-4xl">G</span><p className="text-[7px] uppercase tracking-[.12em] md:text-[9px]">Grow</p><p className="mt-0.5 text-[7px] md:text-[9px]">育てる</p></div>
   </div>
 </div>
 </section>

 <section className="now-mogcia-section relative overflow-hidden border-t border-ink/10 bg-white pb-12 pt-12 md:border-t-0 md:py-32">
  <div className="pointer-events-none absolute inset-x-0 top-0 h-[23rem] overflow-hidden md:inset-0 md:h-full"><DiagonalAccent color="mint" /></div>
  <span className="now-mogcia-watermark pointer-events-none absolute right-0 top-5 font-display text-[7rem] font-black leading-none tracking-[-.08em] text-[#E9F6F1] sm:text-[11rem] lg:text-[16rem]" style={{WebkitTextStroke:'2px #A9DDCB',paintOrder:'stroke fill'}} aria-hidden>NOW</span>
  <div className="page-shell relative z-10">
   <div className="max-w-3xl"><SectionLabel number="02">Now at MOGCIA</SectionLabel><h2 className="now-mogcia-title mt-5 font-display text-4xl font-black leading-[1.02] tracking-[-.055em] md:text-6xl">Making things<br/>happen.</h2><div className="mt-7 border-l-2 border-[#5DC3A0] pl-5"><p className="text-sm font-bold leading-8 md:text-base">違う視点を持ち寄って、ひとつの仕事へ。</p><p className="mt-3 max-w-2xl text-xs leading-7 text-ink-soft md:text-sm md:leading-8">それぞれの「得意」を持ち寄って、考えて、つくって、育てていく。そんなチームが、いまのMOGCIAです。</p></div></div>
   <div className="mt-9 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-6">{nowItems.map(([number,status,title,body,imageSrc],index)=><article key={number} className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-ink bg-white p-2.5 md:min-h-[31rem] md:p-3" style={{'--now-shadow':nowCardShadows[index],boxShadow:`8px 8px 0 ${nowCardShadows[index]}`} as React.CSSProperties}><div className="relative aspect-[16/10] overflow-hidden rounded-[1.1rem] md:aspect-[4/3]"><Image src={imageSrc} alt={title} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.055]"/><span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-ink bg-white font-display text-[9px] font-black transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 md:h-10 md:w-10 md:text-[10px]">{number}</span></div><div className="flex flex-1 flex-col p-4 md:p-6"><span className="w-fit border-b border-ink pb-1 font-display text-[8px] font-bold tracking-[.14em]">{status}</span><h3 className="mt-3 text-lg font-black leading-7 md:mt-4">{title}</h3><p className="mt-2 text-xs leading-6 text-ink-soft md:mt-3">{body}</p><span className="mt-4 font-display text-[8px] font-bold uppercase tracking-[.16em] text-ink/30 md:mt-auto md:pt-6">MOGCIA / {number}</span></div></article>)}</div>
  </div>
 </section>

 <section className="bg-white pb-12 pt-10 md:py-20"><div className="page-shell">
  <div className="relative rounded-[2rem] bg-[#f4f2f2] px-5 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
   <span className="pointer-events-none absolute inset-x-0 top-3 overflow-hidden text-center font-display text-[4rem] font-black leading-none tracking-[-.06em] text-white/70 sm:text-[7rem] lg:text-[10rem]" aria-hidden>QUESTION</span>
   <div className="relative text-center"><p className="font-display text-[10px] font-bold uppercase tracking-[.24em] text-ink-soft">Common questions</p><h2 className="mx-auto mt-4 w-fit border-b-2 border-[#F08FA8] pb-3 text-2xl font-black tracking-[-.03em] sm:text-3xl md:text-4xl">このようなことありませんか？</h2><p className="mx-auto mt-5 max-w-2xl text-xs leading-7 text-ink-soft md:text-sm">まだ依頼内容が決まっていなくても大丈夫。いま感じている違和感や困りごとから、一緒に整理します。</p></div>
   <div className="relative mt-12 grid grid-cols-2 gap-x-4 gap-y-9 md:grid-cols-5 md:gap-5">{problemItems.map(([label,text,color],index)=><article key={label} className={`${index===problemItems.length-1?'col-span-2 md:col-span-1':''} text-center`}><div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full border border-ink/10 bg-white shadow-[5px_5px_0_var(--bubble-color)] md:h-24 md:w-24" style={{'--bubble-color':color} as React.CSSProperties}><span className="font-display text-xs font-black tracking-[.08em]">{label}</span><span className="absolute -right-1 -top-1 text-xl" aria-hidden>?</span></div><p className="mx-auto mt-5 max-w-[12rem] text-xs font-bold leading-6 md:text-[13px]">{text}</p></article>)}</div>
   <span className="absolute -bottom-8 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[2rem] border-t-[2.1rem] border-x-transparent border-t-[#f4f2f2]" aria-hidden />
  </div>
  <div className="mt-16 flex flex-col items-center text-center md:mt-20">
   <p className="font-display text-[9px] font-bold uppercase tracking-[.22em] text-ink/35">From questions to solutions</p>
   <p className="mt-3 text-lg font-black leading-8 md:text-2xl">悩みをほどいて、必要な方法を組み合わせる</p>
   <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
    {[['AI','#D6E8F7'],['SNS','#FBD9E2'],['WEB','#E4DAF8'],['SYSTEM','#D5EFE5']].map(([label,color],index)=><span key={label} className="flex items-center gap-2"><span className="rounded-full px-4 py-2 font-display text-[10px] font-black tracking-[.1em]" style={{backgroundColor:color}}>{label}</span>{index<3&&<span className="text-ink/25" aria-hidden>＋</span>}</span>)}
   </div>
   <Link href="/diagnosis" className="group mt-10 grid w-full max-w-4xl border border-[#F2C94C] bg-white text-left shadow-[7px_7px_0_#FCEBB0] transition-transform hover:-translate-y-0.5 sm:grid-cols-[9rem_1fr_auto] sm:items-stretch">
    <span className="flex items-center border-b border-[#F2C94C] bg-[#F2C94C] px-5 py-4 text-ink sm:border-b-0 sm:border-r"><span><b className="block font-display text-3xl leading-none">01</b><small className="mt-2 block font-display text-[8px] font-bold uppercase tracking-[.18em] text-ink/60">Minute check</small></span></span>
    <span className="px-5 py-6 sm:px-7"><span className="font-display text-[9px] font-bold uppercase tracking-[.18em] text-ink-soft">Quick diagnosis</span><strong className="mt-2 block text-lg font-black leading-7 md:text-xl">どこから始めるか迷ったら、AI診断</strong><span className="mt-1 block text-[11px] leading-5 text-ink-soft">今の課題に合う進め方を、いくつかの質問から整理します。</span></span>
    <span className="flex items-center justify-between border-t border-[#F2C94C] px-5 py-4 text-xs font-black text-[#9A7600] sm:min-w-[9rem] sm:justify-center sm:border-l sm:border-t-0">診断する<span className="ml-4 text-lg transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
   </Link>
  </div>
 </div></section>

 <section className="bg-white py-16 md:py-32"><div className="page-shell">
  <SectionHead number="03" label="What we do" color="sky" title="できること、いろいろ" note="入口はひとつでも、必要な方法はひとつとは限りません。事業に合わせて、領域をまたいだ支援を組み立てます。" action={<Link href="/services" className="group inline-flex min-h-12 self-start items-center gap-8 border border-ink bg-white px-5 text-xs font-black shadow-[5px_5px_0_#D6E8F7] transition-transform hover:-translate-y-0.5 md:self-auto"><span>サービスを見る</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>} />
  <div className="mt-10 grid gap-6 lg:grid-cols-2">{featuredServices.map(item => <Link key={item.no} href={item.href} className="group flex flex-col overflow-hidden border border-ink bg-white transition-transform hover:-translate-y-1" style={{ boxShadow: `8px 8px 0 ${tone[item.color].chip}` }}>
   <span className="flex flex-wrap items-center justify-between gap-3 border-b border-ink px-6 py-4 md:px-7"><span className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full border border-ink bg-white font-display text-[10px] font-black">{item.no}</span><span className="text-[11px] font-black">{item.tag}</span></span><small className="font-display text-[9px] font-bold tracking-[.14em] text-ink-soft">{item.en}</small></span>
   <span className="flex flex-1 flex-col p-6 md:p-8">
    <strong className="block text-2xl font-black md:text-[28px]">{item.title}</strong>
    <span className="mt-3 max-w-xl text-[13px] leading-7 text-ink-soft">{item.body}</span>
    <span className="mt-6 grid gap-2 sm:grid-cols-3">{item.subs.map(([title, text, color]) => <span key={title} className="flex flex-col gap-1 border border-ink/15 bg-white px-4 py-3.5" style={{ boxShadow: `3px 3px 0 ${tone[color].chip}` }}><span className="text-[13px] font-black">{title}</span><span className="text-[11px] leading-5 text-ink-soft">{text}</span></span>)}</span>
    <span className="mt-7 inline-flex min-h-11 w-fit items-center gap-6 border border-ink bg-white px-4 text-xs font-black" style={{ boxShadow: `4px 4px 0 ${tone[item.color].chip}` }}>{item.link} <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
   </span>
  </Link>)}</div>
  <div className="mt-8 grid gap-5 md:grid-cols-3">{whatWeDoItems.map(([number,en,title,tags,color,points,href])=><Link href={href} key={number} className="group flex min-h-[15rem] flex-col border border-ink bg-white p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7" style={{ boxShadow: `6px 6px 0 ${tone[color].chip}` }}>
   <div className="flex items-center justify-between border-b border-ink/10 pb-5">
    <span className="grid h-11 w-11 place-items-center rounded-full border border-ink bg-white font-display text-[10px] font-black">{number}</span>
    <small className="font-display text-[9px] font-bold tracking-[.14em] text-ink-soft">{en}</small>
   </div>
   <div className="pt-6">
    <strong className="block text-xl font-black md:text-2xl">{title}</strong>
    <span className="mt-3 block text-xs leading-6 text-ink-soft">{tags}</span>
   </div>
   <div className="mt-auto flex items-end justify-between gap-5 pt-7">
    <span className="flex flex-wrap gap-x-4 gap-y-2">{points.map(point=><span key={point} className="flex items-center gap-2 text-[10px] font-bold"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: tone[color].dot }} aria-hidden />{point}</span>)}</span>
    <span className="grid h-10 w-10 shrink-0 place-items-center border border-ink bg-white text-sm transition-transform group-hover:translate-x-1" aria-hidden>→</span>
   </div>
  </Link>)}</div>
 </div></section>

 <section className="py-20 md:py-28" style={{ backgroundColor: tone.mint.band }}><div className="page-shell">
  <div className="mx-auto max-w-3xl text-center">
   <p className="flex items-center justify-center gap-2.5 font-display text-[10px] font-bold uppercase tracking-[.24em] text-ink-soft"><span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: tone.mint.dot }} aria-hidden />Feature — AI consulting</p>
   <h2 className="mt-5 text-[1.9rem] font-black leading-[1.45] tracking-[-.03em] sm:text-4xl md:text-5xl">AIを、<br className="sm:hidden" />現場で使える力に</h2>
   <p className="mx-auto mt-6 max-w-2xl text-xs leading-7 text-ink-soft md:text-sm md:leading-8">研修で使い方を覚え、伴走で社内に定着させ、裏側の仕組みづくりまで。情シスやSEがいない会社でも、AIを「自分たちの道具」にできるよう支援します。</p>
  </div>
  <ol className="relative mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
   <span className="absolute left-[16%] right-[16%] top-1/2 hidden border-t-2 border-dashed border-ink/25 md:block" aria-hidden />
   {featureSteps.map(([title, text, step, color], index) => <li key={title} className="relative flex flex-col gap-2.5 border border-ink bg-white p-6 md:p-7" style={{ boxShadow: `5px 5px 0 ${tone[color].chip}` }}>
    <span className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-full font-display text-base font-black" style={{ backgroundColor: tone[color].chip }}>{index + 1}</span><span className="font-display text-[10px] font-black tracking-[.14em] text-ink-soft">{step}</span></span>
    <span className="text-xl font-black md:text-[22px]">{title}</span>
    <span className="text-xs leading-6 text-ink-soft">{text}</span>
   </li>)}
  </ol>
  <div className="mt-10 flex flex-col items-center gap-3.5">
   <p className="text-xs font-black text-ink-soft">たとえば、こんな業務が変わります</p>
   <ul className="flex flex-wrap justify-center gap-2.5">{featureUseCases.map(item => <li key={item} className="border border-ink bg-white px-4 py-2 text-xs font-bold">{item}</li>)}</ul>
  </div>
  <div className="mt-11 flex flex-wrap justify-center gap-4">
   <Link href="/services/ai" className="group inline-flex min-h-[3.25rem] items-center gap-8 border border-ink bg-ink px-5 text-xs font-black text-white transition-transform hover:-translate-y-0.5" style={{ boxShadow: `5px 5px 0 ${tone.mint.chip}` }}><span>AIコンサルティングを見る</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>
   <Link href="/diagnosis" className="group inline-flex min-h-[3.25rem] items-center gap-8 border border-ink bg-white px-5 text-xs font-black transition-transform hover:-translate-y-0.5" style={{ boxShadow: `5px 5px 0 ${tone.butter.chip}` }}><span>AI診断で、うちの使い方を知る</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>
  </div>
 </div></section>

 <OurProductsShowcase/>

 <section className="bg-white py-24 md:py-32"><div className="page-shell grid gap-10 lg:grid-cols-[.55fr_1fr]"><SectionHead number="05" label="Latest updates" color="butter" title="お知らせ" /><div className="grid gap-3">{newsItems.map(([date,category,title],index)=><article key={date} className="grid gap-2 rounded-[1.5rem] px-6 py-5 sm:grid-cols-[6.5rem_6rem_1fr] sm:items-center" style={{ backgroundColor: tone[newsTones[index % newsTones.length]].band }}><time className="font-display text-xs font-black">{date}</time><span className="w-fit rounded-full bg-white px-2.5 py-1 font-display text-[9px] font-bold tracking-[.14em]">{category}</span><span className="text-sm font-bold leading-6">{title}</span></article>)}</div></div></section>

 <section className="py-24 md:py-32" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell">
  <SectionHead number="06" label="Selected projects" color="lilac" title="支援事例" note="「こんなこと頼めるのかな？」の参考に。実際にいただいたご相談と、MOGCIAが行ったことです。" action={<Link href="/works" className="group inline-flex min-h-12 self-start items-center gap-8 border border-ink bg-white px-5 text-xs font-black shadow-[5px_5px_0_#E4DAF8] transition-transform hover:-translate-y-0.5 md:self-auto"><span>Worksをもっと見る</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>} />
  <div className="mt-10 grid gap-4 lg:grid-cols-3">{stories.slice(0, 3).map((story,index)=>{const t=workTones[index % workTones.length];return <Link href={`/works/${story.slug}`} key={story.client} className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white">
    <div className="relative m-3 mb-0 aspect-[4/3] overflow-hidden rounded-[1.1rem]" style={{ backgroundColor: tone[t].band }}><Image src={story.image} alt={`${story.product}の事例イメージ`} fill sizes="(max-width: 1023px) 100vw, 33vw" className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"/><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-bold">{story.client}</span></div>
    <div className="flex flex-1 flex-col p-6"><span className="w-fit rounded-full px-2.5 py-1 text-[10px] font-bold" style={{ backgroundColor: tone[t].chip }}>{story.product}</span><h3 className="mt-4 text-lg font-black leading-8">「{story.problem}」</h3><p className="mt-3 line-clamp-3 whitespace-pre-line text-xs leading-7 text-ink-soft">{story.answer}</p><span className="mt-auto inline-flex min-h-10 w-fit items-center gap-5 border border-ink bg-white px-4 text-xs font-black" style={{ boxShadow: `4px 4px 0 ${tone[t].chip}` }}>事例を見る <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span></span></div>
  </Link>})}</div>
 </div></section>

 <section className="bg-white py-24 md:py-32"><div className="page-shell">
  <div className="grid overflow-hidden rounded-[1.5rem] bg-[#eaf3f8] lg:grid-cols-2"><div className="relative flex flex-col p-7 sm:p-10 lg:min-h-[32rem] lg:justify-center lg:p-12 xl:p-14"><div className="relative flex items-center gap-2.5"><span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#6FA8DC]" aria-hidden/><SectionLabel number="07">About MOGCIA</SectionLabel></div><h2 className="relative mt-6 text-[1.7rem] font-black leading-[1.45] tracking-[-.02em] sm:text-3xl lg:text-[2.15rem] lg:leading-[1.4] xl:text-[2.5rem]"><span className="whitespace-nowrap">アイデアを形にし</span><br/><span className="whitespace-nowrap">成果までいっしょに</span></h2><div className="relative mt-7 max-w-xl space-y-4 text-sm leading-8 text-ink-soft md:text-base"><p>MOGCIAは、福岡・天神を拠点に、企業の「やりたいこと」を形にするITパートナーです。</p><p>Web・SNS・AI・システム開発まで、課題に合う方法を組み合わせ、企画から制作、運用、改善まで一貫して伴走します。</p></div><div className="relative mt-7 flex flex-wrap gap-4 border-t border-ink/15 pt-5">{['AI','SNS','Web','SaaS'].map(item=><span key={item} className="font-display text-[9px] font-bold tracking-[.12em]">{item}</span>)}</div><Link href="/company" className="group relative mt-8 inline-flex min-h-12 w-fit items-center gap-8 border border-ink bg-white px-5 text-xs font-black shadow-[5px_5px_0_#FBD9E2] transition-transform hover:-translate-y-0.5"><span>MOGCIAについて</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link></div>
   <div className="relative m-3 min-h-[28rem] overflow-hidden rounded-[1.1rem] bg-white sm:min-h-[30rem] lg:ml-0 lg:min-h-0">
    <Image src="/hero-visual-r.png" alt="光を見上げる人物とカラフルなオブジェ" fill sizes="100vw" className="scale-[1.12] object-cover object-[center_48%] md:hidden" />
    <Image src="/hero-visual.png" alt="光を見上げる人物とカラフルなオブジェ" fill sizes="(max-width: 1023px) 100vw, 50vw" className="hidden scale-[1.18] object-cover object-[72%_42%] md:block" />
    <div className="pointer-events-none absolute inset-0 bg-[#eaf3f8]/10" aria-hidden />
    <div className="absolute left-[7%] top-[7%] max-w-[62%]">
     <p className="font-display text-[8px] font-bold uppercase tracking-[.2em] text-ink-soft">MOGCIA / Creative &amp; Technology</p>
     <p className="mt-4 text-[2.65rem] font-medium leading-[.92] tracking-[-.04em] text-ink sm:text-[3.6rem] lg:text-[3.2rem] xl:text-[3.5rem] [font-family:'Bradley_Hand','Segoe_Print','Chalkboard_SE','Klee',cursive]">Good ideas,<br/>made to last.</p>
     <p className="mt-5 max-w-[15rem] text-[10px] font-bold leading-5 text-ink-soft sm:text-xs sm:leading-6">つくるだけで終わらせない。<br/>動かし、改善し、成果へ育てていく。</p>
    </div>
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-white/95 via-white/55 to-transparent px-6 pb-6 pt-24 sm:px-8 sm:pb-8">
     <p className="font-display text-[9px] font-bold uppercase tracking-[.2em] text-ink-soft">Make · Operate · Grow</p>
     <p className="text-right text-sm font-black leading-6">やりたいことを、<br/>続く仕組みに。</p>
    </div>
   </div>
 </div>
 </div></section>

 <div className="coffee-transition-marquee overflow-hidden border-y border-[#7f2027]/20 bg-[#f8ede5] py-4 text-[#7f2027] md:py-5" aria-label="MOGCIA Coffee">
  <div className="coffee-transition-track flex w-max">{[0,1].map(loop=><div key={loop} aria-hidden={loop===1} className="flex shrink-0 items-center">{['MOGCIA COFFEE','A SMALL BREAK','BREW YOUR DAY','FROM FUKUOKA'].map(item=><span key={item} className="flex items-center whitespace-nowrap font-display text-xs font-black tracking-[.16em] md:text-sm"><span className="px-8 md:px-12">{item}</span><span className="text-lg text-[#c43a43]" aria-hidden>●</span></span>)}</div>)}</div>
 </div>

 <section className="bg-white py-14 md:py-20"><div className="page-shell">
  <div className="grid overflow-hidden rounded-[1.75rem] border border-ink bg-white shadow-[9px_9px_0_#F6C6B1] lg:grid-cols-[.82fr_1.18fr]">
   <div className="relative flex flex-col justify-center overflow-hidden bg-[#7f2027] p-7 text-white sm:p-10 lg:p-12">
    <span className="pointer-events-none absolute -bottom-10 -left-4 font-display text-[7rem] font-black leading-none text-white/[.06]" aria-hidden>COFFEE</span>
    <p className="relative flex items-center gap-2.5 font-display text-[10px] font-bold uppercase tracking-[.18em]"><span className="h-2.5 w-2.5 rounded-full bg-[#F2A365]" aria-hidden/>08 — Online shop</p>
    <h2 className="relative mt-6 text-3xl font-black leading-[1.45] tracking-[-.035em] md:text-4xl">いつもの時間に<br/>MOGCIA Coffeeを</h2>
    <p className="relative mt-5 max-w-md text-xs leading-7 text-white/70 md:text-sm">気持ちを切り替えたいときも、少し立ち止まりたいときも。現在のラインアップはオンラインショップでご案内しています。</p>
    <div className="relative mt-8 flex flex-wrap gap-5"><a href="https://mogcia.official.ec/" target="_blank" rel="noreferrer" className="group inline-flex min-h-12 items-center gap-8 border border-white bg-white px-5 text-xs font-black text-ink shadow-[5px_5px_0_#F2A365] transition-transform hover:-translate-y-0.5"><span>ショップを見る</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>↗</span></a><Link href="/coffee" className="group inline-flex min-h-12 items-center gap-8 border border-white bg-white px-5 text-xs font-black text-ink shadow-[5px_5px_0_#F2A365] transition-transform hover:-translate-y-0.5"><span>Coffeeについて</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link></div>
   </div>
   <div className="relative min-h-[20rem] overflow-hidden lg:min-h-[32rem]"><Image src="/coffee/coffee-lineup.jpg" alt="MOGCIA Coffeeの商品ラインアップ" fill sizes="(max-width: 1023px) 100vw, 60vw" className="object-cover transition-transform duration-700 hover:scale-[1.025]"/></div>
  </div>
 </div></section>

 <section className="py-24 md:py-32" style={{ backgroundColor: tone.butter.band }}><div className="page-shell">
  <SectionHead number="09" label="Ideas & Tips" color="butter" title="ガイド" note="AIやSNS、Webのことを、できるだけやさしく。仕事ですぐに試せる考え方をまとめています。" action={<Link href="/guide" className="group inline-flex min-h-12 self-start items-center gap-8 border border-ink bg-white px-5 text-xs font-black shadow-[5px_5px_0_#FCEBB0] transition-transform hover:-translate-y-0.5 md:self-auto"><span>ガイドをすべて見る</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>} />
  <div className="mt-10 grid gap-4 lg:grid-cols-3">{homeGuides.map((guide, index)=><Link href={`/guide/${guide.slug}`} key={guide.slug} className="group flex flex-col rounded-[1.5rem] bg-white p-6 md:p-7">
   <span className="flex items-center gap-2 text-[10px] font-bold"><span className="grid h-9 w-9 place-items-center rounded-full font-display text-[11px] font-black" style={{ backgroundColor: tone[guideTones[index % guideTones.length]].chip }}>0{index + 1}</span><span className="rounded-full px-2.5 py-1" style={{ backgroundColor: tone[guideTones[index % guideTones.length]].band }}>{guide.category}</span><span className="text-ink-soft">約{guide.minutes}分</span></span>
   <strong className="mt-5 block text-lg font-black leading-8">{guide.title}</strong>
   <span className="mt-2 block text-xs leading-6 text-ink-soft">{guide.body}</span>
   <span className="mt-auto pt-5 text-xs font-bold">読んでみる <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
  </Link>)}</div>
 </div></section>

 <SoftContact body="まだ、はっきりとした依頼内容がなくても大丈夫です。まずは、今感じていることを聞かせてください。" />
 <Footer/>
 </main>}
