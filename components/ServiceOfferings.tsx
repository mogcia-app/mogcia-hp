import Image from 'next/image'
import Link from 'next/link'

import AiGeneratedNotice from '@/components/AiGeneratedNotice'

type Product = {
  name: string
  image: string
  imageClassName: string
  title: string
  description: string
  href: string
}

type ServicePackage = {
  image: string
  imageClassName: string
  title: string
  body: string
}

export const products: Product[] = [
  {
    name: 'commo.',
    image: '/commohp.png',
    imageClassName: 'object-contain',
    title:
      '顧客は、集めるより育てる時代へ\nLINE公式アカウントの構築から\n予約導線づくり クーポン配信\nリピーター施策までまるっとサポート',
    description:
      'LINE公式アカウントの構築から予約導線づくり、クーポン配信、リピーター施策まで支援します。',
    href: 'https://commotool.com/',
  },
  {
    name: 'Roomly.',
    image: '/roomly.png',
    imageClassName: 'object-contain',
    title: 'アプリ不要のチャットで、ホテルの問い合わせ対応をもっとシンプルに',
    description:
      'ゲストとホテルスタッフをつなぐ、チャット型フロントサポートツール。QRコードを読み取るだけでゲストはすぐに使え、スタッフはブラウザの管理画面からリアルタイムで確認・返信できます。',
    href: 'https://roomlychat.com/',
  },
  {
    name: 'upmo',
    image: '/upmo.png',
    imageClassName: 'object-contain',
    title: '社内の情報をAIで一元化',
    description:
      'PDFやマニュアルなど社内情報をAIが理解し、チャットで必要な答えをすぐ引き出せる企業向けAIです。',
    href: 'https://upmotool.com/',
  },
  {
    name: 'Signal.',
    image: '/signal.png',
    imageClassName: 'object-contain',
    title: 'あなた専属のSNS AI秘書',
    description:
      'SNS運用の次の一手をAIが自動で提案。分析も投稿アイデアも全部おまかせで、もう悩まないSNS運用へ。',
    href: 'https://www.sgnalapp.com/',
  },
]

export const servicePackages: ServicePackage[] = [
  {
    image: '/sns2.png',
    imageClassName: 'object-contain',
    title: 'SNS運用代行',
    body: '企画、投稿設計、制作、改善までを一気通貫で支援します。',
  },
  {
    image: '/hp.png',
    imageClassName: 'object-contain',
    title: 'LP作成・HP作成',
    body: '伝えたい価値と導線設計を整理し、目的に合わせたLPやコーポレートサイトを制作。公開後の改善も見据えて設計します。',
  },
  {
    image: '/pac.png',
    imageClassName: 'object-contain',
    title: '企業向けパック',
    body: '運用代行とLP作成を組み合わせた支援パッケージ。集客と受け皿を分断せず、一連の流れとして整えます。',
  },
]

type ServiceOfferingsProps = {
  productsLabel?: string
  productsTitle?: string
  servicesLabel?: string
  servicesTitle?: string
}

export default function ServiceOfferings({
  productsLabel = 'Products',
  productsTitle = '既存プロダクト',
  servicesLabel = 'Support',
  servicesTitle = '支援サービス',
}: ServiceOfferingsProps) {
  const renderProductName = (name: string) => {
    if (name !== 'commo.') return name

    return (
      <>
        commo<span className="text-[#8b5cf6]">.</span>
      </>
    )
  }

  return (
    <>
      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">{productsLabel}</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl xl:whitespace-nowrap">
                {productsTitle}
              </h2>
            </div>

            <div className="border-t border-neutral-200">
              {products.map(product => (
                <article
                  key={product.name}
                  className="grid gap-5 border-b border-neutral-200 py-8 md:grid-cols-[200px_minmax(0,1fr)_auto] md:gap-8"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 768px) 220px, 100vw"
                      className={product.imageClassName}
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">Product</p>
                    <h3 className="mt-3 text-xl font-light text-neutral-950 md:text-2xl">
                      {renderProductName(product.name)}
                    </h3>
                    <p className="max-w-3xl whitespace-pre-line text-[0.98rem] font-light leading-[1.65] text-neutral-950 md:text-[1.08rem]">
                      {product.title}
                    </p>
                  </div>

                  <div className="md:justify-self-end">
                    <Link
                      href={product.href}
                      className="inline-flex items-center gap-3 rounded-full border border-neutral-300 px-4 py-2.5 text-[10px] uppercase tracking-[0.24em] text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950"
                    >
                      Visit
                      <span className="h-px w-8 bg-current" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:gap-20">
            <div>
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">{servicesLabel}</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                {servicesTitle}
              </h2>
            </div>

            <div className="grid gap-0 border-t border-neutral-200">
              {servicePackages.map(item => (
                <div
                  key={item.title}
                  className="grid gap-5 border-b border-neutral-200 py-7 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 220px, 100vw"
                      className={item.imageClassName}
                    />
                    <AiGeneratedNotice className="bottom-2 right-2 md:bottom-3 md:right-3 lg:bottom-3 lg:right-3" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-light text-neutral-950 md:text-2xl">{item.title}</h3>
                    <p className="max-w-3xl text-[0.98rem] font-light leading-[1.65] text-neutral-950 md:text-[1.08rem]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
