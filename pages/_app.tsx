import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

import { AppProps } from 'next/app'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import img from '../assets/CESKa-ASOCIACE.png'
import Navbar from '../components/Navbar'
import { GA_TRACKING_ID, pageView } from '../utils/gtag'

export const CITATION = `„Jsme předurčeni k tomu být šťastní i v nedokonalém světě.“`

export default function App({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState(0)
  const router = useRouter()

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    window.dispatchEvent(new Event('resize'))
  }, [])

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
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
          `
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {width && width < 500 && (
          <div className="bg-primary-50 py-6 px-8 mx-4 mt-4 rounded-lg">
            <p className="text-primary-700 italic text-sm text-center">{CITATION}</p>
            <p className="text-primary-800 font-semibold text-sm text-right mt-2">— Albert Peso</p>
          </div>
        )}

        <main className="flex flex-col flex-grow">
          <Component {...pageProps} />
        </main>

        <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 mt-auto">
          <div className="container-custom py-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {/* Association Logo */}
              <div className="flex flex-col items-center md:items-start">
                <Image
                  placeholder="blur"
                  src={img}
                  alt="Česká asociace psychoterapie"
                  width={150}
                  height={115}
                  className="mb-4"
                />
                <p className="text-sm text-gray-600">Člen České asociace pro psychoterapii</p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Kontakt</h3>
                <div className="space-y-3 text-center md:text-left">
                  <a
                    href="mailto:davidek.email@gmail.com"
                    className="block text-gray-700 hover:text-primary-600 transition-colors">
                    <span className="font-semibold">E-mail:</span> davidek.email@gmail.com
                  </a>
                  <a
                    href="tel:734574243"
                    className="block text-gray-700 hover:text-primary-600 transition-colors">
                    <span className="font-semibold">Tel:</span> 734 574 243
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Adresa pracoviště</h3>
                <div className="text-gray-700 text-center md:text-left space-y-1">
                  <p className="font-semibold">Terapie pod Špilberkem</p>
                  <p>Údolní 222/5</p>
                  <p>602 00, Brno</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
              <p>© {new Date().getFullYear()} Mgr. Petr Davídek. Všechna práva vyhrazena.</p>
              <p className="mt-2 md:mt-0">Vytvořil: Kryštof Davídek</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
