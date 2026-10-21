'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { products } from '@/lib/site-data'

const productImages = [
  '/our-products-selmo.png',
  '/our-products-commo.png',
  '/our-products-roomly.png',
  '/our-products-upmo.png',
  '/our-products-signal.png',
  '/our-products-ismo.png',
]

const productFeatures = [
  ['商談分析', 'テレアポ分析', 'AIロープレ', 'ナレッジ管理'],
  ['LINE構築', '予約導線', '配信運用', 'リピート施策'],
  ['QRコード', 'チャット対応', 'フロント支援'],
  ['社内情報', 'AI検索', 'マニュアル活用'],
  ['投稿企画', 'データ分析', '改善提案'],
  ['アクセス解析', '行動分析', '導線改善'],
]

const productShadows = ['#F7DF83', '#D7C5F7', '#F6B2B5', '#BCDCF7', '#F6C08F', '#FBD9E2']

export default function OurProductsShowcase() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const move = (direction: number) => {
    scrollerRef.current?.scrollBy({ left: direction * 350, behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-[#f9edf2] py-24 md:py-32">
      <span className="products-watermark pointer-events-none absolute top-5 whitespace-nowrap font-display text-[5rem] font-black leading-none tracking-[-.08em] text-white/55 sm:text-[8rem] lg:text-[11rem]" aria-hidden>
        PRODUCTS
      </span>
      <div className="page-shell relative">
        <p className="flex items-center gap-2.5 font-display text-[10px] font-bold uppercase tracking-[.24em] text-ink-soft">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F08FA8]" aria-hidden />04 — Our products
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[.52fr_1.48fr] lg:gap-14">
          <div className="flex flex-col lg:min-h-[35rem] lg:py-5">
            <p className="font-display text-[10px] font-bold uppercase tracking-[.2em] text-ink-soft">Our own products</p>
            <h2 className="mt-4 font-display text-5xl font-black leading-none tracking-[-.06em] md:text-7xl">Products</h2>
            <p className="mt-5 text-xl font-black">提供しているプロダクト</p>
            <p className="mt-6 max-w-sm text-sm leading-8 text-ink-soft">
              日々の仕事にある小さな不便を、使い続けられる仕組みに。営業・接客・社内情報・分析など、現場の課題から生まれたプロダクトです。
            </p>
            <div className="mt-8 flex gap-3 lg:mt-auto">
              <button type="button" onClick={() => move(-1)} aria-label="前のプロダクトを見る" className="grid h-12 w-12 place-items-center rounded-full border border-ink bg-white text-lg transition-transform hover:-translate-x-1">←</button>
              <button type="button" onClick={() => move(1)} aria-label="次のプロダクトを見る" className="grid h-12 w-12 place-items-center rounded-full border border-ink bg-ink text-lg text-white transition-transform hover:translate-x-1">→</button>
            </div>
          </div>

          <div ref={scrollerRef} className="-mr-[max(1.25rem,calc((100vw-76rem)/2))] flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 pr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {products.map((product, index) => (
              <a href={product.href} target="_blank" rel="noreferrer" key={product.name} className="group flex min-h-[34rem] w-[78vw] max-w-[21rem] shrink-0 snap-start flex-col overflow-hidden border border-ink bg-white p-5 transition-transform duration-300 hover:-translate-y-1 sm:w-[20rem] md:min-h-[37rem] md:p-6" style={{ boxShadow: `6px 6px 0 ${productShadows[index]}` }}>
                <div>
                  <div>
                    <p className="font-display text-[9px] font-bold uppercase tracking-[.16em] text-ink-soft">{String(index + 1).padStart(2, '0')} / Product</p>
                    <h3 className="mt-2 font-display text-4xl font-black tracking-[-.055em]">{product.name}</h3>
                  </div>
                </div>
                <p className="mt-4 w-fit rounded-full bg-[#f9edf2] px-3 py-1.5 text-[10px] font-bold">{product.label}</p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#f8f7f5]">
                  <Image src={productImages[index]} alt={`${product.name}の画面イメージ`} fill sizes="320px" className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.035]" />
                </div>
                <h4 className="mt-5 text-lg font-black leading-7">{product.lead}</h4>
                <p className="mt-3 line-clamp-3 text-xs leading-6 text-ink-soft">{product.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {productFeatures[index].map(feature => <span key={feature} className="rounded-full border border-ink/15 px-2.5 py-1 text-[9px] font-bold">{feature}</span>)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
