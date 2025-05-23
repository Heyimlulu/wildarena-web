import Header from "@/components/layout/Header"
import Hero from "@/components/features/home/Hero"
import Features from "@/components/features/home/Features"
import GameModes from "@/components/features/home/GameModes"
import CorporateEvents from "@/components/features/home/CorporateEvents"
import Footer from "@/components/layout/Footer"
import Banner from "@/components/shared/ui/Banner"
import Newsletter from "@/components/features/home/Newsletter"
import { ArrowDown } from "lucide-react"
import { LatestNews } from "@/components/features/home/LatestNews"
import Gallery from "@/components/features/home/Gallery"
import Partnerships from "@/components/features/home/Partnerships"

// For SEO optimization
export const metadata = {
  title: "Wild Arena | Laser Game en Plein Air",
  description: "Découvrez une expérience unique de laser game en pleine nature@ Parfait pour les événements d'entreprise, les fêtes et les sorties entre amis@",
  keywords: "laser game, plein air, team building, activité groupe, laser tag, Valais, Suisse",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="overflow-x-hidden">
        <div className="relative">
          <Banner />
          <div className="absolute inset-0 h-full flex flex-col items-center justify-center text-center z-10 px-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-green-500 tracking-tight">
              Wild Arena
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white mt-4">
              Libérez votre côté sauvage
            </p>
            <button 
              className="mt-12 sm:mt-16 text-white hover:text-green-500 transition-all duration-500 transform hover:-translate-y-1 animate-bounce-slow"
              aria-label="Défiler vers le bas"
              disabled
            >
              <ArrowDown className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>
          </div>
        </div>
        <Hero />  
        <Features />
        <GameModes />
        <CorporateEvents />
        <Partnerships />
        <Gallery />
        <LatestNews />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
