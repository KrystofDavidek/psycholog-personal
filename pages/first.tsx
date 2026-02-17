import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import img1 from '../assets/pracovna1.png'
import img2 from '../assets/pracovna2.png'
import useWindowDimensions from '../hooks/useWindowDimension'

export default function First() {
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

      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-50 to-white section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              První setkání
            </h1>
            <p className="text-xl text-gray-600">
              Jak probíhá úvodní konzultace, cenové informace a podmínky spolupráce
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white section">
        <div className="container-custom">
          {/* Introduction */}
          <div className="card p-8 md:p-10 mb-12 animate-fade-in-up">
            <p className="text-lg text-gray-700 leading-relaxed">
              V průběhu úvodního setkání mám možnost se seznámit s tématem, se kterým za mnou přicházíte a domluvit se s Vámi na formě
              spolupráce, která Vám bude nejvíce vyhovovat. Nabízím krátkodobou i dlouhodobější formu spolupráce. Na první setkání je
              zapotřebí se předem objednat prostřednictvím telefonu nebo e-mailu.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Services Pricing */}
            <div className="card p-8 animate-fade-in-up">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-primary-500 rounded"></div>
                </div>
                <h2 className="text-2xl font-heading font-semibold text-gray-900">
                  Ceník služeb
                </h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="text-sm text-gray-600 mb-1">Individuální konzultace, psychoterapie a poradenství</p>
                  <p className="text-3xl font-bold text-primary-600">1 400 Kč<span className="text-lg text-gray-500"> / 50 min</span></p>
                </div>

                <div className="border-l-4 border-secondary-500 pl-4">
                  <p className="text-sm text-gray-600 mb-1">Vypracování psychologické zprávy</p>
                  <p className="text-3xl font-bold text-secondary-600">1 400 Kč<span className="text-lg text-gray-500"> / normostrana</span></p>
                </div>
              </div>
            </div>

            {/* VZP Info */}
            <div className="card p-8 bg-gradient-to-br from-accent-50 to-white animate-fade-in-up animation-delay-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-accent-500 rounded"></div>
                </div>
                <h2 className="text-2xl font-heading font-semibold text-gray-900">
                  Příspěvek od VZP
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Na mé služby je možné čerpat finanční příspěvek od Všeobecné zdravotní pojišťovny (VZP).
              </p>

              <a
                href="https://dusevnizdravi.vzp.cz/informace-o-prispevku/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold transition-colors">
                Podrobné informace o příspěvku →
              </a>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="card p-8 bg-gray-50 mb-12 animate-fade-in-up animation-delay-400">
            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
              Storno podmínky
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Zrušení domluveného setkání 24 hodin předem je zdarma. V případě zrušení domluveného setkání později než 24 hodin
              před jeho začátkem klient hradí jeho plnou cenu (s výjimkou náhlého onemocnění dětí do 14-ti let).
            </p>
          </div>

          {/* Office Images */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-8 text-center">
              Má pracovna
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card overflow-hidden group animate-fade-in-up">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    placeholder="blur"
                    src={img1}
                    alt="Pracovna 1"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="card overflow-hidden group animate-fade-in-up animation-delay-200">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    placeholder="blur"
                    src={img2}
                    alt="Pracovna 2"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a href="/kontakt" className="btn btn-primary text-lg">
              Domluvit první setkání
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
