import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Benoît Barras",
    role: "CEO & Co-founder",
    image: "",
  },
  {
    name: "Lucas Rouiller-Monay",
    role: "CTO & Co-founder",
    image: "",
    linkedin: "https://www.linkedin.com/in/lucas-rouiller-monay/",
  },
  {
    name: "David Passera",
    role: "COO & Co-founder",
    image: "",
  },
  {
    name: "Vincent Brassard",
    role: "CIO & Co-founder",
    image: "",
  },
]

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
                src={member?.image || "https://placehold.co/300x300.png"}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center text-green-800">{member.name}</h3>
              <p className="text-gray-600 text-center mb-4">{member.role}</p>
              {/* {member.linkedin &&
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin />
                  </a>
                </div>
              } */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

