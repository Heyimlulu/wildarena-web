import { Clock, X } from "lucide-react"
import { useState } from "react"
import DatePicker from "react-datepicker"
import { PricingCardProps } from "./PricingOptions"

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

export default function BookingModal({
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
              subject: `Réservation ${selectedOption?.name || ''}`,
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
                  Réservation {selectedOption?.name || ''}
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
                    Prix total: CHF {selectedOption?.price || 0}.-
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