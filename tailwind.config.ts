import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'lightbox-fade': { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'lightbox-zoom': { '0%': { opacity: '0', transform: 'scale(0.96)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
      },
      animation: {
        'lightbox-fade': 'lightbox-fade 0.25s ease-out',
        'lightbox-zoom': 'lightbox-zoom 0.3s ease-out',
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'Lato', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cinzel)', 'Cinzel', 'Georgia', 'serif'],
      },
      colors: {
        champagne: '#f7e7ce',
        blush: '#e8c4c4',
        sage: '#9caa8a',
        gold: '#c9a227',
        ivory: '#fffff0',
        rose: '#b76e79',
      },
    },
  },
  plugins: [],
}
export default config
