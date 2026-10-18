import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { createPageMetadata } from '../../metadata'

export const metadata: Metadata = createPageMetadata('販促物制作 | 株式会社MOGCIA', '/services/promotion')

const items = ['名刺', 'ショップカード', 'パンフレット', 'チラシ', '看板', '卓上POP']

export default function PromotionServicePage() {
  return <ServiceDetailPage
    color="lilac"
    eyebrow="Promotional design"
    title="販促物制作"
    lead="画面の外でも、きちんと伝わるものを。"
    description="開業や店舗案内、商品紹介、採用、イベント、政治活動など、目的に合わせた販促物を制作します。原稿とデザインだけでなく、提携先での印刷・製造を手配し、完成品の納品まで対応します。"
    image="/promotional-service.png"
    imageAlt="パンフレットや名刺などの販促物"
    concerns={['開業に合わせて必要なツールをそろえたい', '店舗やサービスの魅力を分かりやすく伝えたい', '採用やイベントで配布する資料をつくりたい', 'デザインから印刷までまとめて任せたい', '政治活動や選挙に使う広報物を制作したい', '何をつくればよいか相談したい']}
    scope={items.map(item=>`${item}の企画・デザイン・製造手配`)}
    pricing={<div className="grid gap-5 lg:grid-cols-[1fr_.75fr]"><div className="bg-white p-7"><p className="text-xl font-black">個別見積もり</p><p className="mt-4 text-sm leading-7 text-ink-soft">制作物の種類、仕様、サイズ、部数に合わせてお見積もりします。印刷・製造費を含めた金額をご案内します。</p></div><div className="border border-ink/15 bg-white p-7"><p className="text-sm font-black">基本対応</p><ul className="mt-4 space-y-2 text-xs leading-6 text-ink-soft"><li>・ヒアリング、原稿作成</li><li>・デザイン制作</li><li>・修正3回まで</li><li>・印刷・製造手配、納品</li></ul><p className="mt-4 text-[11px] text-ink-soft">※税別。写真撮影・イラスト制作は別料金です。</p></div></div>}
    flow={[
      ['ヒアリング', '用途、届けたい相手、必要な制作物を確認します。'],
      ['内容整理', '掲載する情報と仕様、部数などを整理します。'],
      ['原稿・デザイン', 'ヒアリングをもとに原稿とデザインを制作します。'],
      ['確認・修正', '内容をご確認いただき、3回まで修正します。'],
      ['印刷・製造', '確定データを提携先へ入稿し、製造します。'],
      ['納品', '完成した制作物をお届けします。'],
    ]}
    faqs={[
      ['原稿が決まっていなくても相談できますか？', 'はい。目的や掲載したい内容を伺い、原稿から一緒に整理します。'],
      ['印刷もお願いできますか？', 'はい。提携先への印刷・製造手配から完成品の納品まで対応します。'],
      ['写真撮影やイラスト制作も依頼できますか？', 'はい。別料金で対応します。内容に応じてお見積もりします。'],
      ['料金はどのくらいですか？', '種類、仕様、サイズ、部数によって異なるため、印刷・製造費を含めて個別にご案内します。'],
      ['政治活動に使用する制作物にも対応していますか？', 'はい。平時の政治活動における活動報告チラシやリーフレットなどに対応しています。公職選挙法を遵守するため、選挙運動に関わる制作物はお受けしておりません。'],
    ]}
  />
}
