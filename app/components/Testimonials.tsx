import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Player",
    image: "/placeholder.svg?height=100&width=100",
    quote: "Wild Arena has completely revolutionized my weekends. The adrenaline rush is unmatched!",
  },
  {
    name: "Mike Chen",
    role: "Corporate Event Organizer",
    image: "/placeholder.svg?height=100&width=100",
    quote: "Our team building event at Wild Arena was a massive success. Everyone&apos;s still talking about it!",
  },
  {
    name: "Emily Rodriguez",
    role: "Birthday Party Host",
    image: "/placeholder.svg?height=100&width=100",
    quote: "Best birthday party ever! The staff was amazing and the kids had an absolute blast.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">What Our Warriors Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3 md:mr-4 w-10 h-10 md:w-12 md:h-12"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">&apos;{testimonial.quote}&apos;</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

