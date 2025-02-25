import { MapPin, Phone, Clock, Car } from "lucide-react"

const locations = [
  {
    name: "Wild Arena Downtown",
    address: "123 Main St, Cityville, ST 12345",
    phone: "(555) 123-4567",
    hours: "Mon-Thu: 2pm-10pm, Fri-Sun: 10am-12am",
    parking: "Street parking available",
  },
  {
    name: "Wild Arena Suburbs",
    address: "456 Oak Rd, Townsburg, ST 67890",
    phone: "(555) 987-6543",
    hours: "Mon-Thu: 3pm-9pm, Fri-Sun: 11am-11pm",
    parking: "Free parking lot on-site",
  },
  {
    name: "Wild Arena Mall",
    address: "789 Shopping Ctr, Mallville, ST 54321",
    phone: "(555) 246-8135",
    hours: "Mon-Sun: 10am-9pm",
    parking: "Mall parking garage (validated)",
  },
]

export default function LocationsList() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Our Arenas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="flex items-center mb-2">
                <Phone className="text-red-500 mr-2 flex-shrink-0" />
                <p>{location.phone}</p>
              </div>
              <div className="flex items-start mb-2">
                <Clock className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                <p>{location.hours}</p>
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

