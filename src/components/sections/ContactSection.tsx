'use client'

import { useT } from '@/context/LocaleContext'

export function ContactSection() {
  const t = useT()

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-champagne/30 to-ivory">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-3">
          {t('contact.title')}
        </h2>
        <p className="text-stone-600 mb-10">{t('contact.subtitle')}</p>

        <div className="flex flex-col items-center gap-2 mb-10">
          <span className="text-stone-500 text-sm uppercase tracking-wide">{t('contact.addressTitle')}</span>
          <span className="text-stone-700 font-medium" dir="ltr">{t('contact.address')}</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="flex flex-col items-center gap-3 px-8 py-5 rounded-2xl bg-white border border-champagne shadow-sm">
            <span className="font-serif text-lg text-stone-800">{t('contact.marieName')}</span>
            <a
              href="tel:+33680251655"
              className="text-rose font-medium tracking-wide hover:text-rose/70 transition-colors"
              dir="ltr"
            >
              {t('contact.mariePhone')}
            </a>
            <a
              href="mailto:marieroyer2307@gmail.com"
              className="text-stone-500 text-sm hover:text-rose transition-colors"
              dir="ltr"
            >
              {t('contact.marieEmail')}
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 px-8 py-5 rounded-2xl bg-white border border-champagne shadow-sm">
            <span className="font-serif text-lg text-stone-800">{t('contact.kasraName')}</span>
            <a
              href="tel:+33662479303"
              className="text-rose font-medium tracking-wide hover:text-rose/70 transition-colors"
              dir="ltr"
            >
              {t('contact.kasraPhone')}
            </a>
            <a
              href="mailto:kasramansouri94@gmail.com"
              className="text-stone-500 text-sm hover:text-rose transition-colors"
              dir="ltr"
            >
              {t('contact.kasraEmail')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
