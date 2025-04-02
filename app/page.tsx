import Header from "./components/layout/Header"
import Hero from "./components/features/home/Hero"
import Features from "./components/features/home/Features"
import GameModes from "./components/features/home/GameModes"
import CorporateEvents from "./components/features/home/CorporateEvents"
import Footer from "./components/layout/Footer"
import Banner from "./components/shared/ui/Banner"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Banner />
        <Hero />
        <Features />
        <GameModes />
        <CorporateEvents />
      </main>
      <Footer />
    </div>
  )
}
