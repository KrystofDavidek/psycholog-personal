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
      <div className="min-h-full p-10 m-4 text-white bg-cover bg-motive">
        <p className="pb-4">
          Jmenuji se Petr Davídek a působím jako psycholog a terapeut v Brně. V rámci své soukromé praxe nabízím psychoterapii
          dospělé, děti a dospívající a psychologické poradenství a konzultace pro rodiče. Vedle soukromé praxe pracuji jako
          školní psycholog na základní škole v Deblíně a externě vyučuji na pedagogické fakultě v Brně. Dlouhodobě se také věnuji
          dětem s ADHD, pro které jsem vedl i několik specializovaných programů zaměřených na sociálně-emoční učení, podporu
          jejich vztahů s vrstevníky a rozvoj pozitivních vzorců chování.
        </p>
        <p className="pb-4">
          Při své práci respektuji jedinečnost a osobní tempo klientů a vycházím z biosyntetické psychoterapie – moderní metody v
          psychosomatické psychoterapii, která podporuje přirozené zdroje a klade důraz na bezpečí a soulad mezi tím, jak se
          člověk cítí, co si myslí, jak se chová a jak tomu všemu rozumí. Kromě zaměření na emoce a myšlenky si také s klienty
          všímám, jak na situaci, kterou řeší, reaguje jejich tělo – například zda mají napjaté svaly, obtížně se jim dýchá nebo
          je něco bolí. Více o biosyntetické psychoterapii zde:{' '}
          <a className="underline" href="https://www.biosynteza.cz/">
            https://www.biosynteza.cz/
          </a>
        </p>
        <div className="grid gap-4 mt-4 xl:grid-cols-2 ">
          <div>
            <p className="pb-4">
              Dospělým klientům také nabízím spolupráci prostřednictvím metody EMDR, která je integrativní a komplexní
              psychoterapeutickým přístupem, pomáhající lidem zotavit se z problémů vyvolaných traumatickými událostmi v jejich
              životě a z nich vyplývajících obtíží. Více o EMDR zde:{' '}
              <a className="underline" href="https://www.emdr.cz">
                https://www.emdr.cz
              </a>
            </p>

            <p>S dětmi využívám prvky terapie hrou, která je pro ně přirozenou a bezpečnou formou jejich rozvoje.</p>
          </div>
          {isLoaded && (
            <div>
              {width && width > 775 ? (
                <div className="flex justify-center">
                  <YouTube
                    opts={{
                      height: '300',
                      width: '600'
                    }}
                    videoId="7lmWOmyPRqA"
                  />
                </div>
              ) : (
                <div className="flex justify-center">
                  <YouTube
                    opts={{
                      height: '150',
                      width: '250'
                    }}
                    videoId="7lmWOmyPRqA"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default about
