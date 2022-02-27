/* eslint-disable react-hooks/rules-of-hooks */
import Head from "next/head";
import React from "react";
import Image from "next/image";
import img1 from "../assets/pracovna1.jpg";
import img2 from "../assets/pracovna2.jpg";
import useWindowDimensions from "../hooks/useWindowDimension";

const first = () => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <Head>
        <title>První setkání | Psycholog a terapeut - Mgr. Petr Davídek</title>
        <meta
          name="description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz/prvn%C3%AD-setk%C3%A1n%C3%AD" />
        <meta property="og:title" content="První setkání | Psycholog a terapeut - Mgr. Petr Davídek" />
        <meta
          property="og:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta
          property="og:image"
          content="https://static.wixstatic.com/media/8e6e3a_350e513791fb43688608a8ce90892182~mv2.jpg/v1/fill/w_2500,h_3332,al_c/8e6e3a_350e513791fb43688608a8ce90892182~mv2.jpg"
        />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="3332" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psycholog-terapeut-brno.cz/prvn%C3%AD-setk%C3%A1n%C3%AD" />
        <meta property="og:site_name" content="mobil kontakty" />

        <meta name="google-site-verification" content="3f69Q8PKRCOvTW9pWAfzz1qtO3Ydb95NWtbfygIT-vw" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="První setkání | Psycholog a terapeut - Mgr. Petr Davídek" />
        <meta
          name="twitter:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta
          name="twitter:image"
          content="https://static.wixstatic.com/media/8e6e3a_350e513791fb43688608a8ce90892182~mv2.jpg/v1/fill/w_2500,h_3332,al_c/8e6e3a_350e513791fb43688608a8ce90892182~mv2.jpg"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2"
          crossOrigin=""
        />
      </Head>

      <div className="p-10 m-4 text-white bg-cover 2xl:pr-0 2xl:mr-0 2xl:h-full bg-motive">
        <p className="pb-4 ">
          V průběhu prvního setkání mám možnost se prvotně seznámit s tématem, se kterým za mnou přicházíte a domluvit se s Vámi
          na formě spolupráce, která Vám bude nejvíce vyhovovat. Nabízím krátkodobou i dlouhodobější formu spolupráce.
        </p>
        <div className="grid gap-4 mt-4 xl:grid-cols-3 2xl:grid-cols-4">
          <div className="2xl:col-span-2">
            <p className="pb-4">​Na první setkání je zapotřebí se předem objednat prostřednictvím telefonu, nebo e-mailu.</p>
            <p className="pb-4">Cena poskytovaných služeb</p>
            <p className="pb-4">Cena:........................700 Kč/50 minut.</p>
            <p>
              Zrušení domluveného setkání 24 hodin předem je zdarma. V případě zrušení domluveného setkání později než 24 hodin
              před jeho začátkem klient hradí jeho plnou cenu.
            </p>
          </div>
          <Image
            placeholder="blur"
            src={img1}
            alt="Pracovna 1"
            width={width && width < 1600 && width > 1520 ? 350 : 400}
            height={400}
            layout={width && width > 1300 ? "fixed" : "responsive"}
          />
          <Image
            placeholder="blur"
            src={img2}
            alt="Pracovna 2"
            width={width && width < 1600 && width > 1520 ? 350 : 400}
            height={400}
            layout={width && width > 1300 ? "fixed" : "responsive"}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default first;
