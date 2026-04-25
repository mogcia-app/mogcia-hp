import Image from 'next/image'

import AiGeneratedNotice from '@/components/AiGeneratedNotice'
import Footer from '@/components/Footer'

export default function ContactThanksPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-neutral-950">
      <section className="relative h-[62vh] min-h-[420px] overflow-hidden">
        <Image
          src="/c.png"
          alt="Thanks hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <AiGeneratedNotice />
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="mx-auto flex max-w-3xl flex-col items-center space-y-6 text-center">
            <p className="text-[11px] uppercase tracking-[0.42em] text-neutral-500">Thank You</p>
            <h1 className="text-3xl font-light tracking-[-0.02em] text-neutral-950 md:text-5xl">
              お問い合わせありがとうございます
            </h1>
            <p className="text-sm leading-8 text-neutral-600 md:text-base">
              フォームの送信を受け付けました。内容を確認のうえ、担当者よりご連絡いたします。
              お急ぎの場合は、
              <a href="tel:092-517-9804" className="ml-1 underline decoration-neutral-300 hover:decoration-neutral-900">
                092-517-9804
              </a>
              までご連絡ください。
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
