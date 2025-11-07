'use client'

import { ReactNode } from 'react'

type ContactChannel = {
  title: string
  body: string
  icon: ReactNode
  action?: {
    label: string
    href: string
  }
}

const contactHighlights = [
  'Next Business Day Reply',
  'Online / Offline',
  'Confidential Support',
]

const contactPoints = [
  'AI/デジタル活用に関するご相談',
  '導入済みプロダクトのチューニング',
  'PoC やフルカスタム開発のご依頼',
  'パートナー/メディアからのお問い合わせ',
]

const contactChannels: ContactChannel[] = [
  {
    title: 'メールで相談',
    body: '迅速に折り返しし、内容に応じて最適なメンバーがご連絡します。資料添付や NDA が必要な場合もお気軽に。',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
    action: {
      label: 'info@mogcia.jp',
      href: 'mailto:info@mogcia.jp',
    },
  },
  {
    title: 'オンラインミーティング',
    body: '課題整理や初期ヒアリングをオンラインで実施。30 分〜60 分のセッションで方向性を掴みます。',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-6 0l-4.553 2.276A1 1 0 013 15.382V8.618a1 1 0 011.447-.894L9 10m6 0l-6 4m6-4l-6-4"
      />
    ),
    action: {
      label: '日程を調整する',
      href: 'https://cal.com',
    },
  },
  {
    title: 'お急ぎの案件',
    body: '48 時間以内の対応が必要な場合は、お電話でのご連絡がスムーズです。まずは概要をお知らせください。',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 5a2 2 0 012-2h2.153c.473 0 .91.266 1.128.688l1.357 2.715a1.25 1.25 0 01-.502 1.64l-1.291.774a.75.75 0 00-.287.987 11.04 11.04 0 006.261 6.261.75.75 0 00.987-.287l.774-1.291a1.25 1.25 0 011.64-.502l2.715 1.357c.422.218.688.655.688 1.128V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"
      />
    ),
    action: {
      label: '092-517-9804',
      href: 'tel:092-517-9804',
    },
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="group relative border border-gray-200 bg-white px-12 py-16 overflow-hidden shadow-[0_18px_55px_rgba(24,32,56,0.12)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(24,32,56,0.16)]">
          <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff] opacity-80 transition-opacity duration-700 group-hover:opacity-100"></span>
          <div className="pointer-events-none absolute -top-24 -right-10 w-72 h-72 bg-gradient-to-br from-[#b3e1ff]/25 via-transparent to-transparent blur-3xl"></div>

          <div className="space-y-10 relative z-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Contact</p>
              <div className="relative inline-block">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide relative z-10">
                  まずはお気軽にご相談ください
                </h2>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-[#f6e27a]/60 via-[#d2c7ff]/40 to-transparent -z-10"></span>
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 text-right pr-2">
                Together, We Shape The Next Step
              </p>
            </div>

            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                プロジェクトのご相談から導入後の伴走支援まで、MOGCIAのコンタクトチームが迅速に対応いたします。現状把握と理想の姿を共有し、最適な進め方をご提案します。
              </p>
              <div className="space-y-3">
                {contactPoints.map(point => (
                  <p key={point}>・{point}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs uppercase tracking-[0.3em] text-gray-400">
              {contactHighlights.map(highlight => (
                <div key={highlight} className="border border-gray-200 py-4 px-6 text-center">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {contactChannels.map((item, index) => (
            <div
              key={index}
              className="group relative border border-gray-200 bg-white px-8 py-10 flex flex-col gap-6 shadow-[0_12px_40px_rgba(24,32,56,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(24,32,56,0.12)]"
            >
              <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff]"></span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-gray-200 flex items-center justify-center text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-light text-gray-900 leading-snug">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1">{item.body}</p>
              {item.action && (
                <a
                  href={item.action.href}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-400 group-hover:text-gray-900 transition-colors"
                >
                  {item.action.label}
                  <span className="h-px w-6 bg-gray-300 group-hover:bg-gray-900"></span>
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="group relative border border-gray-200 bg-white px-12 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-[0_18px_55px_rgba(24,32,56,0.12)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(24,32,56,0.15)]">
          <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff]"></span>
          <div>
            <h3 className="text-lg md:text-xl font-light text-gray-900 mb-2">プロジェクトの構想段階でも、お気軽に</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              ご相談内容がまとまっていなくても大丈夫です。現状のお悩みや興味のある領域を教えてください。最初の一歩から伴走いたします。
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-gray-800 transition-colors"
          >
            Start Conversation
            <span className="h-px w-6 bg-white"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

