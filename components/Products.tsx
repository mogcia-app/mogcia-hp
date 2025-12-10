"use client"

import { useRef } from 'react'

type Product = {
  title: string
  image?: string
  date: string
  category: string
  categorySub?: string
  link?: string
}

const products: Product[] = [
  {
    title: "Upmo 業務改善サポートツール",
    image: "/0198.png",
    date: "2025/10/23",
    category: "事業・プロダクト情報",
    categorySub: "",
  },
  {
    title: "Signal. SNSの90%自動化AIツール",
    image: "/0987.png",
    date: "2025/06/01",
    category: "事業・プロダクト情報",
    categorySub: "",
    link: "https://www.sgnalapp.com",
  },
  {
    title: "SNS運用",
    image: "/sns-1.jpg",
    date: "2025/04/25",
    category: "事業・プロダクト情報",
  },
  {
    title: "HP作成",
    image: "/hp.jpg",
    date: "2025/04/02",
    category: "事業・プロダクト情報",
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

  const getCardConfig = (index: number) => {
    const isFeatured = index < 2
    return {
      titleSize: isFeatured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl',
      dateSize: isFeatured ? 'text-xs md:text-sm' : 'text-[11px] md:text-xs',
      padding: isFeatured ? 'p-8 md:p-9' : 'p-6 md:p-7',
      minHeight: isFeatured ? 'min-h-[340px]' : 'min-h-[300px]',
      mediaAspect: isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'
    }
  }

  const renderCard = (product: Product, index: number) => {
    const config = getCardConfig(index)
    
    const CardContent = (
      <>
        <div className={`relative w-full ${config.mediaAspect} overflow-hidden`}
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
        <div className={`${config.padding} flex-1 flex flex-col gap-4`}
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
            <span>{product.category}</span>
            <span className={`${config.dateSize} text-gray-500 tracking-normal`}>{product.date}</span>
          </div>
          <h3 className={`${config.titleSize} text-gray-900 font-light leading-snug`}>
            {product.title}
          </h3>
          <span className="text-xs uppercase tracking-[0.25em] text-gray-400">View Details</span>
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
          className={`group relative border border-gray-200 bg-white ${config.minHeight} flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]`}
        >
          <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900 opacity-75 transition-opacity duration-700 group-hover:opacity-100"></span>
          {CardContent}
        </a>
      )
    }
    
    return (
      <div key={index} className={`group relative border border-gray-200 bg-white ${config.minHeight} flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]`}>
        <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff] opacity-75 transition-opacity duration-700 group-hover:opacity-100"></span>
        {CardContent}
      </div>
    )
  }

  const topProducts = products.slice(0, 2)
  const bottomProducts = products.slice(2)

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
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
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 text-right pr-2">
                Crafted Solutions, Ready to Launch
              </p>
            </div>

            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div className="space-y-5 text-sm md:text-base text-gray-600 leading-relaxed">
                <p>
                  MOGCIAがお届けするプロダクトは、AIと人的サポートの力でビジネス成長を後押しします。<br />既存ツールの導入からカスタム開発まで、未来を見据えた体験を素早く提供します。
                </p>
                <p>
                  導入後もデータを起点にアップデートを重ね、成果につながる運用体制を構築。<br />確かな品質で、現場にフィットするソリューションを届けます。
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

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-12">
            {topProducts.map((product, index) => renderCard(product, index))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-12">
            {bottomProducts.map((product, index) => renderCard(product, index + topProducts.length))}
          </div>
        </div>
      </div>
    </section>
  )
}

