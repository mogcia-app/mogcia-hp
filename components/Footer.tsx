import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'サービス一覧', href: '/services' },
  { label: 'パートナー制度', href: '/partners' },
  { label: '会社概要', href: '/company' },
  { label: '求人募集', href: '/recruit' },
  { label: 'お問い合わせ', href: '/contact' },
]

const serviceLinks = [
  { label: 'Roomly.', href: 'https://roomlychat.com/' },
  { label: 'upmo', href: 'https://upmotool.com/' },
  { label: 'Signal.', href: 'https://www.sgnalapp.com/' },
  { label: 'MOGCIA Coffee', href: 'https://mogcia.official.ec/' },
]

const legalLinks = [
  { label: 'プライバシーポリシー', href: '/privacy-policy' },
  { label: '利用規約', href: '/terms-of-service' },
]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="px-6 py-14 md:px-10 md:py-16 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] xl:gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/m.png"
                  alt="MOGCIA"
                  width={160}
                  height={48}
                  className="h-auto w-[42px] md:w-[48px]"
                />
                <h2 className="text-[1.2rem] font-light tracking-[0.18em] text-neutral-950 md:text-[1.4rem]">
                  株式会社MOGCIA
                </h2>
              </div>

              <div className="space-y-2 text-xs leading-6 text-neutral-600 md:text-sm">
                <p>〒810-0001</p>
                <p>
                  福岡県福岡市中央区天神4-6-28
                  <br />
                  いちご天神ノースビル7階
                </p>
              </div>

              <div className="space-y-2 text-xs leading-6 text-neutral-600 md:text-sm">
                <p>
                  TEL:{' '}
                  <a href="tel:092-517-9804" className="transition-colors hover:text-neutral-950">
                    092-517-9804
                  </a>
                </p>
                <p>
                  MAIL:{' '}
                  <a href="mailto:info@mogcia.jp" className="transition-colors hover:text-neutral-950">
                    info@mogcia.jp
                  </a>
                </p>
                <p>営業時間：平日 10:00 - 17:00（土日祝除く）</p>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.42em] text-neutral-500">Navigation</h3>
              <ul className="mt-5 space-y-3 text-xs text-neutral-600 md:text-sm">
                {navLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-neutral-950">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.42em] text-neutral-500">Products</h3>
              <ul className="mt-5 space-y-3 text-xs text-neutral-600 md:text-sm">
                {serviceLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-neutral-950">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] uppercase tracking-[0.42em] text-neutral-500">Legal</h3>
              <ul className="mt-5 space-y-3 text-xs text-neutral-600 md:text-sm">
                {legalLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-neutral-950">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-200 pt-6 text-[11px] text-neutral-400">
            © 2023- MOGCIA Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
