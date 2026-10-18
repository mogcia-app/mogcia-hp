import Link from 'next/link'
import Footer from '@/components/Footer'
import { PageHeader, SectionHead, SoftContact, tone, type Tone } from '@/components/PageFrame'

export const metadata = { title: 'Support | MOGCIA', description: 'MOGCIAのサポート体制。契約中のお客さまは24時間いつでも連絡でき、土日の打ち合わせにも対応しています。' }

const promises: [string, string, string, Tone][] = [
  ['24h', 'いつでも連絡OK', '時間を気にせず、気づいたときにメッセージを送ってください', 'sky'],
  ['土日', '週末の打ち合わせにも対応', '平日が忙しい方や、土日に動く店舗・イベントにも合わせます', 'pink'],
  ['↻', '相談しながら改善', 'つくって終わりにせず、反応を見ながら次の一手を一緒に考えます', 'butter'],
]

const channels: [string, string, string, Tone][] = [
  ['LINE', '気軽な連絡に', '急ぎのご連絡や、ちょっとした確認に。思いついたときにそのまま送れます', 'mint'],
  ['メール', '資料や素材の共有に', 'ファイルの送付や、内容をまとめて伝えたいときにご利用ください', 'lilac'],
  ['ミーティング', 'オンライン・対面', '進捗や数字を確認しながら、次に取り組むことを一緒に整理します', 'peach'],
]

const supportDetails: [string, string, Tone][] = [
  ['初期設定', '導入時に必要な設定を行い、利用を始められる状態まで整えます', 'sky'],
  ['操作説明', '基本的な使い方を分かりやすくご説明します', 'pink'],
  ['スタッフ向けレクチャー', '必要に応じて、実際に利用するスタッフの皆さまへ使い方をご案内します', 'butter'],
  ['不具合の調査・復旧', 'LINEなどで状況を伺い、原因の調査から復旧まで対応します', 'mint'],
  ['定例ミーティング', '進捗や課題を共有し、次に取り組むことを一緒に決めます', 'mint'],
  ['改善・追加のご提案', '運用して見えてきた課題に合わせて、改善方法や次の施策をご提案します', 'peach'],
]

const productSupport: [string, string, Tone][] = [
  ['selmo', '営業データの登録、分析設定、活用方法のご提案', 'butter'],
  ['commo', '配信内容や顧客情報の設定、運用のご相談', 'lilac'],
  ['Roomly', '初期設定、応答内容の調整、利用状況の確認', 'pink'],
  ['upmo', 'アカウント設定、運用方法のご相談', 'sky'],
  ['signal.', '計測設定、データの見方、改善のご提案', 'peach'],
  ['ismo', 'データ登録、分析結果の確認、活用方法のご提案', 'mint'],
]

const serviceSupport: [string, string, Tone][] = [
  ['SNS運用代行', '投稿内容の相談、撮影・制作、投稿後の分析と改善を継続して支援します', 'sky'],
  ['LP・HP・EC制作', '文章や画像の更新、軽微な修正、アクセス状況をもとにした改善をご相談いただけます', 'pink'],
  ['SNS・Web一体支援', 'SNSとWebの反応を一緒に確認し、発信内容と導線をまとめて改善します', 'butter'],
  ['販促物制作', '制作中の修正確認に加え、納品後の増刷や内容変更もご相談いただけます', 'lilac'],
  ['システム開発', '操作相談、不具合の調査・復旧、運用後の機能追加や改善に対応します', 'mint'],
  ['プランニング', '定期的な相談や施策の振り返りを通じて、次に取り組む内容を一緒に整理します', 'peach'],
]

const flow: [string, string, string, Tone][] = [
  ['01', 'キックオフ', '目的・体制・連絡方法をすり合わせます', 'sky'],
  ['02', '制作・運用', '決めた内容をもとに、つくって動かします', 'pink'],
  ['03', 'レポート', '数字と反応を、わかりやすく共有します', 'butter'],
  ['04', '改善提案', '次にやることを一緒に決めて、育てていきます', 'mint'],
]

const faqs: [string, string][] = [
  ['夜や休日に連絡しても大丈夫ですか？', 'はい。時間を気にせず、気づいたときにご連絡ください。土日の打ち合わせにも対応しています。'],
  ['急ぎのときは、どこに連絡すればいいですか？', 'LINEでのご連絡が最も確認しやすいです。契約時にご案内する連絡先へお送りください。'],
  ['担当者が不在のときはどうなりますか？', 'ご相談内容はチームで共有し、対応できるメンバーへつなぎます。'],
  ['契約内容の変更や追加の相談もできますか？', 'はい。日々の連絡やミーティングの際に、いつでもご相談いただけます。'],
]

export default function SupportPage() {
  return <main className="bg-white text-ink">
    <PageHeader color="sky" diagonalAccent crumbs={[['Support']]} title="Support" lead={<>24時間・土日も、<br />ちゃんとつながる</>} body="つくって終わりではなく、まわして、そだてていくのがMOGCIAの仕事です。だからこそ、困ったときにすぐ相談できる体制を大切にしています。" />

    <section className="py-24 md:py-32" style={{ backgroundColor: tone.pink.band }}><div className="page-shell grid gap-12 lg:grid-cols-[.55fr_1fr] lg:gap-20">
      <SectionHead number="01" label="Our support" color="pink" title={<>MOGCIAの<br />手厚いサポート</>} />
      <div>
        <p className="text-2xl font-black leading-[1.7] md:text-3xl">使い始めてから見える課題まで、<br />いっしょに解決したいから。</p>
        <div className="mt-8 max-w-2xl space-y-5 text-sm leading-8 text-ink-soft"><p>システムも、Webサイトも、SNSも、完成や導入がゴールではありません。実際の現場で使い始めると、分からないことや、もっと良くしたいことが必ず出てきます。</p><p>そんなときに「誰へ聞けばいいか分からない」「作った会社へ相談しづらい」という状態にしたくありません。背景を知っている私たちが、そのまま相談を受け、必要な対応と次の改善まで一緒に考えます。</p></div>
        <div className="mt-10 border-t border-ink">{['困ったときに、相談先を探さなくていい', '状況を最初から説明し直さなくていい', '直すだけでなく、次の改善まで考えられる'].map((item, index) => <p key={item} className="grid grid-cols-[3rem_1fr] border-b border-ink/15 py-5 text-sm font-black"><span className="font-display text-[10px] text-ink-soft">0{index + 1}</span>{item}</p>)}</div>
      </div>
    </div></section>

    <section id="promise" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="02" label="Our promise" color="sky" title="MOGCIAのサポート、3つの約束" />
      <div className="mt-12 grid border-t border-ink md:grid-cols-3">{promises.map(([big, title, body, color], index) => <article key={title} className={`border-b border-ink/15 py-8 md:min-h-72 md:px-8 md:py-9 ${index > 0 ? 'md:border-l' : 'md:pl-0'}`}>
        <div className="flex items-center justify-between"><span className="grid h-14 w-14 place-items-center rounded-full font-display text-lg font-black" style={{ backgroundColor: tone[color].chip }}>{big}</span><span className="font-display text-[9px] font-black tracking-[.16em] text-ink-soft">PROMISE {String(index + 1).padStart(2, '0')}</span></div>
        <h3 className="mt-9 text-lg font-black md:text-xl">{title}</h3><p className="mt-3 max-w-sm text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
    </section>

    <section id="channels" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.mint.band }}><div className="page-shell grid gap-12 lg:grid-cols-[.58fr_1fr] lg:gap-20">
      <SectionHead number="03" label="Channels" color="mint" title="連絡方法" note="使いやすい方法で、気軽にご連絡ください" />
      <div className="border-t border-ink">{channels.map(([name, sub, body, color], index) => <article key={name} className="grid gap-4 border-b border-ink/15 py-7 sm:grid-cols-[2.5rem_9rem_1fr] sm:items-start">
        <span className="font-display text-[10px] font-black text-ink-soft">0{index + 1}</span>
        <div><span className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold" style={{ backgroundColor: tone[color].chip }}>{sub}</span><h3 className="mt-3 text-xl font-black">{name}</h3></div>
        <p className="text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
    </div></section>

    <section id="details" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="04" label="What we support" color="butter" title="サポートできること" note="ご契約内容や取り組みに合わせて、必要なサポートを組み合わせます" />
      <div className="mt-12 grid border-l border-t border-ink/15 md:grid-cols-2 lg:grid-cols-3">{supportDetails.map(([title, body, color], index) => <article key={title} className="min-h-56 border-b border-r border-ink/15 p-7 md:p-8">
        <div className="flex items-center justify-between"><span className="h-3 w-3 rounded-full" style={{ backgroundColor: tone[color].dot }} aria-hidden /><span className="font-display text-[10px] font-black text-ink-soft">{String(index + 1).padStart(2, '0')}</span></div>
        <h3 className="mt-10 text-lg font-black leading-7">{title}</h3>
        <p className="mt-3 text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
    </section>

    <section id="products" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.sky.band }}><div className="page-shell grid gap-12 lg:grid-cols-[.55fr_1fr] lg:gap-20">
      <SectionHead number="05" label="Product support" color="sky" title="プロダクト別サポート" note="基本のサポートに加えて、各プロダクトの使い方に合わせてお手伝いします" />
      <div className="border-t border-ink">{productSupport.map(([name, body, color], index) => <article key={name} className="grid grid-cols-[3rem_7rem_1fr] items-start gap-3 border-b border-ink/15 py-6 sm:grid-cols-[3rem_9rem_1fr]">
        <span className="font-display text-[10px] font-black text-ink-soft">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="font-display text-xl font-black tracking-[-.04em]"><span className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle" style={{ backgroundColor: tone[color].dot }} aria-hidden />{name}</h3>
        <p className="text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
    </div></section>

    <section id="services" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="06" label="Service support" color="pink" title="支援サービスのサポート" note="制作して終わりではなく、公開・納品後の運用や改善まで継続してお手伝いします" />
      <div className="mt-12 grid gap-x-10 border-t border-ink md:grid-cols-2">{serviceSupport.map(([name, body, color], index) => <article key={name} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/15 py-7 md:min-h-44 md:py-8">
        <span className="font-display text-[10px] font-black text-ink-soft">{String(index + 1).padStart(2, '0')}</span>
        <div><h3 className="flex items-center gap-3 text-lg font-black"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tone[color].dot }} aria-hidden />{name}</h3><p className="mt-4 text-xs leading-7 text-ink-soft">{body}</p></div>
      </article>)}</div>
    </section>

    <section id="flow" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="07" label="After contract" color="pink" title="ご契約後の流れ" note="レポートと改善提案をくり返しながら、成果につながる形に育てていきます" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{flow.map(([no, title, body, color]) => <article key={no} className="rounded-[1.5rem] p-7" style={{ backgroundColor: tone[color].band }}>
        <p className="grid h-16 w-16 place-items-center rounded-full font-display text-xl font-black" style={{ backgroundColor: tone[color].chip }}>{no}</p>
        <h3 className="mt-5 text-lg font-black">{title}</h3>
        <p className="mt-2.5 text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
      <p className="mt-6 text-center text-xs font-bold text-ink-soft">↻ 03〜04をくり返して、そだてていきます</p>
    </section>

    <section id="faq" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell grid gap-12 lg:grid-cols-[.55fr_1fr]">
      <SectionHead number="08" label="FAQ" color="lilac" title="よくある質問" />
      <div className="grid gap-3">{faqs.map(([q, a], index) => <details key={q} className="group rounded-[1.5rem] bg-white px-6 py-5" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold"><span><small className="mr-4 font-display">Q{index + 1}</small>{q}</span><span className="group-open:rotate-45">＋</span></summary><p className="pl-9 pt-4 text-xs leading-6 text-ink-soft">{a}</p></details>)}</div>
    </div></section>

    <section className="page-shell py-16"><Link href="/business" className="flex flex-col items-start justify-between gap-4 rounded-[1.5rem] p-7 md:flex-row md:items-center md:p-9" style={{ backgroundColor: tone.butter.band }}><div><p className="text-xs font-bold text-ink-soft">社内でご検討中の方へ</p><p className="mt-2 text-xl font-black">会社紹介・サービス資料はこちら</p></div><span className="button button-dark text-xs">法人のご担当者さまへ →</span></Link></section>

    <SoftContact body="サポート体制について、気になることがあればお気軽にどうぞ" />
    <Footer />
  </main>
}
