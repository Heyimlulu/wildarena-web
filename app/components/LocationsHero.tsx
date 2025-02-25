import { MapPin } from "lucide-react"

export default function LocationsHero() {
  return (
    <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Our Locations</h1>
        <p className="text-xl mb-8">Find a Wild Arena arena near you and join the battle!</p>
        <div className="flex justify-center items-center">
          <MapPin className="w-6 h-6 mr-2" />
          <span className="text-lg">3 locations and growing</span>
        </div>
      </div>
    </section>
  )
}

