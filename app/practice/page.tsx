import type { Metadata } from 'next'
import PracticeContent from '../../components/PracticeContent'

export const metadata: Metadata = {
  title: 'Má praxe',
  alternates: {
    canonical: 'https://www.psycholog-terapeut-brno.cz/má-praxe',
  },
  openGraph: {
    title: 'Má praxe | Psycholog a terapeut, Brno - Mgr. Petr Davídek',
    description:
      'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
    url: 'https://www.psycholog-terapeut-brno.cz/má-praxe',
  },
  twitter: {
    title: 'Má praxe | Psycholog a terapeut, Brno - Mgr. Petr Davídek',
    description:
      'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
  },
}

export default function PracticePage() {
  return <PracticeContent />
}
