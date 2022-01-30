import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { AppProps } from "next/app";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col justify-between min-h-max">
        <Component {...pageProps} />
      </main>
      <footer className="flex flex-wrap-reverse items-center justify-between mt-auto">
        <div className="m-1 sm:mb-5 md:mx-5 xl:mx-15 xl:px-20">
          <p className="text-sm">© 2022 Mgr. Kryštof Davídek.</p>
        </div>
        <div className="m-1 sm:mb-5 md:mx-5 xl:mx-15 xl:px-20">
          <p className="text-xl md:text-[2rem]">
            <span>E-mail: </span>
            <a href="mailto: davidek.email@gmail.com" className="text-font-green">
              davidek.email@gmail.com
            </a>
            <span>, Tel: </span>
            <a href="tel:734574243" className="text-font-green">
              734 574 243
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
