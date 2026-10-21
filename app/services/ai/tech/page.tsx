import Footer from '@/components/Footer'
import { SoftContact, tone, type Tone } from '@/components/PageFrame'
import { Bullets, Check, FaqGrid, FlowSteps, Head, NextSteps, NumberedCards, PriceCards, Sec, shadow, DetailHero } from '@/components/AiDetailParts'

export const metadata = { title: '技術サポート | AI導入支援 | MOGCIA', description: 'つくれる部分は、自分たちで。データ・権限・連携・公開環境など、難しい裏側だけをMOGCIAが設計・構築します。初期費用0円の月額制。' }

const builds: [string, string, Tone][] = [
  ['業務用の小さなツール', '見積もり、日報、予約管理など、対象業務を絞って設計', 'sky'], ['データの見える化', '売上・在庫・活動記録など、必要な情報を一画面に整理', 'pink'],
  ['社内資料のAI検索', '許可した資料の範囲から、必要な情報を探しやすくする', 'butter'], ['既存サービスとの連携', 'いま使っているツールを確認し、無理のない方法でつなぐ', 'mint'],
  ['権限・バックアップ', '扱う情報に合わせて、見られる範囲と保存方法を設計', 'lilac'], ['公開後の保守', '対応範囲を事前に決め、不具合対応や必要な改修を継続', 'peach'],
]

const examples: [string, Tone, string[], string[]][] = [
  ['見積もり作成ツール', 'sky', ['入力画面とレイアウト', '見積書のデザイン', '項目の追加・変更'], ['顧客・商品データの保存', '担当者ごとのログイン', 'PDF出力と過去データの検索']],
  ['日報アプリ', 'pink', ['入力項目と画面', '日報のテンプレート', '集計の見せ方'], ['データベースの設計', '上長だけが全員分を見られる権限', '毎週の自動集計とメール通知']],
  ['社内資料のAI検索', 'butter', ['よく聞かれる質問のリスト', '回答の言い回しの調整', '使い方の社内説明'], ['検索してよい資料の範囲設定', '社外に出ない仕組み', '資料の追加・更新の自動化']],
]

const faqs: [string, string][] = [
  ['研修を受けていなくても頼めますか？', 'はい。技術サポートだけのご依頼もお受けしています。'],
  ['まだ何もつくっていなくても大丈夫？', '大丈夫です。つくりたいもののイメージから一緒に整理し、画面の試作から始めることもできます。'],
  ['いま使っているツールとつなげられますか？', '多くのサービスは連携できます。まずは使っているツールを確認させてください。'],
  ['つくったものは、誰のものになりますか？', '御社のものです。データや画面は、御社のアカウントで管理できる形を基本にしています。'],
  ['保守をやめたら、使えなくなりますか？', '引き継ぎの手順書をお渡しします。ほかの会社に引き継ぐことも可能です。'],
  ['12か月より前にやめられますか？', 'やめられます。その場合は、残りの構築費を精算していただきます。'],
]

export default function TechPage() {
  return <main className="bg-white text-ink">
    <DetailHero crumb="技術サポート" label="Technical support" color="lilac" title="技術サポート" sub="つくれる部分は、自分たちで。難しい裏側だけ、MOGCIAに。"
      lead="AIを使えば、専門的な知識がなくても、画面や小さな業務ツールを試作できるようになってきました。そこは自分たちで育てる。データベース、権限、外部サービスとの連携、公開環境など、専門知識が必要な部分だけをMOGCIAが設計・構築します。"
      stats={[['画面', '使い勝手は自分たちで改善', 'mint'], ['裏側', 'データ・権限・連携はMOGCIA', 'lilac'], ['初期費用0円', '構築も月額にふくめて', 'butter'], ['月30,000円〜', '構築＋保守', 'sky']]} />

    <Sec color="sky">
      <Head no="01" label="For you" color="sky" title="こんなところで、止まっていませんか" />
      <div className="mt-10"><NumberedCards items={[['「AIで画面はつくれたけど、社内に公開する方法がわからない」', '', 'sky'], ['「データをどこに保存すればいいか、不安」', '', 'pink'], ['「ログインや、見られる人の制限ができない」', '', 'butter'], ['「つくったものを、動かし続けられるか心配」', '', 'mint']]} /></div>
    </Sec>

    <Sec>
      <Head no="02" label="Roles" color="lilac" title="自分たちで育てる部分と、MOGCIAに任せる部分" />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="border border-ink bg-white p-6 md:p-7" style={shadow('mint')}><span className="font-display text-[10px] font-black tracking-[.14em] text-ink-soft">YOUR TEAM</span><h3 className="mt-2 text-xl font-black">自分たちで育てる部分</h3><p className="mt-2 text-xs text-ink-soft">現場の人がAIと一緒に試し、仕事に合わせて直していく部分です。</p><ul className="mt-4 grid gap-1.5">{['画面のレイアウト・色・文章', '入力する項目の追加や変更', 'ボタンの位置など、使い勝手の改善', '日々の使い方・社内への説明'].map(i => <Check key={i} color="mint">{i}</Check>)}</ul></div>
        <div className="border border-ink bg-white p-6 md:p-7" style={shadow('lilac')}><span className="font-display text-[10px] font-black tracking-[.14em] text-ink-soft">MOGCIA</span><h3 className="mt-2 text-xl font-black">専門家に任せる部分</h3><p className="mt-2 text-xs text-ink-soft">安全に動かし続けるために、専門知識が必要な部分です。</p><ul className="mt-4 grid gap-1.5">{['データベース（データの置き場所）', 'ログイン・権限（誰が何を見られるか）', '外部サービスとの連携（API）', '公開環境・ドメイン・SSL', 'バックアップ・不具合の監視'].map(i => <Check key={i} color="lilac">{i}</Check>)}</ul></div>
      </div>
    </Sec>

    <Sec color="lilac">
      <Head no="03" label="What we do" color="lilac" title="対応できること" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{builds.map(([t, d, c]) => <div key={t} className="flex flex-col gap-2 border border-ink bg-white p-6" style={shadow(c)}><span className="flex items-center gap-2.5"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: tone[c].dot }} aria-hidden /><span className="text-base font-black">{t}</span></span><span className="text-xs leading-6 text-ink-soft">{d}</span></div>)}</div>
    </Sec>

    <Sec>
      <Head no="04" label="Flow" color="butter" title="進め方" note="試作がまだない場合も大丈夫です。つくりたいもののイメージから一緒に整理します。" />
      <div className="mt-10"><FlowSteps items={[['相談', 'つくりたいもの・試作中の画面を見せていただきます', 'sky'], ['設計', '扱うデータ、見られる人、つなぐサービスを決めます', 'pink'], ['構築', '裏側をMOGCIAが構築。画面は自分たちで直せる形に', 'butter'], ['引き渡し', 'どこを自分たちで直せるか、手順書つきで説明', 'mint'], ['保守', '公開後の不具合対応・小さな改修を月額で', 'lilac']]} /></div>
    </Sec>

    <Sec color="pink">
      <Head no="05" label="Examples" color="pink" title="たとえば、こんな分担になります" />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">{examples.map(([name, c, you, me]) => <div key={name} className="flex flex-col gap-4 border border-ink bg-white p-6" style={shadow(c)}>
        <span className="text-lg font-black">{name}</span>
        <div className="grid gap-4 sm:grid-cols-2"><div><p className="mb-1.5 text-[11px] font-black text-ink-soft">自分たちでつくった部分</p><Bullets items={you} color="mint" small /></div><div><p className="mb-1.5 text-[11px] font-black text-ink-soft">MOGCIAが担当した部分</p><Bullets items={me} color="lilac" small /></div></div>
      </div>)}</div>
    </Sec>

    <Sec>
      <Head no="06" label="Maintenance" color="mint" title="公開後の保守でお預かりする範囲" note="対応範囲は、構築の前に一緒に決めます。" />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="border border-ink bg-white p-6 md:p-7" style={shadow('mint')}><h3 className="text-lg font-black">保守に含まれること</h3><ul className="mt-3 grid gap-1.5">{['不具合の調査と修正', 'セキュリティ更新・バックアップの確認', '小さな改修（プランにより月1〜3時間まで）', '使い方の質問（チャット・平日）'].map(i => <Check key={i} color="mint">{i}</Check>)}</ul></div>
        <div className="border border-ink/25 bg-[#F7F7F5] p-6 md:p-7"><h3 className="text-lg font-black">別途ご相談になること</h3><div className="mt-3"><Bullets items={['大きな機能追加（別途お見積もり）', '画面の大幅な作り直し', '御社で変更された部分の不具合']} color="pink" /></div></div>
      </div>
    </Sec>

    <Sec color="lilac">
      <Head no="07" label="Security" color="lilac" title="安心して使い続けるために" />
      <div className="mt-10 grid gap-4 md:grid-cols-2">{[['扱うデータに合わせた設計', '個人情報など、扱う情報の重さに合わせて保存場所と見られる範囲を決めます。'], ['最小限の権限', '必要な人が、必要な情報だけを見られるようにします。'], ['バックアップと記録', 'データのバックアップと、誰がいつ操作したかの記録を残します。'], ['MOGCIAの方針も公開', '自社のセキュリティ・AI利用方針を公開しています。']].map(([t, d], i) => <div key={t} className="flex gap-4 border border-ink bg-white p-5" style={shadow('lilac')}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-xs font-black" style={{ backgroundColor: tone.lilac.chip }}>0{i + 1}</span><span className="flex flex-col gap-1.5"><span className="text-base font-black">{t}</span><span className="text-xs leading-6 text-ink-soft">{d}</span></span></div>)}</div>
    </Sec>

    <Sec id="price">
      <Head no="08" label="Price" color="butter" title="料金" />
      <div className="mt-10"><PriceCards items={[['ツール1つプラン', '月30,000円〜', '小さなツール1つの設計・構築＋保守（改修 月1時間まで）・12か月', 'lilac', true], ['ツール複数プラン', '月50,000円〜', 'ツール2〜3つ、または中規模のもの＋保守（改修 月3時間まで）・12か月', 'mint']]} /></div>
      <div className="mt-5"><PriceCards items={[['保守のみ', '月20,000円〜', '自分たちでつくったツールを預かる・最低3か月', 'sky'], ['スポット技術相談', '20,000円／時間', '試作を見てほしい・相談だけしたい', 'pink']]} /></div>
      <p className="mt-4 text-xs leading-6 text-ink-soft">初期費用0円。構築費は12か月の月額にふくめています（途中解約の場合は、残りの構築費を精算）。13か月目からは保守の金額になります。小規模なサーバー代は保守にふくみます。　・　表示はすべて税抜</p>
    </Sec>

    <Sec color="lilac">
      <Head no="09" label="FAQ" color="lilac" title="よくある質問" />
      <div className="mt-10"><FaqGrid items={faqs} /></div>
    </Sec>

    <Sec color="mint">
      <Head no="10" label="Next step" color="mint" title="あわせて検討したいサービス" />
      <div className="mt-10"><NextSteps items={[['実務で学ぶAI活用', 'まずは使えるようになる', '自社の仕事を題材にした、AI活用の研修プログラムです。', '実務で学ぶAI活用を見る', '/services/ai/practical', 'butter'], ['実践と定着の伴走', '社内に根づかせる', '手順を社内に広げ、使われ続ける状態をつくる月額の伴走です。', '実践と定着の伴走を見る', '/services/ai/support', 'mint']]} /></div>
    </Sec>

    <SoftContact body="「これ、つくれる？」の段階から、お気軽にご相談ください" />
    <Footer />
  </main>
}
