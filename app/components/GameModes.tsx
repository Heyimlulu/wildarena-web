import { Shield, Users, Clock, Zap } from "lucide-react"

const gameModes = [
  {
    name: "Team Deathmatch",
    description: "Classic team vs team combat. Eliminate opponents and score points for your team.",
    icon: Users,
  },
  {
    name: "Capture the Flag",
    description: "Infiltrate the enemy base, grab their flag, and return it to your base to score.",
    icon: Shield,
  },
  {
    name: "Last Man Standing",
    description: "Every player for themselves. Be the last one with lives remaining to win.",
    icon: Zap,
  },
  {
    name: "Timed Assault",
    description: "Race against the clock to score the most points before time runs out.",
    icon: Clock,
  },
]

export default function GameModes() {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">Game Modes</h2>
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

