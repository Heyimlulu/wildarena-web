import Image from "next/image"
import { MapPin, Navigation2 } from "lucide-react"

export default function LocationsHero() {
  return (
    <>
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800">Nos destinations</h2>
              <div className="w-20 h-1 bg-red-500 mx-auto mb-4" />
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Découvrez nos arènes soigneusement sélectionnées pour une expérience de jeu unique
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-800/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Navigation2 className="w-12 h-12 text-red-500 animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              Trouvez votre arène
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Préparez-vous au combat dans nos destinations exceptionnelles
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin className="w-6 h-6 text-red-500 mr-3" />
              <span className="text-lg text-white font-medium">1 destination et plus à venir</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
