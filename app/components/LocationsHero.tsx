import { MapPin } from "lucide-react"

export default function LocationsHero() {
  return (
    <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Nos destinations</h1>
        <p className="text-xl mb-8">Trouvez une arène proche de vous et préparez vous au combat.</p>
        <div className="flex justify-center items-center">
          <MapPin className="w-6 h-6 mr-2" />
          <span className="text-lg">2 destinations et plus à venir</span>
        </div>
      </div>
    </section>
  )
}

