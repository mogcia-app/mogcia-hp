import type { Metadata } from 'next'
import Link from 'next/link'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { createPageMetadata } from '../../metadata'

export const metadata: Metadata = createPageMetadata('LP・HP・EC制作 | 株式会社MOGCIA', '/services/web')

const prices = [
  ['HP制作', '750,000円', '150,000円', '50,000円', '25,000円', '基本20ページまで'],
  ['LP制作', '450,000円', '150,000円', '25,000円', '12,500円', 'LP 1式'],
  ['ECサイト', '510,000円〜', '150,000円', '30,000円〜', '15,000円〜', 'BASE／Shopify'],
]

const options = [
  ['お知らせCMS', '60,000円〜'], ['ブログCMS', '60,000円〜'], ['実績・施工事例CMS', '60,000円〜'], ['求人CMS', '60,000円〜'], ['簡易CRM', '60,000円〜'], ['問い合わせ管理', '要相談'], ['会員登録・ログイン', '60,000円〜'], ['マイページ', '60,000円〜'], ['簡易予約', '60,000円〜'], ['予約管理', '150,000円〜'], ['LINE連携', '要相談'], ['SNS連携', '要相談'], ['AIチャット', '要相談'], ['多言語化', '50,000円〜／言語'], ['EC（BASE／Shopify）', '360,000円〜'],
]

export default function WebServicePage() {
  return <ServiceDetailPage
    color="pink"
    eyebrow="Web design & development"
    title="LP・HP・EC制作"
    lead="サイトをつくる前に、何のためにつくるかを考える。"
    description="採用、問い合わせ、予約など、実現したい目的から必要な構成を整理します。Webサイト以外の方法が適している場合は、SNSや自社プロダクトを含めて率直にご提案します。"
    image="/web-service.png"
    imageAlt="Webサイトを設計・制作する様子"
    concerns={['古くなったサイトを見直したい', '採用につながるサイトをつくりたい', '問い合わせを増やしたい', '商品やサービス専用のLPがほしい', 'ネットショップを始めたい', '何を掲載すべきか分からない']}
    scope={['目的と課題の整理', 'サイト構成・導線設計', 'ヒアリングをもとにした原稿作成', 'Webデザイン・実装', 'スマートフォン対応', '問い合わせフォーム', '基本的なSEO設定', 'ドメイン・サーバーの取得と費用']}
    pricing={<>
      <div className="overflow-x-auto border border-ink/15 bg-white"><table className="min-w-[800px] w-full text-left text-xs"><thead className="border-b border-ink/15 bg-ink text-white"><tr><th className="p-4">商品</th><th className="p-4">総額</th><th className="p-4">初期費用</th><th className="p-4">12か月</th><th className="p-4">24か月</th><th className="p-4">基本仕様</th></tr></thead><tbody>{prices.map(([name,total,initial,twelve,twentyFour,spec])=><tr key={name} className="border-b border-ink/10 last:border-0"><th className="p-4 text-sm">{name}</th><td className="p-4 font-bold">{total}</td><td className="p-4">{initial}</td><td className="p-4">月額 {twelve}</td><td className="p-4">月額 {twentyFour}</td><td className="p-4 text-ink-soft">{spec}</td></tr>)}</tbody></table></div>
      <p className="mt-4 text-[11px] leading-6 text-ink-soft">※すべて税別。一括払いにも対応しています。ECサイトはテンプレート・外部サービス利用料が別途必要です。デザイン修正は3回まで。写真撮影・画像制作、更新管理機能は別料金です。</p>
      <details className="mt-8 border-y border-ink/20 py-6"><summary className="flex cursor-pointer list-none items-center justify-between text-sm font-black">追加機能・オプションを見る <span>＋</span></summary><div className="mt-6 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">{options.map(([name,price])=><div key={name} className="flex items-center justify-between gap-5 bg-white p-4 text-xs"><span className="font-bold">{name}</span><span className="shrink-0 text-ink-soft">{price}</span></div>)}</div><p className="mt-4 text-[11px] leading-6 text-ink-soft">管理画面や対応範囲、オプションの個数により料金が変動します。</p></details>
      <div className="mt-8 border border-ink/15 bg-white p-6"><p className="text-sm font-black">公開後の保守・更新</p><p className="mt-3 text-xs leading-6 text-ink-soft">公開後は任意でismo.の保守・分析プランをご利用いただけます。Basic 月額11,000円、Standard 月額22,000円、Premium 月額33,000円（すべて税別）。</p><Link href="https://www.ismo-data.com/#pricing" target="_blank" className="mt-4 inline-block text-xs font-bold underline underline-offset-4">保守・更新プランを見る →</Link></div>
    </>}
    flow={[
      ['ヒアリング', '実現したいことや現在の状況を伺います。'],
      ['目的・課題整理', 'サイトが担う役割と必要な機能を整理します。'],
      ['構成・原稿作成', '情報の順序と伝える内容をつくります。'],
      ['デザイン', '目的と使いやすさに沿って画面を設計します。'],
      ['実装', 'スマートフォン対応を含めて構築します。'],
      ['確認・修正', '内容をご確認いただき、3回まで修正します。'],
      ['公開・改善', '公開後は必要に応じて保守と改善を行います。'],
    ]}
    faqs={[
      ['原稿が用意できていなくても依頼できますか？', 'はい。基本的にはヒアリングをもとにMOGCIAで原稿を作成します。支給いただく形にも対応します。'],
      ['ページ数で料金が変わりますか？', 'HP制作の基本仕様は20ページまでです。内容や必要な機能を確認したうえでお見積もりします。'],
      ['自分たちでお知らせを更新できますか？', '更新用の管理機能はオプションで追加できます。'],
      ['制作期間はどのくらいですか？', '内容、確認のスピード、素材の準備状況により異なるため、ヒアリング後にご案内します。'],
      ['保守契約は必須ですか？', 'いいえ、任意です。必要に応じて公開後の保守・分析プランをご利用いただけます。'],
    ]}
  />
}
