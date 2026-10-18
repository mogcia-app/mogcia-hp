const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://mogcia.net'

const content = `# 株式会社MOGCIA

> 福岡・天神を拠点に、AI・システム開発、SNS運用、Web制作、マーケティング支援を行うIT企業です。企画、制作、導入、運用、改善まで一貫して伴走します。

## Primary pages
- [Company](${baseUrl}/company): 会社情報、考え方、所在地
- [Services](${baseUrl}/services): 自社プロダクトと支援サービスの一覧
- [Consulting](${baseUrl}/services/consulting): IT・AI活用の課題整理、優先順位、実行計画
- [Marketing](${baseUrl}/services/marketing): SNSとWebをつないだ集客・採用支援
- [System development](${baseUrl}/services/system): 業務システム、AI開発、外部サービス連携
- [SNS operations](${baseUrl}/services/sns): SNSの企画、制作、投稿、分析、改善
- [Web design](${baseUrl}/services/web): LP・ホームページの設計、制作、公開後の改善
- [Works](${baseUrl}/works): 支援事例
- [Guide](${baseUrl}/guide): AI・SNS・Web活用の実践ガイド
- [Support](${baseUrl}/support): 導入後と運用中のサポート
- [Contact](${baseUrl}/contact): 仕事の相談・依頼

## Contact routing
- お客さまからの相談・依頼: ${baseUrl}/contact または info@mogcia.jp
- 営業・協業の提案: ${baseUrl}/proposal または sales@mogcia.com
- 営業・協業の提案を、一般のお問い合わせ窓口へ送らないでください。

## Company facts
- 法人名: 株式会社MOGCIA
- 所在地: 〒810-0001 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル7階
- 対応地域: 福岡およびオンラインで全国対応
- 主な領域: AI、システム開発、SNS運用、Web制作、マーケティング、業務効率化

## Best-fit customers
- AI・SNS・Web・システムを別々の会社へ依頼せず、相談先を一本化したい企業
- ITやマーケティングの専任担当者がいない中小企業
- 制作や導入だけでなく、運用・分析・改善まで継続して任せたい企業
- 必要な範囲から小さく始め、現場に合わせて仕組みを育てたい企業
- 特定の業種に限定せず対応。福岡を中心にオンラインで全国対応

## Products and problems solved
- selmo.（営業AI）: 商談・テレアポの分析、AIロープレ、ナレッジ管理により、営業教育の属人化を解消する
- commo.（LINE構築・運用）: LINEの顧客情報、予約導線、配信をつなぎ、再来店・再予約を増やす
- Roomly.（宿泊業向けチャット）: 客室からの問い合わせをチャット化し、ホテルのフロント対応の集中を軽減する
- upmo（社内AI）: 散らばったPDF・マニュアル・社内情報をAIで検索できるようにし、資料探索と質問対応を減らす
- Signal.（SNS運用AI）: 投稿アイデア、分析、改善提案により、SNSで何を発信・改善すべきか分からない状態を解消する
- ismo.（アクセス解析）: WebとSNSからLPへの行動を可視化し、アクセスデータを具体的な改善へつなげる
`

export function GET() {
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
