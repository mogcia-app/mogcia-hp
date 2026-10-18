import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { SectionHead, SectionLabel, tone } from '@/components/PageFrame'

export const metadata = {
  title: 'MOGCIA Coffee | MOGCIA',
  description: '商品企画からブランド、パッケージ、撮影、EC、発信まで。MOGCIAが自分たちで育てるコーヒーブランドです',
  alternates: { canonical: '/coffee' },
}

const EC = 'https://mogcia.official.ec/'

const process = [
  ['01', 'Concept', '届けたい時間から考える', '商品をつくることからではなく、誰にどんな時間を届けたいかを考えるところから始めました。'],
  ['02', 'Branding', '小さな世界観を整える', '名前、ロゴ、色、パッケージ。ひとつずつの接点に、MOGCIA Coffeeらしさを通しています。'],
  ['03', 'Creative', '自分たちの手で伝える', '商品写真や販売ページ、日々の発信まで自社で制作。つくった後の見せ方も大切にしています。'],
  ['04', 'Operation', '売りながら、育てていく', '実際に届け、反応を受け取り、少しずつ改善する。ブランド運営そのものを実践しています。'],
]

export default function Coffee() {
  return <main className="overflow-hidden bg-[#fbfaf8] text-ink">
    <section className="page-shell pb-20 pt-12 md:pb-28 md:pt-20">
      <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　MOGCIA Coffee</p>
      <div className="mt-12 grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-12">
        <div className="relative z-10 pb-2">
          <p className="font-display text-[10px] font-bold uppercase tracking-[.24em] text-ink-soft">MOGCIA / Side project</p>
          <h1 className="mt-5 whitespace-nowrap font-display text-[clamp(3.1rem,16vw,4.2rem)] font-black leading-[.84] tracking-[-.075em] sm:text-[6rem] lg:text-[7.2rem]">Coffee<span className="text-[#c91f2c]">.</span></h1>
          <h2 className="mt-8 text-2xl font-black leading-[1.55] tracking-[-.03em] md:text-3xl">今日の一杯を、<br />明日のきっかけに。</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-ink-soft">MOGCIA Coffeeは、企画して、つくって、届けて、育てることを、自分たち自身で実践するために生まれた小さなコーヒーブランドです。</p>
          <a href={EC} target="_blank" rel="noreferrer" className="button mt-7 bg-[#7f2027] text-xs text-white hover:bg-[#681a20]">オンラインショップを見る ↗</a>
        </div>
        <div className="relative">
          <span className="absolute -right-5 -top-8 z-10 hidden font-display text-[6.5rem] font-black leading-none text-[#f3d6d9] lg:block">01</span>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white"><Image src="/coffee/coffee-lineup.jpg" alt="MOGCIA Coffeeの商品ラインアップと白い猫" width={1170} height={782} priority className="aspect-[3/2] h-full w-full object-cover" /></div>
          <p className="mt-3 text-right font-display text-[9px] font-bold uppercase tracking-[.18em] text-ink-soft">Made, operated and grown by MOGCIA</p>
        </div>
      </div>
    </section>

    <section id="story" className="page-shell scroll-mt-24 py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-20">
        <div className="relative">
          <div className="rounded-[1.75rem] p-3" style={{ backgroundColor: tone.peach.band }}><Image src="/coffee/coffee-cat-sachets.jpg" alt="MOGCIA Coffeeのドリップバッグと白い猫" width={1102} height={1650} className="aspect-[4/5] w-full rounded-[1.25rem] object-cover" /></div>
          <div className="absolute -bottom-6 -right-3 rounded-full bg-[#c91f2c] px-5 py-4 text-center text-[9px] font-black leading-4 tracking-[.08em] text-white md:-right-7">MAKE<br />OPERATE<br />GROW</div>
        </div>
        <div>
          <SectionLabel number="01" label="Our story" color="peach" />
          <h2 className="mt-6 text-3xl font-black leading-[1.5] tracking-[-.035em] md:text-4xl">つくるだけでは、<br />わからないことがある。</h2>
          <div className="mt-7 max-w-xl space-y-5 text-sm leading-8 text-ink-soft">
            <p>私たちは普段、企業のアイデアを形にし、運用と改善まで一緒に進めています。だからこそ、自分たちもひとつのブランドを持ち、同じ目線で悩み、試し、育ててみたいと考えました。</p>
            <p>商品企画、ロゴ、パッケージ、写真、オンラインショップ、SNS。MOGCIA Coffeeは、ブランドができていく一連の流れを、私たち自身の手で確かめるプロジェクトでもあります。</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">{['Product', 'Brand', 'Package', 'Photo', 'EC', 'SNS'].map((item) => <span key={item} className="rounded-full border border-ink/15 bg-white px-4 py-2 font-display text-[10px] font-bold tracking-[.08em]">{item}</span>)}</div>
        </div>
      </div>
    </section>

    <section className="py-24 md:py-32" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell">
      <SectionHead number="02" label="The cup" color="lilac" title="気軽な一杯を、きちんと届ける" note="淹れる時間も、飲む時間も。日常の中に小さな余白をつくるコーヒーです" />
      <div className="mt-12 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
        <figure className="overflow-hidden rounded-[1.75rem] bg-white"><Image src="/coffee/coffee-hot-iced.jpg" alt="MOGCIA Coffeeとホットコーヒー、アイスコーヒー" width={1170} height={782} className="aspect-[3/2] h-full w-full object-cover" /></figure>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          <figure className="overflow-hidden rounded-[1.75rem] bg-white"><Image src="/coffee/coffee-dripbag.png" alt="MOGCIA Coffeeのドリップバッグ" width={1080} height={1080} className="aspect-square h-full w-full object-cover" /></figure>
          <figure className="overflow-hidden rounded-[1.75rem] bg-white"><Image src="/coffee/coffee-beans.png" alt="MOGCIA Coffeeのパッケージとコーヒー豆" width={1080} height={1080} className="aspect-square h-full w-full object-cover" /></figure>
        </div>
      </div>
    </div></section>

    <section id="process" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="03" label="Behind the brand" color="sky" title="一杯のうしろにある、ブランドづくり" note="MOGCIA Coffeeで実践している、つくる・まわす・育てる流れ" />
      <div className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink/10 md:grid-cols-2">
        {process.map(([no, en, title, body], index) => <article key={no} className="bg-white p-7 md:p-9">
          <div className="flex items-center justify-between"><span className="font-display text-xs font-black text-ink-soft">{no}</span><span className={`h-3 w-3 rounded-full ${['bg-[#ef7297]', 'bg-[#c91f2c]', 'bg-[#eedc35]', 'bg-[#92bd57]'][index]}`} /></div>
          <p className="mt-8 font-display text-[10px] font-bold uppercase tracking-[.18em] text-ink-soft">{en}</p>
          <h3 className="mt-2 text-xl font-black">{title}</h3>
          <p className="mt-4 max-w-md text-xs leading-6 text-ink-soft">{body}</p>
        </article>)}
      </div>
    </section>

    <section className="page-shell pb-24 md:pb-32">
      <div className="grid overflow-hidden rounded-[2rem] bg-[#7f2027] text-white lg:grid-cols-[.85fr_1.15fr]">
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
          <p className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[.18em] text-white"><span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: tone.peach.dot }} aria-hidden />04 — Online shop</p>
          <h2 className="mt-6 text-3xl font-black leading-[1.45] tracking-[-.035em]">いつもの時間に、<br />MOGCIA Coffeeを。</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">現在のラインアップや販売状況は、オンラインショップでご案内しています。</p>
          <a href={EC} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-4 rounded-full bg-white px-6 py-4 text-xs font-black text-ink transition hover:-translate-y-0.5">ショップを見る <span aria-hidden>↗</span></a>
        </div>
        <Image src="/coffee/coffee-lineup.jpg" alt="MOGCIA Coffeeの商品ラインアップ" width={1170} height={782} className="min-h-[300px] h-full w-full object-cover" />
      </div>
    </section>
    <Footer />
  </main>
}
