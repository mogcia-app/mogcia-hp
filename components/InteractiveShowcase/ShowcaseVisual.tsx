import Image from 'next/image'
import type { ShowcaseItem } from './showcase-data'

type ShowcaseVisualProps = {
  items: ShowcaseItem[]
  activeId: string
}

export function ShowcaseVisual({ items, activeId }: ShowcaseVisualProps) {
  return (
    <div className="relative h-full w-full" aria-live="polite">
      {items.map((item) => {
        const isActive = item.id === activeId
        return (
          <div
            key={item.id}
            className={'absolute inset-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] ' + (isActive ? 'translate-y-0 rotate-0 scale-100 opacity-100' : 'translate-y-5 rotate-3 scale-90 opacity-0')}
            aria-hidden={!isActive}
          >
            <Image src={item.image} alt={isActive ? item.imageAlt : ''} fill sizes="(min-width: 1024px) 24vw, 70vw" className="object-contain" />
          </div>
        )
      })}
    </div>
  )
}
