"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Comment réserver une partie?",
    answer:
      "Vous pouvez réserver une partie en ligne sur notre site web ou en appelant notre bureau principal. Nous recommandons de réserver à l'avance, notamment pour les week-ends et les jours fériés.",
  },
  {
    question: "Qu'est-ce que je devrais porter pour le laser tag?",
    answer:
      "Nous recommandons des vêtements confortables, respirants et des chaussures fermées. Évitez les vêtements amples ou flottants qui pourraient se prendre dans les équipements.",
  },
  {
    question: "Y a-t-il une limite d'âge pour jouer?",
    answer:
      "Bien que nous accueillions des joueurs de tous les âges, les enfants de moins de 7 ans doivent être accompagnés d'un adulte. Nous offrons également des séances spéciales pour les plus jeunes.",
  },
  {
    question: "Offrez-vous des remises pour les groupes?",
    answer:
      "Oui, nous offrons des paquets spéciaux pour les groupes, les fêtes d'anniversaire et les événements d'entreprise. Consultez notre page Tarifs pour plus de détails ou contactez-nous pour obtenir un devis personnalisé.",
  },
  {
    question: "Combien dure une partie typique?",
    answer:
      "Une partie standard dure environ 20 minutes, mais nous offrons divers paquets avec des durées différentes. Consultez notre page Tarifs pour plus d'informations.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-red-500" />
                ) : (
                  <ChevronDown className="text-red-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

