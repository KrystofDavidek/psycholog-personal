import Image from 'next/image'
import ProfileImg from '../assets/profilovka-orez.png'

export default function PracticeContent() {
  return (
    <div className="grid xl:grid-cols-3 bg-cover p-10 gap-4 m-4 bg-motive bg-motive-overlay rounded-xl">
      <div className="text-white xl:col-span-2">
        <p className="text-lg font-semibold pb-2">Absolvované vzdělání a kurzy:</p>
        <ul className="p-4 ml-4 list-disc leading-relaxed">
          <li>Mgr. vzdělání v oboru Psychologie, Filosofická fakulta Univerzity Palackého v Olomouci,</li>
          <li>Výcvik v psychotraumatologii a EMDR (I. a II. stupeň) - Český institut pro psychotraumatologii a EMDR,</li>
          <li>
            Komplexní psychoterapeutický výcvik v somatické a hlubinně orientované psychoterapii - Biosyntéze; Český institut
            Biosyntézy z.s,
          </li>
          <li>Kurz Školní psycholog na ZŠ a SŠ, Filosofická fakulta Univerzity Palackého v Olomouci,</li>
          <li>Kurz Základní krizová intervence, Remedium Praha o. p. s. a další kurzy.</li>
        </ul>
        <p className="text-lg font-semibold pt-4 pb-2">Praxe a další činnosti:</p>
        <ul className="p-4 ml-4 list-disc leading-relaxed">
          <li>
            Psychologické poradenství, krizová intervence a individuální konzultace pro rodiče, učitele a žáky; práce se
            třídními kolektivy (ZŠ Hudcova, Brno; ZŠ a MŠ Deblín, Brno-venkov),
          </li>
          <li>
            Externí vyučující na Pedagogické fakultě Masarykovy univerzity v Brně – spolupráce na výuce pedagogické psychologie
            pro budoucí učitele a speciální pedagogy,
          </li>
          <li>
            Individuální a rodinné poradenství pro mladistvé a jejich rodinné příslušníky; lektorování skupinových setkání
            zaměřených na zvládání agrese u mladistvých (Probační a mediační služba ČR),
          </li>
          <li>
            Poradenství pro učitele žáků s ADHD; metodik a lektor preventivních programů pro třídní kolektivy s dětmi s ADHD;
            lektor kurzů sociálně-emočního učení pro děti s ADHD (Centrum pro rodinu a sociální péči, Brno),
          </li>
          <li>Lektor kurzů pro odborníky a rodiče (Terapie pod Špilberkem s.r.o.; Podané ruce o.p.s.).</li>
        </ul>
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
  )
}
