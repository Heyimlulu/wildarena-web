import { Target, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Équipement de pointe",
    description: "Découvrez le laser tag comme jamais auparavant avec notre équipement de pointe et nos arènes immersives.",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Parfait pour les événements d'entreprise, les fêtes d'anniversaire ou une journée amusante entre amis et en famille.",
  },
  {
    icon: Zap,
    title: "Modes de jeu multiples",
    description: "Choisissez parmi une variété de modes de jeu passionnants pour maintenir l'adrénaline toute la journée.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-800">
          Pourquoi choisir Wild Arena?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-gray-100 p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-green-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
