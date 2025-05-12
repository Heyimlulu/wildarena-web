import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import AboutHero from "@/components/features/about/AboutHero"
import OurStory from "@/components/features/about/OurStory"
import Team from "@/components/features/about/Team"
import Timeline from "@/components/features/about/Timeline"
import ArenaShowcase from "@/components/features/about/ArenaShowcase"
import Careers from "@/components/features/about/Careers"
import CTA from "@/components/features/about/CTA"

export const metadata = {
  title: "Wild Arena | A propos",
  description: "Découvrez l'histoire et l'équipe derrière Wild Arena, le laser game en plein air.",
  keywords: "laser game, plein air, team building, activité groupe, laser tag, Valais, Suisse",
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <AboutHero />
        <OurStory />
        <ArenaShowcase />
        <Timeline />
        <Team />
        <Careers />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
