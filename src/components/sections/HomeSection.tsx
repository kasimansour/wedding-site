'use client'

import Image from 'next/image'
import { useT } from '@/context/LocaleContext'

export function HomeSection() {
  const t = useT()

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/background-home.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-stone-900/50" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/60" aria-hidden />
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 drop-shadow-md">
          {t('home.title')}
        </h1>
        <p className="text-ivory/95 text-2xl sm:text-3xl md:text-4xl mb-2 font-serif">{t('home.date')}</p>
        <p className="text-ivory/80 text-2xl sm:text-3xl md:text-4xl font-serif">{t('home.place')}</p>
        <a
          href="#story"
          className="inline-block mt-10 px-6 py-3 border-2 border-champagne text-champagne rounded-full font-medium hover:bg-champagne hover:text-stone-800 transition-colors"
        >
          {t('home.scroll')}
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-champagne/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
