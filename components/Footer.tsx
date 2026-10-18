import Link from 'next/link'

const menuItems = [
  ['/services', 'Service'],
  ['/works', 'Works'],
  ['/guide', 'Guide'],
  ['/support', 'Support'],
  ['/coffee', 'MOGCIA Coffee'],
  ['/company', 'Company'],
  ['/partners', 'Partner'],
  ['/diagnosis', '1分AI診断'],
]

const otherItems = [
  ['/services/public', '政治・行政分野の広報支援'],
  ['/business', '法人のご担当者さまへ'],
  ['/proposal', '営業・ご提案の方へ'],
  ['/security-policy', 'セキュリティ・AI利用方針'],
  ['/privacy-policy', 'プライバシーポリシー'],
  ['/terms-of-service', '利用規約'],
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/15 bg-[#f7f7f7] text-ink">
      <div className="page-shell py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_.7fr_.7fr] lg:grid-cols-[1.5fr_.65fr_.65fr_.7fr]">
          <div>
            <Link href="/" className="font-logo text-xl font-black tracking-[-.03em]">MOGCIA</Link>
            <p className="mt-4 max-w-xs text-[11px] leading-5 text-ink/60">AI × SNS × Web, from Fukuoka.<br/>つくって、まわして、そだてていく。</p>
            <div className="mt-8 text-[10px] leading-5 text-ink/45"><p>〒810-0001 福岡県福岡市中央区天神4-6-28</p><p>いちご天神ノースビル7階</p></div>
          </div>

          <nav aria-label="メインナビゲーション">
            <p className="font-display text-[9px] font-bold uppercase tracking-[.2em] text-ink/40">Menu</p>
            <div className="mt-4 flex flex-col items-start gap-3">{menuItems.map(([href, label]) => <Link key={href} href={href} className="text-xs text-ink/70 transition-colors hover:text-ink">{label}</Link>)}</div>
          </nav>

          <nav aria-label="その他のナビゲーション">
            <p className="font-display text-[9px] font-bold uppercase tracking-[.2em] text-ink/40">Information</p>
            <div className="mt-4 flex flex-col items-start gap-3">{otherItems.map(([href, label]) => <Link key={href} href={href} className="text-xs text-ink/70 transition-colors hover:text-ink">{label}</Link>)}</div>
          </nav>

          <div>
            <p className="font-display text-[9px] font-bold uppercase tracking-[.2em] text-ink/40">Contact</p>
            <div className="mt-4 flex flex-col items-start gap-2.5">
              <a href="tel:0925179804" className="text-xs font-bold text-ink/70 transition-colors hover:text-ink">092-517-9804</a>
              <a href="mailto:info@mogcia.jp" className="text-xs text-ink/70 transition-colors hover:text-ink">info@mogcia.jp</a>
              <p className="text-[9px] leading-4 text-ink/40">営業時間：平日 10:00 - 17:00（土日祝除く）</p>
            </div>
            <Link href="/contact" className="mt-5 flex items-center justify-between border-b border-ink/30 pb-2 text-xs font-bold">Contact <span>→</span></Link>
          </div>
        </div>

        <div className="mt-14 flex items-end justify-between border-t border-ink/15 pt-5 text-[9px] uppercase tracking-[.14em] text-ink/40">
          <p>© MOGCIA Inc.</p>
          <a href="#" className="transition-colors hover:text-ink">Page top ↑</a>
        </div>
      </div>
    </footer>
  )
}
