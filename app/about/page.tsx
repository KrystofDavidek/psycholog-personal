import type { Metadata } from 'next'
import AboutContent from '../../components/AboutContent'

export const metadata: Metadata = {
  title: 'O mně',
  alternates: {
    canonical: 'https://www.psycholog-terapeut-brno.cz/o-mně',
  },
  openGraph: {
    title: 'O mně | Psycholog a terapeut, Brno - Mgr. Petr Davídek',
    description:
      'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
    url: 'https://www.psycholog-terapeut-brno.cz/o-mně',
  },
  twitter: {
    title: 'O mně | Psycholog a terapeut, Brno - Mgr. Petr Davídek',
    description:
      'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
