import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'IT・AI活用コンサルティング | MOGCIA',
  description: '福岡・天神のMOGCIAが、AI・SNS・Web・システム活用の課題整理から優先順位、実行計画まで伴走します。',
  alternates: { canonical: '/services/consulting' },
}

export default function ConsultingServicePage() {
  return <ServiceDetailPage
    color="peach"
    eyebrow="Consulting"
    title="コンサルティング"
    lead="やることを増やす前に、進む方向を整える。"
    description="AI、SNS、Web、システム。選択肢が多いからこそ、最初に必要なのはツール選びではなく、今の状況と目的の整理です。経営・現場の両方を伺い、取り組む順番と無理なく続けられる進め方を一緒につくります。"
    image="/consulting-service.png"
    imageAlt="課題や施策を整理するコンサルティングのイメージ"
    concerns={[
      '何から手をつければよいか分からない',
      'AIを活用したいが、自社での使い道が見えない',
      'SNSやWebに取り組んでいるが成果につながらない',
      '社内にITやデジタル施策をまとめる担当者がいない',
      '複数の会社へ別々に相談する負担を減らしたい',
      '施策を始めても、いつも運用が続かない',
    ]}
    scope={[
      '現状・課題・業務フローの整理',
      '経営目標と現場課題のすり合わせ',
      'AI・SNS・Web・システムの活用提案',
      '施策の優先順位と実行計画の作成',
      '既存ツール・運用体制の見直し',
      '社内向け説明・意思決定の支援',
      '実行後の定例確認と改善提案',
      '必要に応じた制作・開発・運用支援',
    ]}
    pricing={<div className="grid gap-5 lg:grid-cols-[1fr_.75fr]"><div className="bg-white p-7"><p className="text-xl font-black">内容に合わせて個別にご提案</p><p className="mt-4 text-sm leading-7 text-ink-soft">一度の課題整理から、月ごとの継続支援まで対応します。相談内容、参加人数、確認範囲、必要な資料に合わせて事前にお見積もりします。</p></div><div className="border border-ink/15 bg-white p-7"><p className="text-sm font-black">制作や開発を前提にしません</p><p className="mt-4 text-xs leading-7 text-ink-soft">整理した結果、今は新しい施策が不要という場合も率直にお伝えします。必要な場合のみ、実行支援を別途ご提案します。</p></div></div>}
    flow={[
      ['ヒアリング', '経営上の目的、現場のお悩み、現在の取り組みを伺います。'],
      ['現状整理', '業務・顧客・発信・ツールの状況を整理し、課題のつながりを確認します。'],
      ['優先順位', '効果、緊急度、負担を比べ、先に取り組むことを決めます。'],
      ['ご提案', '施策、体制、スケジュール、費用を分かりやすくまとめます。'],
      ['実行支援', '必要に応じて制作・開発・運用までMOGCIAが伴走します。'],
      ['確認・改善', '実行後の変化を確認し、次の取り組みを一緒に考えます。'],
    ]}
    faqs={[
      ['相談内容がまとまっていなくても大丈夫ですか？', 'はい。現在感じているお悩みや違和感から伺い、状況を一緒に整理します。'],
      ['相談すると、必ず制作やシステム導入が必要ですか？', 'いいえ。既存の運用改善で十分な場合や、今は実施しない方がよい場合も含めてご案内します。'],
      ['AIの活用方法だけ相談できますか？', 'はい。業務を確認し、AIを使いやすい部分、使わない方がよい部分、情報管理上の注意点を整理します。'],
      ['社内の会議や説明にも参加してもらえますか？', '内容に応じて対応します。関係者の認識合わせや、社内検討に必要な情報整理も支援します。'],
      ['継続的に相談できますか？', 'はい。定例確認、施策の進行整理、数字の確認、改善提案などを継続して支援できます。'],
    ]}
  />
}
