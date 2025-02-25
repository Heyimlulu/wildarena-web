import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Co-founder",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "John Smith",
    role: "CTO & Co-founder",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Alice Johnson",
    role: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Alice Johnson",
    role: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center text-green-800">{member.name}</h3>
              <p className="text-gray-600 text-center mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin />
                </a>
                <a href={member.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

