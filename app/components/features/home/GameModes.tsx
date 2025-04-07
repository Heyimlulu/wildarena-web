import { Shield, Users, Target, Zap } from "lucide-react"
import Link from "next/link"

const gameModes = [
  {
    name: "Match en équipe",
    description: "Chaque équipe affronte l'autre pour marquer le plus de points. L'équipe avec le plus de points remporte la partie.",
    icon: Users,
  },
  {
    name: "Capture du drapeau",
    description: "Infiltrez la base ennemie, prenez leur drapeau et ramenez-le à votre base pour marquer.",
    icon: Shield,
  },
  {
    name: "Dernier Survivant",
    description: "Chaque joueur pour lui-même. Soyez le dernier avec des vies restantes pour gagner.",
    icon: Zap,
  },
  {
    name: "Domination",
    description: "Contrôlez les points stratégiques de la carte pour accumuler des points. La coordination d'équipe est la clé de la victoire.",
    icon: Target,
  },
]

export default function GameModes() {
  return (
    <section id="game-modes" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-800">
            Modes de jeu
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {gameModes.map((mode, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="bg-red-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <mode.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-green-800">{mode.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">{mode.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 sm:mt-16">
            <Link className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg" href="/game-modes">
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
