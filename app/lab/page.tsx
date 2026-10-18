import Footer from '@/components/Footer'
import { PageHeader, SectionHead, SoftContact, tone, type Tone } from '@/components/PageFrame'
import { notFound } from 'next/navigation'

// LABページは公開準備が整うまで一時的に非公開。
const LAB_PAGE_ENABLED = false

export const metadata = {
  title: 'Lab | MOGCIA',
  description: '動画・電話・音声・セキュリティの領域で、MOGCIAが開発しているプロダクトをご紹介します。',
}

type Product = {
  no: string
  name: string
  category: string
  catchcopy: string
  body: string
  status: string
  color: Tone
  visual: 'video' | 'phone' | 'voice' | 'security'
}

const products: Product[] = [
  {
    no: '01', name: 'Viocom', category: 'AI VIDEO EDITOR',
    catchcopy: '方言も、伝わる動画へ。',
    body: '動画編集の手間を減らし、もっと気軽に発信できるように。特に方言を含む音声にも対応した、AI動画編集ツールを開発しています。',
    status: '開発中', color: 'pink', visual: 'video',
  },
  {
    no: '02', name: 'tellmo.', category: 'AI PHONE ASSISTANT',
    catchcopy: '電話の「最初」を、AIに。',
    body: 'かかってきた電話にAIが一次対応。用件を聞くだけでなく、予約受付などの日常的な電話業務を支えるプロダクトです。',
    status: '開発中', color: 'sky', visual: 'phone',
  },
  {
    no: '03', name: 'viomo', category: 'VOICE TO TEXT',
    catchcopy: '録った声を、使える言葉に。',
    body: '録音した音声を、自動で読みやすいテキストへ。会話や現場の声を、記録・共有・活用しやすくする文字起こしツールです。',
    status: '開発中', color: 'mint', visual: 'voice',
  },
  {
    no: '04', name: '名称未定', category: 'SECURITY TOOL',
    catchcopy: '安心を、もっと身近なものに。',
    body: '専門的で難しくなりがちなセキュリティを、日々の仕事の中で扱いやすくするための新しいツールを構想・開発しています。',
    status: '企画・開発中', color: 'lilac', visual: 'security',
  },
]

const steps: [string, string, string, Tone][] = [
  ['01', '見つける', '現場の声や、日々の仕事にある小さな不便から、解くべき課題を見つけます', 'butter'],
  ['02', 'つくる', 'まずは小さな形にして、触って試せるプロトタイプをつくります', 'sky'],
  ['03', '試す', '実際の現場で使いながら、必要な機能や使いやすさを確かめます', 'pink'],
  ['04', '育てる', 'いただいた声をもとに改善を重ね、長く使えるプロダクトへ育てます', 'mint'],
]

function ProductVisual({ type, color, name }: { type: Product['visual']; color: Tone; name: string }) {
  const lineColor = tone[color].dot

  return <div className="relative grid min-h-64 place-items-center overflow-hidden rounded-[1.25rem] bg-white p-8 md:min-h-72">
    <span className="absolute left-5 top-5 text-[9px] font-bold tracking-[.18em] text-ink-soft">IN DEVELOPMENT</span>
    {type === 'video' && <div className="w-full max-w-xs">
      <div className="aspect-video rounded-2xl p-3" style={{ backgroundColor: tone[color].chip }}><div className="grid h-full place-items-center rounded-xl bg-white"><span className="grid h-14 w-14 place-items-center rounded-full text-xl text-white" style={{ backgroundColor: lineColor }}>▶</span></div></div>
      <div className="mt-4 flex gap-2">{[1, 2, 3, 4].map((item) => <span key={item} className="h-2 flex-1 rounded-full" style={{ backgroundColor: item === 3 ? lineColor : tone[color].chip }} />)}</div>
    </div>}
    {type === 'phone' && <div className="relative grid h-44 w-44 place-items-center rounded-full" style={{ backgroundColor: tone[color].chip }}>
      <span className="text-5xl" aria-hidden>☎</span>
      <span className="absolute -right-5 top-7 rounded-full bg-white px-4 py-2 text-[10px] font-black shadow-sm">AI</span>
      <span className="absolute -left-8 bottom-8 rounded-full bg-white px-4 py-2 text-[10px] font-bold shadow-sm">予約受付</span>
    </div>}
    {type === 'voice' && <div className="flex h-40 w-full max-w-sm items-center justify-center gap-1.5" aria-label="音声の波形">
      {[28, 54, 82, 42, 110, 72, 130, 92, 52, 116, 74, 38, 64, 30].map((height, index) => <span key={index} className="w-2 rounded-full" style={{ height, backgroundColor: index % 3 === 0 ? lineColor : tone[color].chip }} />)}
    </div>}
    {type === 'security' && <div className="relative grid h-48 w-44 place-items-center">
      <div className="absolute inset-x-0 top-0 h-44 rounded-[50%_50%_44%_44%/22%_22%_70%_70%] border-[3px]" style={{ borderColor: lineColor, backgroundColor: tone[color].chip }} />
      <div className="relative grid h-16 w-16 place-items-center rounded-full bg-white text-2xl shadow-sm" aria-hidden>✓</div>
    </div>}
    <span className="absolute bottom-5 right-5 font-display text-2xl font-black tracking-[-.05em]" style={{ color: lineColor }}>{name === '名称未定' ? 'COMING SOON' : name}</span>
  </div>
}

export default function Lab() {
  if (!LAB_PAGE_ENABLED) notFound()

  return <main className="bg-white text-ink">
    <PageHeader color="mint" diagonalAccent
      crumbs={[["Lab"]]}
      title="Lab"
      lead={<>まだ名前のない便利を、<br />プロダクトに。</>}
      body="MOGCIA LABは、現場で見つけた課題を新しいプロダクトへ育てる場所です。動画・電話・音声・セキュリティの領域で、4つのプロダクトを開発しています。"
    />

    <section id="products" className="relative scroll-mt-24 overflow-hidden pb-24 pt-24 md:pb-32 md:pt-32">
      <span className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#FFF6D9]" aria-hidden />
      <span className="pointer-events-none absolute -right-32 top-[38rem] h-96 w-96 rounded-full bg-[#E9F6F1]" aria-hidden />
      <div className="page-shell relative">
      <SectionHead number="01" label="In development" color="butter" title="開発中のプロダクト" note="まだ開発途中だからこそ、実際に使う人の声を大切にしながら、一つずつ形にしています。" />

      <div className="relative mt-12 min-h-[22rem] overflow-hidden rounded-[2rem] bg-ink p-8 text-white md:p-12 lg:grid lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-14">
        <span className="absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/15" aria-hidden />
        <span className="absolute -right-8 -top-8 h-52 w-52 rounded-full border border-white/15" aria-hidden />
        <span className="absolute bottom-10 left-[44%] hidden h-20 w-20 rounded-full bg-[#FCEBB0] lg:block" aria-hidden />
        <div className="relative">
          <p className="text-[10px] font-bold tracking-[.22em] text-white/55">MOGCIA LAB / 2026</p>
          <div className="mt-5 flex items-end gap-4">
            <strong className="font-display text-[8rem] font-black leading-[.75] tracking-[-.08em] sm:text-[10rem]">04</strong>
            <p className="pb-1 text-xs font-black leading-5 tracking-[.16em]">PROJECTS<br />IN DEVELOPMENT</p>
          </div>
          <p className="mt-8 max-w-sm text-xs leading-7 text-white/65">まだ完成していない。だから、もっと良くできる。現場の声から生まれた4つのアイデアを、毎日少しずつ前へ進めています。</p>
        </div>
        <div className="relative mt-12 grid grid-cols-2 gap-3 lg:mt-0">
          {products.map((product) => <div key={product.no} className="flex min-h-24 flex-col justify-between rounded-2xl p-4 text-ink" style={{ backgroundColor: tone[product.color].chip }}>
            <span className="text-[9px] font-bold tracking-[.18em] opacity-55">{product.no} / {product.category}</span>
            <span className="font-display text-xl font-black tracking-[-.04em]">{product.name === '名称未定' ? 'NEW TOOL' : product.name}</span>
          </div>)}
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {products.map((product) => <article key={product.no} className="overflow-hidden rounded-[1.75rem] p-3" style={{ backgroundColor: tone[product.color].band }}>
          <ProductVisual type={product.visual} color={product.color} name={product.name} />
          <div className="p-5 pb-6 pt-7 md:p-7 md:pb-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div><p className="text-[9px] font-bold tracking-[.18em] text-ink-soft">{product.no} — {product.category}</p><h3 className="mt-2 font-display text-4xl font-black tracking-[-.05em]">{product.name}</h3></div>
              <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-bold"><span className="h-2 w-2 rounded-full" style={{ backgroundColor: tone[product.color].dot }} />{product.status}</span>
            </div>
            <p className="mt-6 text-lg font-black">{product.catchcopy}</p>
            <p className="mt-3 max-w-xl text-xs leading-7 text-ink-soft">{product.body}</p>
          </div>
        </article>)}
      </div>
      </div>
    </section>

    <section id="process" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.sky.band }}><div className="page-shell">
      <SectionHead number="02" label="How we build" color="sky" title="プロダクトの育て方" note="完成を決めつけるのではなく、使う人と一緒に試し、学びながら育てていきます。" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([no, title, body, color], index) => <article key={no} className="relative rounded-[1.5rem] bg-white p-7">
        <p className="grid h-14 w-14 place-items-center rounded-full font-display text-lg font-black" style={{ backgroundColor: tone[color].chip }}>{no}</p>
        <h3 className="mt-5 text-xl font-black">{title}</h3>
        <p className="mt-2.5 text-xs leading-7 text-ink-soft">{body}</p>
        {index < steps.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 place-items-center rounded-full bg-ink text-[10px] text-white lg:grid" aria-hidden>→</span>}
      </article>)}</div>
    </div></section>

    <SoftContact body="開発中プロダクトのテスト利用や、自社の課題に合わせたご相談もお気軽にどうぞ" />
    <Footer />
  </main>
}
