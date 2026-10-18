import { commoStories } from '@/lib/commo-stories'
import { signalStories } from '@/lib/signal-stories'
import { systemStories } from '@/lib/system-stories'
import { snsStories } from '@/lib/sns-stories'
import { snsWebStories } from '@/lib/sns-web-stories'
import { webStories } from '@/lib/web-stories'

export const services = [
  { number: '01', title: 'SNSで発信したい', description: '企画・投稿づくりから分析・改善まで見つけてもらえる発信を、続けられる形に', tags: ['SNS運用代行', 'Signal.'], tone: 'blue' },
  { number: '02', title: 'サイト・LPをつくりたい', description: '伝えたい価値と導線を整理して、公開後の改善まで見据えたサイト・LPをつくります', tags: ['LP・HP制作', '企業向けパック'], tone: 'pink' },
  { number: '03', title: 'お客さまとつながりたい', description: '予約やお問い合わせ、クーポン配信など、お客様とのさまざまな接点をひとつにつなぎ、関係を育てる導線をつくります', tags: ['commo.', 'Roomly.'], tone: 'purple' },
  { number: '04', title: 'AIで仕組みをつくりたい', description: '営業のロープレや社内ナレッジをAIで業務に合わせたAI・システム開発もご相談ください', tags: ['selmo.', 'upmo', 'AI開発'], tone: 'silver' },
]

export const products = [
  { label: '営業AI', name: 'selmo.', lead: '営業教育を、仕組みにする', description: '商談分析・テレアポ分析・ロープレ・ナレッジ管理をひとつにまとめ、営業教育の属人化を解消するAIプラットフォームです。', tone: 'product-yellow', href: 'https://selmotool.com/' },
  { label: 'LINE構築・運用', name: 'commo.', lead: 'LINEで、予約とリピートを育てる', description: 'LINE公式アカウントの構築から予約導線づくり、クーポン配信、リピーター施策まで支援します', tone: 'product-purple', href: 'https://commotool.com/' },
  { label: '宿泊業向けチャット', name: 'Roomly.', lead: 'フロント対応を、チャットでシンプルに', description: 'QRコードからすぐ使える、ゲストとホテルスタッフをつなぐチャット型フロントサポート', tone: 'product-red', href: 'https://roomlychat.com/' },
  { label: '社内AI', name: 'upmo', lead: '社内の「あれどこ？」に、AIが即答', description: 'PDFやマニュアルなど、散らばった社内情報をAIが理解。必要な答えをチャットですぐに引き出せます。', tone: 'product-blue', href: 'https://upmotool.com/' },
  { label: 'SNS運用AI', name: 'Signal.', lead: 'SNSの次の一手を、AIが提案', description: '投稿アイデアと分析・改善提案をAIが支援し、何を発信すればよいか分からない状態を解消します。', tone: 'product-orange', href: 'https://www.signalapp.jp/' },
  { label: 'アクセス解析', name: 'ismo.', lead: '見えなかった改善が、見えてくる', description: 'アクセス解析、ユーザー行動、SNSからLPへの導線を可視化し、数字を具体的な改善へつなげます。', tone: 'pink', href: 'https://www.ismo-data.com/' },
]

export type StoryStep = { mark: 'M' | 'O' | 'G'; title: string; body: string }
export type StoryMetric = { value: string; label: string }
export type StoryTimeline = { time: string; label: string }
export type Story = {
  slug: string
  industry: string
  purpose: string
  client: string
  clientDetail: string
  problem: string
  product: string
  answer: string
  tone: string
  image: string
  before: string
  approach: StoryStep[]
  metrics: StoryMetric[]
  after: string
  period: string
  team: string
  price: string
  scaleLabel?: string
  scaleItems?: { label: string; value: string }[]
  timeline: StoryTimeline[]
  quote: string
  quoteBy: string
}

export const stories = ([
  ...commoStories,
  ...signalStories,
  ...systemStories,
  ...snsStories,
  ...snsWebStories,
  ...webStories,
  /*{
    slug: 'hotel-line-i', industry: 'ホテル・旅館', purpose: '顧客対応・リピート', client: '宿泊施設 iさま', clientDetail: '小規模宿泊施設', product: 'commo.', tone: 'product-purple', image: '/our-products-commo.png',
    problem: '宿泊後もつながるLINEで、一度きりの利用を次の予約へ',
    answer: 'LINE公式アカウントと予約導線を整え、宿泊後もお客さまとつながれる運用を構築しました。',
    before: '宿泊後のお客さまと継続的につながる手段がなく、再予約のきっかけをつくれていませんでした。キャンペーンや季節の宿泊プランを案内したくても、情報を届ける方法が限られていました。',
    approach: [
      { mark: 'M', title: 'つくる', body: 'LINE公式アカウントの設計から、リッチメニュー・予約導線・配信内容の制作まで一貫してサポート。' },
      { mark: 'O', title: 'まわす', body: 'チェックイン時の友だち追加案内や、宿泊後のメッセージ配信を運用に組み込み、継続的に接点を持てる仕組みを整備。' },
      { mark: 'G', title: '育てる', body: '配信の開封・クリック・予約への反応を確認しながら、配信内容やクーポン施策を改善。' },
    ],
    metrics: [{ value: '250人', label: 'LINE友だち数' }, { value: '月4回', label: '定期配信の頻度' }],
    after: '宿泊後もお客さまとつながりを持てるようになり、季節のプランやキャンペーンを直接案内できる環境が整いました。',
    period: '初期構築約1か月、その後継続運用', team: '2名（ディレクター・制作担当）', price: '構築内容・配信頻度に応じて個別見積もり',
    timeline: [{ time: '1週目', label: 'ヒアリング・導線設計' }, { time: '2〜3週目', label: 'アカウント・メニュー制作' }, { time: '4週目', label: '公開・運用スタート' }, { time: '継続', label: '配信・分析・改善' }],
    quote: '宿泊して終わりではなく、その後もお客さまとつながれるようになったのが嬉しいです。', quoteBy: '宿泊施設 iさま｜運営担当者',
  },*/
  {
    slug: 'hotel-roomly-b', industry: 'ホテル・旅館', purpose: '顧客対応・リピート', client: 'ビジネスホテル Bさま', clientDetail: '客室数50室規模', product: 'Roomly.', tone: 'product-red', image: '/our-products-roomly.png',
    problem: '客室からの問い合わせをチャットへ。フロント業務をもっとスムーズに。', answer: 'QRコードから利用できるチャットを導入し、電話と使い分けられる問い合わせ対応を整えました。',
    before: 'Wi-Fiの接続方法や設備の使い方、周辺施設についての問い合わせがフロントに集中。電話対応や内線の取次ぎが重なり、チェックイン業務にも影響していました。',
    approach: [{ mark: 'M', title: 'つくる', body: '客室に設置したQRコードから、ゲストがすぐにスタッフへ問い合わせできるチャット環境を導入。' }, { mark: 'O', title: 'まわす', body: 'フロントスタッフがチャットで問い合わせを確認・返信できるようにし、従来の電話対応と使い分ける運用を整備。' }, { mark: 'G', title: '育てる', body: 'よくある問い合わせを整理し、案内内容や対応フローを見直すことで、よりスムーズなゲスト対応へ改善。' }],
    metrics: [{ value: '20室', label: '導入対象客室' }, { value: '24時間', label: 'ゲストがチャットを送信できる時間' }], after: '電話以外の問い合わせ窓口ができたことで、スタッフが対応状況を把握しやすくなり、ゲストも気軽に質問できる環境へ。返信はスタッフの対応時間内に実施します。',
    period: '導入準備約2〜4週間', team: '2名（導入支援・施設担当者）', price: '客室数・利用条件に応じて個別見積もり', timeline: [{ time: '1週目', label: '業務ヒアリング' }, { time: '2週目', label: 'チャット設定・QRコード準備' }, { time: '3〜4週目', label: 'スタッフ案内・運用開始' }, { time: '継続', label: '問い合わせ内容の整理・改善' }], quote: '電話を取れないタイミングでも問い合わせを確認でき、フロント業務が進めやすくなりました。', quoteBy: 'ビジネスホテル Bさま｜フロント責任者',
  },
  {
    slug: 'internal-ai-upmo-c', industry: 'サービス業', purpose: '業務改善', client: 'サービス業 C社', clientDetail: '従業員30名規模', product: 'upmo', tone: 'product-blue', image: '/our-products-upmo.png',
    problem: '社内資料を探す時間を、AIに聞いて解決する時間へ。', answer: '分散していた資料を整理し、自然な言葉で質問できる社内AIの利用環境を構築しました。', before: '業務マニュアルや社内ルールが複数のフォルダに分散し、必要な情報を探すのに時間がかかっていました。新人からの質問も特定の社員に集中していました。',
    approach: [{ mark: 'M', title: 'つくる', body: 'PDF・マニュアル・社内FAQを整理し、自然な言葉で質問できる社内AIの利用環境を構築。' }, { mark: 'O', title: 'まわす', body: '社員が日常業務でAIに質問できるようにし、資料の更新や管理方法もあわせて整備。' }, { mark: 'G', title: '育てる', body: '回答できなかった質問や不足している情報を確認し、マニュアルやナレッジを継続的に追加。' }], metrics: [{ value: '30名', label: '利用対象社員' }, { value: '100件', label: '登録した社内資料' }], after: '資料をひとつずつ探す必要が減り、社員が必要な情報にアクセスしやすい環境へ。質問を受ける担当者の負担軽減にもつながりました。', period: '初期導入約1か月', team: '2名（導入支援・社内管理者）', price: '利用人数・資料量に応じて個別見積もり', timeline: [{ time: '1週目', label: '資料・業務課題の整理' }, { time: '2〜3週目', label: '資料登録・回答テスト' }, { time: '4週目', label: '社内公開' }, { time: '継続', label: '資料追加・回答精度の改善' }], quote: '社内のことを確認するたびに誰かへ聞く必要がなくなり、仕事を進めやすくなりました。', quoteBy: 'サービス業 C社｜管理部門担当者',
  },
  {
    slug: 'salon-signal-d', industry: '美容', purpose: '集客・認知', client: '美容サロン Dさま', clientDetail: 'Instagram運用', product: 'Signal.', tone: 'product-orange', image: '/our-products-signal.png', problem: '投稿のネタ探しから分析まで。SNS運用を続けられる仕組みに。', answer: 'AIによる投稿アイデアと分析を取り入れ、企画・投稿・改善を無理なく続けられる流れを整えました。', before: 'Instagramを運用しているものの、投稿のアイデアが思いつかず、更新頻度が不安定に。投稿後の分析も十分にできず、どんな内容が反応されているのか分からない状態でした。', approach: [{ mark: 'M', title: 'つくる', body: 'Signal.を導入し、アカウントの投稿内容や反応を確認できる分析・投稿企画の環境を整備。' }, { mark: 'O', title: 'まわす', body: 'AIによる投稿アイデアや改善提案を参考に、月間の投稿計画を立て、無理なく運用できるフローを構築。' }, { mark: 'G', title: '育てる', body: '投稿ごとの反応を振り返り、テーマや見せ方を見直しながら、次の発信内容を改善。' }], metrics: [{ value: '週3回', label: '目標投稿頻度' }, { value: '月1回', label: '運用振り返り' }], after: '思いつきで投稿する運用から、データをもとに企画・投稿・改善を繰り返せる運用へ。', period: '初期設定約2週間、その後継続運用', team: '1〜2名（運用担当・導入支援）', price: '利用機能・アカウント数に応じて個別見積もり', timeline: [{ time: '1週目', label: 'アカウント・課題の確認' }, { time: '2週目', label: '初期設定・運用説明' }, { time: '3週目', label: '投稿計画の運用開始' }, { time: '継続', label: '分析・企画改善' }], quote: '次に何を投稿するか迷う時間が減り、発信を続けやすくなりました。', quoteBy: '美容サロン Dさま｜オーナー',
  },
  {
    slug: 'web-analysis-ismo-e', industry: 'Web制作', purpose: '集客・認知', client: 'Web制作会社 E社', clientDetail: 'クライアントサイト運用', product: 'ismo.', tone: 'pink', image: '/our-products-ismo.png', problem: 'アクセス数を見るだけの分析から、次の改善が分かる分析へ。', answer: 'アクセス解析とユーザー行動をまとめ、データを具体的な改善提案へつなげる運用を整えました。', before: 'サイト公開後のアクセス状況は確認できても、ユーザーがどこで離脱し、何を改善すべきか判断しにくい状態でした。クライアントへの改善提案も、アクセス数の報告が中心になっていました。', approach: [{ mark: 'M', title: 'つくる', body: 'アクセス解析・ユーザー行動・流入経路をまとめて確認できる分析環境を構築。' }, { mark: 'O', title: 'まわす', body: '定期的にデータを確認し、課題の発見から改善案の整理までを運用フローに組み込みました。' }, { mark: 'G', title: '育てる', body: 'ユーザーの離脱ポイントや流入経路ごとの反応を比較し、ページ構成・CTA・導線を継続的に改善。分析結果を次の施策につなげる運用を整えました。' }], metrics: [{ value: '月1回', label: '定期分析・改善提案' }, { value: '3サイト', label: '分析対象サイト数' }], after: 'アクセス数だけでなく、ユーザーの行動や改善すべきポイントを把握できるように。クライアントへの報告も、数字の共有から具体的な改善提案へ変わりました。', period: '初期導入約2週間、その後継続運用', team: '2名（分析担当・Web担当）', price: '分析対象・利用機能に応じて個別見積もり', timeline: [{ time: '1週目', label: 'サイト・計測環境の確認' }, { time: '2週目', label: '分析設定・初期レポート' }, { time: '3週目', label: '分析・改善提案スタート' }, { time: '継続', label: 'データ確認・施策改善' }], quote: 'これまではアクセス数を報告するだけでしたが、今は何を改善すべきかまで提案できるようになりました。', quoteBy: 'Web制作会社 E社｜Webディレクター',
  },
  {
    slug: 'restaurant-sns-f', industry: '飲食', purpose: '集客・認知', client: '飲食店 Fさま', clientDetail: '地域密着型店舗', product: 'SNS運用代行', tone: 'silver', image: '/sns-service.png', problem: '更新が止まっていたInstagramを、お店の魅力が伝わる発信へ。', answer: '投稿設計から撮影・制作・公開・分析までを支援し、店舗の負担を抑えながら続く発信を整えました。', before: 'Instagramのアカウントはあるものの、日々の店舗運営が忙しく、投稿が後回しになっていました。写真や投稿内容もその場で考えていたため、更新頻度にばらつきがあり、お店の魅力を十分に伝えられていませんでした。', approach: [{ mark: 'M', title: 'つくる', body: '店舗の特徴やターゲットを整理し、投稿テーマ・デザイン・撮影方針を設計。メニュー紹介や店舗の雰囲気が伝わる投稿テンプレートを制作しました。' }, { mark: 'O', title: 'まわす', body: '月間の投稿計画を作成し、撮影・投稿制作・公開までを一貫してサポート。店舗側の負担を抑えながら、継続的に発信できる体制を整えました。' }, { mark: 'G', title: '育てる', body: '投稿ごとのリーチや保存数、プロフィールへのアクセスを確認し、反応のよいテーマや見せ方を次の投稿に反映しました。' }], metrics: [{ value: '月16本', label: '投稿制作・公開数' }, { value: '+35%', label: 'プロフィールアクセス増加率' }], after: '投稿が安定して続くようになり、メニューだけでなく、お店の雰囲気やこだわりも伝えられるアカウントへ。投稿内容を振り返りながら改善できるようになりました。', period: '初期準備約1か月、その後継続運用', team: '2名（ディレクター・制作担当）', price: '投稿本数・撮影内容に応じて個別見積もり', timeline: [{ time: '1週目', label: 'ヒアリング・アカウント分析' }, { time: '2〜3週目', label: '投稿設計・撮影・制作' }, { time: '4週目', label: '投稿開始' }, { time: '継続', label: '投稿・分析・改善' }], quote: '投稿のことを毎日考える負担が減り、お店の魅力をきちんと発信できるようになりました。', quoteBy: '飲食店 Fさま｜オーナー',
  },
  {
    slug: 'corporate-web-g', industry: '設備', purpose: '集客・認知', client: '設備関連会社 G社', clientDetail: '法人向けサービス', product: 'LP・HP・EC制作', tone: 'product-blue', image: '/web-service.png', problem: '情報を載せるだけのホームページから、相談につながるホームページへ。', answer: '事業内容と強みを整理し、構成・原稿・デザイン・実装から公開後の改善まで一貫して支援しました。', before: '長年使っていたホームページは情報が古く、現在のサービス内容や会社の強みが十分に伝わっていませんでした。スマートフォンでは見づらい部分もあり、問い合わせにつながる導線も分かりにくい状態でした。', approach: [{ mark: 'M', title: 'つくる', body: '事業内容・強み・ターゲットを整理し、サイト構成から原稿・デザイン・実装まで一貫して制作。サービスごとの情報と問い合わせ導線を見直しました。' }, { mark: 'O', title: 'まわす', body: '公開後もお知らせやサービス情報を更新できる運用環境を整備。アクセス状況や問い合わせ状況を確認できるようにしました。' }, { mark: 'G', title: '育てる', body: 'アクセス解析やユーザーの行動を確認し、よく見られるページや離脱しやすい箇所をもとに、CTAやページ構成を改善しました。' }], metrics: [{ value: '+25%', label: '問い合わせ件数の増加率' }, { value: '15ページ', label: '制作ページ数' }], after: '会社の強みやサービス内容が伝わりやすくなり、営業担当者が商談時に紹介しやすいサイトへ。公開後も改善を続けられる環境が整いました。', period: '制作約2〜3か月、その後継続改善', team: '3名（ディレクター・デザイナー・エンジニア）', price: 'ページ数・機能に応じて個別見積もり', timeline: [{ time: '1か月目', label: 'ヒアリング・構成・原稿設計' }, { time: '2か月目', label: 'デザイン・実装' }, { time: '3か月目', label: 'テスト・公開' }, { time: '継続', label: '更新・アクセス分析・改善' }], quote: '自社の強みを説明しやすくなり、営業先でもホームページを活用できるようになりました。', quoteBy: '設備関連会社 G社｜営業責任者',
  },
  {
    slug: 'recruit-sns-web-h', industry: '法人営業', purpose: '採用', client: '法人営業会社 H社', clientDetail: '中途採用支援', product: 'SNS・Web一体支援', tone: 'product-orange', image: '/company-service.png', problem: 'Instagramで会社を知り、採用サイトで応募する。採用の流れをひとつに。', answer: 'SNSの発信方針と採用LPを一緒に設計し、会社を知ってから応募するまでの導線を整えました。', before: '求人媒体に掲載しているものの、応募が集まりにくく、会社の雰囲気や働く人の魅力を伝えきれていませんでした。Instagramも運用していましたが、採用ページへの導線がなく、発信が応募につながっているのか分からない状態でした。', approach: [{ mark: 'M', title: 'つくる', body: '採用ターゲットや会社の魅力を整理し、Instagramの発信方針と採用LPを設計。社員紹介・仕事内容・働く環境など、応募前に知りたい情報を制作しました。' }, { mark: 'O', title: 'まわす', body: 'Instagramの投稿から採用LPへ誘導し、仕事内容の理解から応募までをつなぐ導線を構築。投稿制作とサイト更新を連携させて運用しました。' }, { mark: 'G', title: '育てる', body: 'SNSの反応や採用LPへの流入、応募状況を確認し、投稿テーマ・ページ構成・応募ボタンの配置などを改善しました。' }], metrics: [{ value: '+20%', label: '採用ページ閲覧数' }, { value: '月8本', label: '採用向けSNS投稿数' }], after: 'SNSで会社に興味を持った人が、採用LPで仕事内容や働く環境を詳しく確認できるように。認知から応募までの導線が整理されました。', period: '初期制作約2か月、その後継続運用', team: '3名（ディレクター・デザイナー・SNS担当）', price: 'LP制作・運用範囲に応じて個別見積もり', timeline: [{ time: '1か月目', label: '採用課題の整理・企画・設計' }, { time: '2か月目', label: 'LP制作・SNS投稿準備' }, { time: '3か月目', label: '公開・運用開始' }, { time: '継続', label: '投稿・アクセス分析・改善' }], quote: '求人票だけでは伝えられなかった会社の雰囲気を、応募前に知ってもらえるようになりました。', quoteBy: '法人営業会社 H社｜採用担当者',
  },
  {
    slug: 'sales-tools-i', industry: '住宅設備', purpose: '集客・認知', client: '住宅設備会社 I社', clientDetail: '法人営業・訪問営業', product: '販促物制作', tone: 'pink', image: '/promotional-service.png', problem: 'バラバラだった営業資料を、会社の魅力が伝わる販促ツールへ。', answer: '営業資料の情報とデザインを整理し、用途に合わせて使い分けられる販促ツールを制作しました。', before: '営業担当者ごとに資料を作成しており、デザインや説明内容にばらつきがありました。パンフレットも情報が古く、初めてのお客さまにサービスの特徴を分かりやすく伝えられていませんでした。', approach: [{ mark: 'M', title: 'つくる', body: 'サービスの特徴や営業時によくある質問を整理し、会社案内・サービスパンフレット・チラシ・名刺を統一したデザインで制作しました。' }, { mark: 'O', title: 'まわす', body: '営業シーンに合わせた資料の使い分けを整理し、商談や訪問時に活用しやすい販促ツールとして展開しました。' }, { mark: 'G', title: '育てる', body: '営業担当者やお客さまの反応をもとに、説明が伝わりにくい箇所や不足している情報を見直し、資料の改善につなげました。' }], metrics: [{ value: '4種類', label: '制作した販促ツール' }, { value: '10名', label: '営業資料を活用する担当者' }], after: '営業資料のデザインと情報が統一され、担当者による説明のばらつきを軽減。初めてのお客さまにもサービスの特徴を伝えやすくなりました。', period: '制作約1〜2か月', team: '2名（ディレクター・デザイナー）', price: '制作物の種類・部数・仕様に応じて個別見積もり', timeline: [{ time: '1週目', label: 'ヒアリング・掲載情報の整理' }, { time: '2〜3週目', label: 'デザイン・原稿制作' }, { time: '4週目', label: '校正・入稿' }, { time: '5週目以降', label: '印刷・納品' }, { time: '必要に応じて', label: '内容更新・追加制作' }], quote: '営業資料が統一されたことで、お客さまへの説明がしやすくなりました。', quoteBy: '住宅設備会社 I社｜営業部長',
  },
  {
    slug: 'delivery-system-j', industry: '食品配送', purpose: '業務改善', client: '食品配送会社 J社', clientDetail: '配送・顧客管理', product: 'システム開発', tone: 'product-blue', image: '/milmo-s.png', scaleLabel: '開発範囲', problem: '紙とExcelで管理していた配送業務を、ひとつのシステムへ。', answer: '配送業務を整理し、顧客・注文・配送状況を同じ画面で共有できる業務システムを開発しました。', before: '顧客情報や配送予定をExcelや紙で管理しており、配送状況の確認には電話でのやり取りが必要でした。注文変更や配送漏れの確認にも時間がかかり、事務担当者と配送スタッフの情報共有が課題になっていました。', approach: [{ mark: 'M', title: 'つくる', body: '実際の配送業務や事務作業の流れを整理し、顧客管理・配送一覧・配送完了報告・注文管理をひとつにまとめた業務システムを開発しました。' }, { mark: 'O', title: 'まわす', body: '事務担当者と配送スタッフが同じ情報を確認できる運用を構築。スマートフォンから配送状況を更新できるようにし、日々の業務に組み込みました。' }, { mark: 'G', title: '育てる', body: '実際の利用状況や現場スタッフの声をもとに、入力項目・画面構成・配送確認の流れを改善。業務の変化に合わせて機能を調整しました。' }], metrics: [{ value: '-40%', label: '配送状況の確認時間' }, { value: '3部門', label: '情報を共有する部門数' }], after: '配送状況をリアルタイムで確認できるようになり、電話や紙での確認作業を削減。事務・配送・管理部門が同じ情報を共有できるようになり、業務全体の流れがスムーズになりました。', period: '初期開発約3〜4か月、その後継続改善', team: '3名（ディレクター・エンジニア・デザイナー）', price: '顧客管理・注文管理・配送管理・完了報告', timeline: [{ time: '1か月目', label: '業務ヒアリング・要件整理' }, { time: '2か月目', label: '画面設計・システム開発' }, { time: '3か月目', label: '機能開発・動作テスト' }, { time: '4か月目', label: '現場テスト・公開' }, { time: '継続', label: '運用サポート・機能改善' }], quote: '以前は配送状況を確認するために何度も電話していましたが、今はシステムを見れば分かるようになりました。', quoteBy: '食品配送会社 J社｜業務管理責任者',
  },
  {
    slug: 'planning-k', industry: '地域サービス', purpose: '新規開発', client: '地域サービス会社 K社', clientDetail: 'Web・集客・業務改善', product: 'プランニング', tone: 'silver', image: '/consulting-service.png', problem: '何から始めればいいか分からない。その状態から、一緒に進め方を整理。', answer: '事業全体の課題を整理し、優先順位と実施計画をつくり、必要な支援を組み合わせて伴走しました。', before: '集客を増やしたい、ホームページを見直したい、社内業務も効率化したい。さまざまな課題を感じていましたが、何から取り組むべきか分からず、具体的な施策を決められない状態でした。制作会社やシステム会社へ個別に相談する前に、まずは事業全体の課題を整理したいというご相談でした。', approach: [{ mark: 'M', title: 'つくる', body: '事業の現状や課題、目標をヒアリングし、集客・Web・社内業務の課題を整理。優先順位をつけ、取り組むべき施策と進め方をまとめた計画を作成しました。' }, { mark: 'O', title: 'まわす', body: '予算や社内体制を考慮し、無理なく始められる施策から着手。必要に応じて制作・システム開発・運用支援を組み合わせながら進行しました。' }, { mark: 'G', title: '育てる', body: '実施した施策の進捗や反応を確認し、次に取り組む内容を見直し。事業の状況に合わせて計画を更新しながら、継続的な改善につなげました。' }], metrics: [{ value: '3領域', label: '整理した課題領域' }, { value: '2か月', label: '策定した施策計画の期間' }], after: '漠然としていた課題が整理され、何を・いつ・どの順番で進めるべきかが明確に。必要な施策を見極めながら、無理のない予算と体制で取り組めるようになりました。', period: '初期整理約2〜4週間、その後必要に応じて伴走', team: '1〜2名（プランナー・専門担当）', price: '初回相談無料、施策の実施内容に応じて個別見積もり', timeline: [{ time: '1週目', label: 'ご相談・ヒアリング' }, { time: '2週目', label: '現状分析・課題整理' }, { time: '3週目', label: '施策提案・優先順位の設定' }, { time: '4週目', label: '実施計画の作成' }, { time: '必要に応じて', label: '制作・開発・運用支援' }, { time: '継続', label: '進捗確認・計画の見直し' }], quote: '何を依頼すればいいのかも分からない状態でしたが、相談する中で課題が整理され、やるべきことが明確になりました。', quoteBy: '地域サービス会社 K社｜代表取締役',
  },
] as Story[]).filter(story => story.slug !== 'salon-signal-d')

export const articles = [
  { category: 'マーケティング', title: 'LP作成って、何から始めるべき？', date: '[20XX.XX.XX]' },
  { category: 'SNS運用', title: 'SNS運用代行の流れとは？', date: '[20XX.XX.XX]' },
  { category: 'AI・テクノロジー', title: '「導入したのに変わらない」会社に共通する問題', date: '[20XX.XX.XX]' },
  { category: 'SaaS・プロダクト', title: 'SaaSを育てるためのフィードバック設計', date: '[20XX.XX.XX]' },
  { category: 'マーケティング', title: 'マーケティングを点ではなく流れで見る', date: '[20XX.XX.XX]' },
  { category: '組織・カルチャー', title: '小さなチームで速く進めるために大切なこと', date: '[20XX.XX.XX]' },
]
