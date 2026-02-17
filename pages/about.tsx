import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import useWindowDimensions from '../hooks/useWindowDimension'

const about = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { width } = useWindowDimensions()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoaded, setLoaded] = useState(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (width) return setLoaded(true)
  }, [width])

  return (
    <>
      <Head>
        <title>Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé</title>
        <meta
          name="description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz/o-mně" />
        <meta property="og:title" content="Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé" />
        <meta
          property="og:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta property="og:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz/o-mně" />
        <meta property="og:site_name" content="mobil kontakty" />
        <meta name="google-site-verification" content="UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé" />
        <meta
          name="twitter:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta name="twitter:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2"
          crossOrigin=""
        />
      </Head>

      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-50 to-white section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              O mně
            </h1>
            <p className="text-xl text-gray-600">
              Pojďte se se mnou blíže seznámit a dozvědět se více o mé práci a přístupech, které používám
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white section">
        <div className="container-custom">
          {/* Introduction */}
          <div className="card p-8 md:p-10 mb-12 animate-fade-in-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Jmenuji se <span className="font-semibold text-primary-600">Petr Davídek</span> a působím jako psycholog a terapeut v Brně.
              V rámci své soukromé praxe nabízím psychoterapii dospělým, dětem a dospívajícím a psychologické poradenství a konzultace pro rodiče.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Vedle soukromé praxe pracuji jako školní psycholog na základní škole v Deblíně a externě vyučuji na pedagogické fakultě v Brně.
              Dlouhodobě se také věnuji dětem s ADHD, pro které jsem vedl i několik specializovaných programů zaměřených na sociálně-emoční učení,
              podporu jejich vztahů s vrstevníky a rozvoj pozitivních vzorců chování.
            </p>
          </div>

          {/* Approach Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Biosynthesis */}
            <div className="card p-8 animate-fade-in-up">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary-500 rounded"></div>
              </div>
              <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                Biosyntetická psychoterapie
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Při své práci respektuji jedinečnost a osobní tempo klientů a vycházím z biosyntetické psychoterapie – moderní metody
                v psychosomatické psychoterapii, která podporuje přirozené zdroje a klade důraz na bezpečí a soulad mezi tím, jak se
                člověk cítí, co si myslí, jak se chová a jak tomu všemu rozumí.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kromě zaměření na emoce a myšlenky si také s klienty všímám, jak na situaci, kterou řeší, reaguje jejich tělo –
                například zda mají napjaté svaly, obtížně se jim dýchá nebo je něco bolí.
              </p>
              <a
                href="https://www.biosynteza.cz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                Více o biosyntetické psychoterapii →
              </a>
            </div>

            {/* EMDR */}
            <div className="card p-8 animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-accent-500 rounded"></div>
              </div>
              <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                Metoda EMDR
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Klientům také nabízím spolupráci prostřednictvím metody EMDR, která je integrativním a komplexním psychoterapeutickým
                přístupem, pomáhající lidem zotavit se z problémů vyvolaných traumatickými událostmi v jejich životě a z nich vyplývajících obtíží.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                S dětmi využívám prvky terapie hrou, která je pro ně přirozenou a bezpečnou formou jejich rozvoje.
              </p>
              <a
                href="https://www.emdr.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold transition-colors">
                Více o EMDR →
              </a>
            </div>
          </div>

          {/* Video Section */}
          {isLoaded && (
            <div className="card p-8 animate-fade-in-up animation-delay-400">
              <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-6 text-center">
                Video o biosyntetické psychoterapii
              </h2>
              <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                  <div className="relative pb-[56.25%] h-0">
                    <YouTube
                      opts={{
                        width: '100%',
                        height: '100%',
                        playerVars: {
                          modestbranding: 1,
                        },
                      }}
                      videoId="7lmWOmyPRqA"
                      className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Membership Badge */}
          <div className="mt-12 text-center">
            <div className="inline-block card px-8 py-4">
              <p className="text-gray-700">
                <span className="font-semibold text-primary-600">Jsem členem České asociace pro psychoterapii (ČAP)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default about
