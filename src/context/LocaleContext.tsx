'use client'

import React, { createContext, useContext, useCallback, useState, useEffect } from 'react'
import type { Locale } from '@/lib/translations'
import fr from '@/locales/fr.json'
import fa from '@/locales/fa.json'

const translations: Record<Locale, Record<string, unknown>> = { fr, fa }

type Translations = Record<string, unknown>

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
  isRtl: boolean
}

const LocaleContext = createContext<LocaleContextType | null>(null)

const LOCALE_KEY = 'wedding-locale'

function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'fr'
  const stored = localStorage.getItem(LOCALE_KEY) as Locale | null
  return stored === 'fr' || stored === 'fa' ? stored : 'fr'
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getStoredLocale())
    setMounted(true)
  }, [])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_KEY, newLocale)
      document.documentElement.lang = newLocale
      document.documentElement.dir = newLocale === 'fa' ? 'rtl' : 'ltr'
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr'
  }, [locale, mounted])

  const t = translations[locale] ?? fr
  const isRtl = locale === 'fa'

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: t as Translations, isRtl }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

export function useT() {
  const { t } = useLocale()
  return function (key: string): string {
    const keys = key.split('.')
    let value: unknown = t
    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k]
    }
    return typeof value === 'string' ? value : key
  }
}
