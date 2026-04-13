"use client"

import { useRef } from 'react'

type Product = {
  title: string
  image?: string
  date: string
  category: string
  categorySub?: string
  link?: string
  buttonClassName?: string
  titlePrefix?: string
  titleDotColor?: string
  titleSuffixClassName?: string
}

const products: Product[] = [
  {
    title: "Roomly. アプリ不要のチャットで、ホテルの問い合わせ対応をもっとシンプルに",
    image: "/roomly.png",
    date: "2026/02/28",
    category: "事業・プロダクト情報",
    categorySub: "",
    link: "https://roomlychat.com/",
    buttonClassName: "border-[#ad2218] bg-[#ad2218] text-white hover:bg-[#951d15] hover:border-[#951d15]",
    titlePrefix: "Roomly",
    titleDotColor: "#ad2218",
    titleSuffixClassName: "text-base md:text-lg leading-relaxed",
  },
  {
    title: "upmo 社内の情報をAIで一元化",
    image: "/upmo.png",
    date: "2025/10/23",
    category: "事業・プロダクト情報",
    categorySub: "",
    link: "https://upmotool.com",
    buttonClassName: "border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700",
  },
  {
    title: "Signal. あなた専用のSNSAI秘書",
    image: "/signal.png",
    date: "2025/06/01",
    category: "事業・プロダクト情報",
    categorySub: "",
    link: "https://www.sgnalapp.com",
    buttonClassName: "border-[#ff8a15] bg-[#ff8a15] text-white hover:bg-[#e57c12] hover:border-[#e57c12]",
    titlePrefix: "Signal",
    titleDotColor: "#ff8a15",
  },
  {
    title: "MOGCIA Coffee",
    image: "/006.jpg",
    date: "2024/04/20",
    category: "事業・プロダクト情報",
    link: "https://mogcia.official.ec",
  },
 
]

export default function ProductsSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const cardConfig = {
    titleSize: 'text-xl md:text-2xl',
    dateSize: 'text-xs md:text-sm',
    padding: 'p-8 md:p-9',
    minHeight: 'min-h-[340px]',
    mediaAspect: 'aspect-[16/9]',
  }

  const renderCard = (product: Product, index: number) => {
    const titleText =
      product.titlePrefix && product.title.startsWith(`${product.titlePrefix}.`)
        ? product.title.slice(product.titlePrefix.length + 1).trimStart()
        : product.title

    const CardContent = (
      <>
        <div className={`relative w-full ${cardConfig.mediaAspect} overflow-hidden`}
        >
          <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
          {product.image && (
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className={`${cardConfig.padding} flex-1 flex flex-col gap-4`}
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
            <span>{product.category}</span>
            <span className={`${cardConfig.dateSize} text-gray-500 tracking-normal`}>{product.date}</span>
          </div>
          <h3 className={`${cardConfig.titleSize} text-gray-900 font-light leading-snug`}>
            {product.titlePrefix && product.titleDotColor ? (
              <>
                <span className="block">
                  <span>{product.titlePrefix}</span>
                  <span style={{ color: product.titleDotColor }}>.</span>
                </span>
                <span className={`block ${product.titleSuffixClassName ?? ''}`}>{titleText}</span>
              </>
            ) : (
              product.title
            )}
          </h3>
          {product.link && (
            <div className="pt-2">
              <span
                className={`inline-flex items-center justify-center gap-2 rounded-sm border px-4 py-2 text-xs tracking-[0.2em] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md ${product.buttonClassName ?? 'border-gray-300 bg-white text-gray-700 hover:border-gray-900 hover:text-gray-900'}`}
              >
                HPはこちら
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 10H15.5M10.5 5L15.5 10L10.5 15"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          )}
        </div>
      </>
    )
    
    if (product.link) {
      return (
        <a 
          key={index} 
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative border border-gray-200 bg-white ${cardConfig.minHeight} flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]`}
        >
          <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900 opacity-75 transition-opacity duration-700 group-hover:opacity-100"></span>
          {CardContent}
        </a>
      )
    }
    
    return (
      <div key={index} className={`group relative border border-gray-200 bg-white ${cardConfig.minHeight} flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]`}>
        <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff] opacity-75 transition-opacity duration-700 group-hover:opacity-100"></span>
        {CardContent}
      </div>
    )
  }

  return (
    <section className="py-10 px-6 bg-white">
     <div className="w-full">
        <div className="group relative border border-gray-200 bg-white px-12 py-16 overflow-hidden shadow-[0_18px_55px_rgba(24,32,56,0.12)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(24,32,56,0.16)]">
          <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>

          <div className="space-y-10 relative z-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Our Products</p>
              <div className="relative inline-block">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide relative z-10">
                  Our Products
                </h2>
                <span className="absolute -bottom-2 left-0 w-full h-4 overflow-hidden -z-10">
                  <span 
                    className="block h-full w-full"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, rgba(156, 163, 175, 0) 0%, rgba(156, 163, 175, 0.4) 30%, rgba(107, 114, 128, 0.3) 60%, rgba(156, 163, 175, 0) 100%)',
                      backgroundSize: '220% 100%',
                      transform: 'translateX(-110%)',
                      animation: 'gradient-line-slide 5s ease-in-out infinite'
                    }}
                  ></span>
                </span>
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 pl-2">
                Crafted Solutions, Ready to Launch
              </p>
            </div>

            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div className="space-y-5 text-sm md:text-base text-gray-600 leading-relaxed">
                <p>
                  MOGCIAのプロダクトは、<br />
                  すぐに使い始められるAIツールから、業務に合わせたカスタム開発まで<br />
                  目的に応じて選べるラインナップを用意しています。
                </p>
                <p>
                  業務効率化、情報整理、意思決定支援など、<br />
                  現場で必要とされる機能に絞って設計。<br />
                  導入後も運用を前提にしたアップデートを行います。
                </p>
                <p>
                  以下に、現在提供している主なプロダクトをご紹介します。
                </p>
              </div>
              <div className="relative border border-gray-200 bg-black/5 overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/istockphoto-2223511679-640_adpp_is.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs uppercase tracking-[0.3em] text-gray-400">
              <div className="border border-gray-200 py-4 px-6 text-center">Launch Support</div>
              <div className="border border-gray-200 py-4 px-6 text-center">Custom Development</div>
              <div className="border border-gray-200 py-4 px-6 text-center">Continuous Care</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-12 mt-8">
          {products.map((product, index) => renderCard(product, index))}
        </div>
      </div>
    </section>
  )
}
