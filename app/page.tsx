import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProfileImg from '@/assets/profilovka-orez.png'

export const metadata: Metadata = {
  description: 'Psycholog a terapeut v Brně. Mgr. Petr Davídek nabízí psychoterapii pro děti a dospělé – ADHD, úzkosti, psychosomatické obtíže, trauma a vztahové problémy.',
  alternates: { canonical: 'https://www.psycholog-terapeut-brno.cz' },
  openGraph: {
    url: 'https://www.psycholog-terapeut-brno.cz',
  },
}

const specializace = [
  'ADHD a projevech nepozornosti, hyperaktivity a impulzivity v chování,',
  'obtížích ve vztazích,',
  'nízkém sebevědomí, nedostatku důvěry ve vlastní schopnosti a možnost změny,',
  'omezeních v životě spojených s traumatickými zážitky a na zvládání náročných situací,',
  'psychosomatických obtížích (např. bolesti břicha a hlavy při odchodu do školy či práce),',
  'problémech ve zvládání vzteku,',
  'úzkostech a obavách,',
  'častých změnách nálad, přetrvávajícím smutku a negativních myšlenkách.',
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="container-custom section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                Profesionální psychologická pomoc v Brně
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Jsem tu pro Vás a Vaše blízké
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Jmenuji se <span className="font-semibold text-primary-600">Petr Davídek</span> a působím jako psycholog a terapeut v Brně.
                Pomáhám dospělým, dětem a dospívajícím najít cestu k lepšímu životu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn btn-primary">
                  Domluvit schůzku
                </Link>
                <Link href="/o-mně" className="btn btn-secondary">
                  Zjistit více o mně
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-accent-200 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative bg-white rounded-2xl shadow-hard p-2">
                  <Image
                    placeholder="blur"
                    height={500}
                    width={500}
                    src={ProfileImg}
                    alt="Mgr. Petr Davídek - Psycholog a terapeut"
                    className="rounded-xl"
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="card p-8 md:p-10 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                S čím Vám mohu pomoci
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Jmenuji se <span className="font-semibold text-primary-600">Petr Davídek</span> a působím jako psycholog a terapeut v Brně.
                S dospělými, dětmi a dospívajícími spolupracuji např. na:
              </p>
              <ul className="space-y-3">
                {specializace.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-8 md:p-10 animate-fade-in-up animation-delay-200">
              <p className="text-lg text-gray-700 leading-relaxed">
                Jsem tu pro dospělé, děti a dospívající, kteří se v životě cítí být něčím omezováni nebo se opakovaně dostávají do situací,
                kterým chtějí lépe porozumět a umět s nimi efektivněji pracovat. Spolupracuji také s těmi, kteří se ocitli ve složité životní
                situaci a potřebují se v ní zorientovat nebo se rozhodnout, jakým směrem se vydat. Rodičům dětí pak nabízím konzultace.{' '}
                <Link href="/o-mně" className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                  Více informací o mně a způsobu mé práce najdete zde.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-500 to-primary-700 section">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Hledáte podporu pro sebe nebo své blízké?
          </h2>
          <p className="text-lg text-primary-50 mb-8 max-w-2xl mx-auto">
            Jsem tu pro Vás. Ať už se cítíte být něčím omezováni, potřebujete se zorientovat ve složité situaci,
            nebo hledáte cestu ke změně - společně najdeme řešení.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn bg-white text-primary-700 hover:bg-primary-50 shadow-lg">
              Kontaktujte mě
            </Link>
            <Link href="/první-setkání" className="btn border-2 border-white text-white hover:bg-white/10">
              Jak probíhá první setkání
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
