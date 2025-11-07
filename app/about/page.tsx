import Image from 'next/image'
import Link from 'next/link'

import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const milestones = [
  {
    year: '2023',
    title: 'MOGCIA 設立',
    body: 'AI×人間の新しいスタンダードをつくることを掲げて創業。創業メンバーで福岡に拠点を構え、少数精鋭のチームでスタート。',
  },
  {
    year: '2024',
    title: 'AIソリューション拡充',
    body: 'PoC支援から本番導入までをカバーする体制を構築。自社開発AIツールでプロジェクト領域を拡大。',
  },
  {
    year: '2025',
    title: '共創パートナーネットワーク発足',
    body: '事業会社・スタートアップ・自治体との連携を強化。社会実装を前提とした共創体制を確立し、複数の大型プロジェクトを推進中。',
  },
]

const positioning = [
  {
    label: 'Our Mission',
    heading: '成果に直結する「共創の仕組み」を提供する',
    body: 'テクノロジーとクリエイティブの力を結集し、企業と社会の課題を共に解く。伴走型のパートナーとして、戦略立案から運用まで一貫した支援を行います。',
  },
  {
    label: 'Our Value',
    heading: '技術と人の創造力を掛け合わせる',
    body: 'AIやデータ活用の最前線で培った知見と、ブランド体験を設計するクリエイティブ力を融合。スピードと品質を両立しながら持続的な価値を生み出します。',
  },
  {
    label: 'Our Style',
    heading: '透明性あるパートナーシップを大切にする',
    body: '共通KPIとコミュニケーションプロトコルを整備し、チームの境界を超えてプロジェクトを推進。定例レビューとナレッジ共有で学習サイクルを回します。',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/istockphoto-2196775101-640_adpp_is.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">About</p>
            <h1 className="text-3xl md:text-5xl font-light tracking-wide">MOGCIAについて</h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              私たちは、AIが支え、人の創造力が未来を動かす世界を目指しています。<br />
              事業課題の解決から新しい価値創造まで、共創の体制でともに挑戦します。
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff]"></span>
            <div className="pointer-events-none absolute -top-24 -right-20 w-80 h-80 bg-gradient-to-br from-[#f6e27a]/20 via-transparent to-transparent blur-3xl"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Vision & Value</p>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900">未来を共に描くための約束</h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                  クライアント、パートナー、そして私たち自身が、持続的に価値を生みだせる体制を構築する。それがMOGCIAの存在意義です。3つの視点で、私たちの立ち位置と提供価値をご紹介します。
                </p>
              </div>
              <div className="relative h-56 md:h-64 lg:h-72">
                <Image
                  src="/MG%20Logo.png"
                  alt="MOGCIA ロゴ"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 60vw, (max-width: 1024px) 35vw, 30vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {positioning.map(item => (
              <div
                key={item.label}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff]"></span>
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">{item.label}</p>
                <h3 className="text-lg font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {item.heading}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff]"></span>
            <div className="pointer-events-none absolute -top-20 -left-16 w-72 h-72 bg-gradient-to-br from-[#d2c7ff]/20 via-transparent to-transparent blur-3xl"></div>
            <div className="space-y-6 relative z-10">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Milestones</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900">歩んできた軌跡</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                創業から現在まで、クライアントと共に挑戦してきたプロジェクトや体制づくりを年表でご紹介します。今後も領域を越えて共創を広げていきます。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {milestones.map(item => (
              <div
                key={item.year}
                className="group relative border border-gray-200 bg-white px-10 py-12 flex flex-col gap-5 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff]"></span>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gray-400">
                  <span>{item.year}</span>
                  <span className="flex-1 h-px bg-gray-200"></span>
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto border border-gray-200 bg-white px-10 md:px-16 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-gray-400">
            Company Profile
          </span>
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide">会社概要はこちらからご覧いただけます</h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            会社情報・所在地・代表者などの詳細は、会社概要ページにまとめています。お取引や取材に関するお問い合わせもお気軽にご連絡ください。
          </p>
          <div className="pt-4">
            <Link
              href="/company"
              className="inline-flex items-center gap-3 border border-gray-900 px-8 py-3 text-xs uppercase tracking-[0.3em] text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              会社概要ページへ
              <span className="h-px w-6 bg-gray-900 group-hover:bg-white"></span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}


