import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Expérience immersive en pleine nature",
  "Équipement de dernière génération",
  "Modes de jeu variés et passionnants",
  "Encadrement professionnel",
  "Sécurité maximale",
  "Accessible à tous les niveaux"
]

export default function OurStory() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-square w-full max-w-lg mx-auto">
                <Image
                  src="/images/logo.png"
                  alt="Wild Arena Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain rounded-2xl p-4 bg-gray-50 shadow-lg hover:scale-[1.02] transition-transform duration-300"
                  priority
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-green-800">Notre Histoire</h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p className="text-base sm:text-lg leading-relaxed">
                  Wild Arena a été fondée en 2025 par un groupe de passionnés du laser game qui va pour objectif de proposer une expérience de jeu en pleine nature.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Des joueurs occasionnels aux équipes compétitives, Wild Arena offre quelque chose pour tout le monde grâce à nos arènes et notre équipement de pointe.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Nous sommes engagés dans une innovation continue, garantissant que chaque visite soit remplie d&apos;excitation, de stratégie et de moments inoubliables.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
