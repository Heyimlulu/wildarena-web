import { Clock, UserCircle, Users, Zap } from "lucide-react";
import { PricingCard, PricingCardProps } from "./PricingOptions";

const individualOptions = [
    {
      name: "Partie Unique",
      price: 35,
      duration: "20 minutes",
      icon: Clock,
      maxPlayers: 1,
      features: ["Une session de jeu de 20 minutes", "Location d'équipement standard", "Formation de base incluse"],
    },
    {
      name: "Partie (1 Heure)",
      price: 95,
      duration: "60 minutes",
      icon: Zap,
      maxPlayers: 1,
      features: ["Trois sessions de jeu de 20 minutes", "Location d'équipement premium", "Session de formation prolongée"],
    },
    {
      name: "Pass Journalier",
      price: 160,
      duration: "Journée complète",
      icon: Users,
      maxPlayers: 1,
      features: ["Jeux illimités pour la journée", "Location d'équipement VIP", "Accès prioritaire à la file d'attente", "10% de réduction sur les produits dérivés"],
    },
  ]

export default function IndividualsOffers({ handleBook }: { handleBook: (option: PricingCardProps['option'], type: 'individual' | 'group') => void }) {
  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center mb-12">
        <UserCircle className="w-8 h-8 text-green-800 mb-3 sm:mr-3" />
        <h2 className="text-4xl font-bold text-center text-green-800">Offres Individuelles</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {individualOptions.map((option, index) => (
          <PricingCard
            key={index} 
            option={option} 
            type="individual" 
            onBook={handleBook}
          />
        ))}
      </div>
    </div>
  </section>
  )
}