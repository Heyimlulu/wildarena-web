import { Shield, Users, Clock, Zap } from "lucide-react"

const gameModes = [
  {
    name: "Match à mort en équipe",
    description: "Combat classique en équipe. Éliminez les adversaires et marquez des points pour votre équipe.",
    icon: Users,
  },
  {
    name: "Capture du drapeau",
    description: "Infiltrez la base ennemie, prenez leur drapeau et ramenez-le à votre base pour marquer.",
    icon: Shield,
  },
  {
    name: "Last Man Standing",
    description: "Chaque joueur pour lui-même. Soyez le dernier avec des vies restantes pour gagner.",
    icon: Zap,
  },
  {
    name: "Match chronométré",
    description: "Course contre la montre pour marquer le plus de points avant la fin du temps imparti.",
    icon: Clock,
  },
]

export default function GameModes() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">Modes de jeu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {gameModes.map((mode, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <mode.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-green-800">{mode.name}</h3>
              <p className="text-gray-600">{mode.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
