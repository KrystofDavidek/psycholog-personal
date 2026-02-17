import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Map from "../assets/mapa-velka.png";
import Outside from "../assets/venek.jpg";
import CleanModal from "../components/CleanModal";
import CleanModalMini from "../components/CleanModalMini";
import useWindowDimensions from "../hooks/useWindowDimension";

export default function Contact() {
  const { width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Head>
        <title> Psycholog a terapeut, Brno: terapie pro děti a dospělé - Mgr. Petr Davídek</title>
        <meta
          name="description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz/kontakt" />
        <meta property="og:title" content=" Psycholog a terapeut, Brno: terapie pro děti a dospělé - Mgr. Petr Davídek" />
        <meta
          property="og:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta property="og:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz/kontakt" />
        <meta property="og:site_name" content="mobil kontakty" />
        <meta name="google-site-verification" content="UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" Psycholog a terapeut, Brno: terapie pro děti a dospělé - Mgr. Petr Davídek" />
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
              Kontakt
            </h1>
            <p className="text-xl text-gray-600">
              Pojďme se domluvit na setkání. Těším se na spolupráci s Vámi.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Address Card */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-primary-500 rounded"></div>
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-gray-900">
                    Adresa pracoviště
                  </h2>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-primary-600">Terapie pod Špilberkem</p>
                  <p>psychologické centrum</p>
                  <p>První patro - pracovna č. 6</p>
                  <p>Údolní 222/5</p>
                  <p>602 00, Brno - město</p>
                  <p className="pt-4 text-sm text-gray-600">IČO: 09495673</p>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="card p-8 bg-gradient-to-br from-primary-50 to-white">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-accent-500 rounded"></div>
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-gray-900">
                    Kontaktní údaje
                  </h2>
                </div>
                <div className="space-y-4">
                  <a
                    href="tel:734574243"
                    className="flex items-center text-lg text-gray-700 hover:text-primary-600 transition-colors group">
                    <span className="font-semibold mr-2">Tel:</span>
                    <span className="group-hover:underline">734 574 243</span>
                  </a>
                  <a
                    href="mailto:davidek.email@gmail.com"
                    className="flex items-center text-lg text-gray-700 hover:text-primary-600 transition-colors group">
                    <span className="font-semibold mr-2">E-mail:</span>
                    <span className="group-hover:underline">davidek.email@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              {width && (
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="btn btn-primary w-full text-lg">
                  Kontakt a domluva setkání
                </button>
              )}
            </div>

            {/* Map */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="card overflow-hidden h-full min-h-[500px]">
                <div className="relative w-full h-full">
                  <Image
                    src={Map}
                    placeholder="blur"
                    alt="Mapa - Terapie pod Špilberkem, Brno"
                    objectPosition="center"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Building Image */}
          <div className="animate-fade-in-up animation-delay-400">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-900 mb-8 text-center">
              Budova pracoviště
            </h2>
            <div className="card overflow-hidden group">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={Outside}
                  placeholder="blur"
                  alt="Venkovní pohled na budovu"
                  objectPosition="center"
                  objectFit="cover"
                  layout="fill"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {width && width > 1282 ? (
        <CleanModal showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <CleanModalMini showModal={showModal} setShowModal={setShowModal} />
      )}
    </div>
  );
}
