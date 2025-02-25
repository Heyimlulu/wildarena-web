import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonials from "./components/Testimonials"
import GameModes from "./components/GameModes"
import Newsletter from "./components/Newsletter"
import CorporateEvents from "./components/CorporateEvents"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <GameModes />
        <Testimonials />
        <CorporateEvents />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

