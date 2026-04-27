import Image from 'next/image'

import AiGeneratedNotice from '@/components/AiGeneratedNotice'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ServiceOfferings from '@/components/ServiceOfferings'

const inDevelopment = [
  {
    label: 'In Development 01',
    title: 'Viocom',
    image: '/viocom.png',
    imageClassName: 'object-contain',
  },
  {
    label: 'In Development 02',
    title: 'tellmo',
    image: '/tellmo.png',
    imageClassName: 'object-contain',
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#f7f7f5] text-neutral-950">
      <section className="relative hidden h-[80vh] overflow-hidden md:block">
        <Image
          src="/d.png"
          alt="Services hero"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
        />
        <AiGeneratedNotice />
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="max-w-4xl space-y-6">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Services</p>
            <h1 className="text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              既存プロダクトと支援サービス
            </h1>
            <p className="max-w-3xl text-sm leading-8 text-neutral-600 md:text-base">
              MOGCIAでは、既存プロダクトの提供に加えて、SNS運用代行やWeb制作、企業向けパック支援まで幅広く展開しています。
              集客から体験、社内運用までを分断せず、ひとつの流れとして機能する設計を重視しています。
            </p>
          </div>
        </div>
      </section>

      <ServiceOfferings />

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Coming Soon</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl xl:whitespace-nowrap">
                開発中のプロダクト
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {inDevelopment.map(item => (
                <div key={item.label} className="border border-neutral-200 bg-white px-6 py-8">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">{item.label}</p>
                  {'image' in item ? (
                    <div className="relative mt-5 aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={item.imageClassName}
                      />
                      <AiGeneratedNotice className="bottom-2 right-2 md:bottom-3 md:right-3 lg:bottom-3 lg:right-3" />
                    </div>
                  ) : null}
                  <h3 className="mt-4 text-xl font-light text-neutral-950">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
