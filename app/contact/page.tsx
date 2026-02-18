import type { Metadata } from 'next'
import ContactPageContent from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktujte psychologa Mgr. Petra Davídka. Adresa: Terapie pod Špilberkem, Údolní 222/5, Brno. Telefon: 734 574 243. Objednání na konzultaci.',
  alternates: { canonical: 'https://www.psycholog-terapeut-brno.cz/kontakt' },
  openGraph: {
    url: 'https://www.psycholog-terapeut-brno.cz/kontakt',
  },
}

export default function ContactPage() {
  return <ContactPageContent />
}
