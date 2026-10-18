import { services } from '@/lib/site-data'

export type ShowcaseItem = {
  id: string
  category: string
  color: string
  softColor: string
  title: string
  subtext: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  note: string
}

const visualData = [
  {
    category: 'SNS',
    color: '#efcfd9',
    softColor: '#fbf0f3',
    image: '/whatwedo/1.png',
    imageAlt: 'ピンク色のmogciaキャラクター',
    note: '企画から制作、投稿後の改善まで',
    description: '企画や投稿づくりから日々の運用、効果の分析・改善まで一貫してサポート 届けたい相手にきちんと見つけてもらい、無理なく続けながら成果につながる発信の流れをいっしょにつくります',
  },
  {
    category: 'WEB',
    color: '#d4e2e8',
    softColor: '#eff5f7',
    image: '/whatwedo/2.png',
    imageAlt: '水色のmogciaキャラクター',
    note: '伝わる設計と、育てていけるWeb制作',
    description: '伝えたい価値や届けたい相手を整理するところから、情報設計・デザイン・実装まで一貫して対応 公開して終わりではなく、その後の改善や運用まで見据えたサイト・LPをつくります',
  },
  {
    category: 'CUSTOMER',
    color: '#d9d2eb',
    softColor: '#f3f0fa',
    image: '/whatwedo/4.png',
    imageAlt: '紫色のmogciaキャラクター',
    note: '出会ったあとも、自然につながる導線へ',
    description: 'LINE公式アカウントの設計から予約・お問い合わせの導線、配信内容の制作や運用までサポート 出会ったお客さまと自然につながり続け、関係を少しずつ育てられる仕組みをつくります',
  },
  {
    category: 'AI',
    color: '#c5c9ce',
    softColor: '#ebecef',
    image: '/whatwedo/3.png',
    imageAlt: 'シルバーのmogciaキャラクター',
    note: '業務に合わせた、小さく始められる仕組み',
    description: 'いまの業務や課題を整理し、社内ナレッジ・営業教育・業務システムなどにAIを取り入れる方法をご提案 小さく始めて実際に使いながら、現場に合う仕組みへ育てていきます',
  },
] as const

export const showcaseItems: ShowcaseItem[] = services.map((service, index) => ({
  id: service.number,
  category: visualData[index].category,
  color: visualData[index].color,
  softColor: visualData[index].softColor,
  title: service.title,
  subtext: visualData[index].note,
  description: visualData[index].description,
  image: visualData[index].image,
  imageAlt: visualData[index].imageAlt,
  tags: service.number === '02' ? [...service.tags, 'ismo.'] : service.tags,
  note: 'MOGCIA / SERVICE ' + service.number,
}))
