import { Fragment } from 'react'

type ProcessStep = {
  title: string
  subtitle?: string
  description: string
  subtitleClassName?: string
}

type ProcessSectionProps = {
  id?: string
  title?: string
  eyebrow?: string
  description?: string
  steps?: ProcessStep[]
  flows?: ProcessFlow[]
}

type ProcessFlow = {
  heading: string
  description?: string
  steps: ProcessStep[]
}

const defaultFlows: ProcessFlow[] = [
  {
    heading: '既存ツール提供の流れ',
    description: 'スピーディに導入いただける既存ツールは、最小限のステップで本稼働まで伴走します。',
    steps: [
      {
        title: 'Contact',
        subtitle: 'お問い合わせ',
        description: 'お客様の現状やご要望をお伺いし、最適なツール選定に向けた初期相談を行います。',
      },
      {
        title: 'Hearing',
        subtitle: 'ヒアリング',
        description: '課題や運用体制、既存システムとの連携状況を詳細にヒアリングし、導入の方向性を固めます。',
      },
      {
        title: 'Customization',
        subtitle: 'AIカスタマイズ',
        description: '必要に応じてAI設定を調整。既存ツールでも柔軟に最適化を行います。',
      },
      {
        title: 'Launch',
        subtitle: '運用開始',
        description: '短期間で本番運用へ。導入サポート資料の提供や初期オンボーディングも併せて実施します。',
      },
      {
        title: 'Support',
        subtitle: '継続的なサポート',
        subtitleClassName: 'text-sm md:text-base whitespace-nowrap',
        description: '運用状況を定期的に確認し、効果測定や改善提案を実施。常に最大の成果が出るよう伴走します。',
      },
    ],
  },
  {
    heading: 'システム開発の流れ',
    description: 'フルカスタムのシステム開発では、PoCからスケールまでをシームレスに支援します。',
    steps: [
      {
        title: 'Contact',
        subtitle: 'お問い合わせ',
        description: 'まずは課題感・目的・スケジュール感などをヒアリングし、プロジェクトの前提を整理します。',
      },
      {
        title: 'Hearing',
        subtitle: 'ヒアリング',
        description: '関係者インタビューや業務フロー分析を通じて、要件定義に向けたインプットを網羅します。',
      },
      {
        title: 'Design',
        subtitle: '設計とご提案',
        description: 'システム要件・UI/UX・データ構造などを整理し、ロードマップと概算見積を含む提案書を提示します。',
      },
      {
        title: 'PoC',
        subtitle: '試験導入・検証',
        description: '限定環境でのPoCやプロトタイプ検証を行い、効果測定・運用体制の検証を実施します。',
      },
      {
        title: 'Optimize',
        subtitle: '運用支援・最適化',
        subtitleClassName: 'text-sm md:text-base whitespace-nowrap',
        description: '本番導入後も継続的に改善を続け、追加開発や運用設計を含めた総合的な支援を提供します。',
      },
    ],
  },
]

export default function ProcessSection({
  id,
  title = 'Process / How We Work',
  eyebrow = 'Our Approach',
  description = 'お問い合わせから導入・運用まで、MOGCIAが提供する一連のプロセスをご紹介します。安心してお任せいただけるよう、各ステップで専門チームが伴走します。',
  steps,
  flows,
}: ProcessSectionProps) {
  const resolvedFlows: ProcessFlow[] = flows && flows.length > 0
    ? flows
    : steps && steps.length > 0
      ? [{ heading: 'Process', steps }]
      : defaultFlows

  return (
    <section
      id={id}
      className="bg-white py-32 px-6"
    >
      <div className="max-w-6xl mx-auto text-gray-900">
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-4">
              {eyebrow}
            </p>
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-light tracking-wide relative z-10">
                {title}
              </h2>
              <span className="absolute -bottom-2 left-0 w-full h-5 bg-gradient-to-r from-[#f6e27a]/60 via-[#e4d7a1]/50 to-transparent -z-10"></span>
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-16">
          {resolvedFlows.map((flow, flowIndex) => (
            <div key={flowIndex}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <h3 className="text-xl md:text-2xl font-light text-gray-900 tracking-wide">
                  {flow.heading}
                </h3>
                {flow.description && (
                  <p className="text-sm md:text-base text-gray-500 max-w-3xl leading-relaxed">
                    {flow.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 xl:gap-10">
                {flow.steps.map((step, index) => (
                  <div
                    key={index}
                    className="group relative bg-white border border-gray-200 px-8 py-12 flex flex-col gap-6 shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
                  >
                    <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff] opacity-75 transition-opacity duration-700 group-hover:opacity-100"></span>

                    <div className="flex items-center justify-between">
                      <div className="text-sm uppercase tracking-[0.3em] text-gray-400">
                        Step {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="w-12 h-px bg-gray-200"></div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-400 mb-1 tracking-wide uppercase">
                        {step.title}
                      </p>
                      {step.subtitle && (
                        <h4 className={`text-base md:text-lg font-light text-gray-900 tracking-normal leading-snug group-hover:translate-x-1 transition-transform duration-500 ${step.subtitleClassName ?? ''}`}>
                          {step.subtitle.includes('（') ? (
                            step.subtitle.split('（').map((part, subIndex) => (
                              <span key={subIndex} className="block">
                                {subIndex === 0 ? part : `（${part}`}
                              </span>
                            ))
                          ) : (
                            step.subtitle
                          )}
                        </h4>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed flex-1">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-gray-300">
                      <span className="h-px w-8 bg-gray-200"></span>
                      Next
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

