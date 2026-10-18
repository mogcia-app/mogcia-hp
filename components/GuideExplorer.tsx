'use client'

import { useState } from 'react'
import Link from 'next/link'
import { tone, type Tone } from '@/components/PageFrame'

export type Guide = { slug: string; title: string; body: string; category: string; minutes: number }
export const guideCategories: [string, Tone][] = [['AI活用', 'sky'], ['SNS', 'pink'], ['Web・集客', 'butter'], ['採用', 'lilac'], ['業務効率化', 'mint'], ['セキュリティ', 'peach']]
const colorOf = (c: string) => (guideCategories.find(([n]) => n === c)?.[1] ?? 'peach') as Tone

export default function GuideExplorer({ guides }: { guides: Guide[] }) {
  const [active, setActive] = useState('すべて')
  const list = active === 'すべて' ? guides : guides.filter((g) => g.category === active)
  return <div>
    <div className="flex flex-wrap gap-2">{[['すべて', 'peach'] as [string, Tone], ...guideCategories].map(([name, color]) => {
      const on = active === name
      const count = name === 'すべて' ? guides.length : guides.filter((g) => g.category === name).length
      return <button key={name} onClick={() => setActive(name)} className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-colors ${on ? 'bg-ink text-white' : 'bg-white'}`} style={on ? undefined : { boxShadow: 'inset 0 0 0 1px rgba(30,41,59,.12)' }}>
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tone[color].dot }} />{name}<span className={on ? 'text-white/60' : 'text-ink-soft'}>{count}</span>
      </button>
    })}</div>
    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{list.map((g) => {
      const c = colorOf(g.category)
      const number = String(guides.findIndex(item => item.slug === g.slug) + 1).padStart(2, '0')
      return <Link href={`/guide/${g.slug}`} key={g.title} className="group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] border-t-[5px] bg-white transition-transform duration-300 hover:-translate-y-1" style={{ borderColor: tone[c].dot }}>
        <span className="pointer-events-none absolute -right-3 top-4 font-display text-[7rem] font-black leading-none tracking-[-.08em] opacity-70" style={{ color: tone[c].band }} aria-hidden>{number}</span>
        <div className="relative flex flex-1 flex-col p-7 md:p-8">
          <div className="flex items-center justify-between gap-3 text-[10px] font-bold"><span className="rounded-full px-3 py-1.5" style={{ backgroundColor: tone[c].chip }}>{g.category}</span><span className="font-display tracking-[.16em] text-ink-soft">GUIDE {number}</span></div>
          <h3 className="mt-12 max-w-[17rem] text-xl font-black leading-[1.65]">{g.title}</h3>
          <p className="mt-4 max-w-[18rem] text-xs leading-7 text-ink-soft">{g.body}</p>
          <div className="mt-auto flex items-center justify-between border-t border-ink/15 pt-5 text-xs font-bold"><span className="text-[10px] text-ink-soft">約{g.minutes}分</span><span className="transition-transform duration-300 group-hover:translate-x-1">記事を読む →</span></div>
        </div>
      </Link>
    })}</div>
  </div>
}
