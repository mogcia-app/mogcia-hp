import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { PageHeader, SectionHead, SectionLabel, SoftContact, tone, type Tone } from '@/components/PageFrame'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata('会社情報 | 株式会社MOGCIA', '/company')

const nameItems: [string, string, string, string, Tone][] = [
  ['M', 'Make', 'つくる', '課題に合わせて、プロダクトやサイト、仕組みをつくる', 'sky'],
  ['O', 'Operate', 'まわす', '現場で使われるように、運用まで一緒にまわす', 'pink'],
  ['G', 'Grow', 'そだてる', '反応や声をもとに改善し、事業とともにそだてる', 'lilac'],
  ['cía', 'compañía', '会社', 'スペイン語で「会社」の略。この3つを続けていく会社であること', 'peach'],
]

const thinkingItems: [string, string, string, string, Tone][] = [
  ['01', 'STRATEGY', '事業の流れから考える', '単発の施策ではなく、集客・体験・運用がつながる設計を大切にしています', 'sky'],
  ['02', 'EXPERIENCE', '使う人の体験を整える', 'お客さま、スタッフ、管理者。それぞれが迷わず使える接点をつくります', 'pink'],
  ['03', 'OPERATION', '続く運用に落とし込む', '導入して終わりではなく、改善し続けられる仕組みとして設計します', 'butter'],
]

const members: [string, string, Tone][] = [
  ['ディレクター', 'まだ言葉になっていない想いまで整理し、プロジェクトの進む道筋をつくります。', 'sky'],
  ['エンジニア', '使う人にとって分かりやすく、長く活用できる仕組みを丁寧につくります。', 'lilac'],
  ['Webデザイナー', '伝えたい魅力を整理し、見る人の心と行動につながるデザインを考えます。', 'pink'],
  ['SNS運用', '日々の反応を読み取りながら、無理なく続き、届く発信へ育てていきます。', 'mint'],
]

const companyProfile = [
  ['会社名', '株式会社MOGCIA（モグシア）'],
  ['代表取締役', '堂本 寛人'],
  ['所在地', '〒810-0001\n福岡県福岡市中央区天神4-6-28 いちご天神ノースビル7階'],
  ['設立', '2023年11月'],
  ['資本金', '300万円'],
  ['事業内容', 'AIソリューション開発\nシステム企画・開発・運営\nWeb制作・デジタルマーケティング支援'],
  ['連絡先', 'TEL 092-517-9804 ／ info@mogcia.jp'],
  ['営業時間', '平日 10:00–17:00（土日祝除く）'],
]

const stripe = 'bg-[repeating-linear-gradient(135deg,rgba(30,41,59,.035)_0_8px,transparent_8px_16px)]'

function Photo({ label, color, className = '' }: { label: string; color: string; className?: string }) {
  return <div className={`grid place-items-center ${stripe} ${className}`} style={{ backgroundColor: color }}><span className="whitespace-pre-line text-center text-[11px] font-bold text-ink/45">{label}</span></div>
}

export default function Company() {
  return <main className="bg-white text-ink">
    <PageHeader crumbs={[['MOGCIAについて']]} title="Company" diagonalAccent color="butter" lead={<>つくるだけじゃなく、<br />続く流れまで</>} body="MOGCIAは、AI・Web・SNS・システム開発を通じて、企業のやりたいことを形にし、運用と改善まで支える会社です。" />

    <section id="who" className="scroll-mt-24 bg-[#f7f7f7] py-24 md:py-32"><div className="page-shell">
      <div className="grid items-center gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div>
          <SectionLabel number="01" label="Who we are" color="sky" />
          <h2 className="mt-5 text-3xl font-black"><span className="font-display">MOGCIA</span>とは</h2>
          <p className="mt-8 text-xl font-black leading-9 md:text-2xl md:leading-[1.8]">AI・SNS・Web・SaaSを組み合わせ、企業の集客や業務改善を支える会社です</p>
          <p className="mt-6 text-sm leading-8 text-ink-soft">必要なものをつくるだけでなく、使われ続ける流れまで整えることで、事業の中に自然に残る仕組みをつくります。自社プロダクトと、制作・運用の伴走支援。その両方を持っていることが、私たちの強みです。</p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white sm:aspect-[4/3] md:aspect-[3/2]">
          <Image src="/hero-visual-r.png" alt="光を見上げる人物とカラフルなオブジェ" fill sizes="100vw" className="scale-[1.08] object-cover object-[center_48%] md:hidden" />
          <Image src="/hero-visual.png" alt="光を見上げる人物とカラフルなオブジェ" fill sizes="(max-width: 1023px) 100vw, 58vw" className="hidden scale-[1.08] object-cover object-[72%_42%] md:block" />
          <div className="pointer-events-none absolute inset-0 bg-[#eaf3f8]/10" aria-hidden />
          <div className="absolute left-[7%] top-[7%] max-w-[62%]">
            <p className="font-display text-[7px] font-bold uppercase tracking-[.2em] text-ink-soft sm:text-[8px]">MOGCIA / Creative &amp; Technology</p>
            <p className="mt-3 text-[2.3rem] font-medium leading-[.92] tracking-[-.04em] text-ink sm:text-[3rem] md:text-[2.7rem] lg:text-[3.2rem] [font-family:'Bradley_Hand','Segoe_Print','Chalkboard_SE','Klee',cursive]">Good ideas,<br />made to last.</p>
            <p className="mt-4 max-w-[15rem] text-[9px] font-bold leading-5 text-ink-soft sm:text-[10px]">つくるだけで終わらせない。<br />動かし、改善し、成果へ育てていく。</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-white/95 via-white/55 to-transparent px-5 pb-5 pt-20 sm:px-7 sm:pb-6">
            <p className="font-display text-[8px] font-bold uppercase tracking-[.2em] text-ink-soft">Make · Operate · Grow</p>
            <p className="text-right text-xs font-black leading-5 sm:text-sm sm:leading-6">やりたいことを、<br />続く仕組みに。</p>
          </div>
        </div>
      </div>
      <dl className="mt-10 grid overflow-hidden rounded-[1.25rem] bg-white sm:grid-cols-3">
        {[['Based in', '福岡・天神'], ['Founded', '2023年11月'], ['What we do', 'AI・Web・SNS・SaaS']].map(([label, value], index) => <div key={label} className={`px-6 py-6 md:px-8 ${index > 0 ? 'border-t border-ink/10 sm:border-l sm:border-t-0' : ''}`}><dt className="font-display text-[9px] font-bold uppercase tracking-[.16em] text-ink-soft">{label}</dt><dd className="mt-2 text-sm font-black">{value}</dd></div>)}
      </dl>
    </div></section>

    <section id="name" className="scroll-mt-24 bg-[#fffcf5] py-24 md:py-32"><div className="page-shell">
      <SectionHead number="02" label="Our name" color="butter" title="社名にこめた想い" note="3つの姿勢と、スペイン語で「会社」を表す言葉を組み合わせた名前です" />

      <div className="mt-10 border border-ink bg-white px-6 py-7 sm:px-8 sm:py-8" style={{ boxShadow: `8px 8px 0 ${tone.butter.chip}` }}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 font-display font-black tracking-[-.05em] sm:gap-x-5">
          <span className="text-4xl sm:text-5xl">M</span><span className="text-xl text-ink/30">＋</span>
          <span className="text-4xl sm:text-5xl">O</span><span className="text-xl text-ink/30">＋</span>
          <span className="text-4xl sm:text-5xl">G</span><span className="text-xl text-ink/30">＋</span>
          <span className="text-4xl sm:text-5xl">cía</span><span className="text-xl text-ink/30">＝</span>
          <span className="text-4xl sm:text-5xl">MOGCIA</span>
        </div>
        <p className="mt-4 font-display text-[10px] font-bold uppercase tracking-[.16em] text-ink-soft">Make · Operate · Grow · compañía</p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{nameItems.map(([mark, en, title, body, color], index) => <article key={mark} className="relative flex min-h-64 flex-col border border-ink bg-white p-6" style={{ boxShadow: `7px 7px 0 ${tone[color].chip}` }}>
        <div className="flex items-start justify-between border-b border-ink/15 pb-5">
          <span className="font-display text-4xl font-black tracking-[-.06em]">{mark}</span>
          <span className="grid h-9 w-9 place-items-center rounded-full font-display text-[10px] font-black" style={{ backgroundColor: tone[color].band }}>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <p className="mt-6 font-display text-[10px] font-bold uppercase tracking-[.16em] text-ink-soft">{en}</p>
        <h3 className="mt-1.5 text-lg font-black">{title}</h3>
        <p className="mt-3 text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>

      <div className="mt-10 grid gap-4 border border-ink bg-white p-7 sm:p-8 md:grid-cols-[.8fr_1.2fr] md:items-center md:gap-10" style={{ boxShadow: `8px 8px 0 ${tone.butter.chip}` }}><h3 className="text-xl font-black leading-8">つくって、まわして、<br className="hidden md:block" />そだてていく</h3><p className="text-xs leading-7 text-ink-soft">つくって終わりではなく、事業の中で使われ続けるところまで伴走する会社でありたい。その想いを、MOGCIAという名前にこめています。</p></div>
    </div></section>

    <section id="thinking" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="03" label="Our thinking" color="pink" title={<><span className="font-display">MOGCIA</span>の考え方</>} />
      <div className="mt-12 grid gap-3 md:grid-cols-3">{thinkingItems.map(([number, en, title, body, color]) => <article key={number} className="relative overflow-hidden rounded-[1.5rem] p-7 md:p-8" style={{ backgroundColor: tone[color].band }}>
        <span className="absolute -right-7 -top-8 font-display text-[7rem] font-black leading-none text-white/60" aria-hidden>{number}</span>
        <p className="relative grid h-16 w-16 place-items-center rounded-full font-display text-xl font-black" style={{ backgroundColor: tone[color].chip }}>{number}</p>
        <p className="mt-5 font-display text-[10px] font-bold tracking-[.16em] text-ink-soft">{en}</p>
        <h3 className="mt-1.5 text-lg font-black">{title}</h3>
        <p className="mt-3 text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
    </section>

    <section id="message" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
      <div>
        <SectionLabel number="04" label="Message" color="lilac" />
        <h2 className="mt-5 text-3xl font-black leading-[1.5]">つくるだけで<br />終わらない、<br />事業に残る仕組みを</h2>
      </div>
      <div className="border-t border-ink pt-8">
        <span className="font-display text-6xl font-black leading-none text-ink/15" aria-hidden>“</span>
        <p className="mt-3 text-base font-bold leading-9 md:text-lg md:leading-10">私たちは、サービスを導入することやWebサイトを公開することをゴールにはしていません。</p>
        <div className="mt-6 space-y-5 text-sm leading-8 text-ink-soft">
          <p>新しい仕組みや表現は、つくった瞬間に完成するものではありません。実際の現場で使われ、使う方々の声を受け取りながら、少しずつその会社に合う形へ変わっていくものだと考えています。</p>
          <p>だからこそMOGCIAでは、最初から方法を決めつけるのではなく、まず目的や現在の状況を丁寧に整理します。AI、システム、Web、SNSという手段の中から、本当に必要なものを選び、無理なく続けられる形にすることを大切にしています。</p>
          <p>相談の段階では、まだ考えがまとまっていなくても構いません。つくることも、まわすことも、その先へ育てることも。お客さまと同じ目線で考え、事業の中に長く残る仕組みを一緒につくっていきたいと思っています。</p>
        </div>
        <div className="mt-10 flex items-end justify-between border-t border-ink/15 pt-5"><div><p className="text-[11px] font-bold text-ink-soft">代表取締役</p><p className="mt-1 text-xl font-black">堂本 寛人</p></div><span className="font-display text-[9px] font-bold uppercase tracking-[.18em] text-ink-soft">MOGCIA Inc.</span></div>
      </div>
    </div></section>

    <section id="members" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="05" label="Members" color="mint" title="メンバー" note="それぞれの専門を持つチームで支えます" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{members.map(([role, message, color], index) => <article key={role} className="relative flex min-h-64 flex-col overflow-hidden rounded-[1.5rem] p-7" style={{ backgroundColor: tone[color].band }}>
        <span className="absolute -right-3 -top-8 font-display text-[7rem] font-black leading-none text-white/65" aria-hidden>{String(index + 1).padStart(2, '0')}</span>
        <span className="relative grid h-12 w-12 place-items-center rounded-full font-display text-[11px] font-black" style={{ backgroundColor: tone[color].chip }}>{String(index + 1).padStart(2, '0')}</span>
        <div className="relative mt-auto pt-12"><p className="font-display text-[9px] font-bold uppercase tracking-[.16em] text-ink-soft">MOGCIA TEAM</p><h3 className="mt-2 text-xl font-black">{role}</h3><p className="mt-4 text-xs leading-7 text-ink-soft">{message}</p></div>
      </article>)}</div>
    </section>

    <section id="profile" className="page-shell grid scroll-mt-24 gap-12 py-24 md:py-32 lg:grid-cols-[1.2fr_.8fr]">
      <div>
        <SectionLabel number="06" label="Profile" color="peach" />
        <h2 className="mt-5 text-3xl font-black">会社概要</h2>
        <dl className="mt-10 border-t border-ink text-sm">{companyProfile.map(([label, value]) => <div key={label} className="grid gap-2 border-b border-ink/15 py-5 sm:grid-cols-[8rem_1fr]"><dt className="text-xs font-bold text-ink-soft">{label}</dt><dd className="whitespace-pre-line leading-7">{value}</dd></div>)}</dl>
      </div>
      <div>
        <SectionLabel label="Access" color="peach" />
        <h2 className="mt-5 text-3xl font-black">アクセス</h2>
        <p className="mt-10 text-sm leading-7">〒810-0001<br />福岡県福岡市中央区天神4-6-28<br />いちご天神ノースビル7階</p>
        <div className="mt-6 aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#f7f7f7]">
          <iframe
            title="株式会社MOGCIA 所在地"
            src="https://www.google.com/maps?q=%E3%80%92810-0001%20%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A4%A9%E7%A5%9E4-6-28%20%E3%81%84%E3%81%A1%E3%81%94%E5%A4%A9%E7%A5%9E%E3%83%8E%E3%83%BC%E3%82%B9%E3%83%93%E3%83%AB7%E9%9A%8E&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>

    <section className="page-shell grid gap-4 pb-24 md:grid-cols-2 md:pb-32">
      <Link href="/recruit" className="group grid grid-cols-[8rem_1fr] items-center gap-6 rounded-[1.25rem] p-5 md:grid-cols-[10rem_1fr]" style={{ backgroundColor: tone.sky.band }}><div className="relative aspect-square overflow-hidden rounded-xl bg-white"><Image src="/recruit.png" alt="MOGCIAの採用情報" fill sizes="10rem" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><div><SectionLabel label="Recruit" color="sky" /><h2 className="mt-3 text-xl font-black">採用情報</h2><p className="mt-2 text-xs leading-6 text-ink-soft">現在の募集状況はこちらからご覧ください →</p></div></Link>
      <Link href="/coffee" className="group grid grid-cols-[8rem_1fr] items-center gap-6 rounded-[1.25rem] p-5 md:grid-cols-[10rem_1fr]" style={{ backgroundColor: tone.peach.band }}><div className="relative aspect-square overflow-hidden rounded-xl bg-white"><Image src="/coffee/coffee-cat-sachets.jpg" alt="MOGCIA Coffeeの商品と白い猫" fill sizes="10rem" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><div><SectionLabel label="Side project" color="peach" /><h2 className="mt-3 text-xl font-black">MOGCIA Coffee</h2><p className="mt-2 text-xs leading-6 text-ink-soft">MOGCIAが取り組む小さなプロジェクト →</p></div></Link>
    </section>

    <SoftContact title={<>まずは、お話し<br />してみませんか</>} body="ご相談・取材・協業のお問い合わせも、お気軽にどうぞ" />
    <Footer />
  </main>
}
