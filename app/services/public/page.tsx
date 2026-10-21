import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { DiagonalAccent, SectionHead, SectionLabel, SoftContact, tone, type Tone } from '@/components/PageFrame'
import { stories } from '@/lib/site-data'

export const metadata = { title: '議員・首長の広報支援 | MOGCIA', description: '議員・首長の日々の活動や政策を、SNS・LINE・Web・印刷物で地域に届ける広報支援サービスです。' }

const worries: [string, Tone][] = [
  ['議会や地域での活動が、住民に十分伝わっていない', 'sky'],
  ['活動報告をつくりたいが、時間が足りない', 'pink'],
  ['SNSを始めたいが、何を投稿すればよいかわからない', 'butter'],
  ['広報を任せられるスタッフが事務所にいない', 'mint'],
]

const approaches: [string, string, Tone][] = [
  ['活動を、正確に伝える', '議会での取り組みや地域活動を整理し、住民に伝わる言葉とデザインにします。', 'lilac'],
  ['無理なく続く仕組みをつくる', '投稿の型やテンプレート、研修を通して、事務所内でも運用できる体制を整えます。', 'pink'],
  ['必要な広報をまとめて相談できる', 'SNS・LINE・Web・印刷物まで、目的に合う手段を選び、一貫して支援します。', 'mint'],
]

const months: [string, string, string, string][] = [
  ['3月', '定例会', '予算審議', '新年度予算が暮らしにどう関わるのか、要点を整理して紹介'],
  ['4–5月', '', '新年度', '新しく始まる事業や地域行事を、写真とともに紹介'],
  ['6月', '定例会', '一般質問', '質問・答弁・今後の取り組みを、順を追って報告'],
  ['7–8月', '', '夏の行事', '夏祭りや議会報告会の様子を、写真と短い動画で'],
  ['9月', '定例会', '決算審議', '予算がどのように使われたかを、数字とともに振り返る'],
  ['10–11月', '', '秋の行事・視察', '視察や研修で学んだことを、地域にどう活かすか'],
  ['12月', '定例会', '1年のまとめ', '1年間の主な取り組みを、画像や動画で振り返る'],
  ['1–2月', '', '年初の活動', '新しい年の活動方針や予定を、SNS・Webで伝える'],
]

const services: [string, string, string, string, string, Tone][] = [
  ['05', 'sns', 'SNS運用代行', '投稿の企画・制作・公開・振り返り', '月75,000円〜', 'sky'],
  ['06', 'commo', 'commo.', 'LINEで活動報告を配信し、相談を受け付ける', '月50,000円', 'lilac'],
  ['07', 'analytics', '分析・改善提案', '反応を分析し、次の投稿につなげる', '月15,000円', 'mint'],
  ['08', 'production', '広報物の制作', '写真・チラシ・Web・投稿テンプレート', '35,000円〜', 'pink'],
  ['09', 'training', '広報研修', '事務所内で発信を続ける力を身につける', '30,000円〜', 'butter'],
]

const snsPlans: { name: string; price: string; items: string[]; featured?: boolean }[] = [
  { name: 'ライト', price: '月75,000円', items: ['1つのSNSを中心に運用', '投稿テーマの企画・制作・公開', '月1回の分析レポート'] },
  { name: 'スタンダード', price: '月115,000円', items: ['2つのSNSを運用', '画像・縦型動画の編集', '月1回の分析レポート'], featured: true },
  { name: 'しっかり', price: '月150,000円', items: ['3つのSNSを運用', '画像・縦型動画の編集', '月1回のレポート・定例ミーティング'] },
]

const productions: [string, string, string, Tone][] = [
  ['プロフィール写真の撮影', 'SNS・チラシ・Webで使いやすい写真を、表情や構図を変えて撮影します。', '35,000円〜', 'pink'],
  ['活動報告チラシ・リーフレット', '議会での取り組みや地域活動を、読みやすい紙面に整理します。', 'お見積もり', 'butter'],
  ['議会報告の画像・スライド', '一般質問や委員会の内容を、SNSで伝わる画像やスライドにまとめます。', 'お見積もり', 'sky'],
  ['Webサイト・LP', 'プロフィール・政策・活動報告を、ひとつのWebページにまとめます。', 'お見積もり', 'lilac'],
  ['名刺・事務所ツール', '名刺や事務所内の掲示物など、日々の活動で使うツールを制作します。', 'お見積もり', 'mint'],
  ['投稿テンプレート', '事務所で投稿画像をつくれるよう、Canvaなどの編集用テンプレートを納品します。', '＋20,000〜30,000円', 'peach'],
]

const themes: [string, string][] = [
  ['SNSの使い分け', '届けたい相手と内容に合わせて、Instagram・X・Facebook・LINEを使い分ける'],
  ['活動報告の書き方', '議会報告・地域行事・政策を、迷わず書ける文章の型を身につける'],
  ['スマホでの撮影', '活動の様子が伝わる写真と、縦型動画の撮り方'],
  ['伝わる文章', '専門的な議会の話を、地域の方にやさしく伝える書き方'],
  ['かんたんな画像・動画編集', '無料アプリを使って、投稿用の画像や動画を整える'],
  ['発信時の注意点', '避けたい表現や、コメント・誹謗中傷への対応を確認する'],
]

const trainingPlans: { badge: string; name: string; price: string; unit: string; rows: [string, string][]; featured?: boolean; steps?: [string, string][] }[] = [
  { badge: 'まずは1回', name: '単発研修', price: '30,000', unit: '円／回', rows: [['時間', '60分〜'], ['対象', 'ご本人＋事務所スタッフ'], ['内容', 'テーマを1〜2つ選び、その場で1本つくる'], ['持ち帰り', 'つくった投稿1本と資料']] },
  { badge: 'おすすめ', name: '3回パック', price: '80,000', unit: '円／3回', rows: [['時間', '各60〜90分'], ['対象', 'ご本人＋事務所スタッフ'], ['持ち帰り', '投稿カレンダー・投稿の型・資料']], featured: true, steps: [['方針づくり', '誰に・何を・どの媒体で届けるかと投稿カレンダー'], ['撮影・編集', '実際の活動を題材に、撮影から投稿まで実習'], ['振り返り・改善', '1か月分の投稿を一緒に振り返り、改善']] },
  { badge: 'オプション', name: 'テンプレート・ガイドライン', price: '＋20,000〜30,000', unit: '円', rows: [['内容', '投稿の型・トーン・撮影のコツ一式'], ['形式', 'Canvaテンプレート＋PDFガイド'], ['おすすめ', '研修とあわせて、研修後も迷わず投稿']] },
]

const priceGroups: { title: string; items: [string, string, string, string, Tone][] }[] = [
  { title: '毎月のサービス', items: [['SNS運用代行', '投稿の企画・制作・公開と月1回のレポート', '月75,000円〜', '05', 'sky'], ['commo.', 'LINEでの活動報告配信と相談受付', '月50,000円', '06', 'lilac'], ['分析・改善提案', '月1回のレポートと次の投稿テーマ3案', '月15,000円', '07', 'mint']] },
  { title: '単発・オプション', items: [['広報研修', '単発研修（60分〜）・3回パック', '30,000円〜', '09', 'mint'], ['広報物の制作', 'プロフィール写真・チラシ・Webサイトなど', '35,000円〜', '08', 'pink'], ['投稿テンプレート・ガイドライン', '文章の型・デザイン・撮影のポイントを整備', '＋20,000円〜', '09', 'butter']] },
]
const anchors: Record<string, string> = { '05': 'sns', '06': 'commo', '07': 'analytics', '08': 'production', '09': 'training' }

const caseSlugs = ['politics-social-j', 'politics-news-e', 'politics-contact-f']
const caseTones: Tone[] = ['sky', 'lilac', 'mint']

const flow: [string, string, Tone][] = [
  ['ご相談', '現在の広報や事務所体制についてお聞きします', 'sky'],
  ['ご提案・開始', '目的に合う支援内容と進め方をご提案し、運用を始めます', 'lilac'],
  ['定期的な振り返り', '反応を確認しながら、発信内容や進め方を改善します', 'butter'],
  ['見直し・引き継ぎ', '選挙日程などに応じて業務範囲を見直し、必要なデータをお渡しします', 'mint'],
]

const promises = ['平時の政治活動に関する広報を支援します', '選挙運動に関わる業務はお受けしません', '選挙日程に合わせて支援内容を見直します']
const accept = ['日々の活動報告・政策発信', 'LINEでの活動報告・相談窓口', 'プロフィール写真・印刷物・Webサイト制作', '分析・改善提案、広報研修']
const decline = ['選挙期間中のSNS運用', '選挙用投稿の企画・作成', '選挙に向けた戦略の立案']
const articles: [string, string][] = [
  ['お受けする業務', '平時の政治活動に関する広報を支援します。活動・政策・議会の報告、LINE相談窓口、各種制作、研修などが対象です。'],
  ['お受けできない業務', '選挙期間中のSNS運用、選挙用投稿の企画・制作、選挙戦略の立案など、選挙運動に関わる業務は有償・無償を問わずお受けしていません。'],
  ['選挙前の見直し', '選挙が予定される場合は、日程と支援内容を確認し、事前に業務範囲の見直しや引き継ぎを行います。急に日程が決まった場合は、判明した時点で対応します。'],
  ['発信内容の確認', '投稿や配信は、公開前に必ず内容をご確認いただきます。投票の依頼など、事前運動にあたるおそれのある表現は扱いません。'],
  ['判断に迷う場合', '選挙管理委員会や専門家の見解を確認したうえで対応します。法令や運用が変わった場合は、この方針も見直します。'],
]

const faqs: [string, string][] = [
  ['政務活動費で支払えますか？', '議会ごとに規定が異なります。対象になるかは、所属議会の事務局にご確認ください。'],
  ['選挙の前はどうなりますか？', '選挙日程と支援内容を確認し、選挙運動に関わる業務が生じないよう、適切な時期に通常運用を終了して事務所へ引き継ぎます。解散などで日程が急に決まった場合も、判明した時点で対応します。'],
  ['事務所のスタッフだけで運用できるようになりますか？', 'はい。研修とテンプレートを通して、事務所内で無理なく続けられる運用体制を整えます。'],
  ['遠方やオンラインでも対応できますか？', '打ち合わせや研修はオンラインでも対応しています。撮影や対面での研修は、エリアにより出張費を別途いただく場合があります。'],
]

function Check({ children, color }: { children: React.ReactNode; color: string }) {
  return <li className="flex gap-2.5 text-[13px] leading-7"><span className="mt-1 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full text-[10px] font-black" style={{ backgroundColor: color }} aria-hidden>✓</span><span>{children}</span></li>
}

function SubHead({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-base font-black">{children}</h3>
}

function Steps({ items, color }: { items: [string, string][]; color: Tone }) {
  return <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{items.map(([title, text], index) => <li key={title} className="flex flex-col gap-2 border border-ink bg-white p-5" style={{ boxShadow: `5px 5px 0 ${tone[color].chip}` }}>
    <span className="font-display text-[10px] font-black tracking-[.14em] text-ink-soft">STEP {index + 1}</span>
    <span className="text-[15px] font-black">{title}</span>
    <span className="text-xs leading-6 text-ink-soft">{text}</span>
  </li>)}</ol>
}

function ServiceTitle({ title, sub }: { title: string; sub: string }) {
  return <>{title}<span className="mt-2 block text-lg leading-8 md:text-xl">{sub}</span></>
}

function PriceBar({ label, price, color }: { label: string; price: string; color: Tone }) {
  return <div className="flex flex-wrap items-center justify-between gap-3 border border-ink bg-white px-6 py-5" style={{ boxShadow: `5px 5px 0 ${tone[color].chip}` }}><span className="text-[13px] text-ink-soft">{label}</span><span className="text-xl font-black md:text-2xl">{price}</span></div>
}

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
          <h1 className="mt-5 text-balance text-[clamp(1.5rem,7vw,2rem)] font-black leading-[1.75] tracking-[-.02em] sm:text-4xl sm:leading-[1.5] md:text-[3.5rem] md:leading-[1.35]">議員・首長の活動を、<br />地域にきちんと届ける</h1>
          <p className="mt-7 max-w-xl text-sm leading-8 text-ink-soft">議会での取り組みや政策、地域での活動を、住民の方に伝わる形に整えます。SNSの運用からLINE、Web、印刷物、事務所向けの研修まで、平時の広報をまとめて支援します。</p>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="button button-dark text-xs">相談する →</Link><a href="#notice" className="button button-light text-xs">ご依頼にあたって</a></div>
        </div>
      </div>
      </div>
    </section>

    <section className="py-20 md:py-24" style={{ backgroundColor: tone.sky.band }}><div className="page-shell">
      <SectionHead number="01" label="For you" color="sky" title="広報で、こんなことに困っていませんか？" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{worries.map(([text, color], index) => <div key={text} className="flex flex-col gap-4 border border-ink bg-white p-6" style={{ boxShadow: `5px 5px 0 ${tone[color].chip}` }}>
        <span className="grid h-9 w-9 place-items-center rounded-full font-display text-[11px] font-black" style={{ backgroundColor: tone[color].chip }}>0{index + 1}</span>
        <p className="text-base font-black leading-7">{text}</p>
      </div>)}</div>
    </div></section>

    <section className="page-shell py-20 md:py-24">
      <SectionHead number="02" label="Our approach" color="lilac" title="伝えるだけでなく、続けられる広報へ" />
      <div className="mt-10 grid gap-5 md:grid-cols-3">{approaches.map(([title, text, color], index) => <div key={title} className="flex flex-col gap-3.5 border border-ink bg-white p-7 md:p-8" style={{ boxShadow: `5px 5px 0 ${tone[color].chip}` }}>
        <span className="grid h-14 w-14 place-items-center rounded-full font-display text-base font-black" style={{ backgroundColor: tone[color].chip }}>0{index + 1}</span>
        <h3 className="text-xl font-black">{title}</h3>
        <p className="text-[13px] leading-7 text-ink-soft">{text}</p>
      </div>)}</div>
    </section>

    <section className="py-20 md:py-24" style={{ backgroundColor: tone.peach.band }}><div className="page-shell">
      <SectionHead number="03" label="Know-how" color="peach" title={<>議会や地域の動きに合わせて、<br className="hidden sm:block" />発信の機会を逃さない</>} note="予算審議、一般質問、地域行事など、1年の中には伝えるべき出来事が数多くあります。議会の流れを踏まえ、適切な時期に発信できる計画をつくります。" />
      <div className="mt-12">
        <SubHead>年間の主な発信テーマ</SubHead>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{months.map(([month, tag, title, text]) => <div key={month} className="flex flex-col gap-2 border border-ink bg-white p-5" style={{ boxShadow: `5px 5px 0 ${tone.peach.chip}` }}>
          <span className="flex items-center gap-2"><span className="font-display text-xl font-black">{month}</span>{tag && <span className="rounded-full px-2.5 py-0.5 text-[10px] font-black" style={{ backgroundColor: tone.peach.chip }}>{tag}</span>}</span>
          <span className="text-[15px] font-black">{title}</span>
          <span className="text-xs leading-6 text-ink-soft">{text}</span>
        </div>)}</div>
        <p className="mt-4 text-[11px] leading-5 text-ink-soft">※定例会の時期は多くの議会の例です。日程は議会によって異なります（通年会期の議会もあります）。</p>
      </div>
    </div></section>

    <section id="support" className="scroll-mt-24 py-20 md:py-24" style={{ backgroundColor: tone.butter.band }}><div className="page-shell">
      <SectionHead number="04" label="Services" color="butter" title="必要な広報だけ、組み合わせて選べます" note="SNS運用、LINE、分析、制作、研修を、単品またはセットでご依頼いただけます。各カードから詳しい内容をご覧ください。" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{services.map(([no, id, name, text, price, color]) => <a key={id} href={`#${id}`} className="group flex flex-col gap-3 border border-ink bg-white p-5 transition-transform hover:-translate-y-0.5" style={{ boxShadow: `5px 5px 0 ${tone[color].chip}` }}>
        <span className="grid h-9 w-9 place-items-center rounded-full font-display text-[11px] font-black" style={{ backgroundColor: tone[color].chip }}>{no}</span>
        <span className="text-[17px] font-black">{name}</span>
        <span className="text-xs leading-6 text-ink-soft">{text}</span>
        <span className="mt-auto pt-2 text-sm font-black">{price}</span>
      </a>)}</div>
    </div></section>

    <section id="sns" className="scroll-mt-24 py-20 md:py-24" style={{ backgroundColor: tone.sky.band }}><div className="page-shell">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHead number="05" label="SNS operation" color="sky" title={<ServiceTitle title="SNS運用代行" sub="日々の活動を、継続して届ける" />} />
          <p className="mt-5 text-[13px] leading-7 text-ink-soft">議会日程や地域行事に合わせて投稿テーマを考え、写真・動画・文章を整えて公開します。すべて公開前にご確認いただき、月1回のレポートで反応も振り返ります。</p>
          <p className="mt-6 text-[11px] font-bold tracking-[.08em] text-ink-soft">含まれるもの</p>
          <ul className="mt-3 grid gap-1.5">{['毎月の投稿ネタ案（議会・地域行事・政策テーマ）', '写真・縦型動画・画像の編集', '公開前の内容確認（修正2回まで）', 'Instagram / X / Facebook などへの投稿', '月1回の分析レポート'].map(item => <Check key={item} color="#FFFFFF">{item}</Check>)}</ul>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-white"><Image src="/sns-service.png" alt="SNS運用のイメージ" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" /></div>
      </div>
      <div className="mt-14"><SubHead>毎月の運用の流れ</SubHead><Steps color="sky" items={[['ネタ会議', '月初にオンラインで15分。議会日程や地域行事から投稿テーマを決めます。'], ['素材の受け取り', '写真やメモをLINEで送るだけ。撮影が必要な場合は同行も可能です。'], ['内容のご確認', '公開前にすべての投稿をご確認いただきます。'], ['投稿・振り返り', '予定どおり投稿し、月末にレポートでご報告します。']]} /></div>
      <div className="mt-12">
        <SubHead>プラン</SubHead>
        <div className="grid items-start gap-5 md:grid-cols-3">{snsPlans.map(plan => <div key={plan.name} className="flex flex-col gap-3.5 border border-ink bg-white p-7" style={{ boxShadow: `5px 5px 0 ${tone.sky.chip}` }}>
          {plan.featured && <span className="self-start rounded-full px-2.5 py-1 text-[10px] font-black" style={{ backgroundColor: tone.sky.chip }}>おすすめ</span>}
          <span className="text-base font-black">{plan.name}</span>
          <span className="text-2xl font-black">{plan.price}</span>
          <ul className="grid gap-1">{plan.items.map(item => <Check key={item} color={tone.sky.chip}>{item}</Check>)}</ul>
        </div>)}</div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-ink bg-white px-6 py-5" style={{ boxShadow: `5px 5px 0 ${tone.sky.chip}` }}>
          <span className="text-sm font-black">撮影同行（半日）</span>
          <span className="text-lg font-black">＋50,000円／回</span>
        </div>
      </div>
    </div></section>

    <section id="commo" className="page-shell scroll-mt-24 py-20 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div>
          <SectionHead number="06" label="commo." color="lilac" title={<ServiceTitle title="commo." sub="活動報告と相談窓口を、ひとつのLINEに" />} />
          <p className="mt-5 text-[13px] leading-7 text-ink-soft">友だち登録した方へ活動報告やお知らせを直接配信し、相談やアンケートもLINEで受け付けます。地域の方との継続的な接点をつくるサービスです。</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="border border-ink bg-white p-5" style={{ boxShadow: `5px 5px 0 ${tone.lilac.chip}` }}><p className="text-[15px] font-black">活動報告を直接配信</p><p className="mt-1.5 text-xs leading-6 text-ink-soft">友だち登録した方へ、定期的に情報を届けます</p></div>
            <div className="border border-ink bg-white p-5" style={{ boxShadow: `5px 5px 0 ${tone.mint.chip}` }}><p className="text-[15px] font-black">相談をLINEで受付</p><p className="mt-1.5 text-xs leading-6 text-ink-soft">地域の方が、都合のよい時間に相談できます</p></div>
          </div>
          <p className="mt-6 text-[11px] font-bold tracking-[.08em] text-ink-soft">含まれるもの</p>
          <ul className="mt-3 grid gap-1.5">{['リッチメニューの設計（プロフィール・活動報告・SNS・相談）', '活動報告・お知らせの定期配信', 'アンケートの作成と集計', '相談フォームの設置と受付の流れづくり', '友だち数・配信の反応のレポート'].map(item => <Check key={item} color={tone.lilac.chip}>{item}</Check>)}</ul>
          <div className="mt-7"><PriceBar label="月額" price="月50,000円" color="lilac" /></div>
        </div>
        <div className="flex justify-center"><Image src="/public-commo-phone.png" alt="commo.の政治家向けLINE画面（デモ）" width={702} height={1384} sizes="300px" className="h-auto w-[240px] sm:w-[300px]" /></div>
      </div>
    </section>

    <section id="analytics" className="scroll-mt-24 py-20 md:py-24" style={{ backgroundColor: tone.sky.band }}><div className="page-shell">
      <SectionHead number="07" label="Analytics" color="sky" title={<ServiceTitle title="月次分析レポート" sub="今月の成果を、次の一手につなげる" />} note="SNS・Web・LINEの数字を一枚にまとめ、年代や地域などのセグメント別に、誰に何が届いたかを確認します。結果の報告だけで終わらず、翌月の課題と具体的な発信案までご提案します。" />
      <div className="mt-10">
        <div className="relative overflow-hidden border border-ink bg-white px-6 py-7 md:px-8 md:py-8" style={{ boxShadow: `7px 7px 0 ${tone.sky.chip}` }}>
          <span className="absolute inset-y-0 left-0 w-2 bg-[#0B4E87]" aria-hidden />
          <span className="pointer-events-none absolute -right-3 -top-5 font-display text-[5.5rem] font-black leading-none tracking-[-.08em] text-[#EAF3F8] sm:right-4 sm:text-[7rem]" aria-hidden>WHY?</span>
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#0B4E87] px-3 py-1.5 font-display text-[9px] font-black tracking-[.16em] text-white"><span className="h-1.5 w-1.5 rounded-full bg-white" />WHY ANALYTICS</span>
            <h3 className="mt-4 text-xl font-black md:text-2xl">なぜ、毎月の分析が大切なのか</h3>
            <p className="mt-3 text-[13px] leading-7 text-ink-soft">発信は、投稿して終わりではありません。反応を振り返ることで、地域の方が知りたいことと、こちらが届けたいことのずれが見えるようになります。</p>
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {([
            ['01', '年代・地域別の反応がわかる', '閲覧者を年代や地域などのセグメントに分け、伝えたい相手に情報が届いているかを判断できます。', 'sky'],
            ['02', '関心のあるテーマがわかる', '反応が集まった投稿から、地域の方が何に関心を持っているのかを把握できます。', 'lilac'],
            ['03', '次に何をするか決められる', '感覚だけに頼らず、次の投稿テーマや伝え方を具体的に改善できます。', 'mint'],
          ] as [string, string, string, Tone][]).map(([number, title, text, color]) => <div key={number} className="border border-ink bg-white p-5" style={{ boxShadow: `5px 5px 0 ${tone[color].chip}` }}>
            <span className="font-display text-[10px] font-black tracking-[.14em] text-ink-soft">WHY {number}</span>
            <p className="mt-3 text-[15px] font-black">{title}</p>
            <p className="mt-2 text-xs leading-6 text-ink-soft">{text}</p>
          </div>)}
        </div>
      </div>
      <div className="mt-10 border border-ink bg-white" style={{ boxShadow: `8px 8px 0 ${tone.sky.chip}` }} aria-label="月次分析でわかることの例">
        <div className="flex flex-col gap-4 bg-[#0B4E87] px-5 py-6 text-white md:flex-row md:items-center md:justify-between md:px-8">
          <div><p className="font-display text-[10px] font-bold tracking-[.18em] text-white/70">REPORT EXAMPLE</p><h3 className="mt-1 text-xl font-black md:text-2xl">たとえば、こんなことがわかります。</h3><p className="mt-1 text-xs text-white/75">議員向け月次分析レポートで見る、今月の成果と次の一手</p></div>
          <div className="w-fit border border-white/40 bg-white px-5 py-2 text-center text-[#0B4E87]"><p className="text-sm font-black">レポート例</p><p className="mt-0.5 text-[9px]">2025年4月度</p></div>
        </div>

        <div className="grid gap-7 p-5 md:p-8">
          <div>
            <p className="text-sm font-black"><span className="mr-2 inline-grid h-7 w-7 place-items-center rounded-full bg-[#0B4E87] text-xs text-white">1</span>主要指標の実績</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {([
                ['Instagram', '月間リーチ', '12,480', '前月比 ＋32%', 'pink'],
                ['Webサイト', '月間閲覧数', '8,320', '前月比 ＋28%', 'sky'],
                ['公式LINE', '友だち数', '1,560', '前月比 ＋18%', 'mint'],
              ] as [string, string, string, string, Tone][]).map(([name, label, value, change, color]) => <div key={name} className="border border-ink bg-white p-5" style={{ boxShadow: `4px 4px 0 ${tone[color].chip}` }}>
                <div className="flex items-center justify-between"><span className="text-sm font-black">{name}</span><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tone[color].dot }} /></div>
                <p className="mt-4 text-[10px] font-bold text-ink-soft">{label}</p><p className="mt-1 font-display text-3xl font-black">{value}</p><p className="mt-1 text-[11px] font-black text-[#168967]">{change}</p>
                <div className="mt-5 flex h-12 items-end gap-1">{[28, 38, 45, 58, 62, 82].map((height, index) => <span key={index} className="flex-1" style={{ height: `${height}%`, backgroundColor: tone[color].dot, opacity: .35 + index * .1 }} />)}</div>
              </div>)}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><p className="text-sm font-black"><span className="mr-2 inline-grid h-7 w-7 place-items-center rounded-full bg-[#0B4E87] text-xs text-white">2</span>セグメント別の反応と、行動の変化</p><p className="text-[10px] font-bold text-[#0B4E87]">年代・地域ごとに、届き方の違いを確認</p></div>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <div className="border border-ink bg-white p-5" style={{ boxShadow: `4px 4px 0 ${tone.sky.chip}` }}><p className="text-xs font-black">年代・地域別の反応</p><div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"><div><p className="mb-2 text-[9px] font-bold text-ink-soft">年代</p><div className="grid gap-2">{[['18–34歳', 26], ['35–54歳', 47], ['55歳以上', 27]].map(([label, width]) => <div key={label as string} className="grid grid-cols-[3.5rem_1fr_2rem] items-center gap-1.5 text-[9px]"><span>{label}</span><span className="h-2 bg-slate-100"><span className="block h-full bg-[#2E8DD1]" style={{ width: `${width}%` }} /></span><b>{width}%</b></div>)}</div></div><div><p className="mb-2 text-[9px] font-bold text-ink-soft">地域</p><div className="grid gap-2">{[['市内', 62], ['県内', 21], ['県外', 17]].map(([label, width]) => <div key={label as string} className="grid grid-cols-[2.5rem_1fr_2rem] items-center gap-1.5 text-[9px]"><span>{label}</span><span className="h-2 bg-slate-100"><span className="block h-full bg-[#7D68C4]" style={{ width: `${width}%` }} /></span><b>{width}%</b></div>)}</div></div></div><p className="mt-4 border-t border-ink/10 pt-3 text-[9px] leading-4 text-ink-soft">誰に届いているかを細かく分けて、届けたい層とのずれを確認します。</p></div>
              <div className="border border-ink bg-white p-5" style={{ boxShadow: `4px 4px 0 ${tone.lilac.chip}` }}><p className="text-xs font-black">Webサイトへの流入</p><p className="mt-4 font-display text-3xl font-black">2,840<span className="ml-1 text-xs">人</span></p><p className="mt-1 text-[10px] text-ink-soft">Instagramから訪問</p><div className="mt-4 border-t border-ink/10 pt-3"><p className="text-[10px] text-ink-soft">投稿を見た方のうち</p><p className="mt-1 text-lg font-black text-[#168967]">34%がWebへ</p></div></div>
              <div className="border border-ink bg-white p-5" style={{ boxShadow: `4px 4px 0 ${tone.mint.chip}` }}><p className="text-xs font-black">LINE登録のきっかけ</p><div className="mt-4 grid gap-2 text-[10px]">{[['Instagram', '48%'], ['Webサイト', '32%'], ['地域での案内', '12%'], ['その他', '8%']].map(([label, value], index) => <div key={label} className="flex items-center justify-between border-b border-ink/10 pb-2"><span><i className="mr-2 inline-block h-2 w-2 rounded-full not-italic" style={{ backgroundColor: [tone.pink.dot, tone.sky.dot, tone.mint.dot, tone.lilac.dot][index] }} />{label}</span><b>{value}</b></div>)}</div></div>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black"><span className="mr-2 inline-grid h-7 w-7 place-items-center rounded-full bg-[#0B4E87] text-xs text-white">3</span>関心が高かったテーマ</p>
              <div className="mt-4 border border-ink bg-white p-5" style={{ boxShadow: `4px 4px 0 ${tone.pink.chip}` }}><div className="grid gap-3">{[['子育て・教育', '4,580', '8.4%'], ['防災・減災', '3,920', '7.1%'], ['福祉・高齢者', '2,860', '6.8%'], ['道路・インフラ', '2,340', '5.2%']].map(([theme, reach, rate], index) => <div key={theme} className="grid grid-cols-[1fr_4rem_3rem] items-center gap-2 border-b border-ink/10 pb-2 text-[10px] last:border-0 last:pb-0"><span className="font-bold"><i className="mr-2 inline-block h-2 w-2 rounded-full not-italic" style={{ backgroundColor: [tone.pink.dot, tone.sky.dot, tone.mint.dot, tone.lilac.dot][index] }} />{theme}</span><span className="text-right">{reach}</span><b className="text-right">{rate}</b></div>)}</div><p className="mt-4 bg-[#FFF1F5] px-3 py-2 text-[10px] font-bold">最も関心が高かったテーマ：子育て・教育</p></div>
            </div>
            <div>
              <p className="text-sm font-black"><span className="mr-2 inline-grid h-7 w-7 place-items-center rounded-full bg-[#0B4E87] text-xs text-white">4</span>次月の課題と改善案</p>
              <div className="mt-4 grid gap-3">{[
                ['LINE登録への導線', 'プロフィールや投稿内で、LINE相談窓口をよりわかりやすく案内する', 'pink'],
                ['若い世代へのリーチ', '短い動画を増やし、最初の数秒で要点が伝わる構成にする', 'sky'],
                ['関心テーマの深掘り', '子育て・教育の取り組みを、事例やQ&A形式で継続して伝える', 'mint'],
              ].map(([title, text, color], index) => <div key={title} className="grid grid-cols-[2rem_1fr] gap-3 border border-ink bg-white p-4" style={{ boxShadow: `4px 4px 0 ${tone[color as Tone].chip}` }}><span className="grid h-8 w-8 place-items-center rounded-full text-xs font-black" style={{ backgroundColor: tone[color as Tone].chip }}>{index + 1}</span><div><p className="text-xs font-black">{title}</p><p className="mt-1 text-[10px] leading-5 text-ink-soft">{text}</p></div></div>)}
              </div>
            </div>
          </div>
          <p className="text-right text-[10px] text-ink-soft">※掲載している数値はレポート例です</p>
        </div>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <div className="border border-ink bg-white p-6" style={{ boxShadow: `5px 5px 0 ${tone.sky.chip}` }}><p className="text-[11px] font-bold tracking-[.08em] text-ink-soft">レポートに含まれるもの</p><ul className="mt-3 grid gap-1 sm:grid-cols-2">{['SNS・Web・LINEの主要指標', '閲覧者の年代・地域などの傾向', '反応がよかったテーマの整理', '翌月の課題と具体的な改善案'].map(item => <Check key={item} color={tone.sky.chip}>{item}</Check>)}</ul></div>
        <div className="flex flex-col justify-center"><PriceBar label="SNS運用なしでもOK" price="月15,000円" color="sky" /></div>
      </div>
    </div></section>

    <section id="production" className="scroll-mt-24 py-20 md:py-24" style={{ backgroundColor: tone.pink.band }}><div className="page-shell">
      <SectionHead number="08" label="Production" color="pink" title={<ServiceTitle title="広報物の制作" sub="必要なものを、必要なときに" />} note="写真撮影、チラシ、Webサイト、投稿テンプレートなどを単発で制作します。SNS運用をご契約いただいていない方もご依頼いただけます。" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{productions.map(([title, text, price, color]) => <div key={title} className="flex flex-col gap-2.5 border border-ink bg-white p-6" style={{ boxShadow: `5px 5px 0 ${tone[color].chip}` }}>
        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tone[color].dot }} aria-hidden />
        <span className="text-[17px] font-black">{title}</span>
        <span className="text-xs leading-6 text-ink-soft">{text}</span>
        <span className="mt-auto flex items-baseline justify-between border-t border-ink/10 pt-3"><span className="text-[11px] font-bold text-ink-soft">料金</span><span className="text-[15px] font-black">{price}</span></span>
      </div>)}</div>
      <p className="mt-5 text-xs leading-6 text-ink-soft">制作物はすべて平時の活動報告・広報用です。選挙運動用の制作物はお受けしていません。</p>
    </div></section>

    <section id="training" className="scroll-mt-24 py-20 md:py-24" style={{ backgroundColor: tone.mint.band }}><div className="page-shell">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHead number="09" label="Training" color="mint" title={<ServiceTitle title="広報研修" sub="事務所の中に、発信できる人を増やす" />} />
          <p className="mt-5 text-[13px] leading-7 text-ink-soft">議員・首長ご本人と事務所スタッフを対象に、日々の活動を自分たちで発信する方法をお伝えします。実際の活動を題材に、その場で投稿をつくる実践形式の研修です。</p>
          <p className="mt-6 text-[11px] font-bold tracking-[.08em] text-ink-soft">含まれるもの</p>
          <ul className="mt-3 grid gap-1.5">{['事前ヒアリング（今の発信状況・お悩み）', '事務所に合わせたテーマ選び', '実習（撮影・文章・編集を実際の活動で）', '研修資料とつくった投稿の持ち帰り', '研修後のLINEでの質問受付'].map(item => <Check key={item} color="#FFFFFF">{item}</Check>)}</ul>
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] bg-white"><Image src="/public-training.png" alt="政治・行政分野のSNS広報研修のイメージ" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" /></div>
      </div>
      <div className="mt-14"><SubHead>選べるテーマ</SubHead><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{themes.map(([title, text]) => <div key={title} className="flex flex-col gap-1.5 border border-ink bg-white p-5" style={{ boxShadow: `5px 5px 0 ${tone.mint.chip}` }}><span className="text-sm font-black">{title}</span><span className="text-xs leading-6 text-ink-soft">{text}</span></div>)}</div></div>
      <div className="mt-12"><SubHead>研修の流れ</SubHead><Steps color="mint" items={[['ヒアリング', 'オンラインで30分。今の発信と、事務所の体制をうかがいます。'], ['テーマ決め', '6つのテーマから、事務所に合う内容を組み立てます。'], ['研修当日', '実際の活動を題材に、撮影・文章・編集をその場で実習。'], ['フォロー', '研修後もLINEで質問OK。つくった投稿にもアドバイスします。']]} /></div>
      <div className="mt-12">
        <SubHead>プラン</SubHead>
        <div className="grid items-start gap-5 md:grid-cols-3">{trainingPlans.map(plan => <div key={plan.name} className="flex flex-col gap-3.5 border border-ink bg-white p-7" style={{ boxShadow: `5px 5px 0 ${tone.mint.chip}` }}>
          <span className="self-start rounded-full px-2.5 py-1 text-[10px] font-black" style={{ backgroundColor: tone.mint.chip }}>{plan.badge}</span>
          <span className="text-base font-black">{plan.name}</span>
          <span className="text-2xl font-black">{plan.price}<span className="text-[13px] font-bold">{plan.unit}</span></span>
          <dl className="grid grid-cols-[4rem_1fr] gap-x-2.5 gap-y-1.5 text-xs leading-6">{plan.rows.map(([k, v]) => <div key={k} className="contents"><dt className="font-black">{k}</dt><dd>{v}</dd></div>)}</dl>
          {plan.steps && <ol className="grid gap-1.5 border-t border-ink/10 pt-3">{plan.steps.map(([title, text], i) => <li key={title} className="flex gap-2.5 text-xs leading-6"><span className="font-display font-black text-ink-soft">0{i + 1}</span><span><b>{title}</b>　{text}</span></li>)}</ol>}
        </div>)}</div>
      </div>
    </div></section>

    <section id="price" className="page-shell scroll-mt-24 py-20 md:py-24">
      <SectionHead number="10" label="Price" color="pink" title="料金と組み合わせ例" note="目的や事務所の体制に合わせて、必要なサービスを選べます。まずは現在のお悩みをお聞かせください。" />
      <div className="mt-8 grid items-center gap-6 border border-ink bg-white p-7 md:grid-cols-[1.3fr_.7fr] md:p-9" style={{ boxShadow: `8px 8px 0 ${tone.lilac.chip}` }}>
        <div className="flex flex-col gap-3">
          <span className="self-start rounded-full px-3 py-1 text-[11px] font-bold" style={{ backgroundColor: tone.lilac.chip }}>おすすめ</span>
          <span className="text-2xl font-black">平時の広報おまかせセット</span>
          <span className="text-[13px] leading-7 text-ink-soft">SNSの運用、LINEでの情報発信、毎月の分析・改善をまとめてご依頼いただけるセットです。</span>
          <div className="flex flex-wrap gap-2 text-xs font-bold">{([['SNS運用代行', 'sky'], ['commo.', 'lilac'], ['分析・改善提案', 'mint']] as [string, Tone][]).map(([name, c]) => <span key={name} className="rounded-full px-3.5 py-1.5" style={{ backgroundColor: tone[c].band }}>{name}</span>)}</div>
        </div>
        <div className="flex flex-col gap-1 md:items-end"><span className="text-xs text-ink-soft line-through">単品合計 月140,000円</span><span className="font-display text-4xl font-black md:text-[2.5rem]">100,000<span className="text-sm font-bold">円／月</span></span></div>
      </div>
      {priceGroups.map(group => <div key={group.title} className="mt-10">
        <SubHead>{group.title}</SubHead>
        <div className="grid gap-5 md:grid-cols-3">{group.items.map(([name, text, price, no, color]) => <a key={name} href={`#${anchors[no]}`} className="flex flex-col gap-2.5 border border-ink bg-white p-6 transition-transform hover:-translate-y-0.5" style={{ boxShadow: `5px 5px 0 ${tone[color].chip}` }}>
          <span className="flex items-center gap-2.5"><span className="h-2.5 w-2.5 rounded-full ring-1 ring-ink" style={{ backgroundColor: tone[color].chip }} aria-hidden /><span className="text-base font-black">{name}</span></span>
          <span className="text-xs leading-6 text-ink-soft">{text}</span>
          <span className="mt-2 flex items-baseline justify-between"><span className="font-display text-[10px] font-bold text-ink-soft">→ {no}</span><span className="text-xl font-black">{price}</span></span>
        </a>)}</div>
      </div>)}
    </section>

    <section id="works" className="scroll-mt-24 py-20 md:py-24" style={{ backgroundColor: tone.pink.band }}><div className="page-shell">
      <SectionHead number="11" label="Works" color="pink" title="広報支援の事例" note="地方議員、首長、国会議員の方々を対象に、SNS運用やLINEの相談窓口づくりなどを支援しています。" action={<Link href="/works" className="group inline-flex min-h-12 items-center gap-8 border border-ink bg-white px-5 text-xs font-black shadow-[5px_5px_0_#FBD9E2]">ほかの事例を見る<span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>} />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">{cases.map((story, index) => { const color = caseTones[index % caseTones.length]; return <Link key={story.slug} href={`/works/${story.slug}`} className="group flex flex-col border border-ink bg-white p-6" style={{ boxShadow: `5px 5px 0 ${tone[color].chip}` }}>
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold"><span className="rounded-full px-2.5 py-1" style={{ backgroundColor: tone[color].chip }}>{story.product}</span><span className="text-ink-soft">{story.client}</span></div>
        <h3 className="mt-4 text-base font-black leading-[1.6]">{story.problem}</h3>
        <figure className="mt-auto pt-5"><blockquote className="rounded-xl p-4 text-xs font-bold leading-6" style={{ backgroundColor: tone[color].band }}>「{story.quote}」</blockquote><figcaption className="mt-2 text-[10px] text-ink-soft">{story.quoteBy}</figcaption></figure>
        <span className="mt-5 inline-flex min-h-10 w-fit items-center gap-5 border border-ink bg-white px-4 text-xs font-black" style={{ boxShadow: `4px 4px 0 ${tone[color].chip}` }}>事例を詳しく見る <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
      </Link> })}</div>
    </div></section>

    <section className="page-shell py-20 md:py-24">
      <SectionHead number="12" label="Flow" color="sky" title="ご相談から運用までの流れ" note="現在の広報状況を伺い、必要な支援をご提案します。開始後も定期的に内容を振り返り、状況に合わせて進め方を見直します。" />
      <ol className="relative mt-10 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        <span className="absolute left-[12.5%] right-[12.5%] top-11 hidden border-t-2 border-dashed border-ink/25 lg:block" aria-hidden />
        {flow.map(([title, text, color], index) => <li key={title} className="relative flex flex-col items-center gap-3">
          <span className="grid h-[88px] w-[88px] place-items-center rounded-full font-display text-2xl font-black ring-8 ring-white" style={{ backgroundColor: tone[color].chip }}>0{index + 1}</span>
          <span className="text-lg font-black">{title}</span>
          <span className="max-w-[14rem] text-xs leading-6 text-ink-soft">{text}</span>
        </li>)}
      </ol>
    </section>

    <section id="notice" className="scroll-mt-24 py-20 md:py-24" style={{ backgroundColor: tone.butter.band }}><div className="page-shell">
      <SectionHead number="13" label="Policy" color="butter" title="安心してご依頼いただくために" note="MOGCIAは、平時の政治活動に関する広報を支援します。お受けできる業務と、選挙前後の対応方針をご案内します。" />
      <div className="mt-10 grid gap-5 lg:grid-cols-[.75fr_1.25fr]">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-4 border border-ink bg-white p-7" style={{ boxShadow: `6px 6px 0 ${tone.butter.chip}` }}>
            <span className="text-[11px] font-bold tracking-[.12em] text-ink-soft">3つの約束</span>
            {promises.map((text, i) => <span key={text} className="flex items-start gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full font-display text-[11px] font-black" style={{ backgroundColor: tone.butter.chip }}>{i + 1}</span><span className="text-[15px] font-black leading-7">{text}</span></span>)}
          </div>
          <div className="border border-ink bg-white p-6 text-xs leading-7" style={{ boxShadow: `5px 5px 0 ${tone.butter.chip}` }}>
            <p className="text-[13px] font-black">お受けしていること</p>
            <ul className="mt-1">{accept.map(item => <li key={item}>○ {item}</li>)}</ul>
            <p className="mt-4 text-[13px] font-black">お受けしていないこと</p>
            <ul className="mt-1">{decline.map(item => <li key={item}>× {item}</li>)}</ul>
          </div>
        </div>
        <div className="border border-ink bg-white px-6 pb-7 pt-2 md:px-9" style={{ boxShadow: `5px 5px 0 ${tone.butter.chip}` }}>
          {articles.map(([title, text], i) => <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-ink/10 py-6 first:border-t-0 md:grid-cols-[3.5rem_1fr]">
            <span className="font-display text-xl font-black text-ink-soft">0{i + 1}</span>
            <div><h3 className="text-base font-black">{title}</h3><p className="mt-2 text-[13px] leading-7 text-[#2F3A4C]">{text}</p></div>
          </div>)}
          <p className="flex justify-end border-t border-ink/10 pt-5 text-xs font-black">株式会社MOGCIA</p>
        </div>
      </div>
    </div></section>

    <section className="py-20 md:py-24" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell grid gap-10 lg:grid-cols-[.55fr_1fr]">
      <SectionHead number="14" label="FAQ" color="lilac" title="よくある質問" />
      <div className="grid gap-5">{faqs.map(([q, a], i) => <div key={q} className="border border-ink bg-white p-6" style={{ boxShadow: `5px 5px 0 ${tone.lilac.chip}` }}>
        <p className="flex gap-3.5 text-sm font-black leading-7"><span className="font-display">Q{i + 1}</span>{q}</p>
        <p className="mt-2 pl-9 text-xs leading-6 text-ink-soft">{a}</p>
      </div>)}</div>
    </div></section>

    <SoftContact body="何から始めればよいかわからない段階でも、お気軽にご相談ください" />
    <Footer />
  </main>
}
