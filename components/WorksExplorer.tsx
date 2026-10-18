'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { stories } from '@/lib/site-data'
import { tone, type Tone } from '@/components/PageFrame'

const purposes: [string, Tone | null][] = [
  ['集客・認知', 'butter'],
  ['採用', 'pink'],
  ['顧客対応・リピート', 'lilac'],
  ['業務改善', 'sky'],
]

const productColor: Record<string, string> = { 'commo.': '#D7C5F7', 'SNS運用代行': '#F6C08F', 'AI・システム開発': '#BCDCF7' }
const purposeTone = (purpose: string): Tone => purposes.find(([label]) => label === purpose)?.[1] ?? 'sky'

export default function WorksExplorer() {
  const [current, setCurrent] = useState('集客・認知')
  const [visibleCount, setVisibleCount] = useState(6)
  const filtered = stories.filter(story => story.purpose === current)
  const shown = filtered.slice(0, visibleCount)

  const selectPurpose = (label: string) => {
    setCurrent(label)
    setVisibleCount(6)
  }

  return <>
    <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {purposes.map(([label, color]) => {
        const count = stories.filter(story => story.purpose === label).length
        const active = label === current
        return <button type="button" key={label} onClick={() => selectPurpose(label)} aria-pressed={active}
          className={`flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 text-xs font-bold transition-colors ${active ? 'border-ink bg-ink text-white' : 'border-ink/15 bg-white text-ink hover:border-ink/40'}`}>
          <span>{label}</span>
          <span className={`grid min-w-5 place-items-center rounded-full px-1.5 py-0.5 font-display text-[9px] ${active ? 'bg-white/20' : ''}`} style={!active ? { backgroundColor: color ? tone[color].chip : '#f3f4f4' } : undefined}>{count}</span>
        </button>
      })}
    </div>

    {shown.length === 0 ? <div className="mt-12 flex flex-col gap-5 rounded-[1.25rem] bg-[#f7f7f7] p-10 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-bold leading-7">この目的の事例は、いま掲載準備中です。<span className="block text-xs font-normal text-ink-soft">似たお悩みがあれば、気軽に聞かせてください。</span></p>
      <a href="https://lin.ee/XjMOCFI" target="_blank" rel="noreferrer" className="button button-dark text-xs">LINEで相談する →</a>
    </div> : <div className="mt-12 grid border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
      {shown.map((story, index) => <Link href={`/works/${story.slug}`} key={story.slug} className={`group flex flex-col gap-4 border-b border-ink/15 py-8 sm:px-7 ${index % 2 === 1 ? 'sm:border-l' : ''} ${index % 3 !== 0 ? 'lg:border-l' : 'lg:border-l-0'}`}>
        <span className="font-display text-[10px] text-ink-soft">{String(stories.indexOf(story) + 1).padStart(2, '0')}</span>
        <div className="relative aspect-[3/2] overflow-hidden" style={{ backgroundColor: tone[purposeTone(story.purpose)].band }}><Image src={story.image} alt={story.product + 'の事例イメージ'} fill unoptimized sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-contain"/></div>
        <div className="flex flex-wrap gap-1.5"><span className="rounded-full px-2.5 py-1 text-[10px] font-bold" style={{ backgroundColor: tone[purposeTone(story.purpose)].chip }}>{story.purpose}</span><span className="rounded-full px-2.5 py-1 text-[10px] font-bold" style={{ backgroundColor: productColor[story.product] ?? '#f3f4f4' }}>{story.product}</span></div>
        <h3 className="whitespace-pre-line text-[17px] font-black leading-8">{story.problem}</h3>
        <p className="line-clamp-3 whitespace-pre-line text-xs leading-6 text-ink-soft">{story.answer}</p>
        <span className="mt-auto flex justify-between border-t border-ink/10 pt-4 text-[11px] font-bold text-ink-soft"><span>{story.client}</span><span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span></span>
      </Link>)}
    </div>}

    {filtered.length > shown.length ? <div className="mt-10 flex justify-center"><button type="button" onClick={() => setVisibleCount(count => count + 6)} className="button button-dark text-xs">もっと見る　↓</button></div> : null}
  </>
}
