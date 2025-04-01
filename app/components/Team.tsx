import Image from "next/image"

const teamMembers = [
  {
    name: "Benoît Barras",
    role: "CEO & Co-fondateur",
    image: "/avatars/lion.png",
  },
  {
    name: "Lucas Rouiller-Monay",
    role: "CTO & Co-fondateur",
    image: "/avatars/fox.png",
  },
  {
    name: "David Passera",
    role: "COO & Co-fondateur",
    image: "/avatars/wolf.png",
  },
  {
    name: "Vincent Brassard",
    role: "CIO & Co-fondateur",
    image: "/avatars/owl.png",
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Notre Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={member?.image}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center text-green-800">{member.name}</h3>
              <p className="text-gray-600 text-center mb-4">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

