import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-700 to-green-900 text-white text-center py-24 md:py-32 lg:py-40">
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold mb-4">Experience the Thrill of Laser Combat</h1>
      <p className="text-lg mb-8">
        Immerse yourself in heart-pounding action with cutting-edge laser tag technology. Perfect for friends,
        families, and team building!
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          href="/locations"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 flex items-center justify-center"
        >
          Find a Location
          <ArrowRight className="ml-3" />
        </Link>
        <Link
          href="/pricing"
          className="bg-transparent hover:bg-white hover:text-green-800 text-white font-bold py-4 px-8 rounded-full border-2 border-white transition-colors duration-300 flex items-center justify-center"
        >
        View Pricing
        </Link>
      </div>
    </div>
  </section>
  )
}

