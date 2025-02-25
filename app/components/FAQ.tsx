"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How do I book a game?",
    answer:
      "You can book a game online through our website or by calling our main office. We recommend booking in advance, especially for weekends and holidays.",
  },
  {
    question: "What should I wear for laser tag?",
    answer:
      "We recommend comfortable, breathable clothing and closed-toe shoes. Avoid loose or baggy clothes that might get caught on equipment.",
  },
  {
    question: "Is there an age limit for playing?",
    answer:
      "While we welcome players of all ages, children under 7 must be accompanied by an adult. We also offer special sessions for younger children.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes, we offer special packages for groups, birthday parties, and corporate events. Check our Pricing page for more details or contact us for a custom quote.",
  },
  {
    question: "How long does a typical game last?",
    answer:
      "A standard game lasts about 20 minutes, but we offer various packages with different durations. Check our Pricing page for more information.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Frequently Asked Questions</h2>
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

