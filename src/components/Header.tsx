'use client'

import { useState } from 'react'
import { useLocale, useT } from '@/context/LocaleContext'
import type { Locale } from '@/lib/translations'

const sectionIds = ['home', 'story', 'program', 'rsvp', 'transport', 'giftList'] as const

export function Header() {
  const t = useT()
  const { locale, setLocale } = useLocale()
  const [menuOpen, setMenuOpen] = useState(false)

  const navKeys = sectionIds.map((id) => ({ id, label: t(`nav.${id}`) }))

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b border-champagne/50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-serif text-xl text-rose font-medium shrink-0 mr-4">
          {t('footer.names')}
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main">
          {navKeys.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-stone-600 hover:text-rose transition-colors text-sm uppercase tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0 ml-4">
          <div className="flex rounded-full border border-champagne bg-white/80 p-0.5" role="group" aria-label={t('nav.language')}>
            <button
              type="button"
              onClick={() => setLocale('fr')}
              className={`px-3.5 py-1.5 rounded-full text-base transition-colors ${locale === 'fr' ? 'bg-rose text-white' : 'text-stone-500 hover:text-stone-700'}`}
              aria-pressed={locale === 'fr'}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLocale('fa')}
              className={`px-3.5 py-1.5 rounded-full text-base transition-colors ${locale === 'fa' ? 'bg-rose text-white' : 'text-stone-500 hover:text-stone-700'}`}
              aria-pressed={locale === 'fa'}
            >
              فا
            </button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-stone-600 hover:text-rose"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-champagne/50 bg-ivory py-4 px-4">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navKeys.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="py-2 text-stone-600 hover:text-rose transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
