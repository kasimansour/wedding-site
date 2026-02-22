'use client'

import Image from 'next/image'
import { useT } from '@/context/LocaleContext'

const HOTELS = [
  { image: '/images/hotel-1.jpg', link: 'https://www.booking.com/Share-IYOHUH', nameKey: 'hotel1' as const },
  { image: '/images/hotel-2.jpg', link: 'https://www.booking.com/Share-7Pu0NE', nameKey: 'hotel2' as const },
  { image: '/images/hotel-3.jpg', link: 'https://www.booking.com/Share-Tg6rvU', nameKey: 'hotel3' as const },
  { image: '/images/hotel-4.jpg', link: 'https://www.booking.com/Share-UsHG5Vb', nameKey: 'hotel4' as const },
]

export function TransportSection() {
  const t = useT()

  return (
    <section id="transport" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 text-center mb-3">
          {t('transport.title')}
        </h2>
        <p className="text-stone-500 text-center mb-12">{t('transport.subtitle')}</p>

        <div className="space-y-10">
          <div className="p-6 rounded-2xl bg-champagne/30 border border-champagne">
            <h3 className="font-serif text-xl text-stone-800 mb-2">{t('transport.venue.title')}</h3>
            <p className="text-stone-600">{t('transport.venue.address')}</p>
            <a
              href="https://maps.app.goo.gl/cjAyMyPQCE2QR2F17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-rose hover:underline font-medium"
            >
              {t('transport.venue.map')}
            </a>
          </div>

          <div>
            <h3 className="font-serif text-xl text-stone-800 mb-2">{t('transport.transportTitle')}</h3>
            <p className="text-stone-600">{t('transport.citiesIntro')}</p>
            <ul className="list-disc list-inside mt-2 text-stone-600 space-y-1 rtl:list-inside">
              <li>{t('transport.city1')}</li>
              <li>{t('transport.city2')}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-stone-800 mb-6">{t('transport.hotels.title')}</h3>
            <div className="grid grid-cols-2 gap-4">
              {HOTELS.map(({ image, link, nameKey }) => (
                <a
                  key={nameKey}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-square rounded-xl overflow-hidden shadow-md ring-1 ring-stone-200/50 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2"
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <span className="absolute inset-0 bg-black/40" aria-hidden />
                  <span className="absolute inset-0 flex items-center justify-center p-4 text-white font-serif text-xl font-medium text-center drop-shadow-md group-hover:underline">
                    {t(`transport.hotels.${nameKey}`)}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-stone-600 mt-6">{t('transport.otherAccommodationIntro')}</p>
            <ul className="list-disc list-inside mt-2 text-stone-600 space-y-1 rtl:list-inside">
              <li>{t('transport.otherCity1')}</li>
              <li>{t('transport.otherCity2')}</li>
              <li>{t('transport.otherCity3')}</li>
              <li>{t('transport.otherCity4')}</li>
              <li>{t('transport.otherCity5')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
