import { Users, Clock, Zap } from "lucide-react"

const pricingOptions = [
  {
    name: "Single Game",
    price: 15,
    duration: "20 minutes",
    icon: Clock,
    features: ["One 20-minute game session", "Standard equipment rental", "Basic training included"],
  },
  {
    name: "Power Hour",
    price: 35,
    duration: "60 minutes",
    icon: Zap,
    features: ["Three 20-minute game sessions", "Premium equipment rental", "Extended training session"],
  },
  {
    name: "Day Pass",
    price: 60,
    duration: "Full day",
    icon: Users,
    features: ["Unlimited games for the day", "VIP equipment rental", "Priority queue access", "10% off merchandise"],
  },
]

export default function PricingOptions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Individual Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <option.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">{option.name}</h3>
                <div className="text-4xl font-bold text-gray-800 mb-4">
                  ${option.price}
                  <span className="text-lg text-gray-600">/{option.duration}</span>
                </div>
                <ul className="mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

