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
      {/* Citation - visible on sm+ (mobile is handled by layout) */}
      <div className="hidden sm:block bg-primary-50 py-4">
        <div className="container-custom text-center">
          <p className="text-primary-700 italic">„Jsme předurčeni k tomu být šťastní i v nedokonalém světě.&rdquo;</p>
          <p className="text-primary-800 font-semibold text-sm mt-1">— Albert Peso</p>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left – bullet list */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                S čím Vám mohu pomoci
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Jmenuji se <span className="font-semibold text-primary-600">Petr Davídek</span> a působím jako psycholog a terapeut v Brně.
                S dospělými, dětmi a dospívajícími spolupracuji např. na:
              </p>
              <div className="space-y-3">
                {specializace.map((item, index) => (
                  <div key={index} className="card p-4 flex items-start group hover:shadow-medium transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 animate-fade-in-up animation-delay-200">
                <div className="card p-6">
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary-200 to-accent-200 rounded-xl blur-lg opacity-30"></div>
                    <div className="relative">
                      <Image
                        placeholder="blur"
                        priority
                        height={400}
                        width={400}
                        src={ProfileImg}
                        alt="Mgr. Petr Davídek - Psycholog a terapeut"
                        className="rounded-lg"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      Mgr. Petr Davídek
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Psycholog a terapeut
                    </p>
                    <Link href="/kontakt" className="btn btn-primary w-full">
                      Kontaktovat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Paragraph below grid */}
          <div className="card p-8 md:p-10 mt-10 animate-fade-in-up">
            <p className="text-lg text-gray-700 leading-relaxed">
              Jsem tu pro dospělé, děti a dospívající, kteří se v životě cítí být něčím omezováni nebo se opakovaně dostávají do situací,
              kterým chtějí lépe porozumět a umět s nimi efektivněji pracovat. Spolupracuji také s těmi, kteří se ocitli ve složité životní
              situaci a potřebují se v ní zorientovat nebo se rozhodnout, jakým směrem se vydat. Rodičům dětí pak nabízím konzultace.{' '}
              <Link href="/o-mně" className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                Více informací o mně a způsobu mé práce najdete zde.
              </Link>
            </p>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Link href="/kontakt" className="btn btn-primary">
              Domluvit schůzku
            </Link>
            <Link href="/o-mně" className="btn btn-secondary">
              Zjistit více o mně
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
