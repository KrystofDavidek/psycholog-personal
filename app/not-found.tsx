import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-6xl font-heading font-bold text-primary-600 mb-4">404</h1>
      <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">Stránka nenalezena</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Omlouváme se, ale hledaná stránka neexistuje nebo byla přesunuta.
      </p>
      <Link href="/" className="btn btn-primary">
        Zpět na úvodní stránku
      </Link>
    </div>
  )
}
