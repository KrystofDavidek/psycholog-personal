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
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {width && width < 500 && (
          <div className="flex flex-col m-8 2xl:flex text-font-green">
            <span>„Jsme předurčeni k tomu, být štastní v nedokonalém světě.“</span>
            <span className="text-right">Albert Peso</span>
          </div>
        )}

        <main className="flex flex-col justify-between min-h-full sm:m-5">
          <Component {...pageProps} />
        </main>
        <footer className="flex flex-wrap-reverse items-center justify-center gap-4 sm:mr-7 sm:ml-8 md:justify-between">
          <div className="m-1">
            <p className="text-sm">© 2022 Kryštof Davídek</p>
          </div>
          <div
            className={`flex ${
              width && width > 350 ? "text-xl" : "text-[1.5rem]"
            } md:text-[1.5rem] font-bold flex-col items-center gap-4 m-1 md:items-start sm:flex-row`}
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
