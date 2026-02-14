'use client'

import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

export default function AboutContent() {
  const [isReady, setIsReady] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="p-10 m-4 min-h-full text-white bg-cover bg-motive bg-motive-overlay rounded-xl">
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
      <div className="grid gap-4 mt-4 xl:grid-cols-2">
        <div>
          <p className="pb-4">
            Klientům také nabízím spolupráci prostřednictvím metody EMDR, která je integrativním a komplexním
            psychoterapeutickým přístupem, pomáhající lidem zotavit se z problémů vyvolaných traumatickými událostmi v jejich
            životě a z nich vyplývajících obtíží. Více o EMDR zde:{' '}
            <a className="underline" href="https://www.emdr.cz">
              https://www.emdr.cz
            </a>
          </p>

          <p className="pb-4">
            S dětmi využívám prvky terapie hrou, která je pro ně přirozenou a bezpečnou formou jejich rozvoje.
          </p>
          <p>Jsem členem České asociace pro psychoterapii (ČAP).</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[600px] aspect-video relative">
            {!isReady && (
              <div className="absolute inset-0 rounded-lg skeleton-shimmer flex items-center justify-center">
                <svg className="w-12 h-12 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
            {isClient && (
              <YouTube
                className="w-full h-full"
                iframeClassName="w-full h-full"
                videoId="7lmWOmyPRqA"
                onReady={() => setIsReady(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
