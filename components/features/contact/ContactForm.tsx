"use client"

import React from 'react';
import { Calendar } from "lucide-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale } from "react-datepicker"
import { fr } from "date-fns/locale/fr"
import ReCaptcha from '@/components/ReCaptcha';
import ReCaptchaPrivacy from '@/components/ReCaptchaPrivacy';
import { useContactForm } from '@/hooks/forms/useContactForm';
import { AVAILABLE_TIMES } from '@/constants/time';

registerLocale('fr', fr)

export default function ContactForm() {
  const {
    values,
    errors,
    touched,
    isLoading,
    error,
    success,
    handleChange,
    setFieldValue,
    handleSubmit,
    resetForm
  } = useContactForm();

  if (success) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold text-green-800 mb-2">Message envoyé!</h3>
        <p className="text-green-700 mb-4">Nous vous répondrons dans les plus brefs délais.</p>
        <button
          onClick={resetForm}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
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
              value={values.name}
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
              value={values.email}
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
              selected={values.date}
              onChange={(date) => setFieldValue('date', date)}
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
              value={values.time}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              required
            >
              <option value="">Sélectionnez une heure</option>
              {AVAILABLE_TIMES.map((time) => (
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
              value={values.players}
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
            value={values.subject}
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
            value={values.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors resize-none"
          />
        </div>

        <div className="mt-4">
          <ReCaptcha onVerify={(token) => setFieldValue('recaptchaToken', token)} action="contact_submit" />
          <ReCaptchaPrivacy />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Calendar className="w-5 h-5 mr-2" />
                Réserver
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        {success && (
          <div className="text-green-500 text-center font-medium">
            Votre demande de réservation a été envoyée avec succès !
          </div>
        )}
      </form>
    </div>
  )
}
