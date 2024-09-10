import Head from 'next/head'
import Image from 'next/image'
import ProfileImg from '../assets/profilovka-orez.png'
import useWindowDimensions from '../hooks/useWindowDimension'

export default function Home() {
  const { width } = useWindowDimensions()

  return (
    <div>
      <Head>
        <title>Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé</title>
        <meta
          name="description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně. "
        />
        <link rel="canonical" href="https://www.psycholog-terapeut-brno.cz" />
        <meta property="og:title" content="Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro dětí a dospělé" />
        <meta
          property="og:description"
          content="Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně."
        />
        <meta property="og:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png" />
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
        <meta name="twitter:image" content="https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2"
          crossOrigin=""
        />
      </Head>
      <div className="grid gap-4 p-5 m-4 bg-cover xl:grid-cols-3 bg-motive bg-red">
        <div className="text-white xl:col-span-2">
          <p className="pb-4">
            Jmenuji se Petr Davídek a působím jako psycholog a terapeut v Brně. S dospělými, dětmi a dospívajícími spolupracuji
            např. na:
          </p>
          <ul className="p-4 ml-4 list-disc">
            <li>ADHD a projevech nepozornosti, hyperaktivity a impulzivity v chování,</li>
            <li>obtížích ve vztazích,</li>
            <li>nízkém sebevědomí, nedostatku důvěry ve vlastní schopnosti a možnost změny,</li>
            <li>omezeních v životě spojených s traumatickými zážitky a na zvládánínáročných situací,</li>
            <li>psychosomatických obtížích (např. bolesti břicha a hlavy při odchodu do školy či práce),</li>
            <li>problémech ve zvládání vzteku,</li>
            <li>úzkostech a obavách,</li>
            <li>častých změnách nálad, přetrvávajícím smutku a negativních myšlenkách. </li>
          </ul>
          <p className="pb-4">
            Jsem tu pro dospělé, děti a dospívající, kteří se v životě cítí být něčím omezováni nebo se opakovaně dostávají do
            situací, kterým chtějí lépe porozumět a umět s nimi efektivněji pracovat. Spolupracuji také s těmi, kteří se ocitli ve
            složité životní situaci a potřebují se v ní zorientovat nebo se rozhodnout, jakým směrem se vydat. Rodičům dětí pak
            nabízím konzultace. Více informací o mě a způsobu mé práce najdete{' '}
            <a href="https://www.psycholog-terapeut-brno.cz/o-mn%C4%9B">zde</a>.
          </p>
        </div>
        <div className={width && width > 700 ? 'self-center justify-self-center' : 'self-center'}>
          <Image
            placeholder="blur"
            height={400}
            width={400}
            layout={width && width > 700 ? 'fixed' : 'responsive'}
            objectFit="contain"
            src={ProfileImg}
            alt="Profilová fotka"
          />
        </div>
      </div>
    </div>
  )
}
