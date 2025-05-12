'use client'

import { Shield, Users, Target, Zap } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function GameModes() {
    const { t } = useTranslation();

    const gameModes = [
      {
        name: t("home.game_modes.0.name"),
        description: t("home.game_modes.0.description"),
        icon: Users,
      },
      {
        name: t("home.game_modes.1.name"),
        description: t("home.game_modes.1.description"),
        icon: Shield,
      },
      {
        name: t("home.game_modes.2.name"),
        description: t("home.game_modes.2.description"),
        icon: Zap,
      },
      {
        name: t("home.game_modes.3.name"),
        description: t("home.game_modes.3.description"),
        icon: Target,
      },
    ]
  return (
    <section id="game-modes" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-green-800">
            {t("home.game_modes.title")}
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
              {t("home.game_modes.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
