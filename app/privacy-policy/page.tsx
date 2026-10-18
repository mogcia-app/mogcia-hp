import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/Footer'
import { SectionLabel, SoftContact, tone } from '@/components/PageFrame'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata(
  'プライバシーポリシー | 株式会社MOGCIA',
  '/privacy-policy',
)

const sections = [
  {
    number: '01',
    title: '個人情報の利用目的',
    body: '当社は、サービスに関するお問い合わせ対応、提案・契約・請求手続き、採用活動、イベントやセミナーのご案内など、事業運営に必要な範囲で個人情報を利用いたします。利用目的を超えて個人情報を取り扱うことはありません。',
  },
  {
    number: '02',
    title: '取得する情報',
    body: '当社は、お名前、会社名、所属、役職、メールアドレス、電話番号、住所などのお問い合わせ時にご提供いただく情報、アクセスログやCookie等の技術情報、ならびに業務遂行の過程で必要となる契約に付随する情報を取得します。',
  },
  {
    number: '03',
    title: '情報の管理と保護',
    body: '漏えい、滅失、毀損などを防ぐために、適切な技術的・組織的安全管理措置を講じています。SSL通信・アクセス制限・ログ管理などを実施し、必要に応じて従業員への教育を継続しています。',
  },
  {
    number: '04',
    title: '第三者提供',
    body: '法令に基づく場合や、お客さまの同意がある場合、当社業務の委託先に必要な範囲で提供する場合を除き、個人情報を第三者に提供することはありません。委託先に対しては適切な監督を行います。',
  },
  {
    number: '05',
    title: '個人情報の開示・訂正・利用停止等',
    body: 'ご本人からの請求に応じ、保有する個人情報の開示、訂正、利用停止、削除等を法令の範囲内で速やかに対応します。ご希望の際は、下記お問い合わせ窓口までご連絡ください。',
  },
  {
    number: '06',
    title: 'Cookie等の利用',
    body: '当社ウェブサイトでは、利用状況の把握やサービス向上のためにCookieや類似技術を使用する場合があります。ブラウザの設定によりCookieの受け入れを拒否できますが、サービスの一部が正常に機能しない場合があります。',
  },
  {
    number: '07',
    title: 'プライバシーポリシーの更新',
    body: '法令の改正やサービス内容の変更に応じて、本ポリシーを改定することがあります。重要な変更がある場合は、当社ウェブサイト上で告知いたします。',
  },
] as const

export default function PrivacyPolicyPage() {
  return <main className="bg-white text-ink">
    <section className="page-shell pb-20 pt-12 md:pb-24 md:pt-20">
      <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　プライバシーポリシー</p>
      <div className="mt-14 border-b border-ink/25 pb-10">
        <div>
          <p className="font-display text-[10px] font-bold uppercase tracking-[.2em] text-ink-soft">Privacy Policy</p>
          <h1 className="mt-5 text-balance text-[clamp(1.65rem,7.5vw,2.25rem)] font-black leading-[1.45] tracking-[-.04em] sm:text-5xl md:text-6xl">大切な情報を、<br />大切に扱う。</h1>
        </div>
        <div className="mt-9 max-w-2xl border-t border-ink pt-7">
          <p className="text-base font-bold leading-8">安心してサービスをご利用いただくために。</p>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-ink-soft">株式会社MOGCIA（以下「当社」）は、お客さまやパートナーの皆さまからお預かりする個人情報を適切に管理します。関連法令・ガイドラインを遵守し、必要な範囲で取得・利用・保存するとともに、安全管理措置を継続して見直します。</p>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28" style={{ backgroundColor: tone.lilac.band }}>
      <div className="page-shell grid gap-12 lg:grid-cols-[.55fr_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel label="Our policy" color="lilac" />
          <h2 className="mt-5 text-3xl font-black leading-[1.45]">個人情報の<br />取り扱いについて</h2>
          <p className="mt-5 max-w-sm text-xs leading-7 text-ink-soft">当社が個人情報をどのように取得し、利用・管理するかを7つの項目にまとめています。</p>
          <nav aria-label="プライバシーポリシーの目次" className="mt-8 hidden border-t border-ink/15 lg:block">
            {sections.map(section => <a key={section.number} href={`#policy-${section.number}`} className="flex min-h-10 items-center justify-between border-b border-ink/10 text-[11px] font-bold text-ink-soft transition-colors hover:text-ink"><span>{section.number}　{section.title}</span><span aria-hidden>↓</span></a>)}
          </nav>
        </aside>
        <div className="border-t border-ink">
          {sections.map(section => <article id={`policy-${section.number}`} key={section.number} className="scroll-mt-28 grid gap-4 border-b border-ink/15 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-6 md:py-10">
            <span className="font-display text-sm font-black text-ink-soft">{section.number}</span>
            <div><h3 className="text-lg font-black md:text-xl">{section.title}</h3><p className="mt-4 text-sm leading-8 text-ink-soft">{section.body}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="page-shell py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[.55fr_1fr] lg:gap-20">
        <div><SectionLabel label="Contact" color="peach" /><h2 className="mt-5 text-3xl font-black">お問い合わせ窓口</h2><p className="mt-5 max-w-sm text-xs leading-7 text-ink-soft">個人情報の開示・訂正・利用停止・削除に関するご依頼も、こちらで承ります。</p></div>
        <div className="rounded-[2rem] border border-ink/10 bg-[#fafaf9] p-7 sm:p-9">
          <p className="text-sm leading-8 text-ink-soft">本ポリシーに関するご質問や、個人情報のお取り扱いに関するご依頼は、下記窓口までご連絡ください。</p>
          <div className="mt-7 border-t border-ink/15 pt-7 text-sm leading-8">
            <p className="font-black">株式会社MOGCIA　個人情報保護担当</p>
            <p className="mt-2 text-ink-soft">〒810-0001<br className="sm:hidden" /> 福岡県福岡市中央区天神4-6-28<br />いちご天神ノースビル7階</p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 font-bold"><a href="tel:092-517-9804" className="border-b border-ink">092-517-9804</a><a href="mailto:info@mogcia.jp" className="border-b border-ink">info@mogcia.jp</a></div>
          </div>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[.12em] text-ink-soft">Established — 2025.04.01</p>
        </div>
      </div>
    </section>

    <SoftContact title={<>安心して進めるために、<br />まずはご相談ください</>} body="個人情報の取り扱いや、ご依頼時のデータ管理についても分かりやすくご案内します" />
    <Footer />
  </main>
}
