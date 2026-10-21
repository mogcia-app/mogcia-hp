import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { DiagonalAccent, SectionHead, SectionLabel, SoftContact, tone, type Tone } from '@/components/PageFrame'

export const metadata = { title: 'AI導入支援 | MOGCIA', description: 'AIの使い方を学び、自社の業務で実践し、自分たちで活用・改善できる状態まで伴走する法人向けパッケージです。' }

const worries: [string, Tone][] = [
  ['AIを導入したいが、社内に詳しい担当者がいない', 'sky'],
  ['ChatGPTを入れたものの、使う人が限られている', 'pink'],
  ['どの業務から試せばよいか、判断できない', 'butter'],
  ['安全な使い方と社内ルールを整えたい', 'mint'],
]

const approaches: [string, string, Tone][] = [
  ['使い方を学ぶ', '生成AIの基本と安全な使い方を、はじめてAIを使う方にも分かる言葉で身につけます。', 'lilac'],
  ['自社の仕事で使う', '一般的な例題ではなく、日々使う資料や実際の作業を題材に、業務がどう変わるかを試します。', 'pink'],
  ['自分たちで回せるようにする', '手順やテンプレートを社内に残し、外部へ頼り続けなくても活用と改善を続けられる状態を目指します。', 'mint'],
]

const flow: [string, string, string, string, Tone][] = [
  ['STEP 1', 'AIの使い方を学ぶ', '基本・安全な使い方・仕事で使うための考え方を身につける', 'training', 'butter'],
  ['STEP 2', '自社の業務で実践する', '実際の仕事を題材に試し、使い方を業務へ落とし込む', 'support', 'mint'],
  ['STEP 3', '自分たちで運用する', '手順を社内に残し、自分たちで活用と改善を続ける', 'system', 'lilac'],
]

const curriculum: [string, string][] = [
  ['困りごとの棚卸し', '時間がかかる作業や、担当者しかできない仕事を整理'],
  ['AIに任せる範囲', '人が判断する部分と、AIで補助できる部分を切り分ける'],
  ['実務での試作', '議事録・資料・集計など、自社の仕事を題材に試す'],
  ['使い方の改善', '出力を確認しながら、指示や手順を使いやすく整える'],
  ['手順の共有', '誰が使っても再現できるテンプレートやマニュアルにする'],
  ['安全な運用', '入力する情報、確認方法、社内での利用ルールを決める'],
]

const trainingPlans: { badge: string; name: string; price: string; rows: [string, string][]; featured?: boolean }[] = [
  { badge: 'まずは1回', name: '業務改善ワークショップ', price: '50,000円〜', rows: [['時間', '90分〜'], ['形式', '対面・オンライン'], ['内容', '困りごとの整理＋実務でのAI活用']] },
  { badge: '継続して取り組む', name: '実務で学ぶAI活用', price: '月50,000円〜', rows: [['期間', '3か月・6か月・1年から選べる'], ['支援', '隔週の実践会・チャット相談']], featured: true },
]

const supportSteps: [string, string][] = [
  ['業務の洗い出し', 'どの業務にAIを使うと効果が大きいかを、一緒に整理します。'],
  ['使い方を決める', 'ツール選びと、社内での使い方・ルールを決めます。'],
  ['現場で試す', '小さく始めて、うまくいった使い方を社内に広げます。'],
  ['毎月ふりかえる', '月1回の定例で、成果と次の改善を確認します。'],
]

const builds: [string, string][] = [
  ['業務用の小さなツール', '見積もり、日報、予約管理など、対象業務を絞って設計'],
  ['データの見える化', '売上・在庫・活動記録など、必要な情報を一画面に整理'],
  ['社内資料のAI検索', '許可した資料の範囲から、必要な情報を探しやすくする'],
  ['既存サービスとの連携', '現在使っているツールを確認し、無理のない方法で接続'],
  ['権限・バックアップ', '扱う情報に合わせて、アクセス範囲と保存方法を設計'],
  ['公開後の保守', '対応範囲を事前に決め、不具合対応や必要な改修を継続'],
]

const useCases: [string, string, Tone][] = [
  ['議事録・日報', '会議の録音から議事録を自動で。日報のまとめも数秒で。', 'sky'],
  ['見積もり・請求', '過去の見積もりから、たたき台を自動で作成。', 'butter'],
  ['問い合わせ対応', 'よくある質問への一次回答を、AIが24時間。', 'pink'],
  ['SNS・広報', '投稿文や画像の下書きを、ブランドのトーンで。', 'lilac'],
  ['社内マニュアル', '「あの資料どこ？」に答える、社内向けAI検索。', 'mint'],
  ['採用・人事', '求人票の作成や、応募者対応の効率化に。', 'peach'],
]

const priceGroups: { title: string; items: [string, string, string, string, Tone][] }[] = [
  { title: '継続して取り組む', items: [['実務で学ぶAI活用', '3か月・6か月・1年から選べる', '月50,000円〜', 'training', 'butter'], ['実践と定着の伴走', '月1回定例＋チャット相談＋動画見放題', '月30,000円〜', 'support', 'mint'], ['仕組みの保守', '自分たちでつくったツールの保守', '月20,000円〜', 'system', 'lilac']] },
  { title: '必要なところから始める', items: [['業務改善ワークショップ', '90分〜・対面／オンライン', '50,000円〜', 'training', 'butter'], ['仕組みの設計・構築', '設計・構築＋保守を月額で（初期費用0円・12か月）', '月30,000円〜', 'system', 'lilac']] },
]

const securities: [string, string][] = [
  ['入力しない情報を決める', '個人情報や機密情報の扱いを、社内ルールとして明文化します。'],
  ['業務向けの設定で使う', '学習に使われない設定・法人向けプランなど、安全な使い方を選びます。'],
  ['権限とログを管理', '誰が何にアクセスできるかを整理し、記録を残します。'],
  ['MOGCIAの方針も公開', '自社のセキュリティ・AI利用方針を公開しています。'],
]

const faqs: [string, string][] = [
  ['ITに詳しい社員がいなくても大丈夫ですか？', 'はい。パソコンの基本操作ができれば始められる内容から用意しています。'],
  ['どのAIツールを使いますか？', 'ChatGPT・Claude・Geminiなど、業務や予算に合わせてご提案します。'],
  ['研修だけのサービスですか？', 'いいえ。業務の整理から実践、社内への定着、必要に応じた小さな仕組みづくりまで対応します。'],
  ['福岡以外でも対応できますか？', '九州全域に対応しています。研修や定例はオンラインでも行えます。'],
]

const shadow = (color: Tone, size = 5) => ({ boxShadow: `${size}px ${size}px 0 ${tone[color].chip}` })

function Check({ children, color }: { children: React.ReactNode; color: string }) {
  return <li className="flex gap-2.5 text-[13px] leading-7"><span className="mt-1 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full text-[10px] font-black" style={{ backgroundColor: color }} aria-hidden>✓</span><span>{children}</span></li>
}

function SubHead({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-base font-black">{children}</h3>
}

function ServiceTitle({ title, sub }: { title: string; sub: string }) {
  return <>{title}<span className="mt-2 block text-lg leading-8 md:text-xl">{sub}</span></>
}

function Steps({ items, color }: { items: [string, string][]; color: Tone }) {
  return <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{items.map(([title, text], index) => <li key={title} className="flex flex-col gap-2 border border-ink bg-white p-5" style={shadow(color)}>
    <span className="font-display text-[10px] font-black tracking-[.14em] text-ink-soft">STEP {index + 1}</span>
    <span className="text-[15px] font-black">{title}</span>
    <span className="text-xs leading-6 text-ink-soft">{text}</span>
  </li>)}</ol>
}

function PriceBar({ label, price, color }: { label: string; price: string; color: Tone }) {
  return <div className="flex flex-wrap items-center justify-between gap-3 border border-ink bg-white px-6 py-5" style={shadow(color)}><span className="text-[13px] text-ink-soft">{label}</span><span className="text-xl font-black md:text-2xl">{price}</span></div>
}

const aiLevels: [string, string, string, string[], Tone][] = [
  ['Lv.0', 'さわったことがない', 'ChatGPTなどを、まだ使ったことがない', ['まずはAIに話しかけてみる'], 'sky'],
  ['Lv.1', 'たまに使う', '調べものや文章の下書きに、ときどき使う', ['メールの下書き', '長い資料の要約'], 'pink'],
  ['Lv.2', '仕事で使っている', '毎日の業務で使い、指示の出し方の「型」がある', ['議事録を10分で', '提案書のたたき台を30分で'], 'butter'],
  ['Lv.3', '自分たちでつくれる', '業務の小さなツールや自動化を、AIでつくれる', ['社内アシスタント', '見積もり・日報の入力画面'], 'mint'],
  ['Lv.4', '社内に広げられる', 'ルールを決めて、ほかの社員に教えられる', ['社内AI利用ルール', '新しい社員への教え方'], 'lilac'],
]
const levelStairs = ['lg:mb-0', 'lg:mb-7', 'lg:mb-14', 'lg:mb-[84px]', 'lg:mb-28']
const roadmapBars: [string, string, string, string, string, Tone][] = [
  ['実務で学ぶAI活用', '3か月・6か月・1年', 'Lv.0 → Lv.3', '/services/ai/practical', 'lg:col-start-1 lg:col-span-4', 'butter'],
  ['実践と定着の伴走', '研修のあと・月額', 'Lv.2 → Lv.4', '/services/ai/support', 'lg:col-start-3 lg:col-span-3', 'mint'],
  ['技術サポート', '自社用ツールの裏側・月額', 'Lv.3 → Lv.4', '/services/ai/tech', 'lg:col-start-4 lg:col-span-2', 'lilac'],
]
const startPoints: [string, string, string, Tone][] = [
  ['Lv.0〜1の会社', '実務で学ぶAI活用の3か月・6か月コースから', '/services/ai/practical', 'sky'],
  ['Lv.2の会社', '6か月・1年コース、または実践と定着の伴走から', '/services/ai/support', 'butter'],
  ['Lv.3の会社', '技術サポートで、つくったものを本番に', '/services/ai/tech', 'mint'],
]

export default function AiServicePage() {
  return <main className="bg-white text-ink">
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-16">
      <DiagonalAccent color="mint" />
      <div className="page-shell relative z-10">
        <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　<Link href="/services">Service</Link>　／　AI導入支援</p>
        <div className="mt-12 max-w-3xl">
          <SectionLabel label="AI consulting" color="mint" />
          <h1 className="mt-5 text-balance text-[clamp(1.5rem,7vw,2rem)] font-black leading-[1.75] tracking-[-.02em] sm:text-4xl sm:leading-[1.5] md:text-[3.5rem] md:leading-[1.35]">AIを、<br />現場で使える力に</h1>
          <p className="mt-7 max-w-xl text-sm leading-8 text-ink-soft">AIの知識を学ぶだけではなく、社内の困りごとを整理し、実際の仕事で試し、使い続けられる形にするまで。業務改善を一緒に進めるAI活用支援です。九州全域・オンライン対応。</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="button button-dark text-xs">相談する →</Link><Link href="/diagnosis" className="button button-light text-xs">AI診断を試す</Link></div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-24" style={{ backgroundColor: tone.sky.band }}><div className="page-shell">
      <SectionHead number="01" label="For you" color="sky" title="このような会社・チーム向けです" note="業種は問いません。AIを仕事に取り入れたいものの、社内だけでは進め方を決めにくい組織を支援します。" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{worries.map(([text, color], index) => <div key={text} className="flex flex-col gap-4 border border-ink bg-white p-6" style={shadow(color)}>
        <span className="grid h-9 w-9 place-items-center rounded-full font-display text-[11px] font-black" style={{ backgroundColor: tone[color].chip }}>0{index + 1}</span>
        <p className="text-base font-black leading-7">{text}</p>
      </div>)}</div>
    </div></section>

    <section className="page-shell py-20 md:py-24">
      <SectionHead number="02" label="Our approach" color="lilac" title="学ぶ、使う、自分たちで回す" note="AIを試してみたい法人向けに、使い方の研修から実務での実践、自社だけで活用を続けられる状態までをひとつのパッケージで支援します。" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">{approaches.map(([title, text, color], index) => <div key={title} className="flex flex-col gap-3.5 border border-ink bg-white p-7 md:p-8" style={shadow(color)}>
        <span className="grid h-14 w-14 place-items-center rounded-full font-display text-base font-black" style={{ backgroundColor: tone[color].chip }}>0{index + 1}</span>
        <h3 className="text-xl font-black leading-8">{title}</h3>
        <p className="text-[13px] leading-7 text-ink-soft">{text}</p>
      </div>)}</div>
    </section>

    <section className="py-20 md:py-24" style={{ backgroundColor: tone.butter.band }}><div className="page-shell">
      <SectionHead number="03" label="How it works" color="butter" title="AIを、会社の中に残すパッケージ" note="目標は、支援が終わったあとも自分たちで使えること。研修だけで終わらず、実務への落とし込みと社内運用までを一続きで進めます。" />
      <ol className="relative mt-10 grid gap-5 md:grid-cols-3">
        <span className="absolute left-[16%] right-[16%] top-1/2 hidden border-t-2 border-dashed border-ink/25 md:block" aria-hidden />
        {flow.map(([step, title, text, id, color]) => <li key={id} className="relative"><a href={`#${id}`} className="flex h-full flex-col gap-2.5 border border-ink bg-white p-7 transition-transform hover:-translate-y-0.5" style={shadow(color)}>
          <span className="font-display text-[10px] font-black tracking-[.14em] text-ink-soft">{step}</span>
          <span className="text-[22px] font-black">{title}</span>
          <span className="text-xs leading-6 text-ink-soft">{text}</span>
          <span className="mt-1 text-[11px] font-bold text-ink-soft">詳しく見る ↓</span>
        </a></li>)}
      </ol>
    </div></section>

    <section id="roadmap" className="scroll-mt-24 py-20 md:py-24" style={{ backgroundColor: tone.mint.band }}><div className="page-shell">
      <SectionHead number="04" label="AI roadmap" color="mint" title="AIレベルと、進み方のロードマップ" note="いまのレベルに合わせて、どこからでも始められます。" action={<Link href="/diagnosis" className="group inline-flex min-h-12 items-center gap-8 self-start border border-ink bg-white px-5 text-xs font-black transition-transform hover:-translate-y-0.5 md:self-auto" style={shadow('butter')}><span>1分AI診断で、いまのレベルを確認</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>} />
      <h3 className="mb-4 mt-12 text-base font-black">AIレベル（5段階）</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">{aiLevels.map(([lv, title, text, can, color], i) => <div key={lv} className={`flex flex-col gap-2 border border-ink bg-white p-5 ${levelStairs[i]}`} style={shadow(color)}>
        <span className="self-start px-2.5 py-1 font-display text-xs font-black" style={{ backgroundColor: tone[color].chip }}>{lv}</span>
        <span className="text-lg font-black">{title}</span>
        <span className="text-xs leading-6 text-ink-soft">{text}</span>
        <span className="mt-1 border-t border-dashed border-ink/20 pt-2 text-[11px] font-black text-ink-soft">できること（例）</span>
        <ul className="grid gap-0.5">{can.map(c => <li key={c} className="flex gap-2 text-xs leading-6"><span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: tone[color].dot }} aria-hidden />{c}</li>)}</ul>
      </div>)}</div>
      <h3 className="mb-4 mt-14 text-base font-black">サービスと、進み方</h3>
      <div className="border border-ink bg-white p-5 md:p-6" style={shadow('sky')}>
        <div className="hidden grid-cols-5 gap-3 border-b border-ink/10 pb-3 lg:grid">{aiLevels.map(([lv, title, , , color]) => <span key={lv} className="flex items-center gap-2 text-[11px] font-black"><span className="px-2 py-0.5 font-display" style={{ backgroundColor: tone[color].chip }}>{lv}</span>{title}</span>)}</div>
        <div className="mt-4 grid gap-3 lg:grid-cols-5">{roadmapBars.map(([name, sub, range, href, span, color]) => <Link key={name} href={href} className={`group flex flex-wrap items-center justify-between gap-3 border border-ink px-5 py-4 transition-transform hover:-translate-y-0.5 ${span}`} style={{ backgroundColor: tone[color].band }}>
          <span className="flex flex-col gap-0.5"><span className="text-base font-black">{name}</span><span className="text-[11px] text-ink-soft">{sub}</span></span>
          <span className="flex items-center gap-3"><span className="font-display text-xs font-black">{range}</span><span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
        </Link>)}</div>
      </div>
      <h3 className="mb-4 mt-14 text-base font-black">どこから始める？</h3>
      <div className="grid gap-5 md:grid-cols-3">{startPoints.map(([who, where, href, color]) => <Link key={who} href={href} className="group flex flex-col gap-2 border border-ink bg-white p-5 transition-transform hover:-translate-y-0.5" style={shadow(color)}>
        <span className="text-xs font-bold text-ink-soft">{who}</span>
        <span className="text-[15px] font-black leading-7">→ {where}</span>
      </Link>)}</div>
    </div></section>

    <section id="training" className="page-shell scroll-mt-24 py-20 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHead number="05" label="Practical program" color="butter" title={<ServiceTitle title="実務で学ぶAI活用" sub="自社の仕事を、題材にする" />} />
          <p className="mt-5 text-[13px] leading-7 text-ink-soft">決まった講義を聞くだけではなく、まず社内の困りごとを整理します。そのうえで、実際の資料や作業を題材にAIを試し、仕事で使える手順へ整えます。</p>
          <p className="mt-6 text-[11px] font-bold tracking-[.08em] text-ink-soft">含まれるもの</p>
          <ul className="mt-3 grid gap-1.5">{['社内の困りごと・対象業務の整理', '実際の業務を題材にした実践', 'AIに任せる範囲と確認方法の設計', '繰り返し使える手順・テンプレート', '社内向けAI利用ルールの整理'].map(item => <Check key={item} color={tone.butter.chip}>{item}</Check>)}</ul>
          <Link href="/services/ai/practical" className="group mt-7 inline-flex min-h-12 items-center gap-8 border border-ink bg-white px-5 text-xs font-black transition-transform hover:-translate-y-0.5" style={shadow('butter')}><span>詳しくはこちら</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem]" style={{ backgroundColor: tone.butter.band }}><Image src="/ai-practical-program.png" alt="オンライン教材で実務的なAI活用を学ぶイメージ" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" /></div>
      </div>
      <div className="mt-14"><SubHead>取り組む内容の例</SubHead><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{curriculum.map(([title, text]) => <div key={title} className="flex flex-col gap-1.5 border border-ink bg-white p-5" style={shadow('butter')}><span className="text-sm font-black">{title}</span><span className="text-xs leading-6 text-ink-soft">{text}</span></div>)}</div></div>
      <div className="mt-12">
        <SubHead>プラン</SubHead>
        <div className="grid items-start gap-5 md:grid-cols-2">{trainingPlans.map(plan => <div key={plan.name} className="flex flex-col gap-3.5 border border-ink bg-white p-7" style={shadow('butter', plan.featured ? 8 : 5)}>
          <span className="self-start rounded-full px-2.5 py-1 text-[10px] font-black" style={{ backgroundColor: tone.butter.chip }}>{plan.badge}</span>
          <span className="text-base font-black">{plan.name}</span>
          <span className="text-2xl font-black">{plan.price}</span>
          <dl className="grid grid-cols-[4rem_1fr] gap-x-2.5 gap-y-1.5 text-xs leading-6">{plan.rows.map(([k, v]) => <div key={k} className="contents"><dt className="font-black">{k}</dt><dd>{v}</dd></div>)}</dl>
        </div>)}</div>
      </div>
    </section>

    <section id="support" className="scroll-mt-24 py-20 md:py-24" style={{ backgroundColor: tone.mint.band }}><div className="page-shell">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHead number="06" label="Support" color="mint" title={<ServiceTitle title="実践と定着の伴走" sub="試して、直して、社内に広げる" />} />
          <p className="mt-5 text-[13px] leading-7 text-ink-soft">試した使い方が本当に役立ったかを毎月振り返ります。うまくいかない部分を直し、担当者だけのコツを手順やテンプレートにして、社内で使える形へ整えます。</p>
          <p className="mt-6 text-[11px] font-bold tracking-[.08em] text-ink-soft">含まれるもの</p>
          <ul className="mt-3 grid gap-1.5">{['月1回のオンライン定例', 'チャットでの相談（平日）', '活用状況のふりかえりと改善提案', '社内ルール・マニュアルの整備', '新しいツールや機能の情報共有'].map(item => <Check key={item} color="#FFFFFF">{item}</Check>)}</ul>
          <Link href="/services/ai/support" className="group mt-7 inline-flex min-h-12 items-center gap-8 border border-ink bg-white px-5 text-xs font-black transition-transform hover:-translate-y-0.5" style={shadow('mint')}><span>詳しくはこちら</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-white"><Image src="/ai-support.png" alt="AI活用の導入と定着を支援するイメージ" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" /></div>
      </div>
      <div className="mt-14"><SubHead>伴走の流れ</SubHead><Steps items={supportSteps} color="mint" /></div>
      <div className="mt-10"><PriceBar label="ライト 月30,000円／スタンダード（月1回定例＋レポート）月50,000円" price="月30,000円〜" color="mint" /></div>
    </div></section>

    <section id="system" className="scroll-mt-24 py-20 md:py-24" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHead number="07" label="Technical support" color="lilac" title={<ServiceTitle title="つくれる部分は、自分たちで" sub="難しい裏側だけ、MOGCIAに" />} />
          <p className="mt-5 text-[13px] leading-7 text-ink-soft">AIを使えば、専門的な開発知識がなくても、画面や小さな業務ツールを試作し、現場に合わせて直せるようになってきました。そこは自分たちで育てる。データベース、権限、外部サービスとの連携、公開環境など、専門知識が必要な部分だけをMOGCIAが設計・構築します。</p>
          <div className="mt-6 flex flex-wrap gap-2.5">{['画面・使い勝手は自分たちで改善', 'データ・権限・連携はMOGCIA', '必要な技術支援だけ選べる'].map(item => <span key={item} className="rounded-full border border-ink/15 bg-white px-3.5 py-2 text-xs font-bold">{item}</span>)}</div>
          <Link href="/services/ai/tech" className="group mt-7 inline-flex min-h-12 items-center gap-8 border border-ink bg-white px-5 text-xs font-black transition-transform hover:-translate-y-0.5" style={shadow('lilac')}><span>詳しくはこちら</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-white"><Image src="/ai-technical-support.png" alt="AIシステムの技術支援に取り組むイメージ" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" /></div>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="border border-ink bg-white p-6 md:p-7" style={shadow('mint')}><span className="font-display text-[10px] font-black tracking-[.14em] text-ink-soft">YOUR TEAM</span><h3 className="mt-3 text-xl font-black">自分たちで育てる部分</h3><p className="mt-3 text-xs leading-6 text-ink-soft">画面のレイアウト、入力項目、文章、日々の使い方など。現場の人がAIと一緒に試し、仕事に合わせて改善します。</p></div>
        <div className="border border-ink bg-white p-6 md:p-7" style={shadow('lilac')}><span className="font-display text-[10px] font-black tracking-[.14em] text-ink-soft">MOGCIA</span><h3 className="mt-3 text-xl font-black">専門家に任せる部分</h3><p className="mt-3 text-xs leading-6 text-ink-soft">データベース、ログイン・権限、API連携、公開環境、バックアップなど。安全に動かし続けるための裏側を担当します。</p></div>
      </div>
      <div className="mt-14"><SubHead>対応できること</SubHead><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{builds.map(([title, text]) => <div key={title} className="flex flex-col gap-2 border border-ink bg-white p-6" style={shadow('lilac')}><span className="flex items-center gap-2.5"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tone.lilac.dot }} aria-hidden /><span className="text-base font-black">{title}</span></span><span className="text-xs leading-6 text-ink-soft">{text}</span></div>)}</div></div>
      <div className="mt-10 grid gap-5 md:grid-cols-2"><PriceBar label="設計・構築＋保守（初期費用0円・12か月）" price="月30,000円〜" color="lilac" /><PriceBar label="保守のみ" price="月20,000円〜" color="lilac" /></div>
    </div></section>

    <section className="page-shell py-20 md:py-24">
      <SectionHead number="08" label="Use cases" color="pink" title="こんな業務に使えます" note="「自社だと何に使える？」から一緒に考えます。業種を問わず、まずは時間のかかっている作業から。" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{useCases.map(([title, text, color]) => <div key={title} className="flex flex-col gap-2.5 border border-ink bg-white p-6" style={shadow(color)}>
        <span className="self-start rounded-full px-2.5 py-1 font-display text-[10px] font-black" style={{ backgroundColor: tone[color].chip }}>USE CASE</span>
        <span className="text-base font-black">{title}</span>
        <span className="text-xs leading-6 text-ink-soft">{text}</span>
      </div>)}</div>
    </section>

    <section id="price" className="page-shell scroll-mt-24 py-20 md:py-24">
      <SectionHead number="09" label="Price" color="sky" title="料金" />
      <div className="mt-8 grid items-center gap-6 border border-ink bg-white p-7 md:grid-cols-[1.3fr_.7fr] md:p-9" style={shadow('sky', 8)}>
        <div className="flex flex-col gap-3">
          <span className="self-start rounded-full px-3 py-1 text-[11px] font-bold" style={{ backgroundColor: tone.sky.chip }}>おすすめ</span>
          <span className="text-2xl font-black">AI活用 伴走プラン</span>
          <span className="text-[13px] leading-7 text-ink-soft">対象業務を決め、実践と振り返りを重ねながら、社内で使い続けられる形へ整えるプランです。</span>
          <div className="flex flex-wrap gap-2 text-xs font-bold">{([['課題整理', 'butter'], ['実務での実践', 'mint'], ['定着・改善', 'lilac']] as [string, Tone][]).map(([name, c]) => <span key={name} className="rounded-full px-3.5 py-1.5" style={{ backgroundColor: tone[c].band }}>{name}</span>)}</div>
        </div>
        <div className="flex flex-col gap-1 md:items-end"><span className="text-3xl font-black md:text-4xl">月50,000円〜</span></div>
      </div>
      <div className="mt-8 overflow-x-auto border border-ink bg-white" style={shadow('butter')}>
        <table className="w-full min-w-[360px] text-left text-[13px]">
          <thead><tr className="border-b border-ink/15"><th className="px-5 py-3.5 font-black">実務で学ぶAI活用</th><th className="px-5 py-3.5 font-black">料金</th></tr></thead>
          <tbody>{([['1年コース（いちばんお得）', '月50,000円'], ['6か月コース', '月68,000円'], ['3か月コース', '月88,000円']] as [string, string][]).map(([name, price], i) => <tr key={name} className="border-b border-ink/10 last:border-0" style={i === 0 ? { backgroundColor: tone.butter.band } : undefined}><td className="px-5 py-3.5 font-black">{name}</td><td className="px-5 py-3.5 font-black">{price}</td></tr>)}</tbody>
        </table>
      </div>
      {priceGroups.map(group => <div key={group.title} className="mt-10">
        <SubHead>{group.title}</SubHead>
        <div className="grid gap-5 md:grid-cols-3">{group.items.map(([name, text, price, id, color]) => <a key={name} href={`#${id}`} className="flex flex-col gap-2.5 border border-ink bg-white p-6 transition-transform hover:-translate-y-0.5" style={shadow(color)}>
          <span className="flex items-center gap-2.5"><span className="h-2.5 w-2.5 rounded-full ring-1 ring-ink" style={{ backgroundColor: tone[color].chip }} aria-hidden /><span className="text-base font-black">{name}</span></span>
          <span className="text-xs leading-6 text-ink-soft">{text}</span>
          <span className="mt-2 text-right text-xl font-black">{price}</span>
        </a>)}</div>
      </div>)}
      <p className="mt-6 text-[11px] leading-6 text-ink-soft">※すべて税抜。ご相談内容と対象業務を確認したうえで、合ったプランをご案内します。</p>
    </section>

    <section className="py-20 md:py-24" style={{ backgroundColor: tone.mint.band }}><div className="page-shell">
      <SectionHead number="10" label="Security" color="mint" title="安心して使うために" />
      <div className="mt-10 grid gap-4 md:grid-cols-2">{securities.map(([title, text], index) => <div key={title} className="flex gap-4 border border-ink bg-white p-5 md:p-6" style={shadow('mint')}>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-xs font-black" style={{ backgroundColor: tone.mint.chip }}>0{index + 1}</span>
        <span className="flex flex-col gap-1.5"><span className="text-base font-black">{title}</span><span className="text-xs leading-6 text-ink-soft">{text}</span></span>
      </div>)}</div>
      <Link href="/security-policy" className="group mt-8 inline-flex min-h-12 items-center gap-8 border border-ink bg-white px-5 text-xs font-black transition-transform hover:-translate-y-0.5" style={shadow('mint')}>セキュリティ・AI利用方針を見る<span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>
    </div></section>

    <section className="py-20 md:py-24" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell grid gap-10 lg:grid-cols-[.55fr_1fr]">
      <SectionHead number="11" label="FAQ" color="lilac" title="よくある質問" />
      <div className="grid gap-4">{faqs.map(([q, a], i) => <div key={q} className="border border-ink bg-white p-6" style={shadow('lilac')}>
        <p className="flex gap-3.5 text-sm font-black leading-7"><span className="font-display">Q{i + 1}</span>{q}</p>
        <p className="mt-2 pl-9 text-xs leading-6 text-ink-soft">{a}</p>
      </div>)}</div>
    </div></section>

    <section className="page-shell pt-20 md:pt-24">
      <Link href="/diagnosis" className="group mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-5 border border-ink bg-white p-6 transition-transform hover:-translate-y-0.5 md:p-7" style={shadow('butter')}>
        <span className="flex flex-col gap-1"><span className="text-base font-black">まずは、AI診断から</span><span className="text-xs leading-6 text-ink-soft">いくつかの質問に答えるだけで、御社に合ったAIの使い方の目安がわかります</span></span>
        <span className="inline-flex min-h-11 items-center gap-6 bg-ink px-5 text-xs font-black text-white">診断する<span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
      </Link>
    </section>

    <SoftContact body="「何に使えるかわからない」段階でも大丈夫。お話ししながら一緒に整理します" />
    <Footer />
  </main>
}
