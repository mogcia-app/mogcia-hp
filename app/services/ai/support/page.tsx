import Footer from '@/components/Footer'
import { SoftContact, tone } from '@/components/PageFrame'
import { DetailHero, FaqGrid, FlowSteps, Head, NextSteps, NumberedCards, PriceCards, Sec, shadow } from '@/components/AiDetailParts'

export const metadata = { title: '実践と定着の伴走 | AI導入支援 | MOGCIA', description: '研修のあと、AIが使われ続ける会社に。月1回の定例とチャットで、試して、直して、社内に広げるところまで並走します。' }

const faqs: [string, string][] = [
  ['研修を受けていなくても申し込めますか？', '基本は「実務で学ぶAI活用」の修了後をおすすめしています。すでにAIを使っている会社は、ご相談ください。'],
  ['途中でプランを変えられますか？', 'はい。月単位で、スタンダードとライトを切り替えられます。'],
  ['定例に参加する人数に制限は？', 'オンラインなので、制限はありません。'],
  ['自社用のツールもつくれますか？', '「技術サポート」で、ツールの裏側の構築と保守を承ります。'],
]

export default function SupportPage() {
  return <main className="bg-white text-ink">
    <DetailHero crumb="実践と定着の伴走" label="Support" color="mint" title="実践と定着の伴走" sub="研修のあと、使われ続ける会社に"
      lead="研修が終わると、だんだん使われなくなる。そんな「よくある失敗」を防ぐための月額の伴走です。毎月の定例とチャットで、試して、直して、社内に広げるところまで並走します。"
      stats={[['月1回', '定例ミーティング（60分）', 'mint'], ['平日', 'チャットで相談', 'sky'], ['毎月', '活用状況のレポート', 'butter'], ['いつでも', '受講サイトの動画を見放題', 'pink']]} />

    <Sec color="sky">
      <Head no="01" label="For you" color="sky" title="研修のあと、こんなことはありませんか" />
      <div className="mt-10"><NumberedCards items={[['「研修のあと、だんだん使われなくなった」', '', 'sky'], ['「使っているのは、一部の社員だけ」', '', 'pink'], ['「新しく入った社員に教える人がいない」', '', 'butter'], ['「新しいツールや機能が多すぎて、追いつけない」', '', 'mint']]} /></div>
    </Sec>

    <Sec>
      <Head no="02" label="What we do" color="mint" title="伴走でやること" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{([['試す', '実務で学んだ手順を、ほかの業務・ほかの部署にも広げる', 'sky'], ['直す', 'うまくいかない使い方を、定例とチャットで改善する', 'pink'], ['広げる', '社内勉強会の準備、新しい社員向けの動画の案内', 'butter'], ['測る', 'どの業務で、どれだけ時間が減ったかを毎月記録', 'mint']] as const).map(([t, d, c]) => <div key={t} className="flex flex-col gap-2.5 border border-ink bg-white p-6" style={shadow(c)}><span className="text-2xl font-black">{t}</span><span className="text-xs leading-6 text-ink-soft">{d}</span></div>)}</div>
    </Sec>

    <Sec color="butter">
      <Head no="03" label="Monthly cycle" color="butter" title="毎月の進め方" note="このサイクルを毎月くり返して、AIを使う業務を少しずつ増やしていきます。" />
      <div className="mt-10"><FlowSteps items={[['定例ミーティング（1週目）', '先月の振り返りと、今月取り組む業務を決める', 'mint'], ['現場で試す（2〜3週目）', 'チャットで相談しながら、新しい使い方を試す', 'sky'], ['レポート（4週目）', '活用状況と時短の効果を、担当者・社長へ', 'butter']]} /></div>
    </Sec>

    <Sec>
      <Head no="04" label="Roadmap" color="pink" title="社内で自走するまで" note="目安です。会社の規模や進み具合に合わせて調整します。" />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">{([['1〜3か月目', '推進担当が回せるように', '推進担当と一緒に、定例の進め方・ルールの見直し方を身につける', 'pink'], ['4〜6か月目', 'ほかの部署へ広げる', 'うまくいった手順を、ほかの部署・業務に展開する', 'butter'], ['7か月目〜', '社内で自走する', '推進担当が中心になって回し、MOGCIAは相談役に', 'mint']] as const).map(([w, t, d, c]) => <div key={w} className="flex flex-col gap-2 border border-ink bg-white p-6" style={shadow(c)}><span className="font-display text-[11px] font-black text-ink-soft">{w}</span><span className="text-lg font-black">{t}</span><span className="text-xs leading-6 text-ink-soft">{d}</span></div>)}</div>
    </Sec>

    <Sec color="mint">
      <Head no="05" label="Support" color="mint" title="含まれるサポート" />
      <div className="mt-10 border border-ink bg-white p-6 md:p-7" style={shadow('mint')}><div className="grid gap-x-10 md:grid-cols-2">{[['月1回の定例ミーティング（60分）', 'オンライン。推進担当＋受講者で参加'], ['チャットで相談', '平日、翌営業日までに返信'], ['月1回の活用レポート', '使っている人数・時短の効果・次の改善点'], ['受講サイトの動画見放題', '新しく入った社員も、いつでも学べる'], ['新しいツール・機能の情報共有', '業務に関係のあるものだけを、わかりやすく']].map(([a, b]) => <div key={a} className="border-t border-ink/10 py-3"><p className="text-sm font-black">{a}</p><p className="mt-1 text-xs leading-6 text-ink-soft">{b}</p></div>)}</div></div>
    </Sec>

    <Sec id="price">
      <Head no="06" label="Price" color="butter" title="料金" />
      <div className="mt-10"><PriceCards items={[['伴走スタンダード', '月50,000円', '月1回定例＋チャット＋レポート＋動画見放題', 'mint', true], ['伴走ライト', '月30,000円', 'チャット＋月1回の30分相談＋動画見放題', 'sky'], ['動画見放題のみ', '月10,000円', '新しい社員の受講用に（10名まで）', 'pink']]} /></div>
      <p className="mt-4 text-xs text-ink-soft">「実務で学ぶAI活用」を修了した会社向けのプランです。　・　最低契約期間は3か月　・　表示はすべて税抜</p>
    </Sec>

    <Sec color="lilac">
      <Head no="07" label="FAQ" color="lilac" title="よくある質問" />
      <div className="mt-10"><FaqGrid items={faqs} /></div>
    </Sec>

    <Sec color="mint">
      <Head no="08" label="Next step" color="mint" title="あわせて検討したいサービス" />
      <div className="mt-10"><NextSteps items={[['実務で学ぶAI活用', 'まずは学ぶ', '自社の仕事を題材にした、AI活用の研修プログラムです。', '実務で学ぶAI活用を見る', '/services/ai/practical', 'butter'], ['技術サポート', '自社用のツールをつくる', '画面はAIで自分たちで。データやセキュリティなど難しい裏側をMOGCIAが構築します。', '技術サポートを見る', '/services/ai/tech', 'lilac']]} /></div>
    </Sec>

    <SoftContact body="「研修のあと、どう続ける？」から、お気軽にご相談ください" />
    <Footer />
  </main>
}
