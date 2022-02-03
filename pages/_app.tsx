import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {width < 500 && (
        <div className="flex flex-col mx-8 xl 2xl:flex text-font-green">
          <span>„Jsme předurčeni k tomu, být štastní v nedokonalém světě.“</span>
          <span className="text-right">Albert Peso</span>
        </div>
      )}

      <main className="flex flex-col justify-between min-h-full sm:m-5">
        <Component {...pageProps} />
      </main>
      <footer className="flex flex-wrap-reverse items-center justify-center gap-4 mt-auto mb-5 md:justify-between">
        <div className="m-1 md:mx-5 xl:mx-15 xl:px-20">
          <p className="text-sm">© 2022 Mgr. Kryštof Davídek.</p>
        </div>
        <div className="flex flex-col items-center gap-4 m-1 md:items-start sm:flex-row md:mx-5 xl:mx-15 xl:px-20">
          <p className="text-xl md:text-[2rem] font-bold">
            <span>E-mail: </span>
            <a href="mailto: davidek.email@gmail.com" className="text-font-green">
              davidek.email@gmail.com
            </a>
          </p>
          <p className="text-xl md:text-[2rem] font-bold">
            <span>Tel: </span>
            <a href="tel:734574243" className="text-font-green">
              734 574 243
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
