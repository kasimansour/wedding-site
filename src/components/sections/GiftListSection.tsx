'use client'

import { useT } from '@/context/LocaleContext'

const GIFT_LIST_URL = 'https://www.ungrandjour.com/fr/mariage-marie-kasra'

export function GiftListSection() {
  const t = useT()

  return (
    <section id="giftList" className="py-20 px-4 bg-gradient-to-b from-ivory to-champagne/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-3">
          {t('giftList.title')}
        </h2>
        <p className="text-stone-600 mb-4">{t('giftList.subtitle')}</p>
        <p className="text-stone-600 mb-10">{t('giftList.intro')}</p>

        <a
          href={GIFT_LIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rose text-white font-medium text-lg shadow-md hover:bg-rose/90 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2"
        >
          {t('giftList.button')}
          <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  )
}
