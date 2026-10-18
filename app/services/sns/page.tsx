import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { createPageMetadata } from '../../metadata'

export const metadata: Metadata = createPageMetadata('SNS運用代行 | 株式会社MOGCIA', '/services/sns')

const plans = [
  ['1 SNS／月4回', '75,000円', '月額'],
  ['1 SNS／月8回', '150,000円', '月額'],
  ['2 SNS／月4回', '115,000円', '月額'],
  ['カスタマイズ', '要相談', '目的に合わせて設計'],
]

const cases = [
  ['福祉関連企業', '採用につなげたい', 'InstagramとTikTokを提案。採用したい人物像を軸に毎月のネタを設計し、温かみと安心感が伝わる方向で制作。', '開設2週間でTikTok再生数13万回を突破。高校の進路指導を通じた紹介も増加。'],
  ['地方議員', '日々の活動を地域に発信したい', 'Instagram・TikTok・X・YouTubeを組み合わせ、トーンをそろえて発信。素材を展開し、4SNS合計で月4回投稿。', 'Instagram開設1か月で23万人にリーチ。'],
  ['飲食店', '運用を任せながら、将来は自社で続けたい', '運用代行に加え、撮影・編集方法を共有。編集テンプレートも用意し、少しずつ自社運用へ移行。', 'Instagram経由の問い合わせと「SNSを見た」という来店の声が増加。'],
]

export default function SnsServicePage() {
  return <ServiceDetailPage
    color="sky"
    eyebrow="SNS management"
    title="SNS運用代行"
    lead="投稿するだけではなく、目的につながる運用を。"
    description="何を発信すればよいか分からない段階から、方針設計、ネタ案、編集、投稿、分析まで対応します。Instagram・TikTok・X・YouTubeなど、目的に合う媒体を一緒に選びます。"
    image="/sns-service.png"
    imageAlt="SNS運用を企画・制作するチーム"
    concerns={['投稿する時間がない', '発信するネタが見つからない', '採用や問い合わせにつなげたい', '運用しているが反応がない', 'SNSを始めたいが何からすればよいか分からない', '若い世代にも活動を知ってほしい']}
    scope={['アカウント・運用方針の設計', '毎月のネタ案作成', '投稿素材の編集', '投稿前の内容確認', '各SNSへの投稿', '分析レポートと改善提案', '政治家・政治団体のSNS支援', '将来の自社運用に向けたサポート']}
    pricing={<>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{plans.map(([name,price,note])=><article key={name} className="border border-ink/15 bg-white p-6"><p className="text-sm font-black">{name}</p><p className="mt-7 font-display text-3xl font-black">{price}</p><p className="mt-2 text-[10px] text-ink-soft">{note}・税別</p></article>)}</div>
      <div className="mt-5 grid gap-4 md:grid-cols-2"><div className="border border-ink/15 bg-white p-6"><p className="text-sm font-black">撮影オプション</p><p className="mt-4 text-2xl font-black">＋50,000円／月</p><p className="mt-3 text-xs leading-6 text-ink-soft">月1回を目安に実施。撮影時間や納品素材数は内容に合わせて調整します。</p></div><div className="border border-ink/15 bg-white p-6"><p className="text-sm font-black">料金に含まれるもの</p><p className="mt-4 text-xs leading-7 text-ink-soft">ネタ案・編集・投稿・分析レポート。修正は2回まで、投稿前に毎回内容をご確認いただきます。</p></div></div>
      <p className="mt-5 text-[11px] leading-6 text-ink-soft">※すべて税別。月額制・1年契約です。途中解約はできません。複数SNSの「月4回」は全媒体合計4投稿で、素材を各媒体向けに展開します。コメント・DM対応、広告運用は含みません。編集のみ・ネタ案のみなどの部分的なご依頼もご相談いただけます。</p>
    </>}
    flow={[
      ['ヒアリング', '目的、現在の運用状況、届けたい相手を確認します。'],
      ['方針設計', '媒体とアカウントの方向性を整理します。'],
      ['ネタ案', '目的に沿った投稿テーマをご提案します。'],
      ['素材準備', '撮影を行うか、素材をご支給いただきます。'],
      ['編集・確認', '投稿を制作し、公開前にご確認いただきます。'],
      ['投稿', '決定した媒体とスケジュールで投稿します。'],
      ['分析・改善', 'レポートを共有し、次の発信へ反映します。'],
    ]}
    cases={<div className="grid gap-4 lg:grid-cols-3">{cases.map(([client,goal,support,result])=><article key={client} className="bg-white p-7"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink-soft">{client}</p><h3 className="mt-4 text-lg font-black leading-7">{goal}</h3><p className="mt-5 border-t border-ink/10 pt-5 text-xs leading-6 text-ink-soft">{support}</p><p className="mt-5 text-sm font-black leading-7">{result}</p></article>)}</div>}
    faqs={[
      ['対応しているSNSを教えてください。', 'Instagram、TikTok、X、YouTubeなどに対応しています。その他の媒体もご相談ください。'],
      ['投稿に使う素材がありません。', '月1回を目安とした撮影オプションをご利用いただけます。内容はご要望に合わせて調整します。'],
      ['投稿内容は事前に確認できますか？', 'はい。毎回確認いただき、修正は2回まで対応します。'],
      ['一部の作業だけ依頼できますか？', 'はい。編集のみ、ネタ案のみなど、必要な範囲に合わせて対応します。'],
      ['コメントやDMへの返信も含まれますか？', '基本プランには含まれません。'],
    ]}
  />
}
