import type { Metadata } from 'next'
import HomeContent from '../components/HomeContent'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.psycholog-terapeut-brno.cz',
  },
  openGraph: {
    title: 'Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro děti a dospělé',
    description:
      'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
    url: 'https://www.psycholog-terapeut-brno.cz',
  },
  twitter: {
    title: 'Psycholog a terapeut, Brno - Mgr. Petr Davídek, terapie pro děti a dospělé',
    description:
      'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
  },
}

export default function Home() {
  return <HomeContent />
}
