import Header from "../components/Header"
import Footer from "../components/Footer"
import LocationsHero from "../components/LocationsHero"
import LocationsList from "../components/LocationsList"

export default function Locations() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <LocationsHero />
        <LocationsList />
      </main>
      <Footer />
    </div>
  )
}

