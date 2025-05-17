import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ContactForm from "@/components/features/contact/ContactForm"
import ContactInfo from "@/components/features/contact/ContactInfo"
import FAQ from "@/components/shared/ui/FAQ"
import { MessageCircle } from "lucide-react"

export const metadata = {
  title: 'Wild Arena | Contact',
  description: 'Prendre contact avec notre équipe - Nous sommes là pour vous aider !',
  keywords: "laser game, plein air, team building, activité groupe, laser tag, Valais, Suisse",
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          <div className="flex justify-center mb-6">
            <MessageCircle className="w-16 h-16 text-green-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Contact
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-green-100 max-w-2xl mx-auto">
            Prendre contact avec notre équipe - Nous sommes là pour vous aider !
          </p>
        </div>
        </div>
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
          <div className="mt-16 sm:mt-20 md:mt-24">
            <FAQ />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
