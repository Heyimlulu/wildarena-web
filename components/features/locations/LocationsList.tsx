import React from 'react';
import Image from "next/image"
import { MapPin, Car, Clock, Calendar, Users } from "lucide-react"
import pfynFinges from "@/images/locations/pfyn-finges.jpg"
import logo from "@/images/logo.png"

const locations = [
  {
    name: "Parc naturel régional Pfyn-Finges",
    address: "3970 Salquenen",
    image: pfynFinges,
    parking: "Parking payant disponible",
    openingHours: "24 heures sur 24",
    availability: "Lundi - Dimanche",
    capacity: "Jusqu'à 30 joueurs",
    description: "Une arène naturelle exceptionnelle au cœur du plus grand site naturel du Valais. Terrain varié avec forêts denses et clairières.",
  }
]

export default function LocationsList() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800">Nos arènes</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Des espaces naturels soigneusement sélectionnés pour une expérience de jeu immersive et unique
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-green-800">{location.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{location.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Adresse</p>
                        <p className="text-sm text-gray-600">{location.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Car className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Parking</p>
                        <p className="text-sm text-gray-600">{location.parking}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Horaires</p>
                        <p className="text-sm text-gray-600">{location.openingHours}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Disponibilité</p>
                        <p className="text-sm text-gray-600">{location.availability}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Capacité</p>
                        <p className="text-sm text-gray-600">{location.capacity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-64">
                <Image
                  src={logo}
                  alt="Arena Coming Soon"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-400">Bientôt disponible</h3>
                </div>
                <p className="text-gray-500 mb-6">De nouvelles arènes arrivent bientôt pour enrichir votre expérience de jeu. Restez informé !</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 opacity-60">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-red-300 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-400">Adresse</p>
                      <p className="text-sm text-gray-300">À venir</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Car className="w-5 h-5 text-blue-300 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-400">Parking</p>
                      <p className="text-sm text-gray-300">À venir</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-green-300 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-400">Horaires</p>
                      <p className="text-sm text-gray-300">À venir</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-purple-300 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-400">Disponibilité</p>
                      <p className="text-sm text-gray-300">À venir</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-orange-300 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-400">Capacité</p>
                      <p className="text-sm text-gray-300">À venir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
