import { MessageCircle } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl mb-8">Get in touch with the Wild Arena team - we&apos;re here to help!</p>
        <div className="flex justify-center items-center">
          <MessageCircle className="w-6 h-6 mr-2" />
          <span className="text-lg">We typically respond within 24 hours</span>
        </div>
      </div>
    </section>
  )
}

