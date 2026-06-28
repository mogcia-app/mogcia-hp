import type { Metadata } from 'next'
import Image from 'next/image'

import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { ProductCards } from '@/components/ServiceOfferings'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata('パートナー募集 | 株式会社MOGCIA')

const badges = ['紹介だけでもOK', 'ノルマなし', '商談同席サポートあり']

const rewardSteps = [
  {
    icon: '01',
    title: '紹介',
    body: '企業や店舗をご紹介ください。',
  },
  {
    icon: '02',
    title: '商談化',
    body: 'MOGCIAが説明や提案を支援します。',
  },
  {
    icon: '03',
    title: '契約',
    body: '条件が合えば正式に契約へ進みます。',
  },
  {
    icon: '04',
    title: '報酬発生',
    body: '契約内容に応じて報酬が発生します。',
  },
]

const supportItems = [
  '営業資料の提供',
  '商談同席サポート',
  'デモ・説明対応',
  '提案サポート',
  '導入・運用支援',
]

const partnerTypes = [
  'Web制作会社',
  '広告代理店',
  'SNS運用会社',
  'フリーランス',
  'コンサルタント',
  '人材会社',
  '士業',
]

export default function PartnersPage() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f8f6f1] to-white text-neutral-950">
      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-40 lg:px-16 lg:pt-32 xl:px-20">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/m309.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hidden object-contain object-right lg:block"
          />
          <Image
            src="/d1.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-110 lg:hidden"
          />
        </div>
        <div className="relative mx-auto w-full max-w-[1320px]">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Partners</p>
            <h1 className="mt-5 text-[2rem] font-light leading-[1.14] tracking-[-0.04em] text-neutral-950 md:text-[2.75rem] lg:text-[3.2rem]">
              一緒に、価値を届ける
              <br />
              パートナーへ
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-8 text-neutral-600 md:text-base">
              AI・SNS・Web制作・SaaS。
              <br />
              MOGCIAのサービスを紹介いただける
              <br className="hidden md:block" />
              パートナーを募集しています。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map(badge => (
                <span
                  key={badge}
                  className="rounded-full border border-[#ded6ca] bg-white/80 px-4 py-2 text-xs text-neutral-700 shadow-[0_10px_30px_rgba(92,78,62,0.06)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-8 border-y border-[#ded6ca]/70 py-10 md:py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">About</p>
              <h2 className="mt-4 text-xl font-light tracking-[-0.02em] text-neutral-950 md:text-2xl">
                MOGCIAのパートナー制度とは
              </h2>
            </div>
            <p className="mt-6 max-w-4xl text-sm leading-8 text-neutral-600 md:text-base">
              MOGCIAのサービスやプロダクトを、企業や店舗にご紹介いただく制度です。
              紹介だけ、商談同行、継続的な代理店活動など、関わり方に合わせて柔軟に参加できます。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px] space-y-12">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Lineup</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              紹介できる商材
            </h2>
          </div>

          <ProductCards />
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px] space-y-12">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Flow</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              報酬発生の流れ
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {rewardSteps.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-[28px] border border-[#ded6ca]/80 bg-white p-6 shadow-[0_18px_60px_rgba(92,78,62,0.05)]"
              >
                {index < rewardSteps.length - 1 ? (
                  <span className="absolute -bottom-6 left-1/2 text-lg text-[#a18b72] md:-right-4 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2">
                    →
                  </span>
                ) : null}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f4ee] text-xs tracking-[0.18em] text-[#9a8062]">
                  {step.icon}
                </div>
                <h3 className="mt-5 text-xl font-light text-neutral-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px] space-y-12">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Support</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              サポート内容
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {supportItems.map((item, index) => (
              <article key={item} className="rounded-[28px] border border-[#ded6ca]/80 bg-white p-6 shadow-[0_18px_60px_rgba(92,78,62,0.05)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f4ee] text-xs tracking-[0.18em] text-[#9a8062]">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-lg font-light leading-7 text-neutral-950">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px] space-y-12">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Partners</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              募集しているパートナー
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((type, index) => (
              <article key={type} className="flex items-center gap-4 rounded-[24px] border border-[#ded6ca]/80 bg-white p-5 shadow-[0_14px_44px_rgba(92,78,62,0.045)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f7f4ee] text-xs tracking-[0.18em] text-[#9a8062]">
                  0{index + 1}
                </div>
                <h3 className="text-base font-light text-neutral-950">{type}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection variant="panel" />
      <Footer />
    </main>
  )
}
