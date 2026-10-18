import type { ShowcaseItem } from './showcase-data'

type ShowcaseNavigationProps = {
  items: ShowcaseItem[]
  activeId: string
  onSelect: (item: ShowcaseItem) => void
  compact?: boolean
}

export function ShowcaseNavigation({ items, activeId, onSelect, compact = false }: ShowcaseNavigationProps) {
  return (
    <nav aria-label="サービスを選ぶ" className={compact ? 'mt-8' : 'mt-10'}>
      {items.map((item) => {
        const isActive = item.id === activeId
        const sizing = compact ? 'min-h-[4.5rem] border-ink/10 px-1' : 'min-h-[5.4rem] border-white/35 px-3'
        const state = isActive ? 'text-ink' : 'text-ink/55 hover:text-ink'
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={isActive}
            onMouseEnter={() => onSelect(item)}
            onFocus={() => onSelect(item)}
            onClick={() => onSelect(item)}
            className={'group relative flex w-full items-center gap-4 overflow-hidden border-b text-left transition-[color,transform] duration-500 ' + sizing + ' ' + state}
          >
            <span
              className={'relative grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-xs tracking-[.12em] transition-[background-color,color,transform,box-shadow] duration-500 ' + (isActive ? '-rotate-6 bg-white text-ink shadow-[3px_3px_0_rgba(30,41,59,.16)]' : 'bg-white/0')}
            >
              {item.id}
            </span>
            <span className={'relative text-sm leading-snug transition-[font-weight,transform] duration-500 ' + (isActive ? 'translate-x-1 font-bold' : 'font-medium')}>{item.title}</span>
            <span className={'absolute right-11 top-3 text-sm transition-[opacity,transform] duration-500 ' + (isActive ? 'rotate-12 scale-100 opacity-70' : 'rotate-0 scale-50 opacity-0')} aria-hidden>✦</span>
            <span className={'relative ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-sm text-white transition-all duration-500 ' + (isActive ? 'translate-x-0 rotate-0 scale-100 opacity-100' : '-translate-x-2 -rotate-45 scale-75 opacity-0')} aria-hidden>→</span>
          </button>
        )
      })}
    </nav>
  )
}
