import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/Footer'
import { DiagonalAccent, SectionLabel, tone } from '@/components/PageFrame'

export const metadata: Metadata = {
  title: 'ページが見つかりません | 株式会社MOGCIA',
  robots: { index: false, follow: false },
}

const links = [
  ['トップページ', '/'],
  ['サービス', '/services'],
  ['実績', '/works'],
  ['お問い合わせ', '/contact'],
] as const

export default function NotFound() {
  return <main className="bg-white text-ink">
    <section className="relative min-h-[calc(100svh-4.75rem)] overflow-hidden md:min-h-[calc(100svh-5.5rem)]">
      <DiagonalAccent color="pink" />
      <div className="page-shell relative z-10 flex min-h-[calc(100svh-4.75rem)] flex-col py-10 md:min-h-[calc(100svh-5.5rem)] md:py-12">
        <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　404</p>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:py-16">
          <div className="relative">
            <SectionLabel label="Page not found" color="pink" />
            <p className="mt-5 font-display text-[8.5rem] font-black leading-[.8] tracking-[-.09em] sm:text-[12rem] lg:text-[14rem]" style={{ color: tone.pink.band, WebkitTextStroke: `3px ${tone.pink.dot}`, paintOrder: 'stroke fill' }} aria-hidden>404<span className="text-[#F2C94C]">.</span></p>
            <p className="mt-8 max-w-md font-display text-[10px] font-bold uppercase tracking-[.2em] text-ink-soft">Looks like this page wandered off.</p>
          </div>

          <div className="max-w-2xl border-t border-ink pt-8 lg:justify-self-end">
            <h1 className="text-[2rem] font-black leading-[1.5] tracking-[-.02em] sm:text-[2.75rem]">ページが、<br />見つかりませんでした</h1>
            <p className="mt-6 max-w-xl text-[13px] leading-8 text-ink-soft">URLが変わったか、ページが移動した可能性があります。下のメニューから、もう一度探してみてください。</p>
            <nav className="mt-9 grid grid-cols-2 gap-3" aria-label="404ページからの案内">
              {links.map(([label, href], index) => <Link key={href} href={href} className="group flex min-h-16 items-center justify-between rounded-2xl px-5 text-xs font-black transition-transform hover:-translate-y-0.5" style={{ backgroundColor: [tone.butter.band, tone.sky.band, tone.mint.band, tone.pink.band][index] }}><span>{label}</span><span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>)}
            </nav>
            <p className="mt-8 text-[11px] leading-6 text-ink-soft">それでも見つからない場合は、<Link href="/contact" className="font-black text-ink underline decoration-[#F08FA8] decoration-2 underline-offset-4">お問い合わせ</Link>からお声がけください。</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
}
