import Image from 'next/image'
import img1 from '../assets/pracovna1.png'
import img2 from '../assets/pracovna2.png'

export default function FirstContent() {
  return (
    <div>
      <div className="p-10 m-4 text-white bg-cover 2xl:pr-0 2xl:h-full bg-motive bg-motive-overlay rounded-xl">
        <p className="pb-4">
          V průběhu úvodního setkání mám možnost se seznámit s tématem, se kterým za mnou přicházíte a domluvit se s Vámi na formě
          spolupráce, která Vám bude nejvíce vyhovovat. Nabízím krátkodobou i dlouhodobější formu spolupráce. Na první setkání je
          zapotřebí se předem objednat prostřednictvím telefonu, nebo e-mailu.
        </p>
        <div className="grid gap-4 mt-4 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="2xl:col-span-2">
            <p className="pb-4">Cena poskytovaných služeb:</p>
            <p>Individuální konzultace, psychoterapie a poradenství: 1400 Kč/50 minut.</p>
            <p className="pb-4">Vypracování psychologické zprávy: 1400 Kč/normostrana.</p>
            <p className="pb-4">
              Zrušení domluveného setkání 24 hodin předem je zdarma. V případě zrušení domluveného setkání později než 24 hodin
              před jeho začátkem klient hradí jeho plnou cenu (s výjimkou náhlého onemocnění dětí do 14-ti let).
            </p>
            <p>
              Na mé služby je možné čerpat finanční příspěvek od Všeobecné zdravotní pojišťovny (VZP). Podrobné informace o
              příspěvku a podmínkách jeho čerpání naleznete{' '}
              <a className="underline" href="https://dusevnizdravi.vzp.cz/informace-o-prispevku/">
                zde
              </a>
              .
            </p>
          </div>
          <div className="justify-self-center xl:justify-self-auto">
            <Image
              placeholder="blur"
              src={img1}
              alt="Pracovna 1"
              width={350}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
          <div className="justify-self-center xl:justify-self-auto">
            <Image
              placeholder="blur"
              src={img2}
              alt="Pracovna 2"
              width={350}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
