import { Briefcase, Cake, Users, UsersRound } from "lucide-react"
import { PricingCard, PricingCardProps } from "./PricingOptions"

const groupOptions = [
    {
      name: "Fête d'Anniversaire",
      price: 2100,
      participants: "Jusqu'à 10 joueurs",
      maxPlayers: 10,
      duration: "2 heures",
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
      price: 6300,
      participants: "Jusqu'à 20 joueurs",
      maxPlayers: 20,
      duration: "3 heures",
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
      price: 1500,
      participants: "Jusqu'à 6 joueurs",
      maxPlayers: 6,
      duration: "90 minutes",
      icon: Users,
      features: [
        "90 minutes de jeu", 
        "Espace casier partagé", 
        "15% de réduction sur nourriture et boissons", 
        "Photo de groupe"
      ],
    },
  ]

  export default function GroupOffers({ handleBook }: { handleBook: (option: PricingCardProps['option'], type: 'individual' | 'group') => void }) {
    return (
        <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-12">
            <UsersRound className="w-8 h-8 text-green-800 mb-3 sm:mr-3" />
            <h2 className="text-4xl font-bold text-center text-green-800">Offres de Groupe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupOptions.map((option, index) => (
              <PricingCard
                key={index} 
                option={option} 
                type="group" 
                onBook={handleBook}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }