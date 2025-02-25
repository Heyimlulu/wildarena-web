import Link from "next/link"
import { ArrowRight, Target } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Experience the Thrill of Laser Combat
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Immerse yourself in heart-pounding action with cutting-edge laser tag technology. Perfect for friends,
              families, and team building!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/locations"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 flex items-center justify-center"
              >
                Find a Location
                <ArrowRight className="ml-2" />
              </Link>
              <Link
                href="/pricing"
                className="bg-transparent hover:bg-white hover:text-green-800 text-white font-bold py-3 px-6 rounded-full border-2 border-white transition-colors duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-4 bg-red-500 rounded-full animate-pulse opacity-40"></div>
              <div className="absolute inset-8 bg-red-500 rounded-full animate-pulse opacity-60"></div>
              <Target className="absolute inset-0 m-auto w-32 h-32 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

