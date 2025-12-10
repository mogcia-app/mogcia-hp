import Image from 'next/image'

import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const companyInfo = [
  { label: '会社名', value: '株式会社MOGCIA（モグシア）' },
  { label: '所在地', value: '〒810-0001 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル7階' },
  { label: '設立', value: '2023年11月' },
  { label: '資本金', value: '300万円' },
  { label: '事業内容', value: 'AIソリューション開発 / システム企画・開発・運営 / Web制作・デジタルマーケティング支援' },
  { label: '主要取引先', value: '製造業、サービス業、スタートアップ企業、広告代理店、自治体 ほか' },
  { label: '取引銀行', value: '佐賀銀行' },
]

const accessInfo = [
  { label: '最寄駅', value: '福岡市地下鉄空港線「天神」駅 徒歩5分' },
  { label: 'アクセス', value: '天神地下街東1b出口より北へ徒歩3分、1階にカフェが入っているビルの7階です。' },
]

export default function CompanyPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
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
          <div className="max-w-3xl px-6 text-center text-white space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Company Profile</p>
            <h1 className="text-3xl md:text-5xl font-light tracking-wide">会社概要</h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              MOGCIAの基本情報とアクセスを掲載しています。<br />
              取引・採用・取材など各種お問い合わせの際にご参照ください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          <div className="group relative border border-gray-200 bg-white px-10 md:px-16 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide text-gray-900">基本情報</h2>
              <div className="divide-y divide-gray-200 text-sm md:text-base text-gray-600">
                {companyInfo.map(item => (
                  <div key={item.label} className="py-4 flex flex-col md:flex-row md:items-start md:gap-10">
                    <dt className="md:w-48 uppercase text-xs tracking-[0.35em] text-gray-400 mb-2 md:mb-0">{item.label}</dt>
                    <dd className="flex-1 leading-relaxed">{item.value}</dd>
                  </div>
                ))}
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


