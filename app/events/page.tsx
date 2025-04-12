import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

interface Event {
  title: string
  date: string
  image: string
  location: string
  description: string
  category: string
}

const events: Event[] = [
  // Events can be added here later
]

export default function Events() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Événements à venir
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos événements spéciaux et réservez votre place dès maintenant !
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.length > 0 ? events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h2>
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <Link
                    href="/booking"
                    className="inline-flex items-center px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
                  >
                    Réserver ma place
                  </Link>
                </div>
              </div>
            )) : (
              <p className="bg-green-50 col-span-3 text-center text-gray-600 py-12">Aucun événement disponible actuellement.</p>
            )}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-green-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Vous organisez un événement ?</h2>
              <p className="text-green-700 mb-6">
                Nous pouvons créer un événement personnalisé pour votre groupe ou votre entreprise.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
