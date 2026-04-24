type ProcessStep = {
  title: string
  subtitle?: string
  description: string
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
        description: '必要に応じて AI 設定を調整し、既存ツールでも柔軟に最適化を行います。',
      },
      {
        title: 'Launch',
        subtitle: '運用開始',
        description: '短期間で本番運用へ移行し、初期オンボーディングも併せて支援します。',
      },
      {
        title: 'Support',
        subtitle: '継続的なサポート',
        description: '運用状況を定期的に確認し、効果測定や改善提案を継続します。',
      },
    ],
  },
  {
    heading: 'システム開発の流れ',
    description: 'フルカスタムのシステム開発では、要件整理から運用支援まで一貫してサポートします。',
    steps: [
      {
        title: 'Contact',
        subtitle: 'お問い合わせ',
        description: '課題感、目的、スケジュール感などをヒアリングし、プロジェクトの前提を整理します。',
      },
      {
        title: 'Hearing',
        subtitle: 'ヒアリング',
        description: '関係者インタビューや業務フロー分析を通じて、要件定義に向けた材料を集めます。',
      },
      {
        title: 'Design',
        subtitle: '設計とご提案',
        description: 'システム要件、UI/UX、データ構造を整理し、ロードマップと概算見積を提示します。',
      },
      {
        title: 'PoC',
        subtitle: '試験導入・検証',
        description: '限定環境での PoC やプロトタイプ検証を通じて、効果と運用体制を確認します。',
      },
      {
        title: 'Optimize',
        subtitle: '運用支援・最適化',
        description: '本番導入後も継続的な改善を行い、追加開発や運用設計を支援します。',
      },
    ],
  },
]

export default function ProcessSection({
  id,
  title = 'Process / How We Work',
  eyebrow = 'Our Approach',
  description = 'お問い合わせから導入、運用まで、MOGCIAが伴走する流れをご紹介します。',
  steps,
  flows,
}: ProcessSectionProps) {
  const resolvedFlows: ProcessFlow[] = flows && flows.length > 0
    ? flows
    : steps && steps.length > 0
      ? [{ heading: 'Process', steps }]
      : defaultFlows

  return (
    <section id={id} className="border-b border-neutral-200 px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
      <div className="mx-auto w-full max-w-[1320px] text-neutral-950">
        <div className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr] xl:gap-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">{eyebrow}</p>
            <h2 className="mt-5 text-3xl font-light tracking-[-0.02em] md:text-5xl">{title}</h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-neutral-700 md:text-lg">{description}</p>
          </div>

          <div className="space-y-14">
            {resolvedFlows.map(flow => (
              <div key={flow.heading}>
                <div className="border-t border-neutral-200 pt-6">
                  <h3 className="text-2xl font-light text-neutral-950">{flow.heading}</h3>
                  {flow.description ? (
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-700 md:text-base">
                      {flow.description}
                    </p>
                  ) : null}
                </div>

                <div className="mt-6 border-t border-neutral-200">
                  {flow.steps.map((step, index) => (
                    <div
                      key={`${flow.heading}-${step.title}-${index}`}
                      className="grid gap-3 border-b border-neutral-200 py-5 md:grid-cols-[88px_220px_1fr] md:gap-6"
                    >
                      <p className="text-sm text-neutral-400">{String(index + 1).padStart(2, '0')}</p>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">{step.title}</p>
                        {step.subtitle ? (
                          <h4 className="mt-2 text-lg font-light text-neutral-950">{step.subtitle}</h4>
                        ) : null}
                      </div>
                      <p className="text-sm leading-7 text-neutral-700 md:text-base">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
