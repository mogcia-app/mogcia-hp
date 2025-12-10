import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const services = [
  {
    title: 'AIコンサルティング & システム開発',
    description:
      '人工知能（AI）を活用したソフトウェア/システムの企画・開発・提供をトータルで支援。ビジネス課題に最適なアルゴリズム選定から、PoC、導入後の改善まで伴走します。',
    points: ['課題ヒアリングと要件定義', 'AIアーキテクチャ/アルゴリズム設計', 'PoC・本番開発・リリース支援', '運用チューニングと継続的なコンサルティング'],
  },
  {
    title: 'ソフトウェア企画・開発・運営',
    description:
      'Web/クラウド/業務系など用途に合わせたソフトウェアを一貫して企画・開発。リリース後の運営・保守まで視野に入れた体制でご提供します。',
    points: ['プロダクト戦略とロードマップ策定', 'UI/UX設計・システム開発', '品質保証とセキュリティ設計', '運用・保守・アップデート支援'],
  },
  {
    title: 'Webサイト企画・制作・運用',
    description:
      'ブランドサイト、採用サイト、LPなど、目的に合わせたWebサイトを企画から運用改善までサポート。クリエイティブとデータの両面で成果を最大化します。',
    points: ['サイト構成/コンテンツ企画', 'デザイン・コピーライティング', 'CMS実装・保守運用', 'アクセス解析と改善サイクル'],
  },
 
  {
    title: 'SNS運用・マーケティング支援',
    description:
      'SNSやコンテンツを軸にしたコミュニケーションを設計し、戦略立案から運用、効果検証まで伴走。ブランド体験を一貫してデザインします。',
    points: ['SNSアカウント設計と運用体制づくり', 'コンテンツ企画・制作・配信ディレクション', '広告等の施策連携', 'データ分析による改善サイクル構築'],
  },
]

const capabilities = [
  {
    title: 'Consulting & Design',
    body: '課題定義から戦略策定、体験設計まで。ビジネスとクリエイティブの両面から未来の姿を描きます。',
  },
  {
    title: 'Engineering',
    body: 'AI、クラウド、データ基盤など多様な技術領域で本番運用を見据えたプロダクト開発を行います。',
  },
  {
    title: 'Growth & Operation',
    body: '導入後の運用、データ活用、グロース施策まで伴走し、成果に直結する改善サイクルを構築します。',
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-900">

<section className="relative h-[80vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/istockphoto-2196775101-640_adpp_is.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center text-white space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">services</p>
            <h1 className="text-3xl md:text-5xl font-light tracking-wide">
            サービス一覧
            </h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
            AIコンサルティング、ソフトウェア開発、Web/EC制作、マーケティング支援まで。<br />
            経営と現場の課題に寄り添い、事業成長を支えるサービスをワンストップで提供します。
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Services</p>
              <h1 className="text-3xl md:text-5xl font-light tracking-wide">提供サービス一覧</h1>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                AI・デジタル技術で企業の未来を創造するために、MOGCIAはコンサルティングからプロダクト開発、運用支援までワンストップで支援します。
                各サービスは組み合わせてご提供することも可能です。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative border border-gray-200 bg-white px-10 py-12 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gray-400">
                  <span className="whitespace-nowrap">Service {String(index + 1).padStart(2, '0')}</span>
                  <span className="flex-1 h-px bg-gray-200"></span>
                </div>
                <h2 className="text-2xl font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-500 leading-relaxed">
                  {service.points.map(point => (
                    <li key={point} className="flex items-center gap-3">
                      <span className="h-px w-6 bg-gray-300 flex-none"></span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Capabilities</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">MOGCIAの強み</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                コンサルティング、エンジニアリング、運用支援の三領域を横断することで、短期的な成果と中長期的な成長を両立する「仕組み」を提供します。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map(capability => (
              <div
                key={capability.title}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <h3 className="text-lg font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {capability.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{capability.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Numbers</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">数字で見る MOGCIAが選ばれる理由</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                実績と信頼性で選ばれ続けるMOGCIAの強みを、具体的な数字と体制でご紹介します。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'プロジェクト実績', body: '様々な業界・規模のお客様に選ばれています。' },
              { value: '80%', label: '効率化実現', body: '平均的な業務効率化の実績です。' },
              { value: '2年', label: '創業からの実績', body: '短期間で着実な成長を遂げています。' },
              { value: '98%', label: '顧客満足度', body: 'お客様から高い評価をいただいています。' },
            ].map(item => (
              <div
                key={item.label}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-4 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <p className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">{item.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    title: 'AI・デジタル専門',
                    body: '最新のAI技術とデジタルテクノロジーに精通した専門チームが、お客様の課題解決をサポートします。',
                  },
                  {
                    title: '完全カスタマイズ',
                    body: 'お客様のビジネスに最適化されたソリューションを提供。課題・体制に合わせたオーダーメイドのご提案が可能です。',
                  },
                  {
                    title: '継続パートナー',
                    body: '導入後も長期的なパートナーとして、ビジネス成長に合わせた改善・アップデートを継続的に支援します。',
                  },
                ].map(item => (
                  <div key={item.title} className="relative pl-6">
                    <span className="absolute left-0 top-2 h-12 w-[3px] bg-gradient-to-b from-gray-400 via-gray-700 to-gray-900"></span>
                    <h3 className="text-lg font-light text-gray-900 tracking-wide mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
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

