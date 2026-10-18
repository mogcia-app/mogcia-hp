import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'SNS・Webマーケティング支援 | MOGCIA',
  description: 'SNSで知ってもらい、Webで伝え、問い合わせや応募につなげる導線を一体で設計・制作・運用・改善します。',
  alternates: { canonical: '/services/marketing' },
}

export default function MarketingServicePage() {
  return <ServiceDetailPage
    color="pink"
    eyebrow="SNS & Web marketing"
    title="マーケティング支援"
    lead="発信とWebを、ひとつの流れに。"
    description="SNSだけ、ホームページだけを個別に考えるのではなく、知ってもらうところから、詳しく伝え、問い合わせ・予約・応募へ進むところまでを一体で設計します。制作して終わらず、反応を見ながら運用と改善を続けます。"
    image="/company-service.png"
    imageAlt="SNSとWebをつないだマーケティング支援のイメージ"
    concerns={[
      'SNSを続けているのに問い合わせにつながらない',
      'ホームページはあるが、何を伝えるべきか分からない',
      '発信とWebサイトの内容がばらばらになっている',
      '集客や採用の数字をどこで確認すればよいか分からない',
      '社内だけでは投稿や改善まで手が回らない',
      '施策ごとに依頼先が分かれ、全体を管理できない',
    ]}
    scope={[
      '目的・対象顧客・導線の整理',
      'SNSの企画・撮影・制作・投稿運用',
      'LP・ホームページの構成・制作',
      '問い合わせ・予約・応募導線の改善',
      'SNS・Webのアクセス計測設定',
      '投稿・ページ・導線の分析',
      '月次確認と改善提案',
      'キャンペーン・広告施策の相談',
    ]}
    pricing={<div className="grid gap-5 lg:grid-cols-[1fr_.75fr]"><div className="bg-white p-7"><p className="text-xl font-black">必要な範囲を組み合わせてお見積もり</p><p className="mt-4 text-sm leading-7 text-ink-soft">SNS運用、Web制作、計測、改善の中から、現在の体制と課題に必要な内容を組み合わせます。すでにあるSNSやWebサイトを活かした支援も可能です。</p></div><div className="border border-ink/15 bg-white p-7"><p className="text-sm font-black">スポット・継続どちらも対応</p><p className="mt-4 text-xs leading-7 text-ink-soft">導線設計やページ制作のみのご相談から、投稿運用と月次改善を含む継続支援まで、目的に合わせてご提案します。</p></div></div>}
    flow={[
      ['ヒアリング', '事業、顧客、現在の発信、問い合わせまでの流れを確認します。'],
      ['導線設計', 'SNSからWeb、問い合わせ・予約・応募までの役割を整理します。'],
      ['企画・制作', '発信テーマ、投稿、ページ、必要なクリエイティブを制作します。'],
      ['公開・運用', 'SNS投稿やWeb更新を、無理なく続けられる形で動かします。'],
      ['計測・確認', '閲覧、反応、クリック、問い合わせなど目的に近い数字を確認します。'],
      ['改善', '結果と現場の声をもとに、投稿・ページ・導線を継続して改善します。'],
    ]}
    faqs={[
      ['SNS運用だけでも依頼できますか？', 'はい。SNSのみ、Webのみのご相談にも対応します。現在の導線を確認したうえで必要な範囲をご提案します。'],
      ['今あるホームページを活用できますか？', 'はい。全面リニューアルだけでなく、文章、ページ、問い合わせ導線など必要な部分の改善にも対応します。'],
      ['投稿用の写真や動画もお願いできますか？', 'はい。内容と頻度に合わせて撮影・制作を行います。お客さまから素材をご提供いただく運用も可能です。'],
      ['成果はどの数字で確認しますか？', '目的に応じて、保存、プロフィール閲覧、Webへの移動、問い合わせ、予約、応募など、事業に近い数字を決めて確認します。'],
      ['広告運用にも対応していますか？', '内容に応じてご相談いただけます。まずは広告を使う前に、受け皿となるページや問い合わせ導線も確認します。'],
    ]}
  />
}
