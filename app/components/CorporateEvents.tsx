import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CorporateEvents() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Image
              src="/banners/Teambuilding.jpg"
              alt="Événement de team building d&apos;entreprise"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Faites monter d&apos;un cran votre équipe</h2>
            <p className="text-gray-600 mb-6">
              Rassemblez votre équipe pour un événement d&apos;entreprise inoubliable au Wild Arena. Nos arènes de laser tag offrent
              le contexte idéal pour le team building, favorisant la communication, la stratégie et la camaraderie.
            </p>
            <ul className="list-disc list-inside mb-8 text-gray-600">
              <li>Forfaits de team building personnalisables</li>
              <li>Équipements et arènes de pointe</li>
              <li>Coordinateurs d&apos;événements professionnels</li>
              <li>Options de restauration disponibles</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Réservez votre événement d&apos;entreprise
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

