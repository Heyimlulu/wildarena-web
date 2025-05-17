import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CorporateEvents() {
  return (
    <section id="corporate-events" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/home/Salon with Ladder and Couch.jpg"
                alt="Indoor Architecture by Yevhenii Deshko (Unsplash)"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-xl shadow-lg object-cover hover:scale-[1.02] transition-transform duration-300"
                priority
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-green-800 leading-tight">
              Faites monter d&apos;un cran votre équipe
            </h2>
            <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
              Rassemblez votre équipe pour un événement d&apos;entreprise inoubliable au Wild Arena. Nos arènes de laser tag offrent
              le contexte idéal pour le team building, favorisant la communication, la stratégie et la camaraderie.
            </p>
            <ul className="space-y-3 mb-8 text-gray-600">
              {[
                "Forfaits de team building personnalisables",
                "Équipements et arènes de pointe",
                "Coordinateurs d'événements professionnels",
                "Options de restauration disponibles"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/pricing"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Réservez votre événement d&apos;entreprise
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
