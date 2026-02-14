import Image from 'next/image'
import ProfileImg from '../assets/profilovka-orez.png'

export default function HomeContent() {
  return (
    <div>
      <div className="grid gap-4 p-8 m-4 bg-cover xl:grid-cols-3 bg-motive bg-motive-overlay rounded-xl">
        <div className="text-white xl:col-span-2">
          <p className="pb-4">
            Jmenuji se Petr Davídek a působím jako psycholog a terapeut v Brně. S dospělými, dětmi a dospívajícími spolupracuji
            např. na:
          </p>
          <ul className="p-4 ml-4 list-disc leading-relaxed">
            <li>ADHD a projevech nepozornosti, hyperaktivity a impulzivity v chování,</li>
            <li>obtížích ve vztazích,</li>
            <li>nízkém sebevědomí, nedostatku důvěry ve vlastní schopnosti a možnost změny,</li>
            <li>omezeních v životě spojených s traumatickými zážitky a na zvládání náročných situací,</li>
            <li>psychosomatických obtížích (např. bolesti břicha a hlavy při odchodu do školy či práce),</li>
            <li>problémech ve zvládání vzteku,</li>
            <li>úzkostech a obavách,</li>
            <li>častých změnách nálad, přetrvávajícím smutku a negativních myšlenkách. </li>
          </ul>
          <p className="pb-4">
            Jsem tu pro dospělé, děti a dospívající, kteří se v životě cítí být něčím omezováni nebo se opakovaně dostávají do
            situací, kterým chtějí lépe porozumět a umět s nimi efektivněji pracovat. Spolupracuji také s těmi, kteří se ocitli ve
            složité životní situaci a potřebují se v ní zorientovat nebo se rozhodnout, jakým směrem se vydat. Rodičům dětí pak
            nabízím konzultace. Více informací o mně a způsobu mé práce najdete{' '}
            <a className="underline" href="https://www.psycholog-terapeut-brno.cz/o-mn%C4%9B">
              zde
            </a>
            .
          </p>
        </div>
        <div className="self-center justify-self-center">
          <Image
            placeholder="blur"
            height={400}
            width={400}
            className="max-w-full h-auto object-contain"
            src={ProfileImg}
            alt="Profilová fotka"
          />
        </div>
      </div>
    </div>
  )
}
