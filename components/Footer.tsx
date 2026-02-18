import Image from 'next/image'
import img from '@/assets/CESKa-ASOCIACE.png'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200 mt-auto">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Association Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              placeholder="blur"
              src={img}
              alt="Česká asociace psychoterapie"
              width={150}
              height={115}
              className="mb-4"
            />
            <p className="text-sm text-gray-600">Člen České asociace pro psychoterapii</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Kontakt</h3>
            <div className="space-y-3 text-center md:text-left">
              <a
                href="mailto:davidek.email@gmail.com"
                className="block text-gray-700 hover:text-primary-600 transition-colors">
                <span className="font-semibold">E-mail:</span> davidek.email@gmail.com
              </a>
              <a
                href="tel:734574243"
                className="block text-gray-700 hover:text-primary-600 transition-colors">
                <span className="font-semibold">Tel:</span> 734 574 243
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-heading font-semibold text-gray-900 mb-4">Adresa pracoviště</h3>
            <div className="text-gray-700 text-center md:text-left space-y-1">
              <p className="font-semibold">Terapie pod Špilberkem</p>
              <p>Údolní 222/5</p>
              <p>602 00, Brno</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Mgr. Petr Davídek. Všechna práva vyhrazena.</p>
          <p className="mt-2 md:mt-0">Vytvořil: Kryštof Davídek</p>
        </div>
      </div>
    </footer>
  )
}
