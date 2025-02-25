import Header from "../components/Header"
import Footer from "../components/Footer"
import PricingHero from "../components/PricingHero"
import PricingOptions from "../components/PricingOptions"
import GroupOffers from "../components/GroupOffers"
import FAQ from "../components/FAQ"

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <PricingHero />
        <PricingOptions />
        <GroupOffers />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

