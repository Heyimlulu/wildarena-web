import Header from "../components/Header"
import Footer from "../components/Footer"
import LocationsHero from "../components/LocationsHero"
import LocationsList from "../components/LocationsList"
import LocationMap from "../components/LocationMap"

export default function Locations() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <LocationMap />
        <LocationsHero />
        <LocationsList />
      </main>
      <Footer />
    </div>
  )
}

