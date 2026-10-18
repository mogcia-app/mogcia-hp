import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/Footer'
import { SectionLabel, SoftContact, tone } from '@/components/PageFrame'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata(
  'セキュリティ・AI利用方針 | 株式会社MOGCIA',
  '/security-policy',
)

const sections = [
  {
    number: '01',
    title: '基本方針',
    body: '株式会社MOGCIA（以下「当社」）は、お客さまからお預かりする情報と、当社が提供するサービスに関わる情報資産を重要なものと認識しています。事業内容や取り扱う情報の性質に応じて、技術面・組織面の両方から必要な安全管理措置を講じ、継続的な改善に取り組みます。',
  },
  {
    number: '02',
    title: 'アクセス管理',
    body: '業務上必要な担当者に限って情報へアクセスできるよう、アカウントと権限を管理します。利用するサービスやシステムの特性に応じて、多要素認証、パスワード管理、アクセスログの確認などを行い、不要となった権限は速やかに見直します。',
  },
  {
    number: '03',
    title: 'データの取り扱い',
    body: 'お預かりしたデータは、合意した目的と業務の遂行に必要な範囲で取り扱います。保存する情報を必要最小限にし、送受信時の暗号化、共有範囲の制限、保管期間の設定など、データの内容とリスクに応じた管理を行います。業務終了後は、契約や法令に基づく保存が必要な場合を除き、返却または適切な方法で削除します。',
  },
  {
    number: '04',
    title: '生成AIの利用',
    body: '生成AIを利用する際は、利用するサービスの規約、データの保存・学習に関する設定、提供先などを確認します。個人情報、機密情報、未公開情報を取り扱う場合は、利用目的と必要性を確認し、お客さまとの合意や適切な保護措置なしに外部の生成AIサービスへ入力しません。',
  },
  {
    number: '05',
    title: 'AI出力の確認',
    body: '生成AIの出力には、誤り、偏り、第三者の権利を侵害する内容が含まれる可能性があります。当社はAIの出力をそのまま最終成果物とせず、用途に応じて担当者が事実関係、表現、権利関係、安全性を確認し、必要な修正を行います。重要な判断をAIだけに委ねることはありません。',
  },
  {
    number: '06',
    title: '外部サービス・委託先',
    body: 'クラウドサービスや外部事業者を利用する場合は、提供機能、セキュリティ対策、データの保存場所、利用規約などを確認し、取り扱う情報に適したサービスを選定します。業務を委託する場合は、必要な範囲で契約上の義務を定め、適切な管理を行います。',
  },
  {
    number: '07',
    title: '事故への対応',
    body: '情報漏えい、不正アクセス、紛失などの事故またはその可能性を認識した場合は、状況の把握、影響範囲の確認、拡大防止、復旧を速やかに進めます。必要に応じてお客さまや関係機関へ報告し、原因を分析したうえで再発防止策を講じます。',
  },
  {
    number: '08',
    title: '教育と継続的な見直し',
    body: '役員・従業員・業務に関わるメンバーに対して、情報セキュリティとAI利用に関するルールの周知・教育を行います。技術、法令、社会環境、提供サービスの変化に応じて、本方針と社内運用を定期的に見直します。',
  },
] as const

export default function SecurityPolicyPage() {
  return <main className="bg-white text-ink">
    <section className="page-shell pb-20 pt-12 md:pb-24 md:pt-20">
      <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　セキュリティ・AI利用方針</p>
      <div className="mt-14 border-b border-ink/25 pb-10">
        <div><p className="font-display text-[10px] font-bold uppercase tracking-[.2em] text-ink-soft">Security &amp; AI Policy</p><h1 className="mt-5 text-3xl font-black leading-[1.5] md:text-5xl">セキュリティ・<br />AI利用方針</h1></div>
        <div className="mt-9 max-w-2xl border-t border-ink pt-7"><p className="text-base font-bold leading-8">安心してご相談いただくために、情報とAIを適切に取り扱います。</p><p className="mt-4 text-sm leading-8 text-ink-soft">当社の業務およびサービスにおける情報セキュリティと生成AI利用の基本的な考え方を、以下のとおり定めます。</p></div>
      </div>
    </section>

    <section className="py-20 md:py-28" style={{ backgroundColor: tone.sky.band }}><div className="page-shell grid gap-12 lg:grid-cols-[.55fr_1fr] lg:gap-20">
      <div className="lg:sticky lg:top-32 lg:self-start"><SectionLabel label="Our commitment" color="sky" /><h2 className="mt-5 text-3xl font-black leading-[1.45]">情報を守り、<br />AIを責任を持って使う</h2><p className="mt-5 max-w-sm text-xs leading-7 text-ink-soft">本方針は、技術やサービスの変化に合わせて継続的に見直します。</p></div>
      <div className="border-t border-ink">
        {sections.map(section => <article key={section.number} className="grid gap-4 border-b border-ink/15 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-6"><span className="font-display text-sm font-black text-ink-soft">{section.number}</span><div><h3 className="text-lg font-black">{section.title}</h3><p className="mt-4 text-sm leading-8 text-ink-soft">{section.body}</p></div></article>)}
      </div>
    </div></section>

    <section className="page-shell grid gap-10 py-20 md:py-24 lg:grid-cols-[.55fr_1fr] lg:gap-20">
      <div><SectionLabel label="Contact" color="peach" /><h2 className="mt-5 text-3xl font-black">お問い合わせ</h2></div>
      <div className="border-t border-ink pt-7 text-sm leading-8 text-ink-soft"><p>本方針や、当社サービスにおける情報・AIの取り扱いに関するご質問は、下記窓口までご連絡ください。</p><div className="mt-6 text-ink"><p className="font-bold">株式会社MOGCIA</p><p>〒810-0001 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル7階</p><p><a href="mailto:info@mogcia.jp" className="underline underline-offset-4">info@mogcia.jp</a></p></div><p className="mt-6 text-xs">制定日：2026年10月14日</p></div>
    </section>

    <SoftContact title={<>安心して進めるために、<br />まずはご相談ください</>} body="セキュリティやAIの利用条件も、プロジェクトに合わせて整理します" />
    <Footer />
  </main>
}
