import Link from 'next/link'

export const tone = {
  sky: { dot: '#6FA8DC', band: '#EAF3F8', chip: '#D6E8F7' },
  butter: { dot: '#F2C94C', band: '#FFF6D9', chip: '#FCEBB0' },
  pink: { dot: '#F08FA8', band: '#FBEFF3', chip: '#FBD9E2' },
  lilac: { dot: '#A98BE0', band: '#F2EFFB', chip: '#E4DAF8' },
  mint: { dot: '#5DC3A0', band: '#E9F6F1', chip: '#D5EFE5' },
  peach: { dot: '#F2A365', band: '#FDF1E7', chip: '#FBE1CC' },
} as const

export type Tone = keyof typeof tone

export function SectionLabel({ number, label, color }: { number?: string; label: string; color: Tone }) {
  return <p className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[.18em] text-ink-soft"><span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: tone[color].dot }} aria-hidden />{number ? `${number} — ${label}` : label}</p>
}

export function SectionHead({ number, label, color, title, note, action }: { number?: string; label: string; color: Tone; title: React.ReactNode; note?: React.ReactNode; action?: React.ReactNode }) {
  return <div className={action ? 'grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end' : ''}>
    <div><SectionLabel number={number} label={label} color={color} /><h2 className="mt-5 text-3xl font-black">{title}</h2>{note && <p className="mt-4 max-w-xl text-xs leading-6 text-ink-soft">{note}</p>}</div>
    {action && <div className="flex flex-col gap-4 md:items-end">{action}</div>}
  </div>
}

export function DiagonalAccent({ color }: { color: Tone }) {
  return <svg className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-full opacity-60 sm:w-[82%] sm:opacity-75 lg:w-[62%] lg:opacity-100" viewBox="0 0 736 544" preserveAspectRatio="none" fill="none" aria-hidden>
    <path className="page-header-accent-line" d="M736 0V80L264 544H150L704 0H736Z" fill={tone[color].band} stroke={tone[color].dot} strokeOpacity=".38" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    <path className="page-header-accent-line" d="M736 112V158L344 544H280L672 158L718 112H736Z" fill={tone[color].chip} stroke={tone[color].dot} strokeOpacity=".38" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    <path className="page-header-accent-line" d="M736 210V278L466 544H374L638 284L712 210H736Z" fill={tone[color].band} stroke={tone[color].dot} strokeOpacity=".38" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    <path className="page-header-accent-line" d="M736 338V378L568 544H514L680 380L722 338H736Z" fill={tone[color].chip} stroke={tone[color].dot} strokeOpacity=".38" strokeWidth="2" vectorEffect="non-scaling-stroke" />
  </svg>
}

export function PageHeader({ crumbs, title, lead, body, nav, cta, color = 'sky', spacious = true, animateTitle = true, diagonalAccent = false }: { crumbs: [string, string?][]; title: string; lead: React.ReactNode; body?: React.ReactNode; nav?: [string, string][]; cta?: React.ReactNode; color?: Tone; spacious?: boolean; animateTitle?: boolean; diagonalAccent?: boolean }) {
  const labelTitle = title.replace(/\.$/, '')
  const displayTitle = title.endsWith('.') ? title : `${title}.`

  return <section className="relative min-h-[38rem] overflow-hidden bg-white sm:min-h-[43rem] lg:min-h-[44rem]">
    {diagonalAccent && <DiagonalAccent color={color} />}
    <div className="page-shell relative pb-16 pt-10 md:pb-20 md:pt-12">
    <p className="relative z-10 text-[10px] font-bold text-ink-soft"><Link href="/">TOP</Link>{crumbs.map(([label, href]) => <span key={label}>　／　{href ? <Link href={href}>{label}</Link> : label}</span>)}</p>
    <p className={`pointer-events-none mt-6 -ml-[.06em] select-none whitespace-nowrap font-display text-[6.5rem] font-black leading-[.9] tracking-[-.04em] sm:text-[10rem] lg:text-[12rem] xl:text-[13.5rem] ${animateTitle ? 'page-header-title-pop' : ''}`} style={{ color: tone[color].band, WebkitTextStroke: `3px ${tone[color].dot}`, paintOrder: 'stroke fill' }} aria-hidden>{animateTitle ? displayTitle.split('').map((letter, index) => <span key={`${letter}-${index}`} className="page-header-title-letter" style={{ animationDelay: `${(letter === '.' ? Math.max(0, index - 1) : index) * 70}ms` }}>{letter}</span>) : displayTitle}</p>
    <div className={`relative z-10 flex flex-col lg:flex-row lg:justify-between ${spacious ? 'mt-4 gap-12 sm:mt-6 lg:mt-8 lg:items-center lg:gap-20' : '-mt-8 gap-8 sm:-mt-12 lg:-mt-16 lg:items-end lg:gap-12'}`}>
      <div><SectionLabel label={labelTitle} color={color} /><h1 className={`${spacious ? 'mt-7 text-[2.15rem] leading-[1.5] md:text-[3.1rem]' : 'mt-5 text-[2.25rem] leading-[1.35] md:text-[3.5rem]'} font-black tracking-[-.02em]`}>{lead}</h1>{spacious && body && <p className="mt-7 max-w-xl text-[13px] leading-[2] text-ink-soft">{body}</p>}</div>
      {((!spacious && body) || nav || cta) && <div className={`flex w-full flex-col lg:shrink-0 ${spacious ? 'gap-7 lg:w-[30rem]' : 'gap-5 lg:w-[26rem]'}`}>
        {!spacious && body && <p className="text-[13px] leading-[2] text-ink-soft">{body}</p>}
        {nav && <nav aria-label="ページ内リンク" className={`grid grid-cols-2 text-xs font-bold ${spacious ? 'gap-3' : 'gap-2'}`}>{nav.map(([label, href]) => <a key={href} href={href} className={`flex items-center rounded-xl px-4 transition-opacity hover:opacity-80 ${spacious ? 'min-h-14 sm:px-5' : 'min-h-11'}`} style={{ backgroundColor: tone[color].band }}><span>{label}</span></a>)}</nav>}
        {cta && <div className="flex flex-wrap gap-3">{cta}</div>}
      </div>}
    </div>
  </div></section>
}

const contactSteps: [string, string, string, Tone][] = [
  ['01', '気軽に送る', 'LINEかフォームで\nひとことからどうぞ', 'sky'],
  ['02', '話して整理', 'オンラインか対面で\n課題を一緒に整理します', 'pink'],
  ['03', 'ご提案', 'ちょうどいい進め方と\n費用をお伝えします', 'mint'],
]

export function SoftContact({ body }: { title?: React.ReactNode; body?: React.ReactNode }) {
  return <section className="border-t border-ink/10 bg-white"><div className="page-shell flex flex-col items-center gap-11 py-20 text-center md:py-24">
    <div className="flex flex-col items-center gap-4"><SectionLabel label="Contact" color="butter" /><h2 className="text-3xl font-black leading-[1.45] md:text-[2.5rem]">相談は、3ステップだけ</h2>{body && <p className="max-w-xl text-xs leading-6 text-ink-soft">{body}</p>}</div>
    <ol className="relative grid w-full max-w-5xl gap-0 md:grid-cols-3 md:gap-8">
      <span className="absolute bottom-8 left-8 top-8 border-l-2 border-dashed border-ink/20 md:bottom-auto md:left-[16.6%] md:right-[16.6%] md:top-11 md:border-l-0 md:border-t-2" aria-hidden />
      {contactSteps.map(([no, title, text, color], index) => <li key={no} className="relative grid grid-cols-[4rem_1fr] items-center gap-5 py-5 text-left md:flex md:flex-col md:items-center md:gap-3.5 md:py-0 md:text-center">
        <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full font-display text-xl font-black shadow-[0_0_0_6px_#fff] md:h-[5.5rem] md:w-[5.5rem] md:text-[26px] md:shadow-[0_0_0_8px_#fff]" style={{ backgroundColor: tone[color].chip }}>{no}</span>
        <div className={`w-full py-4 md:border-0 md:py-0 ${index < contactSteps.length - 1 ? 'border-b border-ink/10' : ''}`}><h3 className="text-lg font-black md:mt-1.5 md:text-xl">{title}</h3>
        <p className="mt-1 whitespace-pre-line text-[11px] leading-[1.8] text-ink-soft md:mt-0 md:text-[13px] md:leading-[1.9]">{text}</p></div>
      </li>)}
    </ol>
    <div className="flex flex-wrap items-center justify-center gap-5">
      <a href="https://lin.ee/XjMOCFI" target="_blank" rel="noreferrer" className="group inline-flex min-h-12 items-center gap-8 border border-ink bg-white px-5 text-xs font-black shadow-[5px_5px_0_#D5EFE5] transition-transform hover:-translate-y-0.5"><span>LINEで相談する</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></a>
      <Link href="/contact" className="group inline-flex min-h-12 items-center gap-8 border border-ink bg-white px-5 text-xs font-black shadow-[5px_5px_0_#FBD9E2] transition-transform hover:-translate-y-0.5"><span>フォームで問い合わせ</span><span className="text-base transition-transform group-hover:translate-x-1" aria-hidden>→</span></Link>
    </div>
  </div></section>
}
