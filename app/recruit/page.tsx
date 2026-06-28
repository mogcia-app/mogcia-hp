import type { Metadata } from 'next'

import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata(
  '採用情報 | 株式会社MOGCIA（福岡のAI企業）',
)

export default function RecruitPage() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f8f6f1] to-white text-neutral-950">
      <section className="px-6 py-28 md:px-10 md:py-32 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Recruit</p>
            <h1 className="mt-5 text-[2.5rem] font-light leading-[1.1] tracking-[-0.04em] text-neutral-950 md:text-6xl">
              採用情報
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-8 text-neutral-600 md:text-base">
              現在、求人募集は行っていません。
              <br className="hidden md:block" />
              募集を再開する際は、本ページにてお知らせします。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10 md:pb-28 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-8 border-y border-[#ded6ca]/70 py-10 md:py-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Status</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                募集状況
              </h2>
            </div>
            <div>
              <p className="text-[1.25rem] font-light leading-[1.6] tracking-[-0.02em] text-neutral-950 md:text-[1.55rem]">
                現在、募集していません。
              </p>
              <p className="mt-5 text-sm leading-8 text-neutral-600 md:text-base">
                MOGCIAに関心をお寄せいただきありがとうございます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection variant="panel" />
      <Footer />
    </main>
  )
}
