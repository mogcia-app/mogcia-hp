import Link from 'next/link'
import Footer from '@/components/Footer'
import { PageHeader, SectionHead, tone, type Tone } from '@/components/PageFrame'

export const metadata = { title: '営業・ご提案の方へ | MOGCIA', description: 'MOGCIAへの営業・ご提案の受付窓口です' }

const rules: [string, string, string, Tone][] = [
  ['01', '営業専用メールへ', 'サービスのご紹介や協業のご提案は、sales@mogcia.comへお送りください', 'sky'],
  ['02', '返信は検討する場合のみ', 'すべての内容を確認しますが、ご返信は詳しくお話を伺いたい場合に限らせていただきます', 'pink'],
  ['03', '資料はURLで', '確認できるWebサイトや資料がある場合は、メール本文にURLをご記載ください', 'butter'],
]

const helpfulDetails = ['サービス・提案の概要', 'MOGCIAとの連携方法やメリット', '費用・契約条件', '確認できるWebサイトや資料URL']

export default function ProposalPage() {
  return <main className="bg-white text-ink">
    <PageHeader color="peach" diagonalAccent crumbs={[['営業・ご提案の方へ']]} title="Proposal" lead={<>ご提案は、<br />こちらの窓口から</>} body="MOGCIAへのサービスのご紹介や協業のご提案は、このページで受け付けています。ご協力をお願いいたします。" />

    <section className="page-shell py-24 md:py-32">
      <SectionHead number="01" label="Please" color="sky" title="ご提案いただく前に" />
      <div className="mt-10 grid gap-4 md:grid-cols-3">{rules.map(([no, title, body, color]) => <article key={no} className="rounded-[1.5rem] p-7" style={{ backgroundColor: tone[color].band }}>
        <p className="grid h-14 w-14 place-items-center rounded-full font-display text-lg font-black" style={{ backgroundColor: tone[color].chip }}>{no}</p>
        <h3 className="mt-5 text-lg font-black">{title}</h3>
        <p className="mt-2.5 text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
    </section>

    <section className="py-24 md:py-32" style={{ backgroundColor: tone.peach.band }}><div className="page-shell grid gap-12 lg:grid-cols-[.6fr_1fr] lg:gap-20">
      <SectionHead number="02" label="What to include" color="peach" title={<>検討しやすいご提案に<br />必要なこと</>} note="簡潔で構いません。次の内容があると確認がスムーズです" />
      <div className="rounded-[1.75rem] bg-white p-7 md:p-10"><div className="border-t border-ink">{helpfulDetails.map((item, index) => <p key={item} className="grid grid-cols-[3rem_1fr] items-center border-b border-ink/15 py-5 text-sm font-bold"><span className="font-display text-[10px] text-ink-soft">{String(index + 1).padStart(2, '0')}</span>{item}</p>)}</div><p className="mt-7 text-xs leading-7 text-ink-soft">資料がある場合は、ファイルを直接添付せず、閲覧できるURLをご記載ください。</p></div>
    </div></section>

    <section id="email" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell grid items-start gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
      <div>
        <SectionHead number="03" label="Email" color="lilac" title="メールでお送りください" note="内容を確認のうえ、詳しくお話を伺いたい場合に担当者からご連絡します" />
        <div className="mt-8 rounded-[1.5rem] bg-white p-6 text-xs leading-6"><p className="font-black">ご相談・ご依頼の方はこちら</p><p className="mt-1 text-ink-soft">MOGCIAへのお仕事のご相談は、通常のお問い合わせからどうぞ。</p><Link href="/contact" className="mt-3 inline-block border-b border-ink pb-0.5 font-bold">お問い合わせへ →</Link></div>
      </div>
      <div className="rounded-[1.75rem] bg-white p-7 md:p-10 lg:p-12">
        <p className="font-display text-[10px] font-bold uppercase tracking-[.18em] text-ink-soft">Sales contact</p>
        <a href="mailto:sales@mogcia.com" className="mt-5 block break-all text-[clamp(1.55rem,4vw,2.75rem)] font-black tracking-[-.03em] underline decoration-2 underline-offset-8 transition-opacity hover:opacity-60">sales@mogcia.com</a>
        <p className="mt-7 max-w-xl text-xs leading-7 text-ink-soft">会社名、ご担当者名、ご提案の概要、費用や条件、確認できる資料URLをご記載のうえお送りください。</p>
        <a href="mailto:sales@mogcia.com?subject=MOGCIAへの営業・ご提案" className="button button-dark mt-8 text-sm">メールを作成する →</a>
      </div>
    </div></section>
    <Footer />
  </main>
}
