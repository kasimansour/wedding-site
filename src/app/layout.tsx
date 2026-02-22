import type { Metadata } from 'next'
import { Cinzel, Lato } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/context/LocaleContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const cinzel = Cinzel({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-cinzel',
  display: 'swap',
})

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mariage — Wedding',
  description: 'Bienvenue à notre célébration de mariage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=localStorage.getItem('wedding-locale');if(l==='fa'){document.documentElement.setAttribute('dir','rtl');document.documentElement.setAttribute('lang','fa');}else{document.documentElement.setAttribute('dir','ltr');document.documentElement.setAttribute('lang','fr');}})();`,
          }}
        />
      </head>
      <body className={`${cinzel.variable} ${lato.variable} font-sans min-h-screen flex flex-col`}>
        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
