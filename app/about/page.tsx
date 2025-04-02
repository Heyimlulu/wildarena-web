import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import AboutHero from "../components/features/about/AboutHero"
import OurStory from "../components/features/about/OurStory"
import Team from "../components/features/home/Team"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
