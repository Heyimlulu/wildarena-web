import { Milestone } from "lucide-react"

const milestones = [
  {
    year: "2024",
    title: "Conception de Wild Arena",
    description: "Naissance de l'idée et formation de l'équipe fondatrice"
  },
  {
    year: "2025",
    title: "Innovation Technologique",
    description: "Intégration d'équipements de dernière génération"
  },
  {
    year: "2025",
    title: "Recherche de partenaires et d'investisseurs",
    description: "Établissement des partenariats avec des partenaires locaux"
  },
  {
    year: "2025",
    title: "Lancement Officiel",
    description: "Ouverture de notre première arène et début des opérations"
  }
]

export default function Timeline() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800">Notre Parcours</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez les moments clés qui ont façonné Wild Arena
            </p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-200" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8 text-right">
                    {index % 2 === 0 && (
                      <div className="space-y-2">
                        <div className="text-green-700 font-bold">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center z-10">
                      <Milestone className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="w-1/2 pl-8">
                    {index % 2 === 1 && (
                      <div className="space-y-2">
                        <div className="text-green-700 font-bold">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
