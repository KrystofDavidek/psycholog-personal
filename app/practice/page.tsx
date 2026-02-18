import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProfileImg from '@/assets/profilovka-orez.png'

export const metadata: Metadata = {
  title: 'Má praxe',
  description: 'Vzdělání a profesní zkušenosti Mgr. Petra Davídka – školní psycholog, lektor, specialista na ADHD, výcvik v biosyntetické psychoterapii a EMDR.',
  alternates: { canonical: 'https://www.psycholog-terapeut-brno.cz/má-praxe' },
  openGraph: {
    url: 'https://www.psycholog-terapeut-brno.cz/má-praxe',
  },
}

const education = [
  'Mgr. vzdělání v oboru Psychologie, Filosofická fakulta Univerzity Palackého v Olomouci',
  'Výcvik v metodě EMDR, úroveň I a II pro děti a dospívající - Český institut pro psychotraumatologii a EMDR',
  'Komplexní psychoterapeutický výcvik v somatické a hlubinně orientované psychoterapii - Biosyntéze; Český institut Biosyntézy z.s',
  'Kurz Školní psycholog na ZŠ a SŠ, Filosofická fakulta Univerzity Palackého v Olomouci',
  'Kurz Základní krizová intervence, Remedium Praha o. p. s. a další kurzy',
]

const experience = [
  'Psychologické poradenství, krizová intervence a individuální konzultace pro rodiče, učitele a žáky; práce se třídními kolektivy (ZŠ Hudcova, Brno; ZŠ a MŠ Deblín, Brno-venkov)',
  'Externí vyučující na Pedagogické fakultě Masarykovy univerzity v Brně – spolupráce na výuce pedagogické psychologie pro budoucí učitele a speciální pedagogy',
  'Individuální a rodinné poradenství pro mladistvé a jejich rodinné příslušníky; lektorování skupinových setkání zaměřených na zvládání agrese u mladistvých (Probační a mediační služba ČR)',
  'Poradenství pro učitele žáků s ADHD; metodik a lektor preventivních programů pro třídní kolektivy s dětmi s ADHD; lektor kurzů sociálně-emočního učení pro děti s ADHD (Centrum pro rodinu a sociální péči, Brno)',
  'Lektor kurzů pro odborníky a rodiče (Terapie pod Špilberkem s.r.o.; Podané ruce o.p.s.)',
]

export default function Practice() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-50 to-white section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Má praxe
            </h1>
            <p className="text-xl text-gray-600">
              Profesní vzdělání, zkušenosti a oblasti specializace
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Education & Experience */}
            <div className="lg:col-span-2 space-y-12">
              {/* Education Section */}
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  Absolvované vzdělání a kurzy
                </h2>
                <div className="space-y-4">
                  {education.map((item, index) => (
                    <div key={index} className="card p-6 flex items-start group hover:shadow-medium transition-shadow duration-300">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Section */}
              <div className="animate-fade-in-up animation-delay-200">
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                  Praxe a další činnosti
                </h2>
                <div className="space-y-4">
                  {experience.map((item, index) => (
                    <div key={index} className="card p-6 flex items-start group hover:shadow-medium transition-shadow duration-300">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Image Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 animate-fade-in-up animation-delay-400">
                <div className="card p-6">
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary-200 to-accent-200 rounded-xl blur-lg opacity-30"></div>
                    <div className="relative">
                      <Image
                        placeholder="blur"
                        height={400}
                        width={400}
                        src={ProfileImg}
                        alt="Mgr. Petr Davídek"
                        className="rounded-lg"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                      Mgr. Petr Davídek
                    </h3>
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
        </div>
      </div>
    </>
  )
}
