import type { Metadata } from 'next'
import Link from 'next/link'

import AiGeneratedNotice from '@/components/AiGeneratedNotice'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ResponsiveHeroImage from '@/components/ResponsiveHeroImage'
import ServiceOfferings from '@/components/ServiceOfferings'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata('パートナー制度 | 株式会社MOGCIA')

const partnerFit = [
  '顧客にWeb・SNS・DX支援を提案したい方',
  'ホテル、店舗、中小企業とのつながりがある方',
  '自社だけでは制作・運用体制を持ちにくい方',
  '継続収益につながる商材を探している方',
]

const partnerTypes = [
  {
    name: '紹介パートナー',
    body: '見込み顧客をご紹介いただく形です。商談・提案・制作・運用はMOGCIAが担当します。',
  },
  {
    name: '営業パートナー',
    body: 'お客様への提案を主体的に行っていただく形です。提案資料やサービス説明など、必要なサポートを行います。',
  },
  {
    name: '協業パートナー',
    body: '双方の強みを活かして、共同で提案・支援を行う形です。',
  },
]

const supportItems = [
  'サービス説明・提案サポート',
  '制作・開発・運用対応',
  '導入後のフォロー',
  '必要に応じた資料共有',
  '案件内容に応じた柔軟な連携',
]

export default function PartnersPage() {
  return (
    <main className="bg-[#f7f7f5] text-neutral-950">
      <section className="relative h-[75vh] min-h-[520px] overflow-hidden md:h-screen">
        <ResponsiveHeroImage
          mobileSrc="/gt6.png"
          desktopSrc="/gt8.jpg"
          alt="Partners hero"
          priority
        />
        <AiGeneratedNotice />
      </section>

      <section className="px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-28 lg:px-16 lg:pt-32 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="relative overflow-hidden border border-neutral-200 bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,0,0,0.045),_transparent_42%),linear-gradient(135deg,_rgba(0,0,0,0.03),_transparent_55%)]" />
            <div className="relative grid gap-12 px-6 py-14 md:px-10 md:py-16 xl:grid-cols-[1.15fr_0.85fr] xl:gap-16 xl:px-14">
              <div className="max-w-4xl">
                <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Partners</p>
                <h1 className="mt-5 text-4xl font-light tracking-[-0.04em] text-neutral-950 md:text-6xl">
                  パートナー募集
                </h1>
                <p className="mt-6 max-w-3xl text-[1rem] font-light leading-[1.9] text-neutral-700 md:text-[1.18rem]">
                  MOGCIAでは、Web制作・SNS運用・AIプロダクトを通じて、
                  地域企業や店舗の集客・業務改善を一緒に支援できるパートナーを募集しています。
                </p>
                <p className="mt-5 max-w-3xl text-sm leading-8 text-neutral-600 md:text-base">
                  紹介だけ、営業提案まで、共同提案まで。関わり方に合わせて、無理のない形で連携できます。
                </p>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-white transition-colors hover:bg-neutral-800"
                  >
                    パートナーについて相談する
                    <span className="h-px w-8 bg-current" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 self-end md:grid-cols-3 xl:grid-cols-1">
                {partnerTypes.map((item, index) => (
                  <div key={item.name} className="border border-neutral-200 bg-[#fafaf8] p-5">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
                      0{index + 1}
                    </p>
                    <h2 className="mt-4 text-xl font-light text-neutral-950">{item.name}</h2>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">For Who</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                こんな方と連携できます
              </h2>
            </div>

            <div className="grid gap-4 border-t border-neutral-200 pt-8 md:grid-cols-2">
              {partnerFit.map(item => (
                <div key={item} className="border border-neutral-200 bg-white p-6">
                  <p className="text-[0.98rem] font-light leading-[1.75] text-neutral-900 md:text-[1.05rem]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ServiceOfferings
        productsLabel="Products"
        productsTitle="既存プロダクト"
        servicesLabel="Support"
        servicesTitle="支援サービス"
      />

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Partnership</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                パートナーの形
              </h2>
            </div>

            <div className="grid gap-5 border-t border-neutral-200 pt-8 md:grid-cols-3">
              {partnerTypes.map(item => (
                <article key={item.name} className="border border-neutral-200 bg-white p-6">
                  <h3 className="text-xl font-light text-neutral-950">{item.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Support</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                MOGCIAが担当すること
              </h2>
            </div>

            <div className="border-t border-neutral-200 pt-8">
              <div className="grid gap-4 md:grid-cols-2">
                {supportItems.map(item => (
                  <div key={item} className="border border-neutral-200 bg-white px-5 py-5">
                    <p className="text-[0.98rem] font-light leading-[1.7] text-neutral-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
