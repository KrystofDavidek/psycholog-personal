import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { AppProps } from "next/app";
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col justify-between min-h-max">
        <Component {...pageProps} />
      </main>
      <footer className="flex justify-between m-8 mt-auto min-w-max">
        <div>
          <span className="text-sm">© 2022 Mgr. Kryštof Davídek.</span>
        </div>
        <div>E-mail: davidek.email@gmail.com, Tel: 734 574 243</div>
      </footer>
    </div>
  );
}
