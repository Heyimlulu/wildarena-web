'use client'

import { LucideProps } from "lucide-react"
import { useState } from "react"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale } from "react-datepicker"
import { fr } from "date-fns/locale/fr"
import GroupOffers from "./GroupOffers"
import IndividualsOffers from "./IndividualsOffers"
import { BookingModal } from "./BookingModal"

registerLocale('fr', fr)

export interface PricingCardProps {
  option: {
    name: string
    price: number
    duration: string
    icon: React.ComponentType<LucideProps>
    maxPlayers: number
    participants?: string
    features: string[]
  }
  type: 'individual' | 'group'
  onBook: (option: PricingCardProps['option'], type: 'individual' | 'group') => void
}

export function PricingCard({ option, type, onBook }: PricingCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="p-8">
        <option.icon className="w-12 h-12 text-red-500 mb-6" />
        <h3 className="text-2xl font-bold text-green-800 mb-4">{option.name}</h3>
        <div className="text-4xl font-bold text-gray-800 mb-4">
        {type === 'group' ? (
          <div className="text-4xl font-bold text-gray-800 mb-4">
            Dès CHF {option.price}.-
          </div>
        ) : (
          <div className="text-4xl font-bold text-gray-800 mb-4">
            CHF {option.price}.-
          </div>
        )}
          <span className="text-lg text-gray-600 block mt-1">
            {option.duration}
          </span>
        </div>
        {type === 'group' && option.participants && (
          <div className="text-lg text-gray-600 mb-4">{option.participants}</div>
        )}
        <ul className="space-y-3 mb-8">
          {option.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => onBook(option, type)}
          className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-center"
        >
          {type === 'group' ? 'Réserver un Événement de Groupe' : 'Réserver Maintenant'}
        </button>
      </div>
    </div>
  )
}

export default function PricingOptions() {
  const [selectedOption, setSelectedOption] = useState<PricingCardProps['option'] | null>(null)
  const [bookingType, setBookingType] = useState<'individual' | 'group'>('individual')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleBook = (option: PricingCardProps['option'], type: 'individual' | 'group') => {
    setSelectedOption(option)
    setBookingType(type)
    setIsModalOpen(true)
  }

  return (
    <>
      <IndividualsOffers handleBook={handleBook} />
      <GroupOffers handleBook={handleBook} />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedOption={selectedOption}
        bookingType={bookingType}
      />
    </>
  )
}
