import Header from "../components/Header"
import Footer from "../components/Footer"
import ContactHero from "../components/ContactHero"
import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactInfo"
import FAQ from "../components/FAQ"

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <ContactHero />
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

