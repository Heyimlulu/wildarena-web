import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CorporateEvents() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Corporate team building event"
              width={600}
              height={400}
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">Level Up Your Team</h2>
            <p className="text-gray-600 mb-6">
              Bring your team together for an unforgettable corporate event at Wild Arena. Our laser tag arenas provide
              the perfect setting for team building, fostering communication, strategy, and camaraderie.
            </p>
            <ul className="list-disc list-inside mb-8 text-gray-600">
              <li>Customizable team building packages</li>
              <li>State-of-the-art equipment and arenas</li>
              <li>Professional event coordinators</li>
              <li>Catering options available</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Book Your Corporate Event
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

