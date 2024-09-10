/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import img1 from '../assets/pracovna1.png'
import img2 from '../assets/pracovna2.png'
import useWindowDimensions from '../hooks/useWindowDimension'

const first = () => {
  const { width } = useWindowDimensions()

  return (
    <div>
      <Head>
        <title>První setkání | Psycholog a terapeut - Mgr. Petr Davídek</title>
        <meta
          name="description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz/první-setkání" />
        <meta property="og:title" content="První setkání | Psycholog a terapeut - Mgr. Petr Davídek" />
        <meta
          property="og:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta property="og:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz/první-setkání" />
        <meta property="og:site_name" content="mobil kontakty" />

        <meta name="google-site-verification" content="UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="První setkání | Psycholog a terapeut - Mgr. Petr Davídek" />
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

      <div className="p-10 m-4 text-white bg-cover 2xl:pr-0 2xl:h-full bg-motive">
        <p className="pb-4 ">
          V průběhu úvodního setkání mám možnost se seznámit s tématem, se kterým za mnou přicházíte a domluvit se s Vámi na formě
          spolupráce, která Vám bude nejvíce vyhovovat. Nabízím krátkodobou i dlouhodobější formu spolupráce. Na první setkání je
          zapotřebí se předem objednat prostřednictvím telefonu, nebo e-mailu.
        </p>
        <div className="grid gap-4 mt-4 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="2xl:col-span-2">
            <p className="pb-4">Cena poskytovaných služeb</p>
            <p>Individuální konzultace, psychoterapie a poradenství: 1200 Kč/50 minut.</p>
            <p className="pb-4">Vypracování psychologické zprávy: 1200 Kč/ A4.</p>
            <p>
              Zrušení domluveného setkání 24 hodin předem je zdarma. V případě zrušení domluveného setkání později než 24 hodin
              před jeho začátkem klient hradí jeho plnou cenu (s výjimkou náhlého onemocnění dětí do 15-ti let).{' '}
            </p>
          </div>
          <Image
            placeholder="blur"
            src={img1}
            alt="Pracovna 1"
            width={width && width < 1600 && width > 1520 ? 350 : 400}
            height={400}
            layout={width && width > 1300 ? 'fixed' : 'responsive'}
          />
          <Image
            placeholder="blur"
            src={img2}
            alt="Pracovna 2"
            width={width && width < 1600 && width > 1520 ? 350 : 400}
            height={400}
            layout={width && width > 1300 ? 'fixed' : 'responsive'}
          />
        </div>
      </div>
    </div>
  )
}

export default first
