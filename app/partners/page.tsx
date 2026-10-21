import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { PageHeader, SectionHead, SectionLabel, SoftContact, tone, type Tone } from '@/components/PageFrame'
import { products } from '@/lib/site-data'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata('パートナー募集 | 株式会社MOGCIA', '/partners')

const ways: [string, string, string, string, Tone][] = [
  ['01', '気軽に', '紹介のみ', 'お知り合いの企業や店舗をご紹介いただくだけ。説明から提案、契約まではMOGCIAが対応します', 'sky'],
  ['02', 'しっかり', '商談同行', '商談の場に一緒に入っていただく形。お客さまとの関係を活かしながら、提案はMOGCIAがサポートします', 'pink'],
  ['03', '本格的に', '代理店として継続的に', '自社のサービスと組み合わせて、継続的にご提案いただく形。営業資料やデモ環境もご用意します', 'lilac'],
]

const steps: [string, string, string, Tone][] = [
  ['01', '紹介', '企業や店舗をご紹介ください', 'sky'],
  ['02', 'ご相談・ご提案', 'MOGCIAが説明や提案を支援します', 'pink'],
  ['03', 'ご成約', '条件が合えば正式に契約へ進みます', 'butter'],
  ['04', '報酬のお支払い', '契約内容に応じた報酬をお支払いします', 'lilac'],
]

const productDots = ['#f7df83', '#d7c5f7', '#f6b2b5', '#bcdcf7', '#f6c08f', '#fddde5']
const productTones: Tone[] = ['butter', 'lilac', 'pink', 'sky', 'peach', 'pink']
const partnerServices: [string, string, Tone][] = [
  ['SNS運用代行', '企画から投稿制作、分析・改善まで。発信を続けられる形に整えます', 'sky'],
  ['LP・HP・EC制作', '価値と導線を整理し、公開後の改善まで見据えたサイトを制作します', 'pink'],
  ['SNS・Web一体支援', 'SNSで知ってもらい、Webから応募やお問い合わせにつながる導線をつくります', 'butter'],
  ['販促物制作', '名刺・パンフレット・チラシなど、デザインから印刷・納品まで対応します', 'lilac'],
  ['システム開発', '業務や現場の流れを整理し、使い続けられるシステムやAIを開発します', 'mint'],
  ['プランニング', '内容が決まっていない段階から、必要な施策と進め方を一緒に整理します', 'peach'],
]
const supportItems = ['営業資料の提供', '商談同席サポート', 'デモ・説明対応', '提案サポート', '導入・運用支援']
const faqs = [
  ['個人でも参加できますか？', 'はい。フリーランスや個人事業主の方もご参加いただけます'],
  ['費用はかかりますか？', '関わり方や内容によって異なります。詳細は個別にご相談のうえ、ご案内します'],
  ['報酬はいつ、どのように支払われますか？', '契約内容に応じて、事前に報酬とお支払い条件をご案内します'],
  ['紹介したお客さまとのやり取りは誰がしますか？', '説明や提案はMOGCIAが支援します。商談への同席もサポートしています'],
  ['契約書は交わしますか？', 'はい。関わり方や報酬条件を確認したうえで契約書を取り交わします'],
]

export default function Partners() {
  return <main className="bg-white text-ink">
    <PageHeader crumbs={[['パートナー制度']]} title="Partner" color="peach" diagonalAccent lead={<>紹介するだけでも、<br />いっしょに届けられる</>} body="MOGCIAのサービスやプロダクトを、企業や店舗にご紹介いただく制度です。紹介だけ、商談同行、継続的な代理店活動など、関わり方に合わせて柔軟に参加できます。" />

    <section id="ways" className="page-shell scroll-mt-24 pb-24 md:pb-32">
      <SectionHead number="01" label="Ways to join" color="sky" title="関わり方は、3つから" note="できる範囲で大丈夫です。途中で関わり方を変えることもできます" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">{ways.map(([number, label, title, body, color]) => <article key={number} className="flex flex-col gap-4 border border-ink bg-white p-7 md:p-8" style={{boxShadow:`5px 5px 0 ${tone[color].chip}`}}>
        <div className="flex items-center gap-3"><span className="font-display text-sm font-black text-ink-soft">{number}</span><span className="rounded-full px-3 py-1 text-[10px] font-bold" style={{ backgroundColor: tone[color].chip }}>{label}</span></div>
        <h3 className="text-[22px] font-black">{title}</h3>
        <p className="text-[13px] leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
    </section>

    <section id="lineup" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.butter.band }}><div className="page-shell">
      <SectionHead number="02" label="Lineup" color="butter" title="紹介できるプロダクト・サービス" action={<Link href="/services" className="border-b border-ink pb-1 text-xs font-bold">サービスの詳細を見る →</Link>} />
      <div className="mt-12 flex items-center gap-4"><h3 className="text-sm font-black">自社プロダクト</h3><span className="h-px flex-1 bg-ink/15" aria-hidden /></div>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{products.map((product, index) => <article key={product.name} className="grid grid-cols-[4rem_1fr] items-start gap-4 border border-ink bg-white p-6" style={{boxShadow:`5px 5px 0 ${tone[productTones[index%productTones.length]].chip}`}}>
        <span className="h-16 w-16 rounded-full" style={{ backgroundColor: productDots[index % productDots.length] }} aria-hidden />
        <div><p className="text-[10px] font-bold text-ink-soft">{product.label}</p><h3 className="mt-1.5 font-logo text-xl font-black">{product.name}</h3><p className="mt-1.5 text-xs leading-6 text-ink-soft">{product.description}</p></div>
      </article>)}</div>
      <div className="mt-12 flex items-center gap-4"><h3 className="text-sm font-black">支援サービス</h3><span className="h-px flex-1 bg-ink/15" aria-hidden /></div>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{partnerServices.map(([name, description, color], index) => <article key={name} className="border border-ink bg-white p-6" style={{boxShadow:`5px 5px 0 ${tone[color].chip}`}}>
        <div className="flex items-center justify-between gap-4"><span className="font-display text-[10px] font-black text-ink-soft">{String(index + 1).padStart(2, '0')}</span><span className="h-3 w-3 rounded-full" style={{ backgroundColor: tone[color].dot }} aria-hidden /></div>
        <h3 className="mt-5 text-lg font-black">{name}</h3><p className="mt-3 text-xs leading-6 text-ink-soft">{description}</p>
      </article>)}</div>
    </div></section>

    <section id="flow" className="page-shell scroll-mt-24 py-24 md:py-32">
      <SectionHead number="03" label="Flow" color="pink" title="パートナー活動の流れ" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([number, title, body, color]) => <article key={number} className="relative overflow-hidden border border-ink bg-white p-7" style={{boxShadow:`5px 5px 0 ${tone[color].chip}`}}>
        <p className="grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full font-display text-2xl font-black" style={{ backgroundColor: tone[color].chip }}>{number}</p>
        <h3 className="mt-5 text-[15px] font-black">{title}</h3>
        <p className="mt-2.5 text-xs leading-7 text-ink-soft">{body}</p>
      </article>)}</div>
    </section>

    <section id="support" className="scroll-mt-24 py-24 md:py-32" style={{ backgroundColor: tone.lilac.band }}><div className="page-shell grid gap-12 lg:grid-cols-[.55fr_1fr] lg:gap-20">
      <div>
        <SectionLabel number="04" label="Support" color="lilac" />
        <h2 className="mt-5 text-3xl font-black">MOGCIAのサポート</h2>
        <p className="mt-4 text-xs leading-6 text-ink-soft">営業が得意でなくても大丈夫。説明や提案はMOGCIAが担います</p>
      </div>
      <ol className="border-t border-ink">{supportItems.map((item, index) => <li key={item} className="flex min-h-14 items-center gap-5 border-b border-ink/15 text-sm font-bold"><span className="font-display text-[10px] text-ink-soft">{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol>
    </div></section>

    <section id="faq" className="page-shell grid scroll-mt-24 gap-12 py-24 md:py-32 lg:grid-cols-[.55fr_1fr]">
      <div><SectionLabel number="05" label="FAQ" color="mint" /><h2 className="mt-5 text-3xl font-black">よくある質問</h2></div>
      <div className="border-t border-ink">{faqs.map(([question, answer], index) => <details key={question} className="group border-b border-ink/20 py-6" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-bold"><span><small className="mr-4 font-display">Q{index + 1}</small>{question}</span><span className="group-open:rotate-45">＋</span></summary><p className="pl-9 pt-4 text-xs leading-6 text-ink-soft">{answer}</p></details>)}</div>
    </section>

    <div id="apply" className="scroll-mt-24"><SoftContact body="パートナー制度について、まずは話を聞いてみたいという方もお気軽にご相談ください。" /></div>
    <Footer />
  </main>
}
