import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import LocationsHero from "@/components/features/locations/LocationsHero"
import LocationsList from "@/components/features/locations/LocationsList"
import LocationMap from "@/components/features/locations/LocationMap"

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
