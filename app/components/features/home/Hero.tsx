import Link from "next/link"
import { ArrowRight, Target, Users, Zap } from "lucide-react"

const quickStats = [
  { icon: Target, label: "Équipement de dernière génération" },
  { icon: Users, label: "Pour tous les âges" },
  { icon: Zap, label: "4+ modes de jeu" },
]

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"> 
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with gradient text */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">
              Le Laser Game Réinventé
            </span>
          </h1>

          {/* Subheading with clear value proposition */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 text-green-100 font-light">
            Une expérience immersive en pleine nature
          </p>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Découvrez une nouvelle façon de jouer au laser game dans un cadre naturel exceptionnel.
            Idéal pour les événements d&apos;entreprise, les fêtes et les sorties entre amis.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-2">
                <stat.icon className="w-5 h-5 text-green-300" />
                <span className="text-sm sm:text-base text-green-100">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg group"
            >
              Réserver maintenant
              <ArrowRight className="ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center justify-center transform hover:scale-105"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
