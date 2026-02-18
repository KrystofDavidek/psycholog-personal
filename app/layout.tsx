import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const CITATION = `„Jsme předurčeni k tomu být šťastní i v nedokonalém světě."`

export const metadata: Metadata = {
  title: {
    default: 'Psycholog a terapeut Brno – Mgr. Petr Davídek | Terapie pro děti a dospělé',
    template: '%s | Psycholog a terapeut Brno – Mgr. Petr Davídek',
  },
  description: 'Psycholog a terapeut v Brně. Mgr. Petr Davídek nabízí psychoterapii pro děti a dospělé – ADHD, úzkosti, psychosomatické obtíže, trauma a vztahové problémy.',
  metadataBase: new URL('https://www.psycholog-terapeut-brno.cz'),
  openGraph: {
    siteName: 'Psycholog a terapeut, Brno – Mgr. Petr Davídek',
    type: 'website',
    locale: 'cs_CZ',
    images: [
      {
        url: '/static/images/profilovka-orez.png',
        width: 1200,
        height: 630,
        alt: 'Mgr. Petr Davídek – Psycholog a terapeut v Brně',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  verification: {
    google: 'UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.psycholog-terapeut-brno.cz',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://www.psycholog-terapeut-brno.cz/#business',
                  name: 'Terapie pod Špilberkem',
                  description: 'Psycholog a terapeut v Brně. Psychoterapie pro děti a dospělé – ADHD, úzkosti, psychosomatické obtíže, trauma a vztahové problémy.',
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
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 49.1922,
                    longitude: 16.5990,
                  },
                  image: 'https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png',
                  priceRange: '1 400 Kč / 50 min',
                  areaServed: {
                    '@type': 'City',
                    name: 'Brno',
                  },
                },
                {
                  '@type': 'Person',
                  '@id': 'https://www.psycholog-terapeut-brno.cz/#person',
                  name: 'Mgr. Petr Davídek',
                  jobTitle: 'Psycholog a terapeut',
                  url: 'https://www.psycholog-terapeut-brno.cz',
                  image: 'https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png',
                  worksFor: {
                    '@id': 'https://www.psycholog-terapeut-brno.cz/#business',
                  },
                  memberOf: {
                    '@type': 'Organization',
                    name: 'Česká asociace pro psychoterapii',
                  },
                  knowsAbout: [
                    'Biosyntetická psychoterapie',
                    'EMDR',
                    'ADHD',
                    'Psychosomatické obtíže',
                    'Trauma',
                    'Psychoterapie dětí',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.psycholog-terapeut-brno.cz/#website',
                  url: 'https://www.psycholog-terapeut-brno.cz',
                  name: 'Psycholog a terapeut Brno – Mgr. Petr Davídek',
                  inLanguage: 'cs',
                },
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {/* Citation - visible only on small screens */}
          <div className="sm:hidden bg-primary-50 py-6 px-8 mx-4 mt-4 rounded-lg">
            <p className="text-primary-700 italic text-sm text-center">{CITATION}</p>
            <p className="text-primary-800 font-semibold text-sm text-right mt-2">— Albert Peso</p>
          </div>

          <main className="flex flex-col flex-grow">
            {children}
          </main>

          <Footer />
        </div>
        {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        )}
      </body>
    </html>
  )
}
