import Image from 'next/image'

import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const partnerSections = {
  forYouImage: '/partner-for-you.png',
  whatYouCanDoImage: '/partner-what-you-can-do.png',
  supportImage: '/partner-support.png',
  typesImage: '/partner-types.png',
} as const

export default function PartnersPage() {
  return (
    <main className="bg-[#f7f7f5] text-neutral-950">
      <section className="relative h-[75vh] min-h-[520px] overflow-hidden md:h-screen">
        <Image
          src="/gt6.png"
          alt="Partners hero"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        <Image
          src="/gt8.png"
          alt="Partners hero"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
        />
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="max-w-4xl space-y-6">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Partners</p>
            <h1 className="text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              パートナー募集
            </h1>
            <p className="max-w-3xl text-[1.02rem] font-light leading-[1.7] text-neutral-950 md:text-[1.18rem]">
              共に価値を届け、共に成長するパートナーへ
            </p>
            <div className="max-w-3xl space-y-4 text-sm leading-8 text-neutral-600 md:text-base">
              <p>
                MOGCIAでは、SNS運用・LP制作・AI導入支援などのサービスを、
                より多くの企業に届けるためのパートナーを募集しています。
              </p>
              <p>
                単なる紹介や販売ではなく、
                継続的に価値を提供し、共に事業を伸ばしていく関係を目指しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">For You</p>
              <h2 className="mt-3 text-[1.45rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.1rem]">
                このような方におすすめ
              </h2>
            </div>
            <div className="relative aspect-[16/8] overflow-hidden">
              <Image
                src={partnerSections.forYouImage}
                alt="このような方におすすめ"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">What You Can Do</p>
              <h2 className="mt-3 text-[1.45rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.1rem]">
                パートナーとしてできること
              </h2>
            </div>
            <div className="relative aspect-[16/8] overflow-hidden">
              <Image
                src={partnerSections.whatYouCanDoImage}
                alt="パートナーとしてできること"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Benefits</p>
              <h2 className="mt-3 text-[1.45rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.1rem]">
                パートナーのメリット
              </h2>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[16/8] overflow-hidden">
                <Image
                  src="/benefits.png"
                  alt="Benefits"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="relative aspect-[16/8] overflow-hidden">
                <Image
                  src="/partner-benefits.png"
                  alt="収益モデル例"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Support</p>
              <h2 className="mt-3 text-[1.45rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.1rem]">
                サポート
              </h2>
            </div>
            <div className="relative aspect-[16/8] overflow-hidden">
              <Image
                src={partnerSections.supportImage}
                alt="サポート"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="relative aspect-[16/8] overflow-hidden">
              <Image
                src={partnerSections.typesImage}
                alt="パートナーの形"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Message</p>
              <h2 className="mt-3 text-[1.45rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.1rem]">
                最後に
              </h2>
            </div>
            <div className="max-w-3xl border-t border-neutral-200 pt-8">
              <div className="max-w-3xl space-y-4 text-sm leading-8 text-neutral-600 md:text-base">
                <p>
                  企業の課題は、
                  SNS・Web・AIなど複雑に絡み合っています。
                </p>
                <p>
                  だからこそ、単体の支援ではなく、
                  “つながった提案”ができるパートナーが必要です。
                </p>
                <p>
                  MOGCIAは、
                  その価値を共に届けていくパートナーを求めています。
                </p>
                <p className="pt-4 text-neutral-950">代表取締役　堂本 寛人</p>
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
