import { Users, Cake, Briefcase } from "lucide-react"

const groupOffers = [
  {
    name: "Birthday Bash",
    price: 250,
    participants: "Up to 10 players",
    icon: Cake,
    features: [
      "2 hours of gameplay",
      "Private party room for 1 hour",
      "Pizza and soft drinks included",
      "Special gift for the birthday person",
    ],
  },
  {
    name: "Team Building",
    price: 400,
    participants: "Up to 20 players",
    icon: Briefcase,
    features: [
      "3 hours of gameplay",
      "Private conference room for 1 hour",
      "Customized team-building exercises",
      "Catering options available",
      "Group photo and certificate",
    ],
  },
  {
    name: "Friend Squad",
    price: 180,
    participants: "Up to 6 players",
    icon: Users,
    features: ["90 minutes of gameplay", "Shared locker space", "15% off on food and beverages", "Group photo"],
  },
]

export default function GroupOffers() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Group Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groupOffers.map((offer, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <offer.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">{offer.name}</h3>
                <div className="text-3xl font-bold text-gray-800 mb-2">${offer.price}</div>
                <div className="text-lg text-gray-600 mb-4">{offer.participants}</div>
                <ul className="mb-6">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  Book Group Event
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

