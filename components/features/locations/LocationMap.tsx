"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import Map, { Marker, Popup } from "react-map-gl/mapbox"
import "mapbox-gl/dist/mapbox-gl.css"

const locations = [
  {
    id: 1,
    name: "Parc naturel régional Pfyn-Finges",
    lat: 46.2961568289853,
    lng: 7.573568481547323,
    address: "3970 Salquenen",
    openingHours: "9h00 - 18h00",
  }
]

export default function LocationMap() {
  const [activeLocation, setActiveLocation] = useState<number | null>(null)
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800">
              Retrouvez nos arènes en Valais
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-4" />
            <p className="text-gray-600 text-lg mb-2">
              Cliquez sur les marqueurs pour plus d&apos;informations
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg" style={{ height: "500px" }}>
            <Map
              mapboxAccessToken={mapboxToken}
              mapStyle="mapbox://styles/mapbox/outdoors-v12"
              initialViewState={{
                latitude: 46.2,
                longitude: 7.3,
                zoom: 9,
                bearing: 0,
                pitch: 0,
              }}
              scrollZoom={false}
              dragPan={true}
              doubleClickZoom={false}
              touchZoomRotate={false}
              style={{ width: "100%", height: "100%" }}
            >
              {locations.map((location) => (
                <div key={location.id}>
                  <Marker
                    latitude={location.lat}
                    longitude={location.lng}
                    anchor="bottom"
                  >
                    <div
                      className="cursor-pointer transform transition-transform duration-200 hover:scale-110"
                      onClick={() => setActiveLocation(location.id)}
                    >
                      <MapPin
                        className={`fill-white w-12 h-12 ${
                          activeLocation === location.id ? "text-red-500" : "text-green-700"
                        } drop-shadow-md`}
                      />
                    </div>
                  </Marker>
                  {activeLocation === location.id && (
                    <Popup
                      latitude={location.lat}
                      longitude={location.lng}
                      closeButton={true}
                      closeOnClick={false}
                      onClose={() => setActiveLocation(null)}
                      anchor="top"
                      offset={[0, -10]}
                    >
                      <div className="p-3">
                        <h3 className="font-bold text-green-800 mb-2">{location.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{location.address}</p>
                        <p className="text-sm text-gray-600">{location.openingHours}</p>
                      </div>
                    </Popup>
                  )}
                </div>
              ))}
            </Map>
          </div>
        </div>
      </div>
    </section>
  )
}
