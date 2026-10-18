import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'pastel-blue': 'var(--blue)',
        'pastel-pink': 'var(--pink)',
        'pastel-purple': 'var(--purple)',
        silver: 'var(--silver)',
      },
    },
  },
  plugins: [],
}
export default config
