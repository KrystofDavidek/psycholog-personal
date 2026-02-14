import type { Metadata } from 'next'
import FirstContent from '../../components/FirstContent'

export const metadata: Metadata = {
  title: 'První setkání',
  alternates: {
    canonical: 'https://www.psycholog-terapeut-brno.cz/první-setkání',
  },
  openGraph: {
    title: 'První setkání | Psycholog a terapeut - Mgr. Petr Davídek',
    description:
      'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
    url: 'https://www.psycholog-terapeut-brno.cz/první-setkání',
  },
  twitter: {
    title: 'První setkání | Psycholog a terapeut - Mgr. Petr Davídek',
    description:
      'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
  },
}

export default function FirstPage() {
  return <FirstContent />
}
