import Link from "next/link"
import { Users, Clock, Target, Shield } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import captureFlag from "@/images/game-modes/capture-flag.jpg"
import teamMatching from "@/images/game-modes/team-matching.jpg"
import lastSurvivor from "@/images/game-modes/last-survivor.jpg"
import domination from "@/images/game-modes/domination.jpg"

const gameModes = [
  {
    title: "Match en équipe",
    icon: Users,
    image: teamMatching,
    players: "8-12 joueurs",
    duration: "30 minutes",
    description: "Chaque équipe affronte l'autre pour marquer le plus de points. L'équipe avec le plus de points remporte la partie.",
    features: [
      "Points de respawn stratégiques",
      "Bonus de santé",
      "Munitions limitées"
    ]
  },
  {
    title: "Capture de Drapeau",
    icon: Target,
    image: captureFlag,
    players: "8-12 joueurs",
    duration: "20 minutes",
    description: "Deux équipes s'affrontent pour capturer le drapeau adverse tout en défendant le leur. Stratégie et travail d'équipe sont essentiels.",
    features: [
      "Points de respawn stratégiques",
      "Zones de bonus",
      "Objectifs multiples"
    ]
  },
  {
    title: "Dernier Survivant",
    icon: Shield,
    image: lastSurvivor,
    players: "6-10 joueurs",
    duration: "15 minutes",
    description: "Chacun pour soi ! Le dernier joueur en vie remporte la partie. Restez vigilant et utilisez le terrain à votre avantage.",
    features: [
      "Zone de jeu qui rétrécit",
      "Bonus de santé",
      "Munitions limitées"
    ]
  },
  {
    title: "Domination",
    icon: Target,
    image: domination,
    players: "10-16 joueurs",
    duration: "25 minutes",
    description: "Contrôlez les points stratégiques de la carte pour accumuler des points. La coordination d'équipe est la clé de la victoire.",
    features: [
      "Points de contrôle multiples",
      "Système de score dynamique",
      "Rôles spécialisés"
    ]
  },
]

export default function GameModes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Modes de Jeu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos différents modes de jeu, chacun offrant une expérience unique et des défis passionnants !
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {gameModes.map((mode, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* <div className="relative aspect-video">
                  <Image
                    src={mode.image}
                    alt={mode.title}
                    fill
                    className="object-cover object-top"
                  />
                </div> */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <mode.icon className="w-6 h-6 text-green-700" />
                    <h2 className="text-2xl font-bold text-gray-900">{mode.title}</h2>
                  </div>
                  <div className="flex items-center gap-6 text-gray-600 text-sm mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {mode.players}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {mode.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{mode.description}</p>
                  <div className="space-y-2">
                    {mode.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-green-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Prêt à jouer ?</h2>
              <p className="text-green-700 mb-6">
                Réservez votre session maintenant et choisissez votre mode de jeu préféré !
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
