import { Info } from "lucide-react"

export const PracticalInfoHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
    <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
    <div className="container mx-auto px-4 text-center relative">
      <div className="flex justify-center mb-6">
        <Info className="w-16 h-16 text-green-300" />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
        Informations pratiques
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl text-green-100 max-w-2xl mx-auto">
      Découvrez des informations pratiques sur notre laser game en pleine nature.
    </p>
  </div>
  </div>
  )
}