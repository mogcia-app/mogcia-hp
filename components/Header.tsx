'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const nav = [
  ['/services', 'Service'],
  ['/works', 'Works'],
  ['/guide', 'Guide'],
  ['/support', 'Support'],
  ['/coffee', 'Coffee'],
  ['/company', 'Company'],
  ['/partners', 'Partner'],
]

const mobileNavColors = [
  ['#EAF3F8', '#6FA8DC'],
  ['#FBEFF3', '#F08FA8'],
  ['#FFF6D9', '#F2C94C'],
  ['#E9F6F1', '#5DC3A0'],
  ['#F8EEEE', '#9B3038'],
  ['#F2EFFB', '#A98BE0'],
  ['#FDF1E7', '#F2A365'],
]

export default function Header() {
  const pathname = usePathname()
  const isActive = (href: string) => !href.includes('#') && (pathname === href || pathname.startsWith(`${href}/`))

  return <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/95 backdrop-blur-xl">
    <div className="mx-auto flex h-[4.75rem] w-full max-w-[1480px] items-center justify-between gap-6 px-5 md:h-[5.5rem] md:px-7 xl:px-8">
      <Link href="/" className="group flex items-center gap-3" aria-label="MOGCIA トップページ">
        <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white transition-transform group-hover:-rotate-6" aria-hidden>
          <Image src="/mogcia-favicon.png" alt="" width={500} height={500} className="h-full w-full object-contain" priority />
        </span>
        <span><span className="block font-logo text-lg font-semibold leading-none tracking-[.04em] md:text-xl">MOGCIA</span><span className="mt-1.5 hidden font-display text-[6px] font-bold uppercase tracking-[.2em] text-ink-soft sm:block">Make · Operate · Grow</span></span>
      </Link>

      <div className="hidden items-center gap-5 xl:flex">
        <nav className="flex items-center gap-1" aria-label="メインメニュー">
          {nav.map(([href, label]) => <Link key={href} href={href} className={`relative px-3 py-3 text-[12px] font-bold transition-colors hover:text-ink ${isActive(href) ? 'text-ink' : 'text-ink-soft'}`}>{label}{isActive(href) && <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-ink" aria-hidden />}</Link>)}
        </nav>
        <span className="h-6 w-px bg-ink/15" aria-hidden />
        <a href="https://lin.ee/XjMOCFI" target="_blank" rel="noreferrer" className="flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-ink/15 bg-white px-4 text-[11px] font-bold text-ink transition-colors hover:border-ink/35"><span className="h-2 w-2 rounded-full bg-[#23ae58]" aria-hidden />LINEで相談</a>
        <Link href="/diagnosis" className={`flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#FFF6D9] px-5 text-[11px] font-bold shadow-[inset_0_0_0_1px_rgba(242,201,76,.6)] transition-transform hover:-translate-y-0.5 ${isActive('/diagnosis') ? 'text-ink' : ''}`}><span className="h-2 w-2 rounded-full bg-[#F2C94C]" aria-hidden />1分AI診断</Link>
        <Link href="/contact" className="flex h-11 shrink-0 items-center gap-4 whitespace-nowrap rounded-full bg-[#F08FA8] px-5 text-[11px] font-bold text-ink transition-transform hover:-translate-y-0.5">Contact <span aria-hidden>→</span></Link>
      </div>

      <details className="group xl:hidden">
        <summary className="relative block h-11 w-11 cursor-pointer list-none rounded-full border border-ink/20 [&::-webkit-details-marker]:hidden" aria-label="メニューを開閉">
          <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-[4px] bg-ink transition-transform group-open:-translate-y-1/2 group-open:rotate-45" />
          <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 translate-y-[4px] bg-ink transition-transform group-open:-translate-y-1/2 group-open:-rotate-45" />
        </summary>
        <div className="absolute inset-x-0 top-full max-h-[calc(100svh-4.75rem)] overflow-y-auto border-t border-ink/10 bg-[#fbfaf8] shadow-[0_24px_50px_rgba(30,41,59,.15)] md:max-h-[calc(100svh-5.5rem)]">
          <div className="page-shell px-5 pb-8 pt-6 md:px-7">
            <div className="mb-6 flex items-end justify-between border-b border-ink/15 pb-5">
              <div><p className="font-display text-[9px] font-bold uppercase tracking-[.24em] text-ink-soft">Explore MOGCIA</p><p className="mt-1 font-display text-4xl font-black tracking-[-.06em]">Menu<span className="text-[#F08FA8]">.</span></p></div>
              <p className="max-w-[9rem] text-right text-[9px] leading-4 text-ink-soft">つくる・まわす・<br />そだてていく。</p>
            </div>
            <nav className="grid grid-cols-2 gap-3" aria-label="モバイルメニュー">{nav.map(([href, label], index) => {
              const [background, accent] = mobileNavColors[index]
              return <Link key={href} href={href} className={`group/nav flex min-h-[6.5rem] flex-col justify-between rounded-[1.35rem] p-4 transition-transform active:scale-[.98] ${index === 0 ? 'col-span-2 min-h-[5.75rem]' : ''}`} style={{ backgroundColor: background }}>
                <div className="flex items-center justify-between"><span className="font-display text-[9px] font-bold tracking-[.14em] text-ink-soft">{String(index + 1).padStart(2, '0')}</span><span className="grid h-6 w-6 place-items-center rounded-full bg-white/75 text-[10px]" aria-hidden>↗</span></div>
                <div className="flex items-center gap-2.5"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: accent }} aria-hidden /><span className="text-base font-black">{label}</span></div>
              </Link>
            })}</nav>
            <Link href="/diagnosis" className="mt-5 flex min-h-14 items-center justify-between rounded-[1.15rem] bg-[#FFF6D9] px-5 text-[11px] font-bold shadow-[inset_0_0_0_1px_rgba(242,201,76,.5)]"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#F2C94C]" aria-hidden />1分AI診断</span><span>なにから始める？ →</span></Link>
            <div className="mt-3 grid grid-cols-2 gap-3"><a href="https://lin.ee/XjMOCFI" target="_blank" rel="noreferrer" className="flex min-h-13 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white text-[11px] font-bold"><span className="h-2 w-2 rounded-full bg-[#23ae58]" aria-hidden />LINEで相談</a><Link href="/contact" className="grid min-h-13 place-items-center rounded-full bg-[#F08FA8] text-[11px] font-bold text-ink">Contact →</Link></div>
          </div>
        </div>
      </details>
    </div>
  </header>
}
