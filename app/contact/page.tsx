import Link from 'next/link'
import Script from 'next/script'
import Footer from '@/components/Footer'
import { PageHeader, SectionHead, SectionLabel, tone } from '@/components/PageFrame'

export const metadata = {
  title: 'Contact | MOGCIA',
  description: 'サービス、プロダクト、パートナー、採用など、MOGCIAへのご相談・お問い合わせはこちらから。',
}

const topics = ['AI・DX相談', 'SNS・Web制作', 'プロダクト導入', '協業・パートナー', '採用・取材', 'その他']

const consultationExamples = [
  ['AI・DX', '何から始めたらいいか、一緒に整理してほしい', 'sky'],
  ['SNS・Web', '発信から問い合わせまでの流れを整えたい', 'pink'],
  ['Products', '自社に合うプロダクトを知りたい', 'mint'],
  ['Partner', '協業やパートナー制度について話を聞きたい', 'lilac'],
] as const

const contactFlow = [
  ['01', '内容を確認', 'いただいた内容を確認し、担当するメンバーを決めます'],
  ['02', '担当者からご連絡', 'ご希望の連絡方法に合わせて、担当者よりご連絡します'],
  ['03', '一緒に整理', 'オンラインまたは対面で、今の状況や目的を伺います'],
]

const fieldClass = 'mt-2 h-14 w-full rounded-2xl border border-ink/15 bg-white px-4 text-sm outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10'

export default function Contact() {
  return <main className="overflow-hidden bg-white text-ink">
    <PageHeader color="pink" diagonalAccent
      crumbs={[["Contact"]]}
      title="Contact"
      lead={<>まだ、うまく言葉に<br />できなくても大丈夫。</>}
      body="ご相談の内容が決まっていなくても、今感じていることからお聞かせください。話しながら、必要なことを一緒に整理します。"
    />

    <section id="ways" className="page-shell scroll-mt-24 pb-24 pt-16 md:pb-32 md:pt-24">
      <SectionHead number="01" label="Ways to contact" color="butter" title="話しやすい方法を、選んでください" note="短いメッセージならLINE、内容をまとめて送りたいときはフォームから。どちらからでも同じ担当者が丁寧に対応します。" />
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <a href="https://lin.ee/XjMOCFI" target="_blank" rel="noreferrer" className="group relative flex min-h-[17rem] flex-col overflow-hidden rounded-[1.75rem] border border-[#23ae58]/15 bg-[#edf8f1] p-7 text-ink md:p-9">
          <span className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-[#23ae58]/15" />
          <div className="relative flex items-center justify-between gap-4"><SectionLabel label="Quick message" color="mint" /><span className="rounded-full bg-white px-3 py-2 text-[10px] font-bold">いちばん気軽</span></div>
          <div className="relative mt-auto pt-10">
            <div className="flex items-center gap-4"><span className="h-3 w-3 rounded-full bg-[#23ae58]" aria-hidden /><h2 className="text-2xl font-black">LINEで相談する</h2></div>
            <p className="mt-3 max-w-md text-xs leading-6 text-ink-soft">「ちょっと聞いてみたい」という一言からどうぞ。ご相談後のやり取りも、そのままLINEで進められます。</p>
            <span className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-xs font-bold">MOGCIA公式LINEを開く<span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
          </div>
        </a>

        <a href="#form" className="group flex min-h-[17rem] flex-col rounded-[1.75rem] p-7 md:p-9" style={{ backgroundColor: tone.sky.band }}>
          <div className="flex items-center justify-between gap-4"><SectionLabel label="Contact form" color="sky" /><span className="rounded-full bg-white px-3 py-2 text-[10px] font-bold">24時間受付</span></div>
          <div className="mt-auto pt-10">
            <div className="flex items-center gap-4"><span className="h-3 w-3 rounded-full bg-[#6FA8DC]" aria-hidden /><h2 className="text-2xl font-black">フォームから送る</h2></div>
            <p className="mt-3 max-w-md text-xs leading-6 text-ink-soft">ご相談内容をまとめて伝えたい方はこちらから。必須項目以外は、分かる範囲でご入力ください。</p>
            <span className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-xs font-bold">フォームへ進む<span className="transition-transform group-hover:translate-x-1" aria-hidden>↓</span></span>
          </div>
        </a>
      </div>
      <p className="mt-5 text-center text-xs leading-6 text-ink-soft">お急ぎの場合は <a href="tel:0925179804" className="font-bold text-ink underline underline-offset-4">092-517-9804</a> へお電話ください（平日 10:00 - 17:00／土日祝除く）</p>
    </section>

    <section id="form" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.lilac.band }}>
      <div className="page-shell">
        <SectionHead number="02" label="Form" color="lilac" title="お問い合わせフォーム" note="すべて決まっていなくても大丈夫です。まずは分かる範囲でお聞かせください。" />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_.65fr] lg:items-start">
          <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_30px_60px_-45px_rgba(30,41,59,.35)] md:p-10">
            <form className="formrun grid gap-8" action="https://form.run/api/v1/r/7tbbkege85us5qykn1vsn7i3" method="post" data-formrun-success-url="/thanks" autoComplete="off">
              <fieldset>
                <legend className="text-sm font-black">ご相談の内容 <Required /></legend>
                <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-3">{topics.map((topic, index) => <label key={topic} className="relative"><input type="radio" name="お問い合わせ項目" value={topic} data-formrun-required defaultChecked={index === 0} className="peer sr-only" /><span className="grid min-h-14 cursor-pointer place-items-center rounded-2xl border border-ink/10 bg-surface px-2 text-center text-[11px] font-bold transition peer-checked:border-[#F08FA8] peer-checked:bg-[#FBEFF3] peer-checked:text-ink">{topic}</span></label>)}</div>
              </fieldset>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold">お名前<input name="お名前" placeholder="山田 太郎" className={fieldClass} /></label>
                <label className="text-sm font-bold">会社名<input name="会社名" placeholder="株式会社○○" className={fieldClass} /></label>
              </div>
              <label className="text-sm font-bold">メールアドレス <Required /><input name="メールアドレス" type="email" data-formrun-type="email" data-formrun-required placeholder="you@example.com" className={fieldClass} /></label>
              <label className="text-sm font-bold">お問い合わせ内容 <Required /><textarea name="お問い合わせ" data-formrun-required rows={7} placeholder="ご相談の背景や、今困っていることなどをご自由にお書きください。" className="mt-2 w-full resize-none rounded-2xl border border-ink/15 bg-white p-4 text-sm leading-7 outline-none transition focus:border-ink focus:ring-2 focus:ring-ink/10" /></label>

              <fieldset className="rounded-2xl p-5" style={{ backgroundColor: tone.sky.band }}>
                <legend className="px-1 text-sm font-bold">ご希望の連絡方法 <span className="ml-1 text-[10px] font-medium text-ink-soft">任意</span></legend>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold">{['メール', 'お電話', 'オンラインで話したい'].map((method, index) => <label className="flex items-center gap-2" key={method}><input type="radio" name="ご希望の連絡方法" value={method} defaultChecked={index === 0} className="h-4 w-4 accent-ink" />{method}</label>)}</div>
              </fieldset>

              <label className="flex flex-wrap items-center gap-3 text-xs font-bold"><input type="checkbox" name="個人情報利用同意" data-formrun-required className="h-5 w-5 accent-ink" /><span><Link href="/privacy-policy" className="underline underline-offset-4">個人情報の取り扱い</Link>に同意する</span><Required /></label>
              <div className="_formrun_gotcha absolute h-px w-px overflow-hidden"><label htmlFor="_formrun_gotcha">If you are a human, ignore this field</label><input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabIndex={-1} /></div>
              <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中..." className="button min-h-16 w-full bg-[#F08FA8] text-sm text-ink">この内容で送信する →</button>
            </form>
          </div>

          <aside className="grid gap-5 lg:sticky lg:top-28">
            <div className="rounded-[1.75rem] bg-white p-7">
              <SectionLabel label="Examples" color="pink" />
              <h2 className="mt-4 text-xl font-black">こんな段階からどうぞ</h2>
              <div className="mt-6 grid gap-3">{consultationExamples.map(([label, text, color]) => <div key={label} className="rounded-2xl p-4" style={{ backgroundColor: tone[color].band }}><span className="text-[9px] font-bold uppercase tracking-[.15em] text-ink-soft">{label}</span><p className="mt-2 text-xs font-bold leading-6">{text}</p></div>)}</div>
            </div>
            <div className="rounded-[1.75rem] bg-ink p-7 text-white">
              <SectionLabel label="After sending" color="butter" />
              <h2 className="mt-4 text-xl font-black">送信後の流れ</h2>
              <div className="mt-7 grid gap-6">{contactFlow.map(([number, title, body]) => <div className="flex gap-4" key={number}><span className="font-display text-xl font-black text-white/45">{number}</span><div><h3 className="text-sm font-black">{title}</h3><p className="mt-1 text-xs leading-6 text-white/65">{body}</p></div></div>)}</div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section id="office" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="03" label="Office" color="mint" title="会社情報" />
      <div className="mt-12 grid overflow-hidden rounded-[1.75rem] lg:grid-cols-[.9fr_1.1fr]" style={{ backgroundColor: tone.mint.band }}>
        <div className="p-8 md:p-12">
          <p className="text-xl font-black">株式会社MOGCIA</p>
          <address className="mt-6 not-italic text-xs leading-8 text-ink-soft">〒810-0001<br />福岡県福岡市中央区天神4-6-28<br />いちご天神ノースビル7階</address>
          <dl className="mt-7 grid grid-cols-[4rem_1fr] gap-y-3 border-t border-ink/10 pt-6 text-xs"><dt className="font-bold">TEL</dt><dd><a href="tel:0925179804">092-517-9804</a></dd><dt className="font-bold">MAIL</dt><dd><a href="mailto:info@mogcia.jp">info@mogcia.jp</a></dd><dt className="font-bold">HOURS</dt><dd>平日 10:00 - 17:00（土日祝除く）</dd></dl>
        </div>
        <div className="relative min-h-[24rem] overflow-hidden bg-white/65">
          <iframe
            title="株式会社MOGCIA 所在地"
            src="https://www.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A4%A9%E7%A5%9E4-6-28&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a href="https://www.google.com/maps/search/?api=1&query=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E7%A6%8F%E5%B2%A1%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%A4%A9%E7%A5%9E4-6-28" target="_blank" rel="noreferrer" className="absolute bottom-4 right-4 rounded-full bg-white px-5 py-3 text-[11px] font-bold shadow-lg transition-transform hover:-translate-y-0.5">Google マップで開く ↗</a>
        </div>
      </div>
    </section>

    <Footer />
    <Script src="https://sdk.form.run/js/v2/formrun.js" strategy="afterInteractive" />
  </main>
}

function Required() {
  return <span className="ml-2 rounded-full px-2.5 py-1 text-[10px] font-bold" style={{ backgroundColor: tone.pink.chip }}>必須</span>
}
