import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import AboutHero from "@/components/features/about/AboutHero"
import OurStory from "@/components/features/about/OurStory"
import Team from "@/components/features/about/Team"
import Timeline from "@/components/features/about/Timeline"
import ArenaShowcase from "@/components/features/about/ArenaShowcase"
import Link from "next/link"

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
        {/* Call-to-Action Section */}
        <section className="py-16 bg-green-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Prêt à vivre l&apos;aventure Wild Arena ?
              </h2>
              <p className="text-lg text-gray-100 mb-8">
                Rejoignez-nous pour une expérience de laser game unique en pleine nature
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/pricing"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-green-800 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Réserver maintenant
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-600 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
