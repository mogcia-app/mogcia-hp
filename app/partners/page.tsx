import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function PartnersPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative h-[75vh] min-h-[520px] overflow-hidden">
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
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Partners</p>
            <h1 className="text-3xl md:text-5xl font-light tracking-wide">パートナー募集</h1>
           
          </div>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="w-full">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 overflow-hidden shadow-[0_18px_55px_rgba(24,32,56,0.12)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(24,32,56,0.16)]">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900 opacity-80 transition-opacity duration-700 group-hover:opacity-100"></span>
            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Partner Network</p>
                <div className="relative inline-block">
                  <h2 className="text-xl md:text-4xl font-light tracking-wide relative z-10">
                    パートナーシップについて
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
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                私たちは、さまざまな分野のパートナーと連携しながら、
                それぞれの強みを活かした価値提供を行っています。<br />
                事業内容やフェーズに応じた、柔軟なパートナー制度をご用意しています。<br />
                詳しくはお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <ContactSection />
      <Footer />
    </main>
  )
}


