'use client'

import Link from 'next/link'
import Image from 'next/image'

import Footer from '@/components/Footer'

export default function ContactThanksPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen flex flex-col">
      <section className="flex-1 py-32 px-6">
        <div className="max-w-2xl mx-auto border border-gray-200 bg-white px-10 md:px-16 py-20 text-center shadow-[0_18px_55px_rgba(24,32,56,0.12)] space-y-8">
          <div className="flex justify-center">
            <Image
              src="/2M%20Logo%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC.svg"
              alt="MOGCIA ロゴ"
              width={384}
              height={384}
              priority
              className="h-40 w-auto md:h-64"
            />
          </div>
          <span className="inline-flex items-center justify-center text-xs uppercase tracking-[0.4em] text-gray-400">
            Thank You
          </span>
          <h1 className="text-2xl md:text-2xl font-light tracking-wide">お問い合わせありがとうございます</h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            フォームの送信を受け付けました。<br />内容を確認のうえ、担当者よりご連絡いたします。<br />
            お急ぎの場合は、お電話 <a href="tel:092-517-9804" className="underline decoration-gray-300 hover:decoration-gray-900">092-517-9804</a> までご連絡ください。
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center gap-4 text-xs uppercase tracking-[0.3em]">
            <Link
              href="/"
              className="inline-flex items-center gap-3 border border-gray-900 px-6 py-3 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              トップへ戻る
              <span className="h-px w-6 bg-gray-900 group-hover:bg-white"></span>
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center gap-3 border border-gray-900 px-6 py-3 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              パートナー制度を見る
              <span className="h-px w-6 bg-gray-900 group-hover:bg-white"></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


