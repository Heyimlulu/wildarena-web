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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
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
        </div>
      </div>
    </section>
  )
}
