'use client'

import { useT } from '@/context/LocaleContext'

export function Footer() {
  const t = useT()

  return (
    <footer className="bg-sage/20 border-t border-sage/30 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-stone-600 text-sm">{t('footer.love')}</p>
        <p className="font-serif text-rose text-lg mt-1">{t('footer.names')}</p>
      </div>
    </footer>
  )
}
