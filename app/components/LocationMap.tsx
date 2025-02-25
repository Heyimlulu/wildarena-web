"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

const locations = [
  { id: 1, name: "Wild Arena Downtown", lat: 40.7128, lng: -74.006 },
  { id: 2, name: "Wild Arena Suburbs", lat: 40.7282, lng: -73.7949 },
  { id: 3, name: "Wild Arena Mall", lat: 40.6782, lng: -73.9442 },
]

export default function LocationMap() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null)

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Find Us on the Map</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: "400px" }}>
          {/* Replace this div with an actual map component (e.g., Google Maps, Mapbox) */}
          <div className="h-full w-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Interactive Map Placeholder</span>
          </div>
          {locations.map((location) => (
            <div
              key={location.id}
              className="absolute"
              style={{
                top: `${50 - (location.lat - 40.6) * 100}%`,
                left: `${50 + (location.lng + 74) * 100}%`,
              }}
            >
              <MapPin
                className={`w-8 h-8 ${
                  activeLocation === location.id ? "text-red-500" : "text-green-700"
                } cursor-pointer transition-colors duration-200`}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              />
              {activeLocation === location.id && (
                <div className="absolute bg-white text-gray-800 p-2 rounded shadow-md -mt-2 ml-4">{location.name}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

