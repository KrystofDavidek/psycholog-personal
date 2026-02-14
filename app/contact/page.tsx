import type { Metadata } from 'next'
import ContactContent from '../../components/ContactContent'

export const metadata: Metadata = {
  title: 'Kontakt',
  alternates: {
    canonical: 'https://www.psycholog-terapeut-brno.cz/kontakt',
  },
  openGraph: {
    title: 'Kontakt | Psycholog a terapeut, Brno - Mgr. Petr Davídek',
    description:
      'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
    url: 'https://www.psycholog-terapeut-brno.cz/kontakt',
  },
  twitter: {
    title: 'Kontakt | Psycholog a terapeut, Brno - Mgr. Petr Davídek',
    description:
      'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojeností ve vztazích v Brně.',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
