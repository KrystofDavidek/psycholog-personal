import Head from "next/head";
import Image from "next/image";
import ProfileImg from "../assets/profilovka-orez.png";
import useWindowDimensions from "../hooks/useWindowDimension";

export default function Home() {
  const { width } = useWindowDimensions();

  return (
    <div>
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
        <meta
          property="og:image"
          content="https://static.wixstatic.com/media/8e6e3a_350e513791fb43688608a8ce90892182~mv2.jpg/v1/fill/w_2500,h_3332,al_c/8e6e3a_350e513791fb43688608a8ce90892182~mv2.jpg"
        />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="3332" />
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
      <div className="grid gap-4 p-10 m-4 bg-cover xl:grid-cols-3 bg-motive bg-red">
        <div className="text-white xl:col-span-2">
          <p>Pracuji s dětmi a dospívajícími s:</p>
          <ul className="p-4 ml-4 list-disc">
            <li>ADHD a projevy nepozornosti, hyperaktivity a impulzivity v chování, </li>
            <li>obtížemi ve vztazích s vrstevníky, učiteli a kteří se dostávají do konfliktů s rodiči,</li>
            <li>nízkým sebevědomím, důvěrou ve vlastní schopnosti a možnost změny,</li>
            <li>psychosomatickými obtížemi (např. bolesti břicha a hlavy při odchodu do školy),</li>
            <li>obtížemi ve zvládání vzteku,</li>
            <li>úzkostnými projevy v chování,</li>
            <li>depresivními projevy v chování a častou změnou nálad.</li>
          </ul>
          <p className="pb-4">Rodičům dětí nabízím konzultace.</p>
          <p>
            Jsem tu dále pro dospělé, kteří se v životě cítí být něčím omezováni, nebo se opakovaně dostávají do situací, kterým
            chtějí více porozumět a umět s nimi lépe pracovat. Také tu jsem pro ty, kteří se dostali do složité životní situace,
            ve které se potřebují zorientovat a rozhodnout se, jakým směrem se vydat. V neposlední řadě tu jsem pro ty, kteří
            chtějí pracovat na svém osobním růstu a seberozvoji. Obrátit se na mě je možné například ohledně:
          </p>
          <ul className="p-4 ml-4 list-disc">
            <li>konfliktů a nespokojenosti v partnerských vztazích,</li>
            <li>psychosomatických obtíží,</li>
            <li>úzkostí, přetrvávajícího smutku a depresivních myšlenek,</li>
            <li>náročných životních událostí a traumatických zážitků,</li>
            <li>osobního růstu a seberozvoje.</li>
          </ul>
        </div>
        <div className={width && width > 700 ? "self-center justify-self-center" : "self-center"}>
          <Image
            placeholder="blur"
            height={400}
            width={400}
            layout={width && width > 700 ? "fixed" : "responsive"}
            objectFit="contain"
            src={ProfileImg}
            alt="Profilová fotka"
          />
        </div>
      </div>
    </div>
  );
}
