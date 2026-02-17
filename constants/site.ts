// Site-wide constants
export const SITE_CONFIG = {
  name: 'Psycholog a terapeut, Brno',
  title: 'Mgr. Petr Davídek',
  fullTitle: 'Psycholog a terapeut, Brno - Mgr. Petr Davídek',
  description: 'Terapie pro děti a dospělé s psychosomatickými obtížemi, ADHD, úzkostmi, konflikty a nespokojensoti ve vztazích v Brně.',
  url: 'https://www.psycholog-terapeut-brno.cz',
  ogImage: 'https://www.psycholog-terapeut-brno.cz/static/images/profilovka-orez.png',
  ogSiteName: 'mobil kontakty',
  googleVerification: 'UvZqrbMejlIe7mEjOSxw4U0mtpgAkh_6HO9UIFEFHII',
} as const;

export const CONTACT_INFO = {
  email: 'davidek.email@gmail.com',
  phone: '734574243',
  phoneFormatted: '734 574 243',
  ico: '09495673',
} as const;

export const ADDRESS = {
  name: 'Terapie pod Špilberkem',
  subtitle: 'psychologické centrum',
  floor: 'První patro - pracovna č. 6',
  street: 'Údolní 222/5',
  city: 'Brno - město',
  zip: '602 00',
  fullAddress: 'Terapie pod Špilberkem, Údolní 222/5, 602 00 Brno',
} as const;

export const EXTERNAL_LINKS = {
  biosynthesis: 'https://www.biosynteza.cz/',
  emdr: 'https://www.emdr.cz',
  vzp: 'https://dusevnizdravi.vzp.cz/informace-o-prispevku/',
  fontPreload: 'https://static.parastorage.com/services/third-party/fonts/user-site-fonts/fonts/5cee8d6e-89ad-4d8c-a0ac-584d316b15ae.woff2',
} as const;

export const PRICING = {
  consultation: {
    price: 1400,
    currency: 'Kč',
    duration: '50 min',
    description: 'Individuální konzultace, psychoterapie a poradenství',
  },
  report: {
    price: 1400,
    currency: 'Kč',
    unit: 'normostrana',
    description: 'Vypracování psychologické zprávy',
  },
} as const;

export const SOCIAL_META = {
  twitterCard: 'summary_large_image',
} as const;
