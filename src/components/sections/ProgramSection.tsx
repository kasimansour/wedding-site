'use client'

import { useT } from '@/context/LocaleContext'

const programSaturdayKeys = ['ceremony', 'cocktail', 'dinner', 'party'] as const
const programSundayKeys = ['brunch'] as const

function ProgramDay({
  dayKey,
  keys,
}: { dayKey: 'saturday' | 'sunday'; keys: readonly string[] }) {
  const t = useT()

  return (
    <div className="mb-14 last:mb-0">
      <h3 className="font-serif text-2xl text-rose mb-6 text-center sm:text-start">
        {t(`program.${dayKey}`)}
      </h3>
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-7 w-0.5 bg-champagne rtl:left-auto rtl:right-7" aria-hidden />
        <ul className="space-y-10">
          {keys.map((key) => (
            <li key={key} className="relative flex gap-6 items-start pl-[4.25rem] rtl:pl-0 rtl:pr-[4.25rem]">
              <span className="absolute left-0 w-14 h-14 rounded-full bg-rose text-white flex items-center justify-center text-base font-medium rtl:left-auto rtl:right-0" aria-hidden>
                {t(`program.${key}.time`)}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-xl text-stone-800">{t(`program.${key}.title`)}</h4>
                <p className="text-stone-500 mt-1">{t(`program.${key}.desc`)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function ProgramSection() {
  const t = useT()

  return (
    <section id="program" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 text-center mb-3">
          {t('program.title')}
        </h2>
        <p className="text-stone-500 text-center mb-12">{t('program.subtitle')}</p>

        <ProgramDay dayKey="saturday" keys={programSaturdayKeys} />
        <ProgramDay dayKey="sunday" keys={programSundayKeys} />
      </div>
    </section>
  )
}
