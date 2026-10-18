import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { SectionLabel, tone } from '@/components/PageFrame'
import { createPageMetadata } from '../../metadata'

export const metadata: Metadata = createPageMetadata('システム・AI開発 | 株式会社MOGCIA', '/services/system')

const developmentCases: [string, string, string[]][] = [
  ['ホテル', '宿泊予約・管理システム', ['空室管理', '客室・料金・プラン管理', '予約変更・キャンセル', '顧客管理', '分析']],
  ['音響会社', '音響機材・在庫管理システム', ['現場予定に合わせた機材割当', 'ダブルチェック', '不足アラート', '借入管理']],
  ['不動産会社', 'AI問い合わせ自動化システム', ['Gmail連携', '問い合わせ分類', '物件情報照合', '添付ファイル処理', 'AI返信・指定時刻送信']],
  ['一般企業', '社内スケジュール管理システム', ['Googleカレンダー連携', '社員別予定管理', '自然文によるAI予定入力']],
  ['配送業', '配送・マッピングシステム', ['Googleマップ連携', '配送先の地図表示', '配送業務管理']],
  ['リスキリング事業者', '受講者・教材管理システム', ['受講者・講師管理', '教材・テスト', '面談管理', '学習進捗・離脱分析', '提出内容のAI要約']],
]

const ownProducts: [string, string, string, string | null][] = [
  ['selmo.', '営業通話の文字起こし・AI分析・ロープレ・教育管理', '#f7df83', '/our-products-selmo.png'],
  ['commo.', 'LINE連携・予約管理・顧客管理・セグメント配信', '#d7c5f7', '/our-products-commo.png'],
  ['Signal.', 'Instagram運用・分析・AI改善提案', '#f6c08f', '/our-products-signal.png'],
  ['upmo.', '社内ナレッジ・文書のAI検索', '#bcdcf7', '/our-products-upmo.png'],
  ['Roomly.', 'ホテル向け受付・チャットシステム', '#f6b2b5', '/our-products-roomly.png'],
  ['milmo.', '配送・営業・請求管理', '#bfe6d6', '/milmo-s.png'],
  ['ismo.', 'HP・LPのデータ分析', '#fddde5', '/our-products-ismo.png'],
]

const caseChips = [tone.sky.chip, tone.pink.chip, tone.butter.chip, tone.lilac.chip, tone.mint.chip, tone.peach.chip]

export default function SystemServicePage() {
  return <ServiceDetailPage
    color="mint"
    eyebrow="System development"
    title="システム開発"
    lead="デモを触りながら、一緒につくる。"
    description="難しい要件をまとめていただく必要はありません。今の業務や困っていることを聞き、小さなデモをつくるところから始めます。最初に決めた範囲を納品して終わるのではなく、実際に使いながら必要な修正や機能追加を重ねていきます。"
    image="/now-at-mogcia-02.png"
    imageAlt="システムを設計・開発するエンジニア"
    concerns={[
      'Excelでの管理が限界になっている',
      '同じ情報を何度も入力している',
      '必要な情報が複数の場所に散らばっている',
      '既存のシステムが業務に合わない・古くなった',
      '今の業務にAIを組み込みたい',
      'システムが必要かどうかも含めて相談したい',
    ]}
    scope={[
      '予約・顧客・在庫・業務管理システム',
      '営業・配送・スケジュール管理',
      'AIチャット・AI自動化・データ分析',
      '公開APIを利用したLINE・外部サービス連携',
      'スマートフォンアプリ（別途相談）',
      '決済機能（別途相談）',
      '既存サービス・自社プロダクトの組み合わせ',
      '導入後の保守・アップデート・機能追加',
    ]}
    pricing={<div className="grid gap-5 lg:grid-cols-[1fr_.75fr]"><div className="bg-white p-7"><p className="text-xl font-black">予算に合わせて個別に設計</p><p className="mt-4 text-sm leading-7 text-ink-soft">決まったパッケージ料金ではなく、必要な機能と優先順位を整理し、ご予算に合わせて開発内容を組み立てます。制作期間も内容によって異なります。</p></div><div className="border border-ink/15 bg-white p-7"><p className="text-sm font-black">月額で継続して開発・改善</p><p className="mt-4 text-xs leading-7 text-ink-soft">お支払いは基本的に月額です。導入後の保守も内容に応じた個別見積もり。開発範囲や進め方は、状況を見ながら柔軟に調整します。</p></div></div>}
    flow={[
      ['ヒアリング', '困っていることと、現在の業務の進め方を伺います。'],
      ['業務・要件整理', '作業の流れを確認し、必要な機能と優先順位を整理します。'],
      ['デモ制作', 'まずは小さく形にし、実際に操作できるデモをつくります。'],
      ['操作・確認', '画面や動きを触っていただき、認識や使い方をすり合わせます。'],
      ['開発', '確認内容を反映しながら、必要な機能や連携を実装します。'],
      ['テスト・導入', '実際の業務で確認しながら、現場へ導入します。'],
      ['保守・改善', '導入後もアップデートや機能追加を行い、使いやすく育てます。'],
    ]}
    cases={<div>
      <div className="grid gap-4 md:grid-cols-2">{developmentCases.map(([industry,name,features],index)=><article key={name} className="bg-white p-7"><div className="flex items-center justify-between gap-5"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink-soft">{industry}</p><span className="font-display text-[10px] text-ink/30">0{index+1}</span></div><h3 className="mt-4 text-lg font-black leading-7">{name}</h3><ul className="mt-5 flex flex-wrap gap-2">{features.map(feature=><li key={feature} className="rounded-full px-3 py-1.5 text-[10px] font-bold" style={{backgroundColor:caseChips[index%caseChips.length]}}>{feature}</li>)}</ul></article>)}</div>
      <div className="mt-20 rounded-[2rem] bg-white p-6 md:p-10">
        <div><SectionLabel label="In-house products" color="mint"/><h3 className="mt-4 text-2xl font-black md:text-3xl">自社開発プロダクト</h3><p className="mt-4 max-w-xl text-xs leading-6 text-ink-soft">受託開発だけでなく、実際の課題から生まれたプロダクトも自社で企画・開発しています。</p></div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ownProducts.map(([name,description,color,image])=><article key={name} className="flex flex-col overflow-hidden rounded-[1.25rem] border border-ink/10 bg-white">
            <div className="relative aspect-[4/3]" style={{backgroundColor:`${color}55`}}>{image?<Image src={image} alt={`${name}のプロダクトビジュアル`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-contain p-3"/>:<span className="absolute inset-0 grid place-items-center font-logo text-3xl font-black text-ink/70">{name}</span>}</div>
            <div className="flex flex-1 flex-col p-5"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full" style={{backgroundColor:color}} aria-hidden/><h4 className="font-logo text-lg font-black">{name}</h4></div><ul className="mt-3 flex flex-wrap gap-1.5">{description.split('・').map(item=><li key={item} className="rounded-full px-2.5 py-1 text-[10px] font-bold" style={{backgroundColor:`${color}66`}}>{item}</li>)}</ul></div>
          </article>)}
          <article className="soft-spectrum flex flex-col justify-between rounded-[1.25rem] p-6">
            <div><p className="text-[10px] font-bold tracking-[.16em] text-ink-soft">CUSTOMIZE</p><h4 className="mt-3 text-lg font-black leading-7">業種に合わせた<br/>拡張にも対応</h4><p className="mt-3 text-xs leading-6 text-[#2f3a4c]">たとえばcommo.では、歯科向けに検診・予約リマインド機能を拡張。既存の仕組みをそのまま当てはめず、業務に合わせて調整します。</p></div>
            <Link href="/contact" className="mt-5 inline-flex items-center justify-between border-t border-ink/15 pt-4 text-xs font-bold">拡張について相談する<span aria-hidden>→</span></Link>
          </article>
        </div>
      </div>
    </div>}
    faqs={[
      ['システムの知識がなくても相談できますか？', 'はい。業務上のお悩みだけお聞かせください。必要な仕組みや進め方は一緒に整理します。'],
      ['必ず新しいシステムを開発することになりますか？', 'いいえ。不要な機能は省き、既存サービスやMOGCIAの自社プロダクトが合う場合は、その方法も含めてご提案します。'],
      ['開発中のシステムを確認できますか？', 'はい。まずデモをつくり、実際に操作していただきながら画面や機能を調整します。'],
      ['AIでは何ができますか？', 'つくりたいものや業務によって変わります。目的を確認したうえで、AIを使うべき部分と具体的な機能を整理します。'],
      ['スマートフォンアプリや外部サービス連携も可能ですか？', 'アプリと決済機能は別途相談です。LINEなど、公開APIが提供されているサービスとの連携にも対応できます。'],
      ['操作マニュアルは作成してもらえますか？', '別途ご相談ください。開発中からデモを操作していただくため、導入時には操作に慣れている方が多いです。'],
      ['完成後の修正や改善もお願いできますか？', 'はい。月額での継続支援を基本に、保守、アップデート、機能追加へ柔軟に対応します。'],
    ]}
  />
}
