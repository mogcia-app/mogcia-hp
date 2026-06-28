import type { Metadata } from 'next'
import Image from 'next/image'

import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ServiceOfferings from '@/components/ServiceOfferings'
import { createPageMetadata } from '../metadata'

export const metadata: Metadata = createPageMetadata(
  'プロダクトと支援サービス | 株式会社MOGCIA（福岡のAI・Web制作）',
)

const inDevelopment = [
  {
    label: 'In Development 01',
    title: 'Viocom',
    image: '/viocom.png',
    imageClassName: 'object-contain',
  },
  {
    label: 'In Development 02',
    title: 'tellmo.',
    image: '/tellmo1.png',
    imageClassName: 'object-contain',
  },
]

function renderDevelopmentTitle(title: string) {
  if (title !== 'tellmo.') return title

  return (
    <>
      tellmo<span className="text-[#2f8f5b]">.</span>
    </>
  )
}

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-white via-[#f8f6f1] to-white text-neutral-950">
      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pb-24 md:pt-40 lg:px-16 lg:pt-32 xl:px-20">
        <div className="pointer-events-none absolute inset-0 lg:bottom-[-110px] lg:left-auto lg:right-0 lg:top-20 lg:w-[58%]">
          <Image
            // Services hero background visual. Replace this path if the hero visual changes.
            src="/m308.png"
            alt=""
            fill
            priority
            sizes="58vw"
            className="hidden object-cover object-[center_58%] opacity-70 [mask-image:linear-gradient(90deg,transparent_0%,black_28%,black_100%)] lg:block"
          />
          <Image
            // Responsive hero background visual.
            src="/d2.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_32%] scale-110 lg:hidden"
          />
        </div>
        <div className="relative mx-auto w-full max-w-[1320px]">
          <div className="max-w-3xl space-y-7">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Services</p>
            <h1 className="text-[2rem] font-light leading-[1.12] tracking-[-0.04em] text-neutral-950 md:text-[2.75rem] lg:text-[3.2rem]">
              <span className="block whitespace-nowrap">既存プロダクトと</span>
              <span className="block whitespace-nowrap">支援サービス</span>
            </h1>
            <p className="max-w-xl text-sm leading-8 text-neutral-600 md:text-base">
              MOGCIAでは、AI・SNS・Web・SaaSの力を掛け合わせ、
              <br className="hidden md:block" />
              集客から体験、社内運用までをひとつの流れとして設計します。
            </p>
          </div>
        </div>
      </section>

      <ServiceOfferings />

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="space-y-12">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Coming Soon</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl xl:whitespace-nowrap">
                開発中のプロダクト
              </h2>
              <p className="mt-5 text-sm leading-8 text-neutral-600 md:text-base">
                体験と運用の接点をさらに広げるため、次のプロダクトも少しずつ形にしています。
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {inDevelopment.map(item => (
                <article
                  key={item.label}
                  className="overflow-hidden border border-[#ded6ca]/80 bg-white p-6 opacity-90 shadow-[0_20px_70px_rgba(92,78,62,0.08)] md:p-8"
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">{item.label}</p>
                  <div className="relative mt-6 aspect-[4/3] overflow-hidden bg-[#f7f4ee]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={`${item.imageClassName} p-5`}
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-light tracking-[-0.02em] text-neutral-900 md:text-2xl">
                    {renderDevelopmentTitle(item.title)}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection variant="panel" />
      <Footer />
    </main>
  )
}
