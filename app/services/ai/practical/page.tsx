import Footer from '@/components/Footer'
import { SoftContact, tone, type Tone } from '@/components/PageFrame'
import { Bullets, Check, CompareTable, DetailHero, FaqGrid, FlowSteps, Head, NextSteps, NumberedCards, PriceCards, Sec, shadow, SubHead } from '@/components/AiDetailParts'

export const metadata = { title: '実務で学ぶAI活用 | AI導入支援 | MOGCIA', description: '自社の仕事を題材にした、AI活用の研修プログラム。3か月・6か月・1年から選べて、週1時間から始められます。' }

const courses: { name: string; sub: string; color: Tone; featured?: boolean; rows: [string, string][] }[] = [
  { name: '1年コース', sub: '自分たちでつくり、広げる・いちばんお得', color: 'mint', featured: true, rows: [['動画', '約35本（約14時間）＋職種別'], ['取り組む業務', '10以上＋自社ツールの試作1つ'], ['実践会', '前半 隔週・後半 月1回（計18回ほど）'], ['到達の目安', 'つくれる・社内に広げられる'], ['料金', '月50,000円（5名まで 月35,000円）']] },
  { name: '6か月コース', sub: '業務を仕組みにする', color: 'pink', rows: [['動画', '約20本（約8時間）'], ['取り組む業務', '6つ＋社内アシスタント'], ['実践会', '隔週・12回'], ['到達の目安', '業務を仕組みにできる'], ['料金', '月68,000円（5名まで 月48,000円）']] },
  { name: '3か月コース', sub: 'まずは仕事で使えるように', color: 'butter', rows: [['動画', '約10本（約4時間）'], ['取り組む業務', '3つ'], ['実践会', '隔週・6回'], ['到達の目安', '毎日の仕事で使える'], ['料金', '月88,000円（5名まで 月60,000円）']] },
]

const roadmap: [string, string, Tone, string[], string[]][] = [
  ['1〜3か月目', '基本・活用', 'butter', ['困りごとの整理、対象業務を3つ決める', '動画：基本・活用編（約10本）', '対象業務の手順・テンプレートをつくる'], ['3か月', '6か月', '1年']],
  ['4〜6か月目', '応用', 'pink', ['動画：応用編（約10本）', '社内アシスタント・ノーコードでの自動化', '対象業務を6つに広げ、効果を数字で測る'], ['6か月', '1年']],
  ['7〜9か月目', 'つくる', 'mint', ['動画：つくる編（約8本）', '自社用ツールを1つ試作（裏側はMOGCIAが構築）', '実践会は月1回に'], ['1年']],
  ['10〜12か月目', '広げる', 'lilac', ['動画：広げる編（約7本）', '社内での教え方・推進担当の育成', '成果発表会・修了'], ['1年']],
]
const courseTone: Record<string, Tone> = { '3か月': 'butter', '6か月': 'pink', '1年': 'mint' }

const weeks: [string, string, Tone, string[]][] = [
  ['1〜2週目', '整理する', 'pink', ['キックオフ（60分）：目的とルールを共有', '困りごとヒアリング・対象業務を3つ決める', '動画 01〜03（AIの基本・始め方・安全な使い方）']],
  ['3〜4週目', '基本を使う', 'sky', ['動画 04・05（聞き方のコツ・指示の型）', '実践会①：対象業務でAIを試す', '課題：自分の業務で1日1回AIを使う']],
  ['5〜6週目', '業務で試す①', 'butter', ['動画 06・07（文章・資料づくり／議事録・要約）', '実践会②：うまくいかなかった点を直す', '課題：対象業務①の手順をつくる']],
  ['7〜8週目', '業務で試す②', 'butter', ['動画 08・09（Excel・データ／画像・図）', '実践会③：対象業務②③に取り組む', '課題：テンプレートを1週間使ってみる']],
  ['9〜10週目', '手順に整える', 'mint', ['動画 10（社内ルールのつくり方）', '実践会④：手順・テンプレートを仕上げる', '社内AI利用ルールのたたき台']],
  ['11〜12週目', 'まとめる', 'mint', ['実践会⑤：成果の共有（時短の記録）', '手順・テンプレート集の完成', '修了・次のステップの相談']],
]

const videoGroups: [string, string, Tone, string[], string[]][] = [
  ['基本・活用編', '約10本・約4時間', 'butter', ['3か月', '6か月', '1年'], ['生成AIってなに？できること・苦手なこと', 'ChatGPT・Claude・Geminiの始め方', '入力してはいけない情報', 'はじめての指示：聞き方のコツ', '指示の型（役割・目的・条件・出力の形）', '文章・資料づくり', '議事録・要約', 'Excel・データ集計', '画像・図をつくる', '社内AI利用ルールのつくり方']],
  ['応用編', '約10本・約4時間', 'pink', ['6か月', '1年'], ['業務の洗い出し方', '手順・テンプレートの整え方', '社内アシスタントのつくり方', '社内の資料をAIで探せるように', 'ノーコードで自動化', 'スプレッドシートとAIをつなぐ', 'メール・問い合わせ対応の効率化', 'データの整え方の基本', '効果の測り方（時間・件数）', 'うまくいかないときの直し方']],
  ['つくる編', '約8本・約3.5時間', 'mint', ['1年'], ['AIで画面をつくる', 'つくるものの決め方', 'データのつなぎ方', 'ログイン・権限の考え方', 'テストと直し方', '社内に公開するまで', 'セキュリティの基本', 'MOGCIAに任せる部分の見分け方']],
  ['広げる編', '約7本・約2.5時間', 'lilac', ['1年'], ['社内での教え方', '推進担当の育て方', '社内勉強会の開き方', 'ルールの見直し方', '新しいツールとの付き合い方', '効果を社内に共有する', '次の1年の計画づくり']],
]

const jobs: [string, string, string, Tone][] = [
  ['営業', '提案書のたたき台', '2時間 → 30分', 'sky'], ['事務・経理', '会議の議事録', '1時間 → 10分', 'pink'], ['店舗・接客', 'よくある問い合わせへの返信', '1件5分 → 1分', 'butter'],
  ['人事・採用', '求人票・面接質問の作成', '半日 → 1時間', 'mint'], ['経営・管理', '売上データの集計とグラフ', '1時間 → 15分', 'lilac'], ['広報・SNS', '投稿文と画像の下書き', '1本30分 → 10分', 'peach'],
]

const roles: [string, Tone, string[], string][] = [
  ['社長・経営者', 'sky', ['キックオフで、目的を社員に伝える', '進捗レポートを確認'], '月1時間ほど'],
  ['推進担当（1名）', 'pink', ['MOGCIAとの窓口', '受講の進み具合を見て声をかける', '社内ルールづくりをリード'], '週1〜2時間'],
  ['受講者', 'butter', ['動画で予習して、業務で試す', '実践会に参加'], '週1時間〜'],
  ['MOGCIA', 'mint', ['困りごとの整理・課題の設計', '実践会・チャット・フィードバック'], '—'],
]

const outputs: [string, string, Tone][] = [
  ['業務の手順・テンプレート', '3か月で3つ、6か月で6つ、1年で10以上', 'sky'], ['自社ツールの試作', '1年コース。実際に社内で使えるもの', 'mint'],
  ['社内AI利用ルール', '入力してはいけない情報、使っていいツールの一覧', 'pink'], ['時短の記録', 'どの業務で、どれだけ時間が減ったか', 'butter'], ['修了証', '受講者ごとに発行', 'lilac'],
]

const faqs: [string, string][] = [
  ['実践会に参加できない回があったら？', '録画を受講サイトで共有するので、あとから見て追いつけます。'],
  ['途中でコースを延長できますか？', 'はい。3か月から6か月、6か月から1年へ延長できます。'],
  ['ITが苦手な社員でも大丈夫？', 'パソコンの基本操作ができれば始められます。最初は、AIに話しかけるところから。'],
  ['どのAIツールを使いますか？', 'ChatGPT・Claude・Geminiなど、業務や予算に合わせて選びます。無料版から始められます。'],
  ['対面での実践会もできますか？', '九州内であれば対応できます。交通費は別途いただきます。'],
  ['修了したあとは？', '「実践と定着の伴走」で社内に広げたり、「技術サポート」で自社用のツールをつくったりできます。'],
]

export default function PracticalPage() {
  return <main className="bg-white text-ink">
    <DetailHero crumb="実務で学ぶAI活用" label="Practical program" color="butter" title="実務で学ぶAI活用" sub="自社の仕事を、題材にする"
      lead="決まった講義を聞くだけではありません。まず社内の困りごとを整理し、実際の資料や作業を題材にAIを試して、仕事で使える手順に整えます。動画は受講サイトで、いつでも予習・復習できます。"
      stats={[['3か月〜1年', '期間は3つのコースから選べる', 'butter'], ['週1時間〜', '通常業務と両立できるペース', 'pink'], ['10〜35本', '受講サイトの動画（コースによる）', 'sky'], ['3つ〜', '修了時に、自社の業務手順が手元に', 'mint']]} />

    <Sec>
      <Head no="01" label="Overview" color="sky" title="プログラムの全体像" />
      <div className="mt-10"><NumberedCards cols={3} items={[['困りごとの整理', '最初に、時間のかかっている業務・ミスが起きやすい業務を一緒に洗い出し、AIで取り組む業務を決めます。', 'pink'], ['実際の業務で実践', '自社の資料や作業を題材に、AIを試します。実践会で、うまくいかなかった点をその場で直します。', 'butter'], ['使える手順に整える', 'うまくいったやり方を、誰でも使える手順・テンプレートにまとめ、社内のルールも整えます。', 'mint']]} /></div>
    </Sec>

    <Sec color="butter" id="course">
      <Head no="02" label="Course" color="butter" title="コースを選ぶ（3か月／6か月／1年）" note="動画は全コース共通です。期間が長いほど、先の内容まで進みます。途中で延長することもできます。" />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">{courses.map(c => <div key={c.name} className="flex flex-col gap-2 border border-ink bg-white p-6 md:p-7" style={shadow(c.color, c.featured ? 8 : 5)}>
        {c.featured && <span className="self-start rounded-full px-2.5 py-1 text-[10px] font-black" style={{ backgroundColor: tone[c.color].chip }}>おすすめ</span>}
        <span className="text-xl font-black">{c.name}</span>
        <span className="text-xs text-ink-soft">{c.sub}</span>
        <dl className="mt-3">{c.rows.map(([k, v]) => <div key={k} className="grid grid-cols-[6rem_1fr] gap-2 border-t border-ink/10 py-2.5 text-[13px]"><dt className="font-black">{k}</dt><dd className={k === '料金' ? 'font-black' : ''}>{v}</dd></div>)}</dl>
      </div>)}</div>
      <p className="mt-5 text-xs text-ink-soft">表示はすべて税抜・10名までの料金です。11名以上は、1名につき月3,000円を追加。</p>
    </Sec>

    <Sec color="mint">
      <Head no="03" label="For you" color="mint" title="こんな会社・チームにおすすめです" note="業種は問いません。社員5〜50名くらいの会社を想定しています。" />
      <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <div className="border border-ink bg-white p-6 md:p-7" style={shadow('mint', 8)}><h3 className="text-lg font-black">おすすめの会社</h3><ul className="mt-4 grid gap-1.5">{['AIを試してみたいが、何から始めればいいかわからない', '社員にAIを使ってほしいが、教えられる人がいない', 'ChatGPTなどを入れたが、使う人が限られている', '外注せず、社内でできることを増やしたい'].map(i => <Check key={i} color="mint">{i}</Check>)}</ul></div>
        <div className="border border-ink/25 bg-white p-6 md:p-7"><h3 className="text-lg font-black">あまり向いていない会社</h3><ul className="mt-4 grid gap-2 text-[13px] leading-7">{['AIの導入を、すべて外部に任せたい', '受講の時間（週1時間）がとれない'].map(i => <li key={i} className="flex gap-2.5"><span className="mt-1 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#E9ECEF] text-[10px] font-black" aria-hidden>×</span>{i}</li>)}</ul><p className="mt-4 text-[11px] text-ink-soft">この場合は、技術サポートだけのご依頼や単発のワークショップをご提案します。</p></div>
      </div>
    </Sec>

    <Sec>
      <Head no="04" label="Difference" color="sky" title="「見て終わり」にしない研修です" />
      <div className="mt-10"><CompareTable color="sky" left="よくある動画研修" right="実務で学ぶAI活用" rows={[['題材', 'どの会社も同じ例題', '自社の実際の資料・作業'], ['学び方', '動画を見て終わり', '動画で予習 → 実践会で自社の業務に当てはめる'], ['質問', 'フォームで問い合わせ', 'チャットで気軽に、翌営業日までに返信'], ['つまずいたとき', '自分で調べる', '実践会でその場で一緒に直す'], ['ゴール', '受講完了', '業務の手順・テンプレートが社内に残る']]} /></div>
    </Sec>

    <Sec color="butter">
      <Head no="05" label="Schedule" color="butter" title="1年間のロードマップ" note="右のタグは、その期間が含まれるコースです。" />
      <div className="mt-10 border border-ink bg-white" style={shadow('butter')}>{roadmap.map(([when, phase, c, items, cs]) => <div key={when} className="grid gap-3 border-b border-ink/10 p-5 last:border-0 md:grid-cols-[8rem_7rem_1fr_auto] md:items-center md:gap-5">
        <span className="text-base font-black">{when}</span>
        <span className="self-start justify-self-start px-3 py-1 text-xs font-black" style={{ backgroundColor: tone[c].chip }}>{phase}</span>
        <Bullets items={items} color={c} />
        <span className="flex gap-1.5">{cs.map(x => <span key={x} className="border border-ink px-2 py-0.5 text-[10px] font-black" style={{ backgroundColor: tone[courseTone[x]].band }}>{x}</span>)}</span>
      </div>)}</div>
      <div className="mt-12"><SubHead>最初の3か月（全コース共通）の進め方</SubHead><p className="-mt-2 mb-4 text-xs text-ink-soft">週1時間（動画30分＋業務で試す30分）と、隔週60分の実践会が目安です。</p>
        <div className="border border-ink bg-white" style={shadow('butter')}>{weeks.map(([when, phase, c, items]) => <div key={when} className="grid gap-3 border-b border-ink/10 p-5 last:border-0 md:grid-cols-[8rem_7rem_1fr] md:items-center md:gap-5">
          <span className="text-base font-black">{when}</span>
          <span className="self-start justify-self-start px-3 py-1 text-xs font-black" style={{ backgroundColor: tone[c].chip }}>{phase}</span>
          <Bullets items={items} color={c} />
        </div>)}</div>
      </div>
    </Sec>

    <Sec>
      <Head no="06" label="Curriculum" color="pink" title="受講サイトの動画（最大 約35本）" note="動画は予習・復習用の教材です。主役は、自社の業務を題材にした実践です。" />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">{videoGroups.map(([name, meta, c, cs, titles]) => <div key={name} className="border border-ink bg-white p-5 md:p-6" style={shadow(c)}>
        <div className="flex flex-wrap items-center justify-between gap-2"><span className="text-lg font-black">{name}</span><span className="px-2.5 py-1 text-[11px] font-black" style={{ backgroundColor: tone[c].chip }}>{meta}</span></div>
        <div className="mt-2 flex gap-1.5">{cs.map(x => <span key={x} className="border border-ink px-2 py-0.5 text-[10px] font-black" style={{ backgroundColor: tone[courseTone[x]].band }}>{x}</span>)}</div>
        <ol className="mt-3">{titles.map((t, i) => <li key={t} className="grid grid-cols-[2rem_1fr] gap-2 border-t border-ink/10 py-2 text-[13px]"><span className="font-display font-black text-ink-soft">{String(i + 1).padStart(2, '0')}</span>{t}</li>)}</ol>
      </div>)}</div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <div className="border border-ink bg-white p-5 md:p-6" style={shadow('peach')}><div className="flex flex-wrap items-center justify-between gap-2"><span className="text-lg font-black">職種別ショート動画</span><span className="px-2.5 py-1 text-[11px] font-black" style={{ backgroundColor: tone.peach.chip }}>5〜10分 × 約10本・全コース</span></div><p className="mt-2 text-xs text-ink-soft">自分の仕事に近い活用例を、短い動画で。</p><div className="mt-3 flex flex-wrap gap-2">{['営業', '事務・経理', '店舗・接客', '人事・採用', '経営・管理', '広報・SNS', '製造・現場', '医療・介護', '不動産・建設', '飲食'].map(x => <span key={x} className="border border-ink bg-white px-3 py-1.5 text-xs font-bold">{x}</span>)}</div></div>
        <div className="border border-ink bg-white p-5 md:p-6" style={shadow('sky')}><span className="text-base font-black">MOGCIAの受講サイト</span><ul className="mt-3 grid gap-1.5">{['動画はスマホでも見られる', '誰がどこまで見たか、進み具合が一目でわかる', '実践会の録画もあとから見られる', '受講中に、動画が追加・更新される'].map(i => <Check key={i} color="sky">{i}</Check>)}</ul></div>
      </div>
    </Sec>

    <Sec color="pink">
      <Head no="07" label="Use cases" color="pink" title="こんな業務を題材にします" note="時間は一般的な目安で、業務内容によって変わります。" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{jobs.map(([job, task, time, c]) => <div key={job} className="flex flex-col gap-2 border border-ink bg-white p-5" style={shadow(c)}><span className="self-start px-2.5 py-1 text-[11px] font-black" style={{ backgroundColor: tone[c].chip }}>{job}</span><span className="text-base font-black">{task}</span><span className="text-xl font-black">{time}</span></div>)}</div>
    </Sec>

    <Sec>
      <Head no="08" label="Support" color="mint" title="実践会と、受講中のサポート" />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="border border-ink bg-white p-6 md:p-7" style={shadow('pink')}><h3 className="text-lg font-black">実践会の進め方（オンライン60分）</h3><div className="mt-3">{[['15分', '共有', 'それぞれが試したこと、うまくいったことを共有'], ['30分', '課題レビュー', 'つまずいた点を、その場で一緒に直す'], ['15分', '次の課題', '次の2週間で取り組むことを決める']].map(([t, a, b]) => <div key={a} className="grid grid-cols-[3.5rem_6rem_1fr] gap-3 border-t border-ink/10 py-3 text-[13px]"><span className="font-display font-black">{t}</span><span className="font-black">{a}</span><span className="text-ink-soft">{b}</span></div>)}</div></div>
        <div className="border border-ink bg-white p-6 md:p-7" style={shadow('mint')}><h3 className="text-lg font-black">受講中のサポート</h3><div className="mt-3">{[['チャットで質問', '平日、翌営業日までに返信。画面のスクリーンショットを送るだけでOK'], ['課題へのフィードバック', 'つくった手順やテンプレートに、コメントで改善点を'], ['進捗レポート', '誰がどこまで進んだか、どれだけ時短できたかを月1回'], ['実践会の録画', '欠席しても、受講サイトであとから見られる']].map(([a, b]) => <div key={a} className="border-t border-ink/10 py-3"><p className="text-sm font-black">{a}</p><p className="mt-1 text-xs leading-6 text-ink-soft">{b}</p></div>)}</div></div>
      </div>
    </Sec>

    <Sec color="butter">
      <Head no="09" label="Roles" color="butter" title="社内の役割分担" note="推進担当を1名決めていただくと、受講が止まりにくくなります。" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{roles.map(([name, c, items, time]) => <div key={name} className="flex flex-col gap-3 border border-ink bg-white p-5" style={shadow(c)}><span className="text-lg font-black">{name}</span><Bullets items={items} color={c} /><span className="mt-auto border-t border-dashed border-ink/20 pt-2.5 text-[11px] font-bold">目安：{time}</span></div>)}</div>
    </Sec>

    <Sec color="lilac">
      <Head no="10" label="Output" color="lilac" title="修了時に、手元に残るもの" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{outputs.map(([title, text, c]) => <div key={title} className="flex flex-col gap-2 border border-ink bg-white p-5" style={shadow(c)}><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tone[c].dot }} aria-hidden /><span className="text-[15px] font-black">{title}</span><span className="text-xs leading-6 text-ink-soft">{text}</span></div>)}</div>
    </Sec>

    <Sec color="peach">
      <Head no="11" label="How to start" color="peach" title="始めるまでの流れ" />
      <div className="mt-10"><FlowSteps items={[['お問い合わせ', 'フォーム・LINEから', 'sky'], ['無料ヒアリング', 'オンライン30分。いまの業務と目的をうかがいます', 'pink'], ['レベル確認', 'AI診断で、受講者のいまのレベルを確認', 'butter'], ['お見積もり', 'コース・人数・開始日を決めます', 'lilac'], ['キックオフ', '受講サイトのアカウントを発行して、スタート', 'mint']]} /></div>
    </Sec>

    <Sec>
      <Head no="12" label="Requirements" color="lilac" title="受講に必要なもの・別途かかる費用" />
      <div className="mt-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <div className="border border-ink bg-white p-6" style={shadow('lilac')}><h3 className="text-lg font-black">用意していただくもの</h3><ul className="mt-3 grid gap-1.5">{['パソコン（Windows・Mac どちらでも）', '受講サイトのアカウント（MOGCIAが発行）', 'Google または Microsoft のアカウント', 'オンライン会議ができる環境'].map(i => <Check key={i} color="lilac">{i}</Check>)}</ul></div>
        <div className="border border-ink bg-white p-6" style={shadow('butter')}><h3 className="text-lg font-black">受講料とは別にかかる場合がある費用</h3><div className="mt-3">{[['AIツールの有料版', 'ChatGPT・Claude などの有料版・法人プランを使う場合'], ['そのほかのツール', '業務で使うツールの有料プランが必要な場合']].map(([a, b]) => <div key={a} className="grid gap-1 border-t border-ink/10 py-3 text-[13px] sm:grid-cols-[10rem_1fr]"><span className="font-black">{a}</span><span className="text-ink-soft">{b}</span></div>)}</div><p className="mt-3 text-[11px] text-ink-soft">無料版から始めて、必要になったら有料版に切り替える進め方もできます。</p></div>
      </div>
    </Sec>

    <Sec id="price">
      <Head no="13" label="Price" color="butter" title="料金" />
      <div className="mt-10"><PriceCards items={[['1年コース（いちばんお得）', '月50,000円', '10名まで（5名まで 月35,000円）・動画 約35本・実践会18回ほど', 'mint', true], ['6か月コース', '月68,000円', '10名まで（5名まで 月48,000円）・動画 約20本・実践会12回', 'pink'], ['3か月コース', '月88,000円', '10名まで（5名まで 月60,000円）・動画 約10本・実践会6回', 'butter']]} /></div>
      <div className="mt-5"><PriceCards items={[['単発ワークショップ', '50,000円〜', '90分・テーマを選んで、その場で実践', 'sky'], ['受講者の追加', '月3,000円／名', '11名以上の場合', 'lilac']]} /></div>
      <p className="mt-4 text-xs text-ink-soft">表示はすべて税抜です。</p>
    </Sec>

    <Sec color="lilac">
      <Head no="14" label="FAQ" color="lilac" title="よくある質問" />
      <div className="mt-10"><FaqGrid items={faqs} /></div>
    </Sec>

    <Sec color="mint">
      <Head no="15" label="Next step" color="mint" title="修了したあとは" />
      <div className="mt-10"><NextSteps items={[['実践と定着の伴走', '社内に根づかせる', '手順を社内に広げ、使われ続ける状態をつくる月額の伴走です。', '実践と定着の伴走を見る', '/services/ai/support', 'mint'], ['技術サポート', '自社用のツールをつくる', '画面はAIで自分たちで。データやセキュリティなど難しい裏側をMOGCIAが構築します。', '技術サポートを見る', '/services/ai/tech', 'lilac']]} /></div>
    </Sec>

    <SoftContact body="「うちの業務でも使える？」から、お気軽にご相談ください" />
    <Footer />
  </main>
}
