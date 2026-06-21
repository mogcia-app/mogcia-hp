"use client"

import Image from "next/image"
import Link from "next/link"

const productPreviewGroups = [
  {
    label: "Products",
    title: "既存プロダクト",
    description:
      "宿泊業向けチャット、社内AI、SNS支援、コーヒーブランドまで、複数の自社プロダクトを展開しています。",
    items: [
      { src: "/commohp.png", alt: "commo" },
      { src: "/roomly.png", alt: "Roomly" },
      { src: "/signal.png", alt: "Signal" },
      { src: "/upmo.png", alt: "Upmo" },
      { src: "/006.jpg", alt: "MOGCIA Coffee", imageClassName: "object-cover p-0" },
    ],
  },
  {
    label: "Support",
    title: "支援サービス",
    description:
      "SNS運用代行、LP制作、Web制作、企業向けパック支援まで、集客から運用までを一気通貫で支援します。",
    cardClassName: "w-[82vw] max-w-[420px] md:w-[36vw] lg:w-[24vw]",
    items: [
      { src: "/sns2.png", alt: "SNS support", imageClassName: "object-contain p-1 md:p-2" },
      { src: "/hp.png", alt: "Website production", imageClassName: "object-contain p-1 md:p-2" },
      { src: "/pac.png", alt: "Business package", imageClassName: "object-contain p-1 md:p-2" },
    ],
  },
  {
    label: "Coming Soon",
    title: "開発中のプロダクト",
    description:
      "現在進行中の新規プロダクトも含めて、事業の接点を広げる仕組みを継続的に開発しています。",
    cardClassName: "w-[82vw] max-w-[420px] md:w-[36vw] lg:w-[24vw]",
    items: [
      { src: "/viocom.png", alt: "Viocom", imageClassName: "object-contain p-1 md:p-2" },
      { src: "/tellmo.png", alt: "tellmo", imageClassName: "object-contain p-1 md:p-2" },
    ],
  },
]

export default function ProductsSection() {
  return (
    <section
      data-scroll-reveal
      className="scroll-reveal overflow-hidden px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-20"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mb-8 flex flex-col items-start gap-4 md:mb-10 md:flex-row md:items-end md:justify-between md:gap-5">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Our Products</p>
            <h2 className="mt-4 text-[1.9rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.8rem]">
              事業の全体像を、ひとつの流れで
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
              既存プロダクトだけでなく、支援サービスや開発中のプロダクトまで含めて、
              MOGCIAが提供している価値の広がりをまとめて紹介します。
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-neutral-950 px-5 py-3 text-[10px] tracking-[0.18em] text-white transition-all duration-300 hover:bg-neutral-800 md:w-auto md:justify-start md:text-[10px] md:uppercase md:tracking-[0.24em]"
          >
            サービス一覧を見る
            <span className="h-px w-8 bg-current" />
          </Link>
        </div>

        <div className="grid gap-6 md:gap-8">
          {productPreviewGroups.map(group => (
            <article
              key={group.title}
              className="border-t border-neutral-200 pt-5 md:pt-6"
            >
              <div className="grid gap-5 xl:grid-cols-[0.68fr_1.32fr] xl:gap-10">
                <div className="max-w-xl">
                  <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">{group.label}</p>
                  <h3 className="mt-3 text-[1.45rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[2.1rem]">
                    {group.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-600 md:text-base">
                    {group.description}
                  </p>
                </div>

                <div className="overflow-x-auto pb-1">
                  <div className="flex w-max gap-4 md:gap-5">
                    {group.items.map(item => (
                      <div
                        key={item.src}
                        className={`relative shrink-0 overflow-hidden border border-neutral-200 bg-white ${
                          group.cardClassName ?? "w-[76vw] max-w-[350px] md:w-[31vw] lg:w-[20.5vw]"
                        }`}
                      >
                        <div className="relative aspect-[16/10] w-full">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(min-width: 1024px) 24vw, (min-width: 768px) 36vw, 82vw"
                            className={item.imageClassName ?? "object-contain p-3 md:p-4"}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
