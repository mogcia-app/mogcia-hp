"use client"

type Capability = {
  title: string
  subtitle: string
  headline: string
  description: string
  image?: string
}

const capabilities: Capability[] = [
  {
    title: "AIを活用した課題解決",
    subtitle: "データ分析から意思決定支援まで",
    headline: "",
    description: "AI・機械学習技術を活用して業務効率化を実現。データドリブンな経営をサポートします。",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80&auto=format&fit=crop",
  },
  {
    title: "SNS運用支援",
    subtitle: "戦略設計から運用・分析まで",
    headline: "Signal.を活用したAI運用",
    description: "効果的なマーケティングを実現します。",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600&q=80&auto=format&fit=crop",
  },
  {
    title: "Webサイト・LP構築",
    subtitle: "成果に直結する導線設計",
    headline: "高変換率を実現するWebサイト・LP",
    description: "SEO最適化で集客力を向上します。",
    image: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=1600&q=80&auto=format&fit=crop",
  },
]

export default function CapabilitiesSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-black inline-block border-b-2 border-black pb-1">
            Service
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((c, idx) => (
            <div key={idx} className="relative border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
              <span className="absolute -top-1 -left-1 w-3 h-3 bg-black" />
              <h3 className="text-lg md:text-xl text-black mb-2">{c.title}</h3>
              <div className="text-sm text-gray-500 mb-2">{c.subtitle}</div>
              {c.headline && (
                <div className="text-sm text-gray-500 mb-2">{c.headline}</div>
              )}
              <p className="text-sm text-gray-600 leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


