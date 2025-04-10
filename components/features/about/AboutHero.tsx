import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/Mountain.jpg"
        alt="Mountain background"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-green-800/90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            À propos de Wild Arena
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed">
            Découvrez l&apos;histoire derrière une expérience de laser game unique
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">1</div>
              <div className="text-sm sm:text-base text-gray-200">Région</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">1+</div>
              <div className="text-sm sm:text-base text-gray-200">Arènes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">4+</div>
              <div className="text-sm sm:text-base text-gray-200">Modes de jeu</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-sm sm:text-base text-gray-200">Équipements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
