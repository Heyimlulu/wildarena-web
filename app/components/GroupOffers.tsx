import { Users, Cake, Briefcase } from "lucide-react"

const groupOffers = [
  {
    name: "Fête d'Anniversaire",
    price: 250,
    participants: "Jusqu'à 10 joueurs",
    icon: Cake,
    features: [
      "2 heures de jeu",
      "Salle privée pendant 1 heure",
      "Pizza et boissons incluses",
      "Cadeau spécial pour la personne fêtée",
    ],
  },
  {
    name: "Team Building",
    price: 400,
    participants: "Jusqu'à 20 joueurs",
    icon: Briefcase,
    features: [
      "3 heures de jeu",
      "Salle de conférence privée pendant 1 heure",
      "Exercices de team-building personnalisés",
      "Options de restauration disponibles",
      "Photo de groupe et certificat",
    ],
  },
  {
    name: "Groupe d'Amis",
    price: 180,
    participants: "Jusqu'à 6 joueurs",
    icon: Users,
    features: ["90 minutes de jeu", "Espace casier partagé", "15% de réduction sur nourriture et boissons", "Photo de groupe"],
  },
]

export default function GroupOffers() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Offres de Groupe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groupOffers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <offer.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">{offer.name}</h3>
                <div className="text-3xl font-bold text-gray-800 mb-2">CHF {offer.price}.-</div>
                <div className="text-lg text-gray-600 mb-4">{offer.participants}</div>
                <ul className="mb-6">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  Réserver un Événement de Groupe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

