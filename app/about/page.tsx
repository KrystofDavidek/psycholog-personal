import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import IconPlaceholder from '@/components/IconPlaceholder'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { SITE_CONFIG, EXTERNAL_LINKS } from '@/constants/site'

export const metadata: Metadata = {
  title: 'O mně',
  description: 'Mgr. Petr Davídek – psycholog a terapeut v Brně. Biosyntetická psychoterapie, EMDR, práce s dětmi i dospělými. Člen České asociace pro psychoterapii.',
  alternates: { canonical: `${SITE_CONFIG.url}/o-mně` },
  openGraph: {
    url: `${SITE_CONFIG.url}/o-mně`,
  },
}

export default function About() {
  return (
    <>
      <PageHeader title="O mně" />

      {/* Main Content */}
      <div className="bg-white section">
        <div className="container-custom">
          {/* Introduction */}
          <div className="card p-8 md:p-10 mb-12 animate-fade-in-up">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Jmenuji se <span className="font-semibold text-primary-600">Petr Davídek</span> a působím jako psycholog a terapeut v Brně.
              V rámci své soukromé praxe nabízím psychoterapii dospělým, dětem a dospívajícím a psychologické poradenství a konzultace pro rodiče.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Vedle soukromé praxe pracuji jako školní psycholog na základní škole v Deblíně a externě vyučuji na pedagogické fakultě v Brně.
              Dlouhodobě se také věnuji dětem s ADHD, pro které jsem vedl i několik specializovaných programů zaměřených na sociálně-emoční učení,
              podporu jejich vztahů s vrstevníky a rozvoj pozitivních vzorců chování.
              S dětmi využívám prvky terapie hrou, která je pro ně přirozenou a bezpečnou formou jejich rozvoje.
            </p>
          </div>

          {/* Approach Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Biosynthesis */}
            <div className="card p-8 animate-fade-in-up">
              <IconPlaceholder variant="primary" className="mb-6" />
              <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                Biosyntetická psychoterapie
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Při své práci respektuji jedinečnost a osobní tempo klientů a vycházím z biosyntetické psychoterapie – moderní metody
                v psychosomatické psychoterapii, která podporuje přirozené zdroje a klade důraz na bezpečí a soulad mezi tím, jak se
                člověk cítí, co si myslí, jak se chová a jak tomu všemu rozumí.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kromě zaměření na emoce a myšlenky si také s klienty všímám, jak na situaci, kterou řeší, reaguje jejich tělo –
                například zda mají napjaté svaly, obtížně se jim dýchá nebo je něco bolí.
              </p>
              <a
                href={EXTERNAL_LINKS.biosynthesis}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                Více o biosyntetické psychoterapii &rarr;
              </a>
            </div>

            {/* EMDR */}
            <div className="card p-8 animate-fade-in-up animation-delay-200">
              <IconPlaceholder variant="accent" className="mb-6" />
              <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                Psychoterapie metodou EMDR
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Klientům také nabízím spolupráci prostřednictvím metody EMDR, která je integrativním a komplexním psychoterapeutickým
                přístupem, pomáhající lidem zotavit se z problémů vyvolaných traumatickými událostmi v jejich životě a z nich vyplývajících obtíží.
              </p>
              <a
                href={EXTERNAL_LINKS.emdr}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold transition-colors">
                Více o EMDR &rarr;
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="card p-8 animate-fade-in-up animation-delay-400">
            <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-6 text-center">
              Video o biosyntetické psychoterapii
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <YouTubeEmbed videoId="7lmWOmyPRqA" />
              </div>
            </div>
          </div>

          {/* Membership Badge */}
          <div className="mt-12 text-center">
            <div className="inline-block card px-8 py-4">
              <p className="text-gray-700">
                <span className="font-semibold text-primary-600">Jsem členem České asociace pro psychoterapii (ČAP)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
