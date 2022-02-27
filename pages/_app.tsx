import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <>
      <Head>
        <title>Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé</title>
        <meta
          name="description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně. "
        />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz/" />
        <meta property="og:title" content="Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé" />
        <meta
          property="og:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta property="og:image" content="../assets/profilovka-orez.png" />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="3332" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz" />
        <meta property="og:site_name" content="mobil kontakty" />
        <meta name="google-site-verification" content="3f69Q8PKRCOvTW9pWAfzz1qtO3Ydb95NWtbfygIT-vw" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé" />
        <meta
          name="twitter:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta name="twitter:image" content="../assets/profilovka-orez.png" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2"
          crossOrigin=""
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {width && width < 500 && (
          <div className="flex flex-col mx-8 mb-2 2xl:flex text-font-green">
            <span>„Jsme předurčeni k tomu, být štastní v nedokonalém světě.“</span>
            <span className="text-right">Albert Peso</span>
          </div>
        )}

        <main className="flex flex-col justify-between min-h-full sm:m-5">
          <Component {...pageProps} />
        </main>
        <footer className="flex flex-wrap-reverse items-center justify-center gap-4 mb-5 sm:mr-7 sm:ml-8 md:justify-between">
          <div className="m-1">
            <p className="text-sm">© 2022 Mgr. Kryštof Davídek</p>
          </div>
          <div
            className={`flex ${
              width && width > 350 ? "text-xl" : "text-sm"
            } md:text-[1rem] font-bold flex-col items-center gap-4 m-1 md:items-start sm:flex-row`}
          >
            <p>
              <span>E-mail: </span>
              <a href="mailto: davidek.email@gmail.com" className="text-font-green">
                davidek.email@gmail.com
              </a>
              <span>,</span>
            </p>
            <p>
              <span>Tel: </span>
              <a href="tel:734574243" className="text-font-green">
                734 574 243
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
