import Image from 'next/image'
import Link from 'next/link'

export function SectionTitle({ eyebrow, title, body, align = 'left' }: { eyebrow: string; title: React.ReactNode; body?: React.ReactNode; align?: 'left' | 'center' }) {
  return <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    <p className="font-display text-xl italic text-ink-soft md:text-2xl">{eyebrow}</p>
    <h2 className="mt-3 text-[1.75rem] font-bold leading-[1.4] tracking-[.02em] md:text-4xl">{title}</h2>
    {body && <p className="mt-5 text-sm font-medium leading-8 text-ink-soft md:text-base">{body}</p>}
  </div>
}

export function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return <div className={`placeholder-art ${className}`}><span className="text-2xl">▧</span><span>{label}</span></div>
}

export function PageHero({ eyebrow, title, body, image = 'ページメイン画像' }: { eyebrow: string; title: React.ReactNode; body: string; image?: string }) {
  return <section className="page-shell grid gap-10 pb-16 pt-12 md:grid-cols-[.9fr_1.1fr] md:items-end md:pb-24 md:pt-20">
    <div><p className="font-display text-2xl italic text-ink-soft">{eyebrow}</p><h1 className="mt-4 text-4xl font-black leading-[1.35] md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-sm font-medium leading-8 text-ink-soft md:text-base">{body}</p></div>
    <Placeholder label={image} className="aspect-[16/10] rounded-[2rem] md:rounded-[3rem]" />
  </section>
}

export function ArrowLink({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return <Link href={href} className={dark ? 'button button-dark' : 'button button-light'}>{children}<span aria-hidden>→</span></Link>
}

export function ContactBand({ title = <>小さなご相談から<br />お気軽に</>, body }: { title?: React.ReactNode; body?: string }) {
  return <section className="page-shell my-20 md:my-28">
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-[#dfe3e7] px-7 py-10 md:rounded-[3.5rem] md:px-12 md:py-14 lg:min-h-[30rem] lg:px-16">
      <div className="pointer-events-none absolute -left-10 -top-14 h-40 w-40 rounded-full bg-white/40" />
      <div className="pointer-events-none absolute bottom-10 left-[47%] h-10 w-10 rounded-full bg-pastel-pink" />
      <div className="pointer-events-none absolute right-[6%] top-[8%] h-20 w-20 rounded-full bg-[#cfe8ff]" />
      <div className="relative grid h-full items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10">
          <p className="font-display text-xl text-ink-soft md:text-2xl">Contact</p>
          <h2 className="mt-4 text-2xl font-bold leading-[1.45] tracking-[.02em] md:text-4xl">{title}</h2>
          {body && <p className="mt-5 max-w-lg text-sm font-light leading-8 text-ink-soft md:text-base">{body}</p>}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="button bg-white text-ink shadow-[0_16px_32px_-24px_rgba(30,41,59,.6)]" href="https://lin.ee/XjMOCFI" target="_blank" rel="noreferrer"><span className="h-2.5 w-2.5 rounded-full bg-[#06c755]" />LINEで相談する<span aria-hidden>→</span></a>
            <Link className="button bg-ink text-white shadow-[0_16px_32px_-24px_rgba(30,41,59,.75)]" href="/contact">フォームで問い合わせ<span aria-hidden>→</span></Link>
          </div>
          <p className="mt-5 text-xs font-light text-ink-soft">ご相談は無料です　まだ内容が決まっていなくても大丈夫です</p>
        </div>
        <div className="relative mx-auto h-64 w-full max-w-md lg:h-[23rem]">
          <div className="absolute inset-x-[8%] bottom-[4%] h-[54%] rounded-[50%] bg-white/55 blur-sm" />
          <Image src="/character-joy.png" alt="相談をお待ちしているmogciaのキャラクター" width={520} height={520} className="relative z-10 h-full w-full object-contain" />
        </div>
      </div>
    </div>
  </section>
}

export function Character({ src = '/character-float.png', alt = 'mogciaのキャラクター', className = '' }: { src?: string; alt?: string; className?: string }) {
  return <Image src={src} alt={alt} width={430} height={404} className={className} />
}
