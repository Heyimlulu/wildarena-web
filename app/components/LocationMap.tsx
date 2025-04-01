"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import Map, { Marker } from "react-map-gl/mapbox";

const locations = [
  { id: 1, name: "Parc naturel régional Pfyn-Finges", lat: 46.2961568289853, lng: 7.573568481547323 },
]

export default function LocationMap() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null)
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Retrouvez nos arènes en Valais</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: "400px" }}>
          {/* Mapbox Maps */}
          <Map
            mapboxAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            latitude={46.22925}
            longitude={7.45972}
            zoom={10}
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                latitude={location.lat}
                longitude={location.lng}
              >
                <MapPin
                  className={`w-8 h-8 ${
                    activeLocation === location.id ? "text-red-500" : "text-green-700"
                  } cursor-pointer transition-colors duration-200`}
                  onMouseEnter={() => setActiveLocation(location.id)}
                  onMouseLeave={() => setActiveLocation(null)}
                />
              </Marker>
            ))}
          </Map>
        </div>
      </div>
    </section>
  )
}

