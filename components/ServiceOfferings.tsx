import Image from 'next/image'
import Link from 'next/link'

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
    name: 'selmo.',
    image: '/selmohp.png',
    imageClassName: 'object-contain',
    title: '営業教育を仕組み化するAIプラットフォーム',
    description:
      '商談分析・テレアポ分析・ロープレ・ナレッジ管理をひとつに。営業教育を仕組み化するAIプラットフォーム',
    href: 'https://selmotool.com/',
  },
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
      'ゲストとホテルスタッフをつなぐ、チャット型フロントサポートツール。QRコードからすぐ使え、問い合わせ対応をシンプルにします。',
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

export function renderProductName(name: string) {
  if (name === 'selmo.') {
    return (
      <>
        selmo<span className="text-[#f5c542]">.</span>
      </>
    )
  }

  if (name === 'Roomly.') {
    return (
      <>
        Roomly<span className="text-[#8f1f1f]">.</span>
      </>
    )
  }

  if (name === 'Signal.') {
    return (
      <>
        Signal<span className="text-[#ff8a15]">.</span>
      </>
    )
  }

  if (name !== 'commo.') return name

  return (
    <>
      commo<span className="text-[#8b5cf6]">.</span>
    </>
  )
}

export function ProductCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {products.map(product => (
        <article
          key={product.name}
          className="group flex min-h-full flex-col overflow-hidden border border-[#ded6ca]/80 bg-white shadow-[0_18px_60px_rgba(92,78,62,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#c9bba8] hover:shadow-[0_24px_80px_rgba(92,78,62,0.12)]"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f4ee]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
              className={`${product.imageClassName} p-5 transition duration-300 group-hover:scale-[1.03]`}
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">Product</p>
            <h3 className="mt-3 text-2xl font-light tracking-[-0.02em] text-neutral-950">
              {renderProductName(product.name)}
            </h3>
            <p className="mt-4 text-sm font-light leading-7 text-neutral-600">
              {product.description}
            </p>

            <Link
              href={product.href}
              className="group/link mt-auto inline-flex w-fit items-center gap-3 rounded-full border border-[#ded6ca] px-4 py-2.5 text-[10px] uppercase tracking-[0.24em] text-neutral-700 transition-colors hover:border-[#9a8062] hover:bg-[#9a8062] hover:text-white"
            >
              Visit
              <span className="h-px w-8 bg-current transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default function ServiceOfferings({
  productsLabel = 'Products',
  productsTitle = '既存プロダクト',
  servicesLabel = 'Support',
  servicesTitle = '支援サービス',
}: ServiceOfferingsProps) {
  return (
    <>
      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="space-y-12">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">{productsLabel}</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl xl:whitespace-nowrap">
                {productsTitle}
              </h2>
              <p className="mt-5 text-sm leading-8 text-neutral-600 md:text-base">
                集客、接客、社内運用を支える既存プロダクトを、課題に合わせて組み合わせます。
              </p>
            </div>

            <ProductCards />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="space-y-12">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">{servicesLabel}</p>
              <h2 className="mt-4 text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
                {servicesTitle}
              </h2>
              <p className="mt-5 text-sm leading-8 text-neutral-600 md:text-base">
                プロダクトだけでは届きにくい戦略、制作、運用の領域を、事業の流れに沿って支援します。
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {servicePackages.map(item => (
                <article
                  key={item.title}
                  className="grid min-h-full overflow-hidden border border-[#ded6ca]/80 bg-white shadow-[0_18px_60px_rgba(92,78,62,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#c9bba8] hover:shadow-[0_24px_80px_rgba(92,78,62,0.12)] sm:grid-cols-[0.95fr_1.05fr] xl:grid-cols-1"
                >
                  <div className="relative min-h-[220px] overflow-hidden bg-[#f7f4ee] xl:aspect-[16/10] xl:min-h-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={`${item.imageClassName} p-5`}
                    />
                  </div>
                  <div className="flex flex-col p-6">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#a18b72]">Support</p>
                    <h3 className="text-xl font-light text-neutral-950 md:text-2xl">{item.title}</h3>
                    <p className="mt-4 text-sm font-light leading-7 text-neutral-600">
                      {item.body}
                    </p>
                    <p className="mt-auto pt-8 text-[10px] font-light tracking-[0.04em] text-neutral-400">
                      この画像はAIで生成しています
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
