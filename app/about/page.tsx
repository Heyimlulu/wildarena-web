import Header from "../components/Header"
import Footer from "../components/Footer"
import AboutHero from "../components/AboutHero"
import OurStory from "../components/OurStory"
import Team from "../components/Team"

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

