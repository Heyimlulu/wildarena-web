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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-800">Pourquoi choisir Wild Arena?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-green-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
