'use client'

import { useT } from '@/context/LocaleContext'

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdrXOOKh_jdbsgu0vlHoS6QCgkMZJBQ60VMQMAjVphvcxKvHA/viewform?embedded=true'

const GOOGLE_FORM_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSdrXOOKh_jdbsgu0vlHoS6QCgkMZJBQ60VMQMAjVphvcxKvHA/viewform?usp=sharing'

export function RsvpSection() {
  const t = useT()

  return (
    <section id="rsvp" className="py-20 px-4 bg-gradient-to-b from-blush/20 to-ivory">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 text-center mb-3">
          {t('rsvp.title')}
        </h2>
        <p className="text-stone-500 text-center mb-2">{t('rsvp.subtitle')}</p>
        <p className="text-stone-400 text-sm text-center mb-10">{t('rsvp.deadline')}</p>

        <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-stone-200/60 bg-white">
          <div className="relative w-full aspect-[4/3] min-h-[420px] sm:min-h-[520px]">
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              title="Formulaire RSVP — Wedding Marie & Kasra"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
          <div className="px-4 py-3 bg-champagne/20 border-t border-champagne/50 text-center">
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rose font-medium hover:underline text-sm"
            >
              {t('rsvp.openInNewWindow')}
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
