import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import GameModes from "./components/GameModes"
import CorporateEvents from "./components/CorporateEvents"
import Footer from "./components/Footer"
import Banner from "./components/Banner"

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

