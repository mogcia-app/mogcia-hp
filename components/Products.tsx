"use client"

import Image from "next/image"
import Link from "next/link"

const productPreviewGroups = [
  {
    label: "Products",
    title: "既存プロダクト",
    description:
      "営業AI、LINE導線、宿泊業向けチャット、社内AI、SNS支援まで、複数の自社プロダクトを展開しています。",
    hero: { src: "/selmohp.png", alt: "selmo" },
    items: [
      { src: "/selmohp.png", alt: "selmo" },
      { src: "/commohp.png", alt: "commo" },
      { src: "/roomly.png", alt: "Roomly" },
      { src: "/upmo.png", alt: "Upmo" },
      { src: "/signal.png", alt: "Signal" },
    ],
  },
  {
    label: "Support",
    title: "支援サービス",
    description:
      "SNS運用代行、LP制作、Web制作、企業向けパック支援まで、集客から運用までを一気通貫で支援します。",
    hero: { src: "/sns2.png", alt: "SNS support", imageClassName: "object-contain p-3 md:p-4" },
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
    hero: { src: "/tellmo1.png", alt: "tellmo", imageClassName: "object-contain p-3 md:p-4" },
    items: [
      { src: "/viocom.png", alt: "Viocom", imageClassName: "object-contain p-1 md:p-2" },
      { src: "/tellmo1.png", alt: "tellmo", imageClassName: "object-contain p-1 md:p-2" },
    ],
  },
]

export default function ProductsSection() {
  return (
    <section
      data-scroll-reveal
      className="scroll-reveal overflow-hidden bg-gradient-to-b from-white via-[#f8f6f1] to-white px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mb-12 flex flex-col items-start gap-6 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-8">
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
            className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#C7B299] px-5 py-3 text-[10px] tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#9a8062] md:w-auto md:justify-start md:text-[10px] md:uppercase md:tracking-[0.24em]"
          >
            サービス一覧を見る
            <span className="h-px w-8 bg-current" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {productPreviewGroups.map(group => (
            <article
              key={group.title}
              className="flex min-h-full flex-col overflow-hidden rounded-[28px] border border-[#ded6ca]/80 bg-white shadow-[0_18px_60px_rgba(92,78,62,0.05)]"
            >
              <div className="relative aspect-[16/10] bg-[#f7f4ee]">
                <Image
                  src={group.hero.src}
                  alt={group.hero.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={group.hero.imageClassName ?? "object-contain p-5 md:p-6"}
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">{group.label}</p>
                <h3 className="mt-4 text-[1.45rem] font-light tracking-[-0.02em] text-neutral-950 md:text-[1.8rem]">
                  {group.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {group.description}
                </p>

                <div className="mt-auto pt-7">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
                    {group.items.length} items
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
