import Head from "next/head";
import Image from "next/image";
import ProfileImg from "../assets/profilovka-orez.png";
import useWindowDimensions from "../hooks/useWindowDimension";

const practice = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { width } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>Má praxe | Psycholog a terapeut, Brno - Mgr. Petr Davídek</title>
        <meta
          name="description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <link rel="canonical" href="https://psycholog-personal.vercel.app/practice" />
        <meta property="og:title" content="Má praxe | Psycholog a terapeut, Brno - Mgr. Petr Davídek" />
        <meta
          property="og:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta property="og:image" content="https://psycholog-personal.vercel.app/static/images/profilovka-orez.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://psycholog-personal.vercel.app/practice" />
        <meta property="og:site_name" content="mobil kontakty" />

        <meta name="google-site-verification" content="UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Má praxe | Psycholog a terapeut, Brno - Mgr. Petr Davídek" />
        <meta
          name="twitter:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta name="twitter:image" content="https://psycholog-personal.vercel.app/static/images/profilovka-orez.png" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2"
          crossOrigin=""
        />
      </Head>
      <div className="grid xl:grid-cols-3 bg-cover p-10 gap-4 2xl:h-[550px] m-4 bg-motive">
        <div className="text-white xl:col-span-2">
          <p>Absolvované vzdělání a kurzy:</p>
          <ul className="p-4 ml-4 list-disc">
            <li>Mgr. vzdělání v oboru Psychologie, Filosofická fakulta Univerzity Palackého v Olomouci, </li>
            <li>Supervizní psychoterapeutický výcvik v Biosyntéze (doposud frekventantem), Český institut Biosyntézy z.s,</li>
            <li>Základní psychoterapeutický výcvik v Biosyntéze, Český institut Biosyntézy z. s.,</li>
            <li>Kurz Školní psycholog na ZŠ a SŠ, Filosofická fakulta Univerzity Palackého v Olomouci,</li>
            <li>Kurz Základní krizová intervence, Remedium Praha o. p. s. a další kurzy.</li>
          </ul>
          <p className="pb-4">Praxe a další činnosti:</p>
          <ul className="p-4 ml-4 list-disc">
            <li>
              psychologické poradenství, krizová intervence a individuální konzultace pro rodiče, učitele a žáky, práce se
              třídními kolektivy (ZŠ Hudcova, Brno),
            </li>
            <li>
              individuální a rodinné poradenství pro mladistvé a jejich rodinné příslušníky, lektorování skupinových setkání
              zaměřených na zvládání agrese u mladistvých (Probační a mediační služba ČR),
            </li>
            <li>
              poradenství pro učitele žáků s ADHD, metodik a lektor preventivních programů pro třídní kolektivy s dětmi s ADHD,
              lektor kurzů sociálně-emočního učení pro děti s ADHD (Centrum pro rodinu a sociální péči, Brno),
            </li>
            <li>vychovatel a školní metodik prevence (ZŠ Babice nad Svitavou) a další praxe.</li>
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
    </>
  );
};

export default practice;
