'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useT } from '@/context/LocaleContext'

/**
 * Ajoutez vos photos dans public/images/story/ sous les noms photo-1.jpg à photo-10.jpg
 * (ou .png). L’ordre dans le tableau définit l’affichage.
 */
const STORY_PHOTOS: string[] = [
  '/images/story/photo-1.jpg',
  '/images/story/photo-2.jpg',
  '/images/story/photo-3.jpg',
  '/images/story/photo-4.jpg',
  '/images/story/photo-5.jpg',
  '/images/story/photo-6.jpg',
  '/images/story/photo-7.jpg',
  '/images/story/photo-8.jpg',
]

function StoryPhoto({
  src,
  index,
  onClick,
}: { src: string; index: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="aspect-square rounded-xl overflow-hidden bg-stone-200/80 shadow-md ring-1 ring-stone-200/50 relative w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2"
    >
      <Image
        src={src}
        alt=""
        width={280}
        height={280}
        className="relative z-10 w-full h-full object-cover"
        unoptimized
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      {/* Placeholder visible si l’image est absente ou en erreur */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-blush/30 text-stone-400 font-serif text-2xl z-0"
        aria-hidden
      >
        {index + 1}
      </div>
    </button>
  )
}

export function StorySection() {
  const t = useT()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section id="story" className="py-20 px-4 bg-gradient-to-b from-ivory to-champagne/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 text-center mb-3">
          {t('story.title')}
        </h2>
        <p className="text-stone-500 text-center mb-12">{t('story.subtitle')}</p>

        <p className="text-stone-600 text-lg leading-relaxed text-center max-w-2xl mx-auto">
          {t('story.paragraph1')}
        </p>
        <p className="text-stone-600 text-lg leading-relaxed text-center mt-4 mb-14 max-w-2xl mx-auto">
          {t('story.paragraph2')}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {STORY_PHOTOS.map((src, i) => (
            <StoryPhoto key={i} src={src} index={i} onClick={() => setLightboxIndex(i)} />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 animate-lightbox-fade"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Agrandir la photo"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full animate-lightbox-zoom"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={STORY_PHOTOS[lightboxIndex]}
              alt=""
              width={1200}
              height={1200}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  )
}
