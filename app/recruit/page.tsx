import type { Metadata } from 'next'

import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata(
  '採用情報 | 株式会社MOGCIA（福岡のAI企業）',
)

export default function RecruitPage() {
  return (
    <main className="bg-[#f7f7f5] text-neutral-950">
      <section className="border-b border-neutral-200 px-6 py-24 md:px-10 md:py-28 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Recruit</p>
          <h1 className="mt-5 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
            求人募集
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="max-w-3xl border-t border-neutral-200 pt-8">
            <p className="text-[1.2rem] font-light leading-[1.6] tracking-[-0.02em] text-neutral-950 md:text-[1.6rem]">
              現在、募集していません。
            </p>
            <p className="mt-6 text-sm leading-8 text-neutral-600 md:text-base">
              募集を再開する際は、本ページにてお知らせします。
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
