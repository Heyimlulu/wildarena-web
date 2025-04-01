import { MapPin, Car } from "lucide-react"

const locations = [
  {
    name: "Parc naturel régional Pfyn-Finges",
    address: "3970 Salquenen",
    parking: "Street parking available",
  },
  {
    name: "Parc naturel de la vallée du Trient",
    address: "1922 Salvan",
    parking: "Street parking available",
  },
]


export default function LocationsList() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Nos arènes</h2>
        <div className={`grid ${locations.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-green-800 mb-4">{location.name}</h3>
              <div className="flex items-start mb-2">
                <MapPin className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <p>{location.address}</p>
              </div>
              <div className="flex items-start">
                <Car className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <p>{location.parking}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

