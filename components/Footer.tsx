import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: '企業理念', href: '/philosophy' },
  { label: 'サービス一覧', href: '/services' },
  { label: 'パートナー制度', href: '/partners' },
  { label: '私たちについて', href: '/about' },
  { label: '会社概要', href: '/company' },
  { label: 'お問い合わせ', href: '/contact' },
]

const serviceLinks = [
  { label: 'Upmo', href: '/services/enterprise-ai' },
  { label: 'Signal.', href: 'https://www.sgnalapp.com' },
  { label: 'WEB制作', href: '/services/web' },
  { label: 'SNS運用', href: '/services/sns' },
  { label: 'MOGCIA Coffee', href: 'https://mogcia.official.ec' },
]

const legalLinks = [
  { label: 'プライバシーポリシー', href: '/privacy-policy' },
  { label: '利用規約', href: '/terms-of-service' },
]

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="py-16 space-y-12">
        <div className="group relative border-y border-gray-200 bg-white px-6 sm:px-12 lg:px-24 py-14 overflow-hidden">
          <span className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-[#f6e27a] via-[#d2c7ff] to-[#b3e1ff]"></span>
          <div className="pointer-events-none absolute -bottom-16 right-16 w-56 h-56 bg-gradient-to-tr from-[#d2c7ff]/25 via-transparent to-transparent blur-3xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10 relative z-10 text-sm text-gray-600">
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-4">
                  <div className="relative h-10 w-10">
                    <Image src="/1M%20Logo.png" alt="MOGCIA ロゴ" fill className="object-contain" sizes="40px" priority />
                  </div>
                  <h3 className="text-base md:text-lg font-light text-gray-900 tracking-[0.35em] uppercase">株式会社MOGCIA</h3>
                </div>
                <p className="mt-3 text-sm text-gray-500">AIが支え、人の創造力が未来を動かす</p>
              </div>
              <div className="space-y-2 text-sm text-gray-500 leading-relaxed">
                <p>〒810-0001</p>
                <p>福岡県福岡市中央区天神4-6-28<br/>いちご天神ノースビル７階</p>
              </div>
              <div className="space-y-1 text-sm text-gray-500">
                <p>TEL: <a href="tel:092-517-9804" className="hover:text-gray-900 transition-colors">092-517-9804</a></p>
                <p>MAIL: <a href="mailto:info@mogcia.jp" className="hover:text-gray-900 transition-colors">info@mogcia.jp</a></p>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">ナビゲーション</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {navLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-gray-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">サービス</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {serviceLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-gray-900 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 sm:px-12 lg:px-24 text-xs text-gray-400">
          <div>© 2023- MOGCIA Inc. All rights reserved.</div>
          <div className="flex items-center gap-6">
            {legalLinks.map(link => (
              <Link key={link.label} href={link.href} className="hover:text-gray-900 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
