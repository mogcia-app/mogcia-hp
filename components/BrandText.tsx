import type { ReactNode } from 'react'

const brandDotColors: Record<string, string> = {
  'Signal.': '#ff8a15',
  'Roomly.': '#8f1f1f',
  'commo.': '#8b5cf6',
  'selmo.': '#f5c542',
}

export function renderBrandText(text: string): ReactNode {
  const brands = Object.keys(brandDotColors)
  const pattern = new RegExp(`(${brands.map(brand => brand.replace('.', '\\.')).join('|')})`, 'g')
  const parts = text.split(pattern)

  return parts.map((part, index) => {
    const color = brandDotColors[part]

    if (!color) return part

    return (
      <span key={`${part}-${index}`}>
        {part.slice(0, -1)}
        <span style={{ color }}>.</span>
      </span>
    )
  })
}
