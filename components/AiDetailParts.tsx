import Link from 'next/link'
import { DiagonalAccent, SectionHead, SectionLabel, tone, type Tone } from '@/components/PageFrame'

export const shadow = (color: Tone, size = 5) => ({ boxShadow: `${size}px ${size}px 0 ${tone[color].chip}` })

export function DetailHero({ crumb, label, color, title, sub, lead, stats }: { crumb: string; label: string; color: Tone; title: string; sub: string; lead: string; stats: [string, string, Tone][] }) {
  return <section className="relative overflow-hidden pb-16 pt-12 md:pb-20 md:pt-16">
    <DiagonalAccent color={color} />
    <div className="page-shell relative z-10">
      <p className="text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>　／　<Link href="/services">Service</Link>　／　<Link href="/services/ai">AI導入支援</Link>　／　{crumb}</p>
      <div className="mt-12 max-w-3xl">
        <SectionLabel label={label} color={color} />
        <h1 className="mt-5 text-[clamp(1.8rem,7vw,2.4rem)] font-black leading-[1.4] tracking-[-.02em] md:text-[3.25rem]">{title}</h1>
        <p className="mt-3 text-lg font-black leading-8 md:text-2xl">{sub}</p>
        <p className="mt-6 max-w-2xl text-sm leading-8 text-ink-soft">{lead}</p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map(([big, small, c]) => <div key={small} className="flex flex-col gap-1.5 border border-ink bg-white p-5" style={shadow(c)}><span className="text-2xl font-black md:text-[1.75rem]">{big}</span><span className="text-xs text-ink-soft">{small}</span></div>)}</div>
    </div>
  </section>
}

export function Sec({ color, id, children }: { color?: Tone; id?: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-24 py-16 md:py-20" style={color ? { backgroundColor: tone[color].band } : undefined}><div className="page-shell">{children}</div></section>
}

export function Head({ no, label, color, title, note }: { no: string; label: string; color: Tone; title: React.ReactNode; note?: React.ReactNode }) {
  return <SectionHead number={no} label={label} color={color} title={title} note={note} />
}

export function Check({ children, color }: { children: React.ReactNode; color: Tone }) {
  return <li className="flex gap-2.5 text-[13px] leading-7"><span className="mt-1 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full text-[10px] font-black" style={{ backgroundColor: tone[color].chip }} aria-hidden>✓</span><span>{children}</span></li>
}

export function Bullets({ items, color, small }: { items: string[]; color: Tone; small?: boolean }) {
  return <ul className="grid gap-1">{items.map(item => <li key={item} className={`flex gap-2 leading-7 ${small ? 'text-xs' : 'text-[13px]'}`}><span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: tone[color].dot }} aria-hidden />{item}</li>)}</ul>
}

export function SubHead({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-base font-black">{children}</h3>
}

export function NumberedCards({ items, cols = 4 }: { items: [string, string, Tone][]; cols?: 3 | 4 }) {
  return <div className={`grid gap-5 sm:grid-cols-2 ${cols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>{items.map(([title, text, c], i) => <div key={title} className="flex flex-col gap-3 border border-ink bg-white p-6" style={shadow(c)}>
    <span className="grid h-10 w-10 place-items-center rounded-full font-display text-xs font-black" style={{ backgroundColor: tone[c].chip }}>0{i + 1}</span>
    <span className="text-base font-black leading-7">{title}</span>
    {text && <span className="text-xs leading-6 text-ink-soft">{text}</span>}
  </div>)}</div>
}

export function FlowSteps({ items }: { items: [string, string, Tone][] }) {
  return <ol className={`relative grid gap-4 sm:grid-cols-2 ${items.length === 5 ? 'lg:grid-cols-5' : items.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
    <span className="absolute left-[8%] right-[8%] top-1/2 hidden border-t-2 border-dashed border-ink/25 lg:block" aria-hidden />
    {items.map(([title, text, c], i) => <li key={title} className="relative flex flex-col gap-2 border border-ink bg-white p-5" style={shadow(c)}>
      <span className="font-display text-[10px] font-black tracking-[.14em] text-ink-soft">STEP {i + 1}</span>
      <span className="text-base font-black">{title}</span>
      <span className="text-xs leading-6 text-ink-soft">{text}</span>
    </li>)}
  </ol>
}

export function PriceCards({ items }: { items: [string, string, string, Tone, boolean?][] }) {
  return <div className={`grid gap-5 ${items.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>{items.map(([name, price, text, c, featured]) => <div key={name} className="flex flex-col gap-2.5 border border-ink bg-white p-6 md:p-7" style={shadow(c, featured ? 8 : 5)}>
    {featured && <span className="self-start rounded-full px-2.5 py-1 text-[10px] font-black" style={{ backgroundColor: tone[c].chip }}>おすすめ</span>}
    <span className="text-base font-black">{name}</span>
    <span className="text-2xl font-black md:text-[1.75rem]">{price}</span>
    <span className="text-xs leading-6 text-ink-soft">{text}</span>
  </div>)}</div>
}

export function FaqGrid({ items }: { items: [string, string][] }) {
  return <div className="grid gap-4 md:grid-cols-2">{items.map(([q, a], i) => <div key={q} className="border border-ink bg-white p-5 md:p-6" style={shadow('lilac')}>
    <p className="flex gap-3 text-sm font-black leading-7"><span className="font-display">Q{i + 1}</span>{q}</p>
    <p className="mt-2 pl-8 text-xs leading-6 text-ink-soft">{a}</p>
  </div>)}</div>
}

export function NextSteps({ items }: { items: [string, string, string, string, string, Tone][] }) {
  return <div className="grid gap-5 md:grid-cols-2">{items.map(([tag, title, text, link, href, c]) => <Link key={href} href={href} className="group flex flex-col gap-2.5 border border-ink bg-white p-6 transition-transform hover:-translate-y-0.5 md:p-7" style={shadow(c)}>
    <span className="font-display text-[11px] font-black text-ink-soft">{tag}</span>
    <span className="text-xl font-black">{title}</span>
    <span className="text-xs leading-6 text-ink-soft">{text}</span>
    <span className="mt-1 self-start border-b border-ink pb-0.5 text-xs font-black">{link} <span className="inline-block transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
  </Link>)}</div>
}

export function CompareTable({ left, right, rows, color }: { left: string; right: string; rows: [string, string, string][]; color: Tone }) {
  return <div className="overflow-x-auto border border-ink bg-white" style={shadow(color)}>
    <table className="w-full min-w-[600px] text-left text-[13px]">
      <thead><tr><th className="w-36 px-5 py-3.5" /><th className="px-5 py-3.5 font-black text-ink-soft">{left}</th><th className="px-5 py-3.5 text-sm font-black" style={{ backgroundColor: tone[color].chip }}>{right}</th></tr></thead>
      <tbody>{rows.map(([k, a, b]) => <tr key={k} className="border-t border-ink/10"><td className="px-5 py-3.5 font-black">{k}</td><td className="px-5 py-3.5 text-ink-soft">{a}</td><td className="px-5 py-3.5 font-bold" style={{ backgroundColor: tone[color].band }}>{b}</td></tr>)}</tbody>
    </table>
  </div>
}

export function DetailLink({ href, label, color }: { href: string; label: string; color: Tone }) {
  return <Link href={href} className="group mt-8 inline-flex min-h-12 items-center gap-8 border border-ink bg-white px-5 text-xs font-black transition-transform hover:-translate-y-0.5" style={shadow(color)}><span>{label}</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>
}
