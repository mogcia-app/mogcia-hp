'use client'

import { useEffect, useState, useRef } from 'react'
import ProductsSection from '@/components/Products'
import ProcessSection from '@/components/Process'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  const [heroOpacity, setHeroOpacity] = useState(1)
  const [heroScale, setHeroScale] = useState(1)
  const [showFinalBody, setShowFinalBody] = useState(false)
  const [showFinalTitle, setShowFinalTitle] = useState(false)
  const [showSlides, setShowSlides] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoSectionRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const slideVideoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // ヒーローセクションのスクロール効果
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scroll = window.scrollY
      const heroHeight = window.innerHeight
      const progress = Math.min(scroll / (heroHeight * 0.3), 1)
      setHeroOpacity(1 - progress)
      setHeroScale(1 - progress * 0.2)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const isTransitionPlaying = sessionStorage.getItem('page-transition-playing') === 'true'

    if (!isTransitionPlaying) {
      setShowSlides(true)
      return
    }

    const timer = setTimeout(() => {
      setShowSlides(true)
      sessionStorage.setItem('page-transition-playing', 'false')
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // スライド自動切り替え（最初の2つだけ）
  useEffect(() => {
    if (!showSlides) return
    if (currentSlide < 2) {
      const timer = setTimeout(() => {
        setCurrentSlide(prev => prev + 1)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [currentSlide, showSlides])

  // 3番目のスライドのアニメーション
  useEffect(() => {
    if (!showSlides) {
      setShowFinalBody(false)
      setShowFinalTitle(false)
      if (slideVideoRefs.current[2]) {
        slideVideoRefs.current[2].pause()
        slideVideoRefs.current[2].currentTime = 0
      }
      return
    }
    if (currentSlide === 2) {
      // 3番目の動画を最初から再生
      if (slideVideoRefs.current[2]) {
        slideVideoRefs.current[2].currentTime = 0
        slideVideoRefs.current[2].play()
      }
      
      // 6秒後にボディとタイトルを同時表示
      const timer = setTimeout(() => {
        setShowFinalBody(true)
        setShowFinalTitle(true)
      }, 6000)
      
      return () => {
        clearTimeout(timer)
      }
    } else {
      // 他のスライドに戻ったらリセット
      setShowFinalBody(false)
      setShowFinalTitle(false)
      // 3番目の動画を一時停止
      if (slideVideoRefs.current[2]) {
        slideVideoRefs.current[2].pause()
      }
    }
  }, [currentSlide])

  // ビデオスクロール同期
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || !videoSectionRef.current) return

      const rect = videoSectionRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (isVisible) {
        setIsVideoVisible(true)
        // スクロール位置に基づいて動画の再生位置を調整
        const scrollProgress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        const time = Math.max(0, Math.min(1, scrollProgress)) * videoRef.current.duration
        if (!isNaN(time)) {
          videoRef.current.currentTime = time
        }
      } else {
        setIsVideoVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const slides = [
    { 
      title: 'Upmo',
      subtitle: '',
      body: '分散した社内ナレッジを結合し、業務改善に繋げる',
      video: '/istockphoto-2162666822-640_adpp_is.mp4',
      image: '/iStock-2187782281.jpg',
      center: true
    },
    { 
      title: 'Signal.',
      subtitle: 'SNS運用の90%自動化AIツール',
      body: '',
      video: '/istockphoto-684470302-640_adpp_is.mp4',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
      center: true
    },
    { 
      title: '株式会社MOGCIA',
      subtitle: '',
      body: 'AIが支え、人の創造力が未来を動かす',
      video: '/istockphoto-2207327866-640_adpp_is.mp4',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
      center: true
    },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section with Slides */}
      <section
        ref={heroRef}
        className="relative h-[70vh] overflow-hidden transition-opacity duration-700"
        style={{ opacity: showSlides ? 1 : 0 }}
      >
        {/* Background Videos for Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity ease-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
            style={{ transitionDuration: '4000ms' }}
          >
            <div className="absolute inset-0 transition-all ease-out"
              style={{
                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
                filter: index === currentSlide ? 'blur(0px)' : 'blur(2px)',
                transition: 'transform 4000ms ease-out, filter 4000ms ease-out'
              }}
            >
              <video
                ref={(el) => { slideVideoRefs.current[index] = el }}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop={index !== 2}
                muted
                playsInline
                key={`slide-video-${index}`}
              >
                <source src={slide.video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}

        {/* Content on top of images */}
        <div
          className="absolute inset-0 transition-opacity z-30"
          style={{ opacity: heroOpacity, transform: `scale(${heroScale})`, transitionDuration: '2000ms' }}
        >
          {slides.map((slide, index) => (
            <div
              key={`content-${index}`}
              className={`absolute inset-0 flex ${slide.center ? 'items-center justify-center' : 'items-end justify-end'} transition-opacity ease-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ transitionDuration: '4000ms' }}
            >
              <div
                className={`max-w-3xl px-6 md:px-10 py-12 bg-white/80 backdrop-blur border border-gray-200/70 shadow-[0_25px_70px_rgba(24,32,56,0.12)] ${
                  slide.center ? 'text-center' : 'text-right'
                } relative z-40 flex flex-col gap-4`}
              >
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
                  {index === 0 ? 'Business Intelligence' : index === 1 ? 'Automation' : 'Corporate'}
                </p>
                {index === 2 ? (
                  // 3番目のスライドは順番に表示
                  <>
                    <p
                      className={`text-xl md:text-2xl font-light text-gray-600 transition-all duration-1000 ease-out ${
                        showFinalBody ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                    >
                      {slide.body}
                    </p>
                    <h1
                      className={`text-3xl md:text-4xl font-light text-gray-900 leading-tight mt-4 transition-all duration-1000 ease-out ${
                        showFinalTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                    >
                      {slide.title}
                    </h1>
                  </>
                ) : (
                  // 他のスライドは通常表示
                  <>
                    <div className="space-y-2">
                      <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                        {slide.title}
                      </h1>
                      {slide.subtitle && (
                        <h2 className="text-2xl md:text-3xl font-light text-gray-600">
                          {slide.subtitle}
                        </h2>
                      )}
                    </div>
                    <p className="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
                      {slide.body}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gray-900 w-10'
                  : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      
      </section>

      {/* Story Section - MOGCIA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 overflow-visible shadow-[0_18px_55px_rgba(24,32,56,0.12)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(24,32,56,0.16)]">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff] opacity-80 transition-opacity duration-700 group-hover:opacity-100"></span>
            <div className="pointer-events-none absolute -top-24 -right-16 w-80 h-80 bg-gradient-to-br from-[#f6e27a]/30 via-transparent to-transparent blur-3xl"></div>
            <div className="pointer-events-none absolute top-24 -left-16 w-64 h-64 border border-dashed border-gray-200/70 rounded-full"></div>
            <img
              src="/1661.png"
              alt="AI dashboard"
              className="hidden md:block absolute -right-24 -bottom-48 w-60 opacity-95 pointer-events-none drop-shadow-[0_18px_45px_rgba(24,32,56,0.32)] rotate-3"
            />

            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Our Story</p>
                <div className="relative inline-block">
                  <h2 className="text-xl md:text-4xl font-light tracking-wide relative z-10">
                    テクノロジーが切り拓く無限の可能性
                  </h2>
                  <span className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-[#f6e27a]/60 via-[#d2c7ff]/40 to-transparent -z-10"></span>
                </div>
                <p className="text-sm uppercase tracking-[0.25em] text-gray-400 text-right pr-2">
                  Co-create the Future with Human × AI
                </p>
              </div>

              <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10">
                <div className="space-y-5 text-sm md:text-base text-gray-600 leading-relaxed">
                  <p>
                    AI・デジタル技術で企業の未来を創造するパートナーとして、スタートアップから大企業まで幅広く伴走。テクノロジーの力を、人と企業の創造性に結び付けることが私たちの使命です。
                  </p>
                  <p>
                    課題の解像度を高め、最適なソリューションを素早く実装することで、ビジネスの前進を軽やかにする。そのためのデザインとテクノロジーを磨き続けています。
                  </p>
                  <p>
                    私たちは“未来をつくる現場”に立ち続け、変化の兆しを読み取りながら、新たな価値の創出に挑みます。
                  </p>
                </div>

                <div className="space-y-5 text-sm md:text-base text-gray-600 leading-relaxed">
                  <p>
                    データとクリエイティブの双方を理解する専門家が、戦略立案から実装・運用までをワンチームで支援。スピードと品質を両立するフレームワークで、実装後のアップデートまで伴走します。
                  </p>
                  <p>
                    プロジェクトの大小に関わらず、企業のビジョンを共に描き、その実現を支えること。それがMOGCIAのストーリーです。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs uppercase tracking-[0.3em] text-gray-400">
                <div className="border border-gray-200 py-4 px-6 text-center">Trusted Partner</div>
                <div className="border border-gray-200 py-4 px-6 text-center">End-to-End Support</div>
                <div className="border border-gray-200 py-4 px-6 text-center">Future-Ready</div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-gray-400">
                <span className="px-4 py-2 border border-gray-200">Innovation</span>
                <span className="px-4 py-2 border border-gray-200">Strategy</span>
                <span className="px-4 py-2 border border-gray-200">Design</span>
                <span className="px-4 py-2 border border-gray-200">AI Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section 2 */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">Updates</p>
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-3xl font-light tracking-wide relative z-10">
                  News & Topics
                </h2>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-[#b3e1ff]/50 via-transparent to-transparent -z-10"></span>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-500 max-w-xl leading-relaxed">
              MOGCIAの最新情報やイベント、プロジェクトの進捗をご紹介します。<br />企業とともに描く未来の一端をご覧ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: '2025.09.05', title: 'AI業務改善支援ツールUpmoの開発開始', description: '企業の業務改善支援ツールUpmoの開発を開始しました。現場の知を束ね、業務の変革を後押しします。', tag: 'PRESS' },
              { date: '2025.08.15', title: 'Signal.テスト導入スタート', description: 'SNS運用の90%自動化AIツールSignal.のテスト導入を複数社で開始。マーケティング業務の再定義に挑みます。', tag: 'NEWS' },
              { date: '2025.01.08', title: 'MOGCIA Coffee POPUP', description: 'Choosebase SHIBUYAにてMOGCIA Coffeeを販売中。テクノロジーとカルチャーの交差点を体験してください。', tag: 'EVENT' },
            ].map((news, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-5 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#b3e1ff] via-[#d2c7ff] to-[#f6e27a] opacity-75 transition-opacity duration-700 group-hover:opacity-100"></span>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
                  <span>{news.tag}</span>
                  <span className="text-gray-500 tracking-normal">{news.date}</span>
                </div>
                <h3 className="text-lg font-light text-gray-900 leading-snug group-hover:translate-x-1 transition-transform duration-400">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {news.description}
                </p>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-400 group-hover:text-gray-600 transition-colors">Read More</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose MOGCIA Section */}
      <section id="services" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 overflow-hidden shadow-[0_18px_55px_rgba(24,32,56,0.12)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(24,32,56,0.16)]">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff] opacity-80 transition-opacity duration-700 group-hover:opacity-100"></span>
            <div className="pointer-events-none absolute -top-24 -right-12 w-80 h-80 bg-gradient-to-br from-[#d2c7ff]/30 via-transparent to-transparent blur-3xl"></div>

            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Why Choose MOGCIA</p>
                <div className="relative inline-block">
                  <h2 className="text-xl md:text-4xl font-light tracking-wide relative z-10">
                    MOGCIAが選ばれる理由
                  </h2>
                  <span className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-[#f6e27a]/60 via-[#d2c7ff]/40 to-transparent -z-10"></span>
                </div>
                <p className="text-sm uppercase tracking-[0.25em] text-gray-400 text-right pr-2">
                  Tailored Innovation, Delivered End-to-End
                </p>
              </div>

              <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 text-sm md:text-base text-gray-600 leading-relaxed">
                <p>
                  AI・デジタル技術で企業の未来を創造するMOGCIAは、戦略立案から実装・運用までワンストップで支援します。御社固有の課題に寄り添い、最適なチームとアプローチで、スピードと品質を両立します。
                </p>
                <p>
                  各領域のスペシャリストが一体となり、ビジネスゴールに直結するソリューションをデザイン。導入後の運用・改善まで伴走し、継続的な成功を共創します。
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs uppercase tracking-[0.3em] text-gray-400">
                <div className="border border-gray-200 py-4 px-6 text-center">Automation × Strategy</div>
                <div className="border border-gray-200 py-4 px-6 text-center">One Team Support</div>
                <div className="border border-gray-200 py-4 px-6 text-center">Data-Driven Design</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {[
              {
                tag: 'Automation',
                title: '業務自動化で効率化',
                body: 'AIツールを活用した業務改善で作業時間を大幅に削減。人の創造性が活きるオペレーションへシフトします。',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                ),
              },
              {
                tag: 'Full Service',
                title: 'ワンストップサービス',
                body: 'SNS運用・HP作成・AIツール開発・システム開発まで目的達成に必要な領域を一貫して提供します。',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548-.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                ),
              },
              {
                tag: 'Strategy',
                title: '課題解決に特化',
                body: '経営と現場双方の視点で課題を捉え、成果に直結するソリューションをデザインします。',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                ),
              },
              {
                tag: 'Secure',
                title: 'セキュリティ対策',
                body: '企業情報や顧客データを適切に保護し、最新のセキュリティ基準に沿った環境を構築します。',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
              },
              {
                tag: 'Care',
                title: '運用サポート充実',
                body: '導入後の運用・保守・改善まで伴走。データドリブンに成果を検証し、最適化を繰り返します。',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                ),
              },
              {
                tag: 'Flexible',
                title: '柔軟な対応',
                body: 'スタートアップから大企業まで、規模や業界を問わず最適な体制とスピード感でご支援します。',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff] opacity-75 transition-opacity duration-700 group-hover:opacity-100"></span>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
                  <span>{item.tag}</span>
                  <span className="h-px w-10 bg-gray-200"></span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-gray-200 flex items-center justify-center text-gray-900">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-lg font-light text-gray-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - MOGCIA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex flex-col items-center gap-3">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Our Values</p>
              <div className="relative inline-block">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide relative z-10">
                  MOGCIAの価値観
                </h2>
                <span className="absolute -bottom-2 left-0 w-full h-5 bg-gradient-to-r from-[#f6e27a]/60 via-[#d2c7ff]/40 to-transparent -z-10"></span>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              MOGCIAの頭文字には、私たちが大切にしている6つの価値が込められています。
              日々の意思決定やプロジェクト推進において、この理念を軸に伴走します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {[
              { initial: 'M', title: 'Mission', body: '使命を果たす', tag: 'Mindset' },
              { initial: 'O', title: 'Originality', body: '独創性を追求', tag: 'Creativity' },
              { initial: 'G', title: 'Growth', body: '共に成長する', tag: 'Growth' },
              { initial: 'C', title: 'Challenge', body: '挑戦し続ける', tag: 'Challenge' },
              { initial: 'I', title: 'Innovation', body: '革新を創造', tag: 'Innovation' },
              { initial: 'A', title: 'Achievement', body: '成果を実現', tag: 'Impact' },
            ].map((value, index) => (
              <div
                key={index}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff] opacity-75 transition-opacity duration-700 group-hover:opacity-100"></span>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
                  <span>{value.tag}</span>
                  <span className="h-px w-10 bg-gray-200"></span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-gray-200 flex items-center justify-center text-2xl font-semibold text-gray-900">
                    {value.initial}
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-500">{value.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Products Section */}
      <ProductsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </main>
  )
}
