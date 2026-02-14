import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { Inter } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'
import img from '../assets/CESKa-ASOCIACE.png'
import Navbar from '../components/Navbar'
import Analytics from '../components/Analytics'
import { GA_TRACKING_ID } from '../utils/gtag'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.psycholog-terapeut-brno.cz'),
  title: {
    default: 'Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro děti a dospělé',
    template: '%s | Psycholog Brno - Mgr. Petr Davídek',
  },
  description:
    'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
  verification: {
    google: 'UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII',
  },
  openGraph: {
    type: 'website',
    siteName: 'Psycholog a terapeut Brno - Mgr. Petr Davídek',
    images: ['/static/images/profilovka-orez.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/static/images/profilovka-orez.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={inter.className} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Psycholog a terapeut Brno - Mgr. Petr Davídek',
              description:
                'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
              url: 'https://www.psycholog-terapeut-brno.cz',
              telephone: '+420734574243',
              email: 'davidek.email@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Údolní 222/5',
                addressLocality: 'Brno',
                postalCode: '602 00',
                addressCountry: 'CZ',
              },
              priceRange: '1400 Kč/50 minut',
            }),
          }}
        />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex flex-col justify-between min-h-full sm:m-5">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

function Footer() {
  return (
    <footer className="flex flex-wrap-reverse gap-4 justify-center items-center sm:mr-7 sm:ml-8 md:justify-between pt-6 mt-6 border-t border-gray-200">
      <div className="flex gap-2 items-center">
        <Image placeholder="blur" src={img} alt="Česká asociace psychoterapie" width={130} height={100} />
        <p className="text-sm">&copy; {new Date().getFullYear()} Kryštof Davídek</p>
      </div>
      <div className="flex text-xl md:text-[1.5rem] font-bold flex-col items-center gap-4 m-1 md:items-center sm:flex-row">
        <p>
          <span>E-mail: </span>
          <a
            href="mailto: davidek.email@gmail.com"
            className="text-font-green transition-smooth hover:text-green-dark"
          >
            davidek.email@gmail.com
          </a>
          <span>,</span>
        </p>
        <p>
          <span>Tel: </span>
          <a href="tel:734574243" className="text-font-green transition-smooth hover:text-green-dark">
            734 574 243
          </a>
        </p>
      </div>
    </footer>
  )
}
