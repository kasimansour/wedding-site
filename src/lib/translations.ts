export type Locale = 'fr' | 'fa'

export const locales: Locale[] = ['fr', 'fa']
export const defaultLocale: Locale = 'fr'

export const rtlLocales: Locale[] = ['fa']
export function isRtl(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}

export async function getTranslations(locale: Locale) {
  const t = await import(`@/locales/${locale}.json`)
  return t.default as Record<string, unknown>
}
