'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-6xl font-heading font-bold text-red-500 mb-4">Chyba</h1>
      <h2 className="text-2xl font-heading font-semibold text-gray-900 mb-4">Něco se pokazilo</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Omlouváme se, došlo k neočekávané chybě. Zkuste to prosím znovu.
      </p>
      <button onClick={reset} className="btn btn-primary">
        Zkusit znovu
      </button>
    </div>
  )
}
