import { Check } from "lucide-react"

const plans = [
  {
    name: "Recruit",
    price: 29.99,
    period: "month",
    features: ["2 games per month", "Basic equipment", "Access to weekday sessions", "10% off merchandise"],
    cta: "Join the Squad",
  },
  {
    name: "Veteran",
    price: 59.99,
    period: "month",
    features: [
      "5 games per month",
      "Premium equipment",
      "Access to all sessions",
      "20% off merchandise",
      "1 guest pass per month",
    ],
    cta: "Level Up",
    popular: true,
  },
  {
    name: "Elite",
    price: 99.99,
    period: "month",
    features: [
      "Unlimited games",
      "VIP equipment",
      "Priority booking",
      "30% off merchandise",
      "3 guest passes per month",
      "Exclusive events access",
    ],
    cta: "Go Elite",
  },
]

export default function PricingPlans() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-100 rounded-lg shadow-md overflow-hidden ${plan.popular ? "border-4 border-red-500" : ""}`}
            >
              {plan.popular && <div className="bg-red-500 text-white text-center py-2 font-semibold">Most Popular</div>}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-gray-800 mb-4">
                  ${plan.price}
                  <span className="text-lg text-gray-600">/{plan.period}</span>
                </div>
                <ul className="mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-2">
                      <Check className="text-green-500 mr-2" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

