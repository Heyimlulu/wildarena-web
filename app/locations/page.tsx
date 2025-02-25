import Header from "../components/Header"
import Footer from "../components/Footer"
import LocationsHero from "../components/LocationsHero"
import LocationsList from "../components/LocationsList"
import UpcomingLocations from "../components/UpcomingLocations"
import LocationMap from "../components/LocationMap"

export default function Locations() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <LocationsHero />
        <LocationMap />
        <LocationsList />
        <UpcomingLocations />
      </main>
      <Footer />
    </div>
  )
}

