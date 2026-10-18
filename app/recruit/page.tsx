import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/Footer'
import { PageHeader, SectionHead, SectionLabel, SoftContact, tone } from '@/components/PageFrame'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata(
  '採用情報 | 株式会社MOGCIA（福岡のAI企業）',
  '/recruit',
)

export default function RecruitPage() {
  const values = [
    ['01', '一緒に考える', '役割や立場を越えて意見を交わし、よりよい方法をチームで考えます。', 'sky'],
    ['02', 'まず形にする', '小さくても手を動かし、試した結果から次の改善へつなげます。', 'pink'],
    ['03', '育て続ける', '完成をゴールにせず、使う人の声をもとにサービスや仕組みを育てます。', 'lilac'],
  ] as const

  return (
    <main className="bg-white text-ink">
      <PageHeader crumbs={[['採用情報']]} title="Recruit" color="mint" diagonalAccent lead={<>つくることを楽しみ、<br />いっしょに育てる仲間へ</>} body="MOGCIAは、企画・制作・運用・改善をチームでつなぎ、お客さまのやりたいことを形にしています。" />

      <section className="py-24 md:py-32" style={{ backgroundColor: tone.sky.band }}><div className="page-shell">
        <SectionHead number="01" label="Working at MOGCIA" color="sky" title="MOGCIAで働くということ" note="職種に関係なく、大切にしている3つの姿勢" />
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {values.map(([number, title, body, color]) => <article key={number} className="relative overflow-hidden rounded-[1.5rem] bg-white p-7 md:p-8">
            <span className="absolute -right-6 -top-8 font-display text-[7rem] font-black leading-none" style={{ color: tone[color].band }} aria-hidden>{number}</span>
            <span className="relative grid h-14 w-14 place-items-center rounded-full font-display text-lg font-black" style={{ backgroundColor: tone[color].chip }}>{number}</span>
            <h3 className="mt-7 text-lg font-black">{title}</h3>
            <p className="mt-3 text-xs leading-7 text-ink-soft">{body}</p>
          </article>)}
        </div>
      </div></section>

      <section className="page-shell py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1fr]">
          <div><SectionLabel number="02" label="Open positions" color="pink" /><h2 className="mt-5 text-3xl font-black">募集状況</h2></div>
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#FBEFF3] p-8 md:p-10">
            <span className="absolute -right-12 -top-16 h-52 w-52 rounded-full bg-[#FBD9E2]" aria-hidden />
            <div className="relative">
            <span className="inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold" style={{ backgroundColor: tone.pink.chip }}>現在の募集</span>
            <p className="mt-6 text-2xl font-black leading-10">現在、求人募集は行っていません。</p>
            <p className="mt-5 max-w-xl text-sm leading-8 text-ink-soft">MOGCIAに関心をお寄せいただきありがとうございます。募集を再開する際は、本ページにて職種や応募方法をお知らせします。</p>
            </div>
          </div>
        </div>
      </section>

      <SoftContact title={<>MOGCIAについて、<br />もっと知りたい方へ</>} body="採用に関するお問い合わせは、フォームよりご連絡ください" />
      <Footer />
    </main>
  )
}
