'use client'

import Link from 'next/link'
import { useState } from 'react'
import { services } from '@/lib/site-data'

const visualTones = [
  'from-[#dff6f2] via-white to-[#dceeff]',
  'from-[#f9e3ed] via-white to-[#e6e1f7]',
  'from-[#e6e1f7] via-white to-[#dceeff]',
  'from-[#dceeff] via-white to-[#e1f5ee]',
]

export default function ServicesInteractive() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = services[activeIndex]

  return <section className="bg-white py-24 md:py-36">
    <div className="page-shell">
      <div>
        <div>
          <p className="font-display text-[10px] font-bold uppercase tracking-[.24em] text-ink-soft">What we do</p>
          <h2 className="mt-3 font-display text-5xl font-black tracking-[-.06em] md:text-7xl">Services.</h2>
        </div>
        <p className="mt-5 max-w-lg text-sm font-light leading-7 text-ink-soft">課題に必要なものを組み合わせ、企画から制作、運用、改善まで一つのチームで支援します。</p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-stretch">
        <div role="tablist" aria-label="サービスを選択" className="border-t border-ink">
          {services.map((service, index) => {
            const selected = index === activeIndex
            return <button
              key={service.number}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="service-detail"
              onClick={() => setActiveIndex(index)}
              className={`group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-ink/20 py-6 text-left transition-colors ${selected ? 'bg-[#fafafa]' : 'hover:bg-[#fafafa]'}`}
            >
              <span className="pl-2 font-display text-[10px] text-ink-soft">{service.number}</span>
              <span>
                <span className="block font-black">{service.title}</span>
                <span className="mt-2 block text-[10px] font-bold uppercase tracking-[.08em] text-ink-soft">{service.tags.join(' / ')}</span>
              </span>
              <span className={`mr-2 grid h-8 w-8 place-items-center rounded-full border border-ink transition-transform ${selected ? 'rotate-90 bg-ink text-white' : 'group-hover:translate-x-1'}`}>→</span>
            </button>
          })}
        </div>

        <div id="service-detail" role="tabpanel" className={`relative min-h-[480px] overflow-hidden rounded-[2rem] bg-gradient-to-br ${visualTones[activeIndex]} p-7 transition-colors duration-500 md:p-10`}>
          <div className="absolute right-[-10%] top-[-12%] h-64 w-64 rounded-full border border-white/80 bg-white/25"/>
          <div className="absolute bottom-[-18%] right-[12%] h-72 w-72 rounded-full border border-white/70 bg-white/20"/>
          <div className="relative flex h-full min-h-[410px] flex-col">
            <div className="flex items-start justify-between gap-6">
              <p className="font-display text-[10px] font-bold uppercase tracking-[.2em] text-ink-soft">Selected service</p>
              <span className="font-display text-6xl font-black text-ink/10">{active.number}</span>
            </div>
            <div className="mt-auto max-w-xl rounded-[1.5rem] bg-white/90 p-7 shadow-[0_24px_60px_-42px_rgba(30,41,59,.45)] backdrop-blur md:p-9">
              <h3 className="text-2xl font-black leading-9 md:text-3xl">{active.title}</h3>
              <p className="mt-5 text-sm leading-8 text-ink-soft">{active.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{active.tags.map(tag => <span key={tag} className="rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-bold">{tag}</span>)}</div>
              <Link href="/services" className="mt-7 inline-flex items-center gap-3 text-xs font-bold">詳しく見る <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-white">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
