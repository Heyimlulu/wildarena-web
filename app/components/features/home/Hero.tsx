import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Expérimentez le frisson du combat laser en pleine nature !
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Immergez-vous dans l&apos;action palpitante avec la technologie de laser tag de pointe. Parfait pour les amis,
            les familles, et le team building !
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/locations"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg"
            >
              Trouver un emplacement
              <ArrowRight className="ml-2 sm:ml-3" size={20} />
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent hover:bg-white/10 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full border-2 border-white transition-all duration-300 flex items-center justify-center transform hover:scale-105"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
