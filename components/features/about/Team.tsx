import Image from "next/image"

const teamMembers = [
  {
    name: "Benoît Barras",
    role: "CEO & Co-fondateur",
    image: "/avatars/lion.png",
    bio: "Passionné par l'innovation et le développement d'expériences uniques.",
  },
  {
    name: "Lucas Rouiller-Monay",
    role: "CTO & Co-fondateur",
    image: "/avatars/fox.png",
    bio: "Expert en technologie et développement de solutions innovantes.",
  },
  {
    name: "David Passera",
    role: "COO & Co-fondateur",
    image: "/avatars/wolf.png",
    bio: "Spécialiste des opérations et de l'expérience client.",
  },
  {
    name: "Vincent Brassard",
    role: "CIO & Co-fondateur",
    image: "/avatars/owl.png",
    bio: "Expert en stratégie d'information et innovation technologique.",
  },
]

export default function Team() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800">Notre Équipe</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Une équipe passionnée et expérimentée, dédiée à créer la meilleure expérience de laser game en pleine nature.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 128px, 128px"
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2 text-green-800">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
