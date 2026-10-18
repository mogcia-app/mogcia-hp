import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/Footer'
import { DiagonalAccent, SectionLabel, tone } from '@/components/PageFrame'
import { createPageMetadata } from '../../metadata'

export const metadata: Metadata = createPageMetadata(
  'お問い合わせ完了 | 株式会社MOGCIA',
  '/thanks',
)

const nextSteps = [
  ['01', '受付完了', 'ご入力いただいた内容を受け付けました'],
  ['02', '内容を確認', '担当者が内容を確認します'],
  ['03', 'ご連絡', '必要に応じて担当者からご連絡します'],
]

export default function ContactThanksPage() {
  return (
    <main className="bg-white text-ink">
      <section className="relative min-h-[44rem] overflow-hidden bg-white">
        <DiagonalAccent color="mint" />
        <div className="page-shell relative z-10 flex min-h-[44rem] flex-col pb-20 pt-10 md:pt-12">
          <p className="text-[10px] font-bold text-ink-soft">
            <Link href="/">TOP</Link>　／　送信完了
          </p>

          <p className="pointer-events-none mt-6 -ml-[.06em] select-none whitespace-nowrap font-display text-[clamp(3rem,17vw,4.25rem)] font-black leading-[.9] tracking-[-.04em] text-[#E9F6F1] sm:text-[9rem] lg:text-[11.5rem]" style={{ WebkitTextStroke: `3px ${tone.mint.dot}`, paintOrder: 'stroke fill' }} aria-hidden>
            Thanks.
          </p>

          <div className="my-auto max-w-2xl py-12 sm:py-16">
            <SectionLabel label="Thank you" color="mint" />
            <h1 className="mt-7 text-balance text-[clamp(1.5rem,7vw,1.9rem)] font-black leading-[1.55] tracking-[-.02em] sm:text-[2.15rem] md:text-[3.1rem]">
              送信を受け付けました
            </h1>
            <p className="mt-6 max-w-xl text-[13px] leading-[2] text-ink-soft">
              お問い合わせいただき、ありがとうございます。<br className="hidden sm:block" />
              内容を確認のうえ、必要に応じて担当者からご連絡いたします。
            </p>
            <Link href="/" className="button button-dark mt-9 text-sm">
              トップページへ戻る →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ backgroundColor: tone.mint.band }}>
        <div className="page-shell">
          <div className="grid gap-4 md:grid-cols-3">
            {nextSteps.map(([number, title, body]) => (
              <article key={number} className="rounded-[1.5rem] bg-white p-7 md:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full font-display text-sm font-black" style={{ backgroundColor: tone.mint.chip }}>
                  {number}
                </span>
                <h2 className="mt-5 text-lg font-black">{title}</h2>
                <p className="mt-2 text-xs leading-6 text-ink-soft">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-[11px] leading-6 text-ink-soft">
            送信内容によっては、ご連絡までお時間をいただく場合があります。
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
