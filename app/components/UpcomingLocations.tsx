import { Calendar } from "lucide-react"

const upcomingLocations = [
  {
    name: "Wild Arena Beachside",
    city: "Surftown",
    openingDate: "Summer 2023",
    description: "Experience laser tag with an ocean view!",
  },
  {
    name: "Wild Arena Mountain",
    city: "Peakville",
    openingDate: "Fall 2023",
    description: "High-altitude battles in a mountain setting",
  },
]

export default function UpcomingLocations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingLocations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-green-800 mb-2">{location.name}</h3>
              <p className="text-xl text-gray-600 mb-2">{location.city}</p>
              <div className="flex items-center justify-center text-lg font-semibold text-red-500 mb-4">
                <Calendar className="mr-2" />
                <p>Opening {location.openingDate}</p>
              </div>
              <p className="text-gray-700">{location.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

