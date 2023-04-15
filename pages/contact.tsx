/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Map from "../assets/mapa-velka.png";
import Outside from "../assets/venek.jpg";
import CleanModal from "../components/CleanModal";
import CleanModalMini from "../components/CleanModalMini";
import Modal from "../components/Modal";
import ModalMini from "../components/ModalMini";
import useWindowDimensions from "../hooks/useWindowDimension";

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
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
      <div className="grid m-4 bg-cover xl:grid-cols-3 2xl:grid-cols-8 2xl:h-full bg-motive">
        <div className="flex flex-col justify-between p-8 2xl:col-span-2">
          <div className="text-white">
            <p className="pb-4">Kontakt:</p>
            <p>Terapie pod Špilberkem - psychologické centrum,</p>
            <p>První patro - pracovna č. 6</p>
            <p>Údolní 222/5</p>
            <p className="pb-4">602 00, Brno - město.</p>
            <p className="pb-8">IČO: 09495673</p>
          </div>
          {width && (
            <>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="self-center w-full p-4 font-bold text-white transition-all duration-150 ease-linear border-2 border-white border-solid rounded shadow focus:outline-none focus:ring-2 focus:ring-white hover:opacity-75 hover:bg-slate-400">
                Kontakt a domluva setkání
              </button>
              {/* {width && width > 1282 ? (
                <Modal showModal={showModal} setShowModal={setShowModal} />
              ) : (
                <ModalMini showModal={showModal} setShowModal={setShowModal} />
              )} */}
              {width && width > 1282 ? (
                <CleanModal showModal={showModal} setShowModal={setShowModal} />
              ) : (
                <CleanModalMini showModal={showModal} setShowModal={setShowModal} />
              )}
            </>
          )}
        </div>
        <div className="relative 2xl:col-span-4" style={{ width: "100", height: "550px" }}>
          <Image src={Map} placeholder="blur" alt="Mapa" objectPosition="center" objectFit="cover" layout={"fill"} />
        </div>
        <div className="relative 2xl:col-span-2" style={{ width: "100%", height: "550px" }}>
          <Image
            src={Outside}
            placeholder="blur"
            alt="Venkovní prostor"
            objectPosition="center"
            objectFit="cover"
            layout={"fill"}
          />
        </div>
      </div>
    </div>
  );
};

export default contact;
