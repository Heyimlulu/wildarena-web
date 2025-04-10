import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import PricingOptions from "@/components/features/pricing/PricingOptions"
import FAQ from "@/components/shared/ui/FAQ"
import { CalendarCheck } from "lucide-react"

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <CalendarCheck className="w-16 h-16 text-green-300" />
        </div>
        <h1 className="text-5xl font-bold mb-6">Nos Offres</h1>
        <p className="text-xl mb-8">Options abordables pour particuliers et groupes</p>
      </div>
      </section>
        <PricingOptions />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
