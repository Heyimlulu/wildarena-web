import Link from "next/link"


export const PracticalInfoCTA = () => {
  return (
    <div className="bg-green-700">
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Réservez maintenant et commencez votre aventure !
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-white">
          Obtenez une expérience de laser game en pleine nature, conçue pour les amis, les familles, les collègues,
          les voyageurs, les étudiants, les anniversaires et les événements d&apos;équipe !
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/pricing" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg group">
            Réservez maintenant
          </Link>
          <Link href="/contact" className="text-sm/6 font-semibold text-white hover:text-gray-200">
            Contactez-nous <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}