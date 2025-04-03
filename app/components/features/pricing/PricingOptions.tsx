'use client'

import { Users, Clock, Zap, UserCircle, UsersRound, Cake, Briefcase, X, LucideProps } from "lucide-react"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale } from "react-datepicker"
import { fr } from "date-fns/locale/fr"

registerLocale('fr', fr)

const individualOptions = [
  {
    name: "Partie Unique",
    price: 35,
    duration: "20 minutes",
    icon: Clock,
    maxPlayers: 1,
    features: ["Une session de jeu de 20 minutes", "Location d'équipement standard", "Formation de base incluse"],
  },
  {
    name: "Partie (1 Heure)",
    price: 95,
    duration: "60 minutes",
    icon: Zap,
    maxPlayers: 1,
    features: ["Trois sessions de jeu de 20 minutes", "Location d'équipement premium", "Session de formation prolongée"],
  },
  {
    name: "Pass Journalier",
    price: 160,
    duration: "Journée complète",
    icon: Users,
    maxPlayers: 1,
    features: ["Jeux illimités pour la journée", "Location d'équipement VIP", "Accès prioritaire à la file d'attente", "10% de réduction sur les produits dérivés"],
  },
]

const groupOptions = [
  {
    name: "Fête d'Anniversaire",
    price: 250,
    participants: "Jusqu'à 10 joueurs",
    maxPlayers: 10,
    duration: "2 heures",
    icon: Cake,
    features: [
      "2 heures de jeu",
      "Salle privée pendant 1 heure",
      "Pizza et boissons incluses",
      "Cadeau spécial pour la personne fêtée",
    ],
  },
  {
    name: "Team Building",
    price: 400,
    participants: "Jusqu'à 20 joueurs",
    maxPlayers: 20,
    duration: "3 heures",
    icon: Briefcase,
    features: [
      "3 heures de jeu",
      "Salle de conférence privée pendant 1 heure",
      "Exercices de team-building personnalisés",
      "Options de restauration disponibles",
      "Photo de groupe et certificat",
    ],
  },
  {
    name: "Groupe d'Amis",
    price: 180,
    participants: "Jusqu'à 6 joueurs",
    maxPlayers: 6,
    duration: "90 minutes",
    icon: Users,
    features: [
      "90 minutes de jeu", 
      "Espace casier partagé", 
      "15% de réduction sur nourriture et boissons", 
      "Photo de groupe"
    ],
  },
]

interface BookingFormData {
  name: string
  email: string
  message: string
  date: Date | null
  time: string
  players: string
  package: string
  type: 'individual' | 'group'
  price: number
}

interface PricingCardProps {
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

function PricingCard({ option, type, onBook }: PricingCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="p-8">
        <option.icon className="w-12 h-12 text-red-500 mb-6" />
        <h3 className="text-2xl font-bold text-green-800 mb-4">{option.name}</h3>
        <div className="text-4xl font-bold text-gray-800 mb-4">
          CHF {option.price}.-
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

function BookingModal({ 
  isOpen, 
  onClose, 
  selectedOption, 
  bookingType 
}: { 
  isOpen: boolean
  onClose: () => void
  selectedOption: PricingCardProps['option'] | null
  bookingType: 'individual' | 'group'
}) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    message: "",
    date: null,
    time: "",
    players: "1",
    package: selectedOption?.name || "",
    type: bookingType,
    price: selectedOption?.price || 0,
  })
  console.log(formData);
  
  const [status, setStatus] = useState({
    loading: false,
    error: null as string | null,
    success: false
  })

  const availableTimes = [
    "10:00", "11:00", "12:00", "14:00", 
    "15:00", "16:00", "17:00", "18:00"
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleDateChange = (date: Date | null) => {
    setFormData((prevState) => ({ ...prevState, date }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ loading: true, error: null, success: false })

    if (!formData.date) {
      setStatus({ 
        loading: false, 
        error: "Veuillez sélectionner une date", 
        success: false 
      })
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: formData.date.toISOString(),
          subject: `Réservation ${formData.package || ''}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send booking request')
      }

      setStatus({ loading: false, error: null, success: true })
      setTimeout(() => {
        onClose()
        setStatus(prev => ({ ...prev, success: false }))
      }, 2000)
    } catch (error) {
      console.error(error)
      setStatus({ 
        loading: false, 
        error: "Une erreur s'est produite lors de l'envoi de la réservation. Veuillez réessayer.", 
        success: false 
      })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-green-800">
              Réservation {selectedOption?.name}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {bookingType === 'group' && (
            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 text-center">
                Prix total: CHF {formData.price}.-
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Nom, Prénom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                  Date
                </label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  locale="fr"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                  Heure
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  required
                >
                  <option value="">Sélectionnez une heure</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {bookingType === 'group' && (
              <div>
                <label htmlFor="players" className="block text-gray-700 font-semibold mb-2">
                  Nombre de joueurs
                </label>
                <select
                  id="players"
                  name="players"
                  value={formData.players}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                  required
                >
                  {Array.from(
                    { length: selectedOption?.maxPlayers || 1 }, 
                    (_, i) => i + 1
                  ).map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors resize-none"
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors disabled:opacity-50"
              >
                {status.loading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Clock className="w-5 h-5 mr-2" />
                    Confirmer la réservation
                  </>
                )}
              </button>
            </div>

            {status.error && (
              <div className="text-red-500 text-center font-medium">
                {status.error}
              </div>
            )}

            {status.success && (
              <div className="text-green-500 text-center font-medium">
                Votre réservation a été envoyée avec succès !
              </div>
            )}
          </form>
        </div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <UserCircle className="w-8 h-8 text-green-800 mr-3" />
            <h2 className="text-4xl font-bold text-center text-green-800">Offres Individuelles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {individualOptions.map((option, index) => (
              <PricingCard 
                key={index} 
                option={option} 
                type="individual" 
                onBook={handleBook}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <UsersRound className="w-8 h-8 text-green-800 mr-3" />
            <h2 className="text-4xl font-bold text-center text-green-800">Offres de Groupe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupOptions.map((option, index) => (
              <PricingCard 
                key={index} 
                option={option} 
                type="group" 
                onBook={handleBook}
              />
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedOption={selectedOption}
        bookingType={bookingType}
      />
    </>
  )
}
