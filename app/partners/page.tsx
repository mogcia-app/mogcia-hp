import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const partnerSectors = [
  {
    label: 'Technology & SaaS',
    description:
      'AIプラットフォームやSaaSプロダクトとの共創で、エンドユーザー価値を最大化。共同開発やOEM提供を通じて新しい顧客体験を設計します。',
    touchpoints: ['共同PoC・プロダクト開発', 'ソリューションパッケージ化', 'UX/UI・導入支援'],
  },
  {
    label: 'Consulting & Agency',
    description:
      'コンサルティングファームやマーケティングエージェンシーと連携し、戦略立案から実行までを一体で提供。AI/デジタル領域の専門性を補完します。',
    touchpoints: ['共同提案・案件創出', '専門領域のリソースシェア', '定期的なナレッジ交流'],
  },
  {
    label: 'Enterprise & Manufacturers',
    description:
      '製造・物流・小売など大規模事業者とのパートナーシップで、業務DXと新規事業開発を推進。現場起点の改善とデータ活用を加速します。',
    touchpoints: ['AI/データ利活用支援', '業務プロセス最適化', '共同事業・JV設立'],
  },
  {
    label: 'Startups & Ventures',
    description:
      'スタートアップとの連携で、プロダクト成長と資金調達後の体制構築を支援。迅速な開発とガバナンスの両立をサポートします。',
    touchpoints: ['MVP/β版の高速開発', 'スケール期のグロース設計', 'テックリード・アドバイザリー'],
  },
]

const partnerValues = [
  {
    title: 'Shared Vision',
    subtitle: '共通のビジョンを描く',
    body: 'パートナーのビジョンに共感し、中長期の事業インパクトを共に描きます。',
  },
  {
    title: 'Co-Creation',
    subtitle: '技術とビジネスをつなぐ',
    body: '共創型のアプローチで、テクノロジーとビジネスを跨ぐチームを構築します。',
  },
  {
    title: 'Accountability',
    subtitle: '成果への責任を共有する',
    body: '共通KPIとガバナンスを整備し、成果創出まで責任を共有します。',
  },
]

const collaborationFlow = [
  {
    phase: '01',
    title: 'Alignment Session',
    subtitle: 'ゴールと役割のすり合わせ',
    description:
      '事業ゴールや提供価値、役割分担を明確化。市場仮説とロードマップを共同で策定します。',
  },
  {
    phase: '02',
    title: 'Joint Planning',
    subtitle: '実行計画と体制設計',
    description:
      '開発・運用体制やコミュニケーションルールを整備し、実行プランとKPIを設計します。',
  },
  {
    phase: '03',
    title: 'Co-Execution',
    subtitle: '共通チームで推進',
    description:
      'プロジェクトを共通チームで推進。定例レビューとアジャイルな改善サイクルで成果を最大化します。',
  },
  {
    phase: '04',
    title: 'Scale & Growth',
    subtitle: '成果検証と次の成長へ',
    description:
      '成果検証と横展開を実施。追加投資や新プロダクト開発など次の成長ステージを共に描きます。',
  },
]

const partnerPrograms = [
  {
    title: '技術パートナー',
    description:
      '最新のAI技術やDXソリューションを共同開発し、お客様に革新的な価値を提供します。',
    points: ['技術ノウハウの共有', '共同研究開発', '市場開拓の協力', 'ブランド価値の向上'],
  },
  {
    title: '販売パートナー',
    description:
      'お互いの強みを活かし市場拡大を目指します。事業拡大に向けた連携を推進します。',
    points: ['新規事業の共同開発', '販路の拡大', 'リソースの最適活用', 'リスクの分散'],
  },
  {
    title: '地域パートナー',
    description:
      '地域の企業や団体と連携し、地域社会の発展に貢献します。',
    points: ['地域での知名度向上', '地域資源の活用', '地域課題の解決', '地域経済の活性化'],
  },
]

const partnerBenefits = [
  {
    title: '専任チームによる伴走',
    body: '営業・技術・AIの各領域に専任担当を配置。プロジェクトの初期段階から導入後の運用まで一貫して支援します。',
  },
  {
    title: 'リソース/ナレッジの共有',
    body: '最新のAI・デジタル活用ノウハウ、営業資料、ワークフローなどをパートナー専用ポータルで提供。成功事例も共有します。',
  },
  {
    title: '共創による事業拡大',
    body: 'パートナーとの共創案件には、共同マーケティングや広報支援、成果連動の報酬制度をご用意しています。',
  },
]

const partnershipFlow = [
  {
    step: '01',
    title: 'エントリー・個別ヒアリング',
    body: 'まずはオンラインでのご面談にて、パートナーとしてのご希望や得意領域、連携したい案件についてヒアリングします。',
  },
  {
    step: '02',
    title: 'プログラム選定・契約',
    body: 'ビジネスモデルや提供体制に合わせて適したプログラムをご提案。契約後は、専用ポータルへのアクセスや資料をご案内します。',
  },
  {
    step: '03',
    title: '共同プランニング',
    body: '共通のターゲットや提案フローを整理し、営業計画・マーケティング施策・技術体制を一緒に設計します。',
  },
  {
    step: '04',
    title: '案件推進・振り返り',
    body: '案件ごとに専任チームが伴走し、成果に応じた改善サイクルを構築。定期的なレビューで次の施策へつなげます。',
  },
]

const faqs = [
  {
    question: 'どのような企業がパートナーになれますか？',
    answer:
      'AI・デジタル領域での課題解決に関心を持つ企業であれば業種は問いません。システム開発会社、コンサルティング会社、制作会社、広告代理店など幅広い企業さまが参加されています。',
  },
  {
    question: '契約までにどれくらいの期間がかかりますか？',
    answer:
      '通常は2〜4週間程度で契約まで進むことが多いです。緊急の案件がある場合は、個別にスケジュールを調整いたします。',
  },
  {
    question: 'どのような支援が受けられますか？',
    answer:
      '営業支援、資料・導入事例の提供、共同マーケティング、技術検証、プロジェクトのPM支援など、パートナー種別に応じたサポートを用意しています。',
  },
]

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
            <h1 className="text-3xl md:text-5xl font-light tracking-wide">共創パートナー募集</h1>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              MOGCIAは、AI・デジタル領域で価値を共創するパートナーを求めています。<br />
              技術・事業・クリエイティブの専門性を掛け合わせ、社会にインパクトを与えるプロジェクトを共に推進しましょう。
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Partner Network</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide">戦略的パートナー領域</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                業界や企業規模を問わず、共に成長する関係性を構築します。領域ごとの強みを活かしながら、共同で価値提供の幅を広げます。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {partnerSectors.map(sector => (
              <div
                key={sector.label}
                className="group relative border border-gray-200 bg-white px-10 py-12 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <h3 className="text-xs uppercase tracking-[0.35em] text-gray-400">{sector.label}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{sector.description}</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  {sector.touchpoints.map(point => (
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

      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Value Proposition</p>
              <h2 className="text-xl md:text-2xl font-light tracking-wide text-gray-900">パートナーシップで実現する価値</h2>
              
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
              プロジェクト単位の協業にとどまらず、共通のミッションを持った長期的な関係を築きます。事業成長に必要なリソースと知見を融合させ、継続的な価値創出を目指します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerValues.map(value => (
              <div
                key={value.title}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <h3 className="text-lg font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {value.title}
                </h3>
                <p className="text-xs text-gray-400 tracking-wide">{value.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Collaboration Flow</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">共創プロジェクトの進め方</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                初期フェーズからスケールフェーズまで、プロジェクトに合わせた柔軟な協業の進め方をご提案します。各ステップで専任チームが伴走します。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {collaborationFlow.map(step => (
              <div
                key={step.phase}
                className="group relative border border-gray-200 bg-white px-10 py-12 flex flex-col gap-5 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gray-400">
                  <span>{step.phase}</span>
                  <span className="flex-1 h-px bg-gray-200"></span>
                </div>
                <h3 className="text-2xl font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 tracking-wide">{step.subtitle}</p>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{step.description}</p>
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
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Partner Programs</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">パートナーシップの種類</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                技術協業から販売連携、地域共創まで、強みを生かした最適なパートナーシップをご提案します。<br />目的や課題に合わせて柔軟にカスタマイズ可能です。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {partnerPrograms.map((program, index) => (
              <div
                key={program.title}
                className="group relative border border-gray-200 bg-white px-10 py-12 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gray-400">
                  <span className="whitespace-nowrap">Program {String(index + 1).padStart(2, '0')}</span>
                  <span className="flex-1 h-px bg-gray-200"></span>
                </div>
                <h3 className="text-xl font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{program.description}</p>
                <ul className="space-y-2 text-sm text-gray-500 leading-relaxed">
                  {program.points.map(point => (
                    <li key={point} className="flex items-center gap-3">
                      <span className="h-px w-6 bg-gray-300 flex-none"></span>
                      <span>{point}</span>
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
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Benefits</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">パートナー特典</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                伴走体制と共有リソースで、パートナーさまの事業成長を継続的にサポートします。<br />営業・技術・AIの各領域で成果に直結する支援を提供します。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerBenefits.map(benefit => (
              <div
                key={benefit.title}
                className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <h3 className="text-lg font-light text-gray-900 tracking-wide group-hover:translate-x-1 transition-transform duration-400">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{benefit.body}</p>
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
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">パートナー参画までの流れ</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                初回ヒアリングから契約、共同案件の推進まで、透明性のあるプロセスでスピーディーに伴走します。状況に合わせた柔軟なアレンジも可能です。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {partnershipFlow.map(item => (
              <div
                key={item.step}
                className="group relative border border-gray-200 bg-white px-10 py-12 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
              >
                <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-gray-400">
                  <span className="text-sm">STEP {item.step}</span>
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

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="group relative border border-gray-200 bg-white px-12 py-16 shadow-[0_18px_55px_rgba(24,32,56,0.12)] overflow-hidden">
            <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-900"></span>
            <div className="space-y-6 relative z-10">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">よくあるご質問</h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                パートナー制度に関するご不明点があれば、お気軽にお問い合わせください。こちらに記載のない内容も担当が個別にご案内いたします。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {faqs.map(faq => (
              <div
                key={faq.question}
                className="group border border-gray-200 bg-white px-8 py-6 shadow-[0_8px_30px_rgba(24,32,56,0.08)]"
              >
                <h3 className="text-sm md:text-base font-light text-gray-900 tracking-wide mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <ContactSection />
      <Footer />
    </main>
  )
}


