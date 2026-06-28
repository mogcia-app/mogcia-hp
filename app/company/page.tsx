import type { Metadata } from 'next'
import Image from 'next/image'

import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { ProductCards } from '@/components/ServiceOfferings'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata(
  'MOGCIAを知る | 株式会社MOGCIA（福岡・天神）',
)

const thinking = [
  {
    label: 'Strategy',
    title: '事業の流れから考える',
    body: '単発の施策ではなく、集客・体験・運用がつながる設計を大切にしています。',
  },
  {
    label: 'Experience',
    title: '使う人の体験を整える',
    body: '顧客、スタッフ、管理者。それぞれが迷わず使える接点をつくります。',
  },
  {
    label: 'Operation',
    title: '続く運用に落とし込む',
    body: '導入して終わりではなく、改善し続けられる仕組みとして設計します。',
  },
]

const companyInfo = [
  { label: '会社名', value: '株式会社MOGCIA（モグシア）' },
  { label: '代表取締役', value: '堂本 寛人' },
  { label: '所在地', value: '〒810-0001 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル7階' },
  { label: '設立', value: '2023年11月' },
  { label: '資本金', value: '300万円' },
  { label: '事業内容', value: 'AIソリューション開発 / システム企画・開発・運営 / Web制作・デジタルマーケティング支援' },
  { label: '主要取引先', value: '製造業、サービス業、スタートアップ企業、広告代理店、自治体 ほか' },
  { label: '取引銀行', value: '佐賀銀行' },
]

export default function CompanyPage() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f8f6f1] to-white text-neutral-950">
      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-40 lg:px-16 lg:py-32 xl:px-20">
        <div className="pointer-events-none absolute inset-0 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[58%]">
          <Image
            src="/312.png"
            alt=""
            fill
            priority
            sizes="58vw"
            className="hidden object-cover opacity-70 [mask-image:linear-gradient(90deg,transparent_0%,black_30%,black_100%)] lg:block"
          />
          <Image
            src="/d3.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-110 lg:hidden"
          />
        </div>
        <div className="relative mx-auto w-full max-w-[1320px]">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Company</p>
            <h1 className="mt-5 text-[1.7rem] font-light leading-[1.18] tracking-[-0.04em] text-neutral-950 md:text-[2.35rem] lg:text-[3.2rem]">
              戦略も、体験も、運用も
              <br />
              すべて、ひとつの仕組みで
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-8 text-neutral-600 md:text-base">
              MOGCIAは、AI・SNS・Web・SaaSを組み合わせ、企業の課題を仕組みとして解決する会社です。
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="pointer-events-none absolute inset-0 lg:bottom-0 lg:left-auto lg:right-[4%] lg:h-full lg:w-[56%]">
          <Image
            src="/313.png"
            alt=""
            fill
            sizes="48vw"
            className="hidden object-contain object-right opacity-55 [mask-image:linear-gradient(90deg,transparent_0%,black_34%,black_100%)] lg:block"
          />
          <Image
            src="/d4.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center scale-110 lg:hidden"
          />
          <div className="absolute inset-0 bg-white/25" />
        </div>
        <div className="relative mx-auto w-full max-w-[1320px]">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">About Mogcia</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              MOGCIAとは
            </h2>
            <p className="mt-6 text-sm leading-8 text-neutral-600 md:text-base">
              MOGCIAは、AI・SNS・Web・SaaSを組み合わせ、企業の集客や業務改善を支える会社です。
            </p>
            <p className="mt-4 text-sm leading-8 text-neutral-600 md:text-base">
              必要なものをつくるだけでなく、使われ続ける流れまで整えることで、事業の中に自然に残る仕組みをつくります。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px] space-y-12">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Thinking</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              MOGCIAの考え方
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {thinking.map(item => (
              <article
                key={item.label}
                className="rounded-[28px] border border-[#ded6ca]/80 bg-white p-6 shadow-[0_18px_60px_rgba(92,78,62,0.05)]"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#a18b72]">{item.label}</p>
                <h3 className="mt-5 text-xl font-light leading-8 text-neutral-950">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px] space-y-12">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Products</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              プロダクト一覧
            </h2>
          </div>
          <ProductCards />
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px] space-y-12">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Profile</p>
            <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              会社概要
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {companyInfo.map(item => (
              <article key={item.label} className="rounded-[24px] border border-[#ded6ca]/80 bg-white p-5 shadow-[0_14px_44px_rgba(92,78,62,0.045)]">
                <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">{item.label}</p>
                <p className="mt-3 text-sm leading-7 text-neutral-700 md:text-base">{item.value}</p>
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
