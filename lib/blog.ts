export type BlogCategory =
  | 'AI・テクノロジー'
  | 'SNS運用'
  | 'SaaS・プロダクト'
  | 'マーケティング'
  | '組織・カルチャー'

export type BlogBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'blockquote'; text: string }
  | { type: 'point'; title: string; body: string }

export type BlogPost = {
  slug: string
  title: string
  date: string
  category: BlogCategory
  excerpt: string
  thumbnail: string
  content: BlogBlock[]
}

export const blogCategories = [
  'すべて',
  'AI・テクノロジー',
  'SNS運用',
  'SaaS・プロダクト',
  'マーケティング',
  '組織・カルチャー',
] as const

export const blogPosts: BlogPost[] = [
  {
    slug: 'lp-start-guide',
    title: 'LP作成って、何から始めるべき？',
    date: '2026.06.10',
    category: 'マーケティング',
    excerpt: '成果につながるLPを作るために、最初に整理しておきたい設計の考え方をまとめました。',
    thumbnail: '/blog5.jpg',
    content: [
      { type: 'p', text: 'LPを作ろうとすると、デザインやキャッチコピーから考えたくなります。けれど、成果につながるLPは見た目だけで決まりません。' },
      { type: 'h2', text: '最初に決めるのは、誰に届けるか' },
      { type: 'p', text: 'サービスの説明よりも先に、どんな人が、どんな状態で、何に困っているのかを整理します。ここが曖昧だと、ページ全体の言葉も導線もぼやけてしまいます。' },
      { type: 'ul', items: ['誰に向けたページなのか', 'どんな悩みを解決するのか', '読んだ後にどう行動してほしいのか'] },
      { type: 'point', title: '重要ポイント', body: 'LPは情報を並べるページではなく、ユーザーが自然に行動できる流れを設計するページです。' },
      { type: 'h2', text: '設計してから、見せ方を整える' },
      { type: 'p', text: '構成、コピー、デザインの順番で考えることで、見た目だけではなく機能するLPに近づきます。公開後の改善まで見据えることも大切です。' },
    ],
  },
  {
    slug: 'sns-management-flow',
    title: 'SNS運用代行の流れとは？',
    date: '2026.05.28',
    category: 'SNS運用',
    excerpt: 'SNS運用を単なる投稿作業で終わらせず、戦略から改善までつなげるための流れを紹介します。',
    thumbnail: '/sns2.png',
    content: [
      { type: 'p', text: 'SNS運用は投稿して終わりではありません。戦略、制作、運用、分析、改善がつながって初めて成果につながります。' },
      { type: 'h2', text: '運用の前に戦略を決める' },
      { type: 'p', text: 'まず、誰に何を届けるのか、どんな行動につなげたいのかを整理します。投稿の見た目よりも、事業の目的との接続が重要です。' },
      { type: 'ol', items: ['戦略設計', 'コンテンツ制作', '投稿・運用', '分析', '改善'] },
      { type: 'blockquote', text: 'SNSは一発当てるものではなく、積み上げて信頼をつくるメディアです。' },
      { type: 'h2', text: '分析を次の投稿に活かす' },
      { type: 'p', text: '反応が良かった理由、届かなかった理由を見ながら改善します。感覚ではなく、数字と文脈を合わせて判断することが大切です。' },
    ],
  },
  {
    slug: 'ai-adoption',
    title: '「導入したのに変わらない」会社に共通する問題',
    date: '2026.05.12',
    category: 'AI・テクノロジー',
    excerpt: 'AIやSaaSを導入しても成果につながらない理由を、運用設計の視点から整理します。',
    thumbnail: '/blog1.jpg',
    content: [
      { type: 'p', text: '新しいツールを導入しても、思ったほど成果が出ないことがあります。原因はツールそのものではなく、使われる流れが設計されていないことかもしれません。' },
      { type: 'h2', text: 'ツールではなく流れを見る' },
      { type: 'p', text: 'SNS、チャット、社内ナレッジ。どれも単体ではなく、事業の流れの中で機能して初めて価値を発揮します。' },
      { type: 'ul', items: ['誰が使うのか', 'どの業務に組み込むのか', '改善の判断材料をどう残すのか'] },
      { type: 'point', title: '導入前に考えること', body: 'ツールを入れる前に、使われ続ける状態を設計することが成果への近道です。' },
    ],
  },
  {
    slug: 'product-design',
    title: 'SNS運用が続かない会社の共通点',
    date: '2026.04.24',
    category: 'SNS運用',
    excerpt: 'SNS運用が止まってしまう背景を、ネタ不足ではなく構造の問題として考えます。',
    thumbnail: '/blog2.jpg',
    content: [
      { type: 'p', text: 'SNSを始めたものの、気づけば更新が止まっている。こうした状況は多くの企業で起きています。' },
      { type: 'h2', text: '続かない原因は作業化にある' },
      { type: 'p', text: '投稿すること自体が目的になると、成果が見えず優先度が下がります。SNSを事業の導線として設計することが必要です。' },
      { type: 'ul', items: ['反応が問い合わせにつながっているか', '分析結果が次の投稿に活きているか', '社内で共有されているか'] },
      { type: 'h2', text: '運用を仕組みに変える' },
      { type: 'p', text: '投稿、分析、改善がひとつの流れになると、SNSは単なる発信ではなく事業の接点になります。' },
    ],
  },
  {
    slug: 'chat-experience',
    title: 'チャット対応を入れても満足度が上がらない理由',
    date: '2026.04.08',
    category: 'SaaS・プロダクト',
    excerpt: 'チャットツールを問い合わせ対応だけで終わらせないための体験設計について考えます。',
    thumbnail: '/blog3.jpg',
    content: [
      { type: 'p', text: 'チャットツールを導入しても、顧客満足度が上がらないケースがあります。重要なのは対応手段ではなく、ユーザーが迷わず解決できる体験です。' },
      { type: 'h2', text: '問い合わせを減らす設計' },
      { type: 'p', text: 'チャットは対応を増やすためだけのものではありません。よくある質問を先回りし、必要な情報へ自然に案内する設計が大切です。' },
      { type: 'blockquote', text: 'チャットの価値は、返答の速さだけでなく、迷わない体験をつくれることにあります。' },
      { type: 'h2', text: '改善の起点として使う' },
      { type: 'p', text: '問い合わせ内容を蓄積し、UIや案内の改善に活かすことで、チャットは運用改善の起点になります。' },
    ],
  },
  {
    slug: 'saas-feedback-loop',
    title: 'SaaSを育てるためのフィードバック設計',
    date: '2026.03.22',
    category: 'SaaS・プロダクト',
    excerpt: '使われ続けるSaaSに必要な、ユーザーの声を改善につなげる仕組みを紹介します。',
    thumbnail: '/signal.png',
    content: [
      { type: 'p', text: 'SaaSはリリースして終わりではありません。使われながら改善されることで、少しずつ価値が高まります。' },
      { type: 'h2', text: '声を集めるだけでは足りない' },
      { type: 'p', text: 'ユーザーの声は、集めるだけでは改善につながりません。どの課題に紐づく声なのか、どの判断に使うのかを整理する必要があります。' },
      { type: 'ol', items: ['利用状況を見る', '声を分類する', '改善仮説を立てる', '小さく反映する'] },
      { type: 'point', title: '改善を続ける仕組み', body: '機能追加よりも、ユーザーの行動が自然になる改善を積み重ねることが重要です。' },
    ],
  },
  {
    slug: 'marketing-flow',
    title: 'マーケティングを点ではなく流れで見る',
    date: '2026.03.06',
    category: 'マーケティング',
    excerpt: 'SNS、LP、問い合わせ、運用を分断せず、一連の流れとして見るための考え方です。',
    thumbnail: '/hp.png',
    content: [
      { type: 'p', text: 'マーケティング施策は、SNS、広告、LP、問い合わせ対応などに分かれがちです。しかしユーザーから見ると、それらはひとつの体験です。' },
      { type: 'h2', text: '点をつなぐことで成果が見える' },
      { type: 'p', text: 'どの接点で興味を持ち、どこで迷い、どこで行動するのか。流れで見ることで、改善すべき場所が見えやすくなります。' },
      { type: 'ul', items: ['認知の接点', '比較検討の接点', '問い合わせの接点', '継続利用の接点'] },
      { type: 'h2', text: '施策ではなく仕組みにする' },
      { type: 'p', text: '一つひとつの施策をつなげることで、マーケティングは一過性の取り組みではなく、継続的に改善できる仕組みになります。' },
    ],
  },
  {
    slug: 'small-team-culture',
    title: '小さなチームで速く進めるために大切なこと',
    date: '2026.02.18',
    category: '組織・カルチャー',
    excerpt: '少人数でも前に進むための、意思決定とコミュニケーションの考え方をまとめました。',
    thumbnail: '/company.png',
    content: [
      { type: 'p', text: '小さなチームでは、役割の境界を越えて考える場面が多くあります。だからこそ、共通の目的と判断基準が重要です。' },
      { type: 'h2', text: '早く決めて、小さく試す' },
      { type: 'p', text: '完璧な計画を待つより、小さく試して学ぶ方が速く進めます。試した結果を次の判断に活かすことが大切です。' },
      { type: 'blockquote', text: '速さは雑に進めることではなく、学びの回数を増やすことです。' },
      { type: 'h2', text: '情報を開いておく' },
      { type: 'p', text: '意思決定の背景や顧客の声を共有することで、チーム全体が同じ方向を向きやすくなります。' },
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug)
}

export function getAdjacentBlogPosts(slug: string) {
  const index = blogPosts.findIndex(post => post.slug === slug)

  return {
    previous: index > 0 ? blogPosts[index - 1] : null,
    next: index >= 0 && index < blogPosts.length - 1 ? blogPosts[index + 1] : null,
  }
}
