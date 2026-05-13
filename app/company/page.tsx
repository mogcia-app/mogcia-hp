import AiGeneratedNotice from '@/components/AiGeneratedNotice'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ResponsiveHeroImage from '@/components/ResponsiveHeroImage'

const companyInfo = [
  { label: '会社名', value: '株式会社MOGCIA（モグシア）' },
  { label: '代表取締役', value: '堂本 寛人' },
  { label: '所在地', value: '〒810-0001 福岡県福岡市中央区天神4-6-28 いちご天神ノースビル7階' },
  { label: '設立', value: '2023年11月' },
  { label: '資本金', value: '300万円' },
  { label: '事業内容', value: 'AIソリューション開発 / システム企画・開発・運営 / Web制作・デジタルマーケティング支援' },
  { label: '主要取引先', value: '製造業、サービス業、スタートアップ企業、広告代理店、自治体 ほか' },
  { label: '取引銀行', value: '佐賀銀行' },
]

export default function CompanyPage() {
  return (
    <main className="bg-[#f7f7f5] text-neutral-950">
      <section className="relative h-[60vh] min-h-[440px] overflow-hidden">
        <ResponsiveHeroImage
          mobileSrc="/gt1.png"
          desktopSrc="/company.jpg"
          alt="Company hero"
          priority
          mobileClassName="object-cover object-bottom"
          desktopClassName="object-cover object-bottom"
        />
        <AiGeneratedNotice />
      </section>

      <section className="border-b border-neutral-200 px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="max-w-3xl space-y-6">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Company Profile</p>
            <h1 className="text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">会社概要</h1>
            <p className="text-sm leading-8 text-neutral-600 md:text-base">
              MOGCIAの基本情報とアクセスを掲載しています。
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:gap-20">
            <div>
              <h2 className="text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                基本情報
              </h2>
            </div>

            <div className="border-t border-neutral-200 text-sm md:text-base text-neutral-700">
              <div className="divide-y divide-neutral-200">
                {companyInfo.map(item => (
                  <div
                    key={item.label}
                    className="grid gap-2 py-5 md:grid-cols-[170px_1fr] md:gap-8"
                  >
                    <dt className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                      {item.label}
                    </dt>
                    <dd className="leading-8 text-neutral-700">{item.value}</dd>
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
