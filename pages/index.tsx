import Head from 'next/head'
import Image from 'next/image'
import ProfileImg from '../assets/profilovka-orez.png'
import useWindowDimensions from '../hooks/useWindowDimension'

export default function Home() {
  const { width } = useWindowDimensions()

  const services = [
    { title: 'ADHD a hyperaktivita', description: 'Práce s projevy nepozornosti, hyperaktivity a impulzivity v chování' },
    { title: 'Vztahové obtíže', description: 'Konflikty a nespokojenost ve vztazích s partnery, rodinou či přáteli' },
    { title: 'Nízké sebevědomí', description: 'Nedostatek důvěry ve vlastní schopnosti a možnost změny' },
    { title: 'Trauma', description: 'Omezení v životě spojená s traumatickými zážitky a náročnými situacemi' },
    { title: 'Psychosomatické potíže', description: 'Bolesti břicha, hlavy a další tělesné obtíže spojené s psychikou' },
    { title: 'Zvládání emocí', description: 'Problémy s ovládáním vzteku, úzkosti a dalších silných emocí' },
  ]

  return (
    <div>
      <Head>
        <title>Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé</title>
        <meta
          name="description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně. "
        />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz" />
        <meta property="og:title" content="Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé" />
        <meta
          property="og:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta property="og:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz" />
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

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="container-custom section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                Profesionální psychologická pomoc v Brně
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Jsem tu pro Vás a Vaše blízké
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Jmenuji se <span className="font-semibold text-primary-600">Petr Davídek</span> a působím jako psycholog a terapeut v Brně.
                Pomáhám dospělým, dětem a dospívajícím najít cestu k lepšímu životu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/kontakt" className="btn btn-primary">
                  Domluvit schůzku
                </a>
                <a href="/o-mně" className="btn btn-secondary">
                  Zjistit více o mně
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-accent-200 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative bg-white rounded-2xl shadow-hard p-2">
                  <Image
                    placeholder="blur"
                    height={500}
                    width={500}
                    layout="responsive"
                    objectFit="cover"
                    src={ProfileImg}
                    alt="Mgr. Petr Davídek - Psycholog a terapeut"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              S čím Vám mohu pomoci
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specializuji se na práci s dospělými, dětmi a dospívajícími v následujících oblastech
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card p-6 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary-500 rounded"></div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-700 section">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Hledáte podporu pro sebe nebo své blízké?
          </h2>
          <p className="text-lg text-primary-50 mb-8 max-w-2xl mx-auto">
            Jsem tu pro Vás. Ať už se cítíte být něčím omezováni, potřebujete se zorientovat ve složité situaci,
            nebo hledáte cestu ke změně - společně najdeme řešení.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" className="btn bg-white text-primary-700 hover:bg-primary-50 shadow-lg">
              Kontaktujte mě
            </a>
            <a href="/první-setkání" className="btn border-2 border-white text-white hover:bg-white/10">
              Jak probíhá první setkání
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
