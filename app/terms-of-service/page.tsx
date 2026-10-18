import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/Footer'
import { SectionLabel, SoftContact, tone } from '@/components/PageFrame'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata(
  '利用規約 | 株式会社MOGCIA',
  '/terms-of-service',
)

const termsSections = [
  {
    number: '01',
    title: '第1条（本規約の適用）',
    body: '本規約は、株式会社MOGCIA（以下「当社」といいます）が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。本サービスを利用されるお客さま（以下「利用者」といいます）は、本規約に同意したものとみなされます。',
  },
  {
    number: '02',
    title: '第2条（利用登録）',
    body: '本サービスの利用を希望する者は、当社所定の方法により利用登録を申請し、当社が承認した時点で利用契約が成立します。登録内容に虚偽があった場合や、過去に本規約違反等が判明した場合、当社は登録を拒否または取り消すことがあります。',
  },
  {
    number: '03',
    title: '第3条（アカウントの管理）',
    body: '利用者は、自己の責任においてアカウントIDおよびパスワードを管理し、第三者に利用させてはなりません。ID・パスワードの管理不備、使用上の過誤、第三者の使用等による損害について、当社は一切の責任を負いません。',
  },
  {
    number: '04',
    title: '第4条（禁止事項）',
    body: `利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。

1. 法令または公序良俗に違反する行為
2. 犯罪行為に関連する行為
3. 当社、他の利用者、または第三者の知的財産権・肖像権・プライバシーを侵害する行為
4. 本サービスの運営を妨害するおそれのある行為
5. 反社会的勢力等への利益供与およびその他これに準ずる行為`,
  },
  {
    number: '05',
    title: '第5条（本サービスの提供の停止等）',
    body: `当社は、以下のいずれかに該当する場合、利用者に事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができます。

1. 本サービスに係るシステムの保守点検または更新を行う場合
2. 地震、落雷、火災、停電、天災等の不可抗力によりサービス提供が困難となった場合
3. コンピュータまたは通信回線等が事故により停止した場合
4. その他、当社がサービスの提供が困難と判断した場合

なお、当社は、本サービスの停止または中断により利用者または第三者が被った不利益や損害について一切の責任を負いません。`,
  },
  {
    number: '06',
    title: '第6条（知的財産権）',
    body: '本サービスに関連するすべてのコンテンツ（文章、画像、動画、プログラム等）の知的財産権は、利用者に帰属するものを除き、当社または適正な権利を有する第三者に帰属します。利用者は、当社の事前の承諾なく複製、転用、販売等を行ってはなりません。',
  },
  {
    number: '07',
    title: '第7条（掲載画像等について）',
    body: '本サイトまたは本サービスに掲載されている画像、イラスト、画面イメージ、図表その他のビジュアル表現にはイメージを含むものがあり、実際の仕様、提供内容、画面構成、提供時期等と一部異なる場合があります。',
  },
  {
    number: '08',
    title: '第8条（利用制限および登録抹消）',
    body: '当社は、利用者が本規約のいずれかに違反したと当社が判断した場合、事前の通知なく、利用資格の停止または登録抹消等の措置を講じることができます。当社は、これにより利用者に生じた損害について一切責任を負いません。',
  },
  {
    number: '09',
    title: '第9条（免責事項）',
    body: '当社は、本サービスに事実上または法律上の瑕疵がないことを保証するものではありません。当社は、利用者による本サービスの利用に起因して発生した損害について、当社の故意または重大な過失がある場合を除き、一切の責任を負いません。',
  },
  {
    number: '10',
    title: '第10条（個人情報の取り扱い）',
    body: '当社は、本サービスの利用によって取得する個人情報について、当社が別途定めるプライバシーポリシーに基づき適切に取り扱います。',
  },
  {
    number: '11',
    title: '第11条（本サービス内容の変更等）',
    body: '当社は、利用者に通知することなく、本サービスの内容の変更、追加、廃止を行うことができるものとします。変更後に利用者が本サービスを利用した場合には、当該利用者は変更後の内容に同意したものとみなします。',
  },
  {
    number: '12',
    title: '第12条（規約の変更）',
    body: '当社は、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができます。変更後の本規約は、本サービス上に掲載した時点から効力を生じるものとします。重要な変更がある場合は、当社ウェブサイト等で告知します。',
  },
  {
    number: '13',
    title: '第13条（準拠法・管轄裁判所）',
    body: '本規約の解釈には日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する地方裁判所または簡易裁判所を第一審の専属的合意管轄裁判所とします。',
  },
] as const

export default function TermsOfServicePage() {
  return <main className="bg-white text-ink">
    <section className="page-shell pb-20 pt-12 md:pb-24 md:pt-20">
      <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　利用規約</p>
      <div className="mt-14 border-b border-ink/25 pb-10">
        <div>
          <p className="font-display text-[10px] font-bold uppercase tracking-[.2em] text-ink-soft">Terms of Service</p>
          <h1 className="mt-5 text-4xl font-black leading-[1.35] tracking-[-.04em] sm:text-5xl md:text-6xl">ルールを、<br />わかりやすく。</h1>
        </div>
        <div className="mt-9 max-w-2xl border-t border-ink pt-7">
          <p className="text-base font-bold leading-8">気持ちよくサービスをご利用いただくために。</p>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-ink-soft">本規約は、株式会社MOGCIAが提供する各種サービスの利用条件を定めています。ご利用に先立ち内容をご確認のうえ、同意してお申し込みください。</p>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28" style={{ backgroundColor: tone.butter.band }}>
      <div className="page-shell grid gap-12 lg:grid-cols-[.55fr_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel label="Terms" color="butter" />
          <h2 className="mt-5 text-3xl font-black leading-[1.45]">サービスを<br />ご利用になる前に</h2>
          <p className="mt-5 max-w-sm text-xs leading-7 text-ink-soft">基本事項から禁止事項、免責事項まで、サービスのご利用に関わる条件を13の条文にまとめています。</p>
          <nav aria-label="利用規約の目次" className="mt-7 hidden border-t border-ink/15 lg:block">
            {termsSections.map(section => <a key={section.number} href={`#term-${section.number}`} className="flex min-h-8 items-center justify-between border-b border-ink/10 text-[10px] font-bold text-ink-soft transition-colors hover:text-ink"><span>{section.number}　{section.title.replace(/^第\d+条/, '')}</span><span aria-hidden>↓</span></a>)}
          </nav>
        </aside>

        <div className="border-t border-ink">
          {termsSections.map(section => <article id={`term-${section.number}`} key={section.number} className="scroll-mt-28 grid gap-4 border-b border-ink/15 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-6 md:py-10">
            <span className="font-display text-sm font-black text-ink-soft">{section.number}</span>
            <div><h3 className="text-lg font-black md:text-xl">{section.title}</h3><p className="mt-4 whitespace-pre-line text-sm leading-8 text-ink-soft">{section.body}</p>{section.number === '10' && <Link href="/privacy-policy" className="mt-5 inline-block border-b border-ink text-xs font-bold">プライバシーポリシーを見る →</Link>}</div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="page-shell py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[.55fr_1fr] lg:gap-20">
        <div><SectionLabel label="Contact" color="peach" /><h2 className="mt-5 text-3xl font-black">お問い合わせ窓口</h2><p className="mt-5 max-w-sm text-xs leading-7 text-ink-soft">本規約や個別のご契約について、不明な点があればお問い合わせください。</p></div>
        <div className="rounded-[2rem] border border-ink/10 bg-[#fafaf9] p-7 sm:p-9">
          <p className="text-sm leading-8 text-ink-soft">本規約に関するご質問や、個別契約に関するご相談は、下記窓口までご連絡ください。</p>
          <div className="mt-7 border-t border-ink/15 pt-7 text-sm leading-8">
            <p className="font-black">株式会社MOGCIA　契約窓口</p>
            <p className="mt-2 text-ink-soft">〒810-0001<br className="sm:hidden" /> 福岡県福岡市中央区天神4-6-28<br />いちご天神ノースビル7階</p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 font-bold"><a href="tel:092-517-9804" className="border-b border-ink">092-517-9804</a><a href="mailto:info@mogcia.jp" className="border-b border-ink">info@mogcia.jp</a></div>
          </div>
          <p className="mt-7 text-[10px] font-bold uppercase tracking-[.12em] text-ink-soft">Established — 2025.04.01</p>
        </div>
      </div>
    </section>

    <SoftContact title={<>ご利用前の疑問も、<br />気軽にご相談ください</>} body="サービス内容やご契約条件について、分かりやすくご案内します" />
    <Footer />
  </main>
}
