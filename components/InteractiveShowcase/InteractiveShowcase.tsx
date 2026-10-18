'use client'

import { useState } from 'react'
import { SectionTitle } from '@/components/S1UI'
import { ShowcaseNavigation } from './ShowcaseNavigation'
import { ShowcaseVisual } from './ShowcaseVisual'
import { showcaseItems, type ShowcaseItem } from './showcase-data'

export default function InteractiveShowcase() {
  const [activeItem, setActiveItem] = useState<ShowcaseItem>(showcaseItems[0])

  return (
    <section className="overflow-hidden py-24 md:py-36">
      <div className="page-shell">
        <SectionTitle
          eyebrow="What we do"
          title="やりたいことから、えらべます"
          body={<span className="font-light">いま感じているお悩みを聞かせてください ぴったりの方法をいっしょに考えます</span>}
          align="center"
        />

        <div className="mt-14 hidden overflow-hidden rounded-[3rem] border border-white/80 bg-white lg:block">
          <div className="relative min-h-[680px]">
            <svg className="pointer-events-none absolute inset-y-0 left-0 h-full w-[46%]" viewBox="0 0 660 680" preserveAspectRatio="none" aria-hidden>
              <path
                d="M0 0H440C525 0 587 53 605 127C624 202 574 248 588 320C603 396 650 438 620 521C590 605 530 680 420 680H0V0Z"
                fill={activeItem.color}
                className="transition-[fill] duration-500"
              />
            </svg>

            <div className="absolute left-[5%] top-[8%] z-20 w-[34%]">
              <div className="relative h-20">
                {showcaseItems.map((item) => (
                  <div
                    key={item.id}
                    className={'absolute inset-0 transition-[opacity,transform] duration-500 ' + (item.id === activeItem.id ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0')}
                  >
                    <p className="font-display text-[10px] tracking-[.2em] text-ink/55">{item.category}</p>
                    <p className="mt-2 text-lg font-light leading-7">{item.subtext}</p>
                  </div>
                ))}
              </div>
              <ShowcaseNavigation items={showcaseItems} activeId={activeItem.id} onSelect={setActiveItem} />
            </div>

            <div className="pointer-events-none absolute bottom-[2%] left-[29%] z-30 h-[40%] w-[22%]">
              <ShowcaseVisual items={showcaseItems} activeId={activeItem.id} />
            </div>

            <div className="absolute inset-y-0 right-0 flex w-[55%] items-center px-14 xl:px-20">
              <div className="relative min-h-[355px] w-full">
                {showcaseItems.map((item) => {
                  const isActive = item.id === activeItem.id
                  return (
                    <div
                      key={item.id}
                      className={'absolute inset-x-0 top-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ' + (isActive ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0')}
                      aria-hidden={!isActive}
                    >
                      <div className="flex items-center justify-between gap-6">
                        <span className="font-display text-xs tracking-[.18em] text-ink-soft">{item.note}</span>
                        <span className="font-display text-5xl text-ink/10">{item.id}</span>
                      </div>
                      <h3 className="mt-10 text-4xl font-bold leading-[1.35] xl:text-[2.8rem]">{item.title}</h3>
                      <p className="mt-6 max-w-xl font-light leading-9 text-ink-soft">{item.description}</p>
                      <div className="mt-10 border-t border-ink/10 pt-7">
                        <p className="font-display text-[10px] tracking-[.2em] text-ink-soft">WHAT WE SUPPORT</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="rounded-full px-4 py-2 text-xs font-medium" style={{ backgroundColor: item.softColor }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 overflow-hidden rounded-[2.25rem] border border-white/80 p-6 transition-[background-color] duration-500 sm:p-8 lg:hidden"
          style={{ backgroundColor: activeItem.color }}
        >
          <p className="font-display text-[10px] tracking-[.2em] text-ink/55">{activeItem.category}</p>
          <h3 className="mt-3 text-2xl font-bold leading-[1.45]">{activeItem.title}</h3>
          <ShowcaseNavigation items={showcaseItems} activeId={activeItem.id} onSelect={setActiveItem} compact />
          <div className="pointer-events-none mx-auto mt-7 aspect-square w-[70%] max-w-[18rem]">
            <ShowcaseVisual items={showcaseItems} activeId={activeItem.id} />
          </div>
          <div className="relative mt-8 min-h-[13rem] rounded-[1.5rem] bg-white/80 p-6">
            {showcaseItems.map((item) => (
              <div
                key={item.id}
                className={'absolute inset-6 transition-[opacity,transform] duration-500 ' + (item.id === activeItem.id ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0')}
                aria-hidden={item.id !== activeItem.id}
              >
                <p className="font-light leading-8 text-ink-soft">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full px-3 py-1.5 text-xs font-medium" style={{ backgroundColor: item.softColor }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
