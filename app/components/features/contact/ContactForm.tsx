"use client"

import React from 'react';
import { useState } from "react"
import { Calendar } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale } from "react-datepicker"
import { fr } from "date-fns/locale/fr"
import { API_ROUTES } from '@/app/constants';

registerLocale('fr', fr)

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    date: null as Date | null,
    time: "",
    players: "1",
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
      const response = await fetch(API_ROUTES.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          date: formData.date.toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setStatus({ loading: false, error: null, success: true })
      setFormData({ 
        name: "", 
        email: "", 
        subject: "", 
        message: "", 
        date: null, 
        time: "", 
        players: "1" 
      })

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }))
      }, 5000)
    } catch (error) {
      console.error(error)
      setStatus({ 
        loading: false, 
        error: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.", 
        success: false 
      })
    }
  }

  return (
    <div className="h-full bg-white rounded-lg shadow-lg p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8 text-center">Réserver une partie</h2>
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1.5">
              Nom, Prénom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          <div>
            <label htmlFor="date" className="block text-gray-700 font-semibold mb-1.5">
              Date
            </label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              locale="fr"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-gray-700 font-semibold mb-1.5">
              Heure
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              required
            >
              <option value="">Sélectionnez une heure</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="players" className="block text-gray-700 font-semibold mb-1.5">
              Nombre de joueurs
            </label>
            <select
              id="players"
              name="players"
              value={formData.players}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              required
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-gray-700 font-semibold mb-1.5">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-1.5">
            Message (optionnel)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors resize-none"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status.loading}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50"
          >
            {status.loading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Calendar className="w-5 h-5 mr-2" />
                Réserver
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
            Votre demande de réservation a été envoyée avec succès !
          </div>
        )}
      </form>
    </div>
  )
}
