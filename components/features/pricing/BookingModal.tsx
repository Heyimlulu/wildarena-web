import { X, Clock } from 'lucide-react';
import DatePicker from 'react-datepicker';
import { fr } from 'date-fns/locale';
import { useBookingForm } from '@/hooks/forms/useBookingForm';
import { calculateFlexiblePrice } from '@/services/pricing/calculator';
import { PricingCardProps } from './PricingOptions';
import { IndividualPricingOption } from '@/enums/pricing';
import ReCaptcha from '@/components/ReCaptcha';
import ReCaptchaPrivacy from '@/components/ReCaptchaPrivacy';
import React from 'react';
import { AVAILABLE_TIMES, AVAILABLE_PERIODS } from '@/constants/time';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedOption: PricingCardProps['option'] | null;
  bookingType: 'individual' | 'group';
}

export function BookingModal({ isOpen, onClose, selectedOption, bookingType }: BookingModalProps) {
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldValue,
    resetForm,
    isSubmitting,
    submitError,
    submitSuccess
  } = useBookingForm();

  React.useEffect(() => {
    if (selectedOption) {
      setFieldValue('package', selectedOption.name);
      setFieldValue('price', selectedOption.price);
      setFieldValue('players', selectedOption.maxPlayers?.toString() || '1');
    }
  }, [selectedOption]);

  if (!isOpen) return null;

  if (submitSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Réservation confirmée!</h3>
            <p className="text-gray-600 mb-6">
              Nous vous avons envoyé un email de confirmation avec tous les détails de votre réservation.
            </p>
            <button
              onClick={() => {
                resetForm();
                onClose();
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    );
  }

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

          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 text-center">
              Prix total: CHF {calculateFlexiblePrice(selectedOption!, values.players)}.-
            </p>
          </div>

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
                  value={values.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                    errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                    errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                  Date
                </label>
                <DatePicker
                  selected={values.date}
                  onChange={(date) => setFieldValue('date', date)}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  locale={fr}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                    errors.date && touched.date ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.date && touched.date && (
                  <p className="mt-1 text-red-500 text-sm">{errors.date}</p>
                )}
              </div>
              {(selectedOption?.name !== IndividualPricingOption.HALF_DAY_PASS && selectedOption?.name !== IndividualPricingOption.FULL_DAY_PASS) && (
                <div>
                  <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">
                    Heure
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={values.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                      errors.time && touched.time ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Sélectionnez une heure</option>
                    {AVAILABLE_TIMES.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {errors.time && touched.time && (
                    <p className="mt-1 text-red-500 text-sm">{errors.time}</p>
                  )}
                </div>
              )}
              {selectedOption?.name === IndividualPricingOption.HALF_DAY_PASS && (
                <div>
                  <label htmlFor="period" className="block text-gray-700 font-semibold mb-2">
                    Période
                  </label>
                  <select
                    id="period"
                    name="period"
                    value={values.period}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                      errors.period && touched.period ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Sélectionnez une période</option>
                    {AVAILABLE_PERIODS.map((period) => (
                      <option key={period} value={period}>{period}</option>
                    ))}
                  </select>
                  {errors.period && touched.period && (
                    <p className="mt-1 text-red-500 text-sm">{errors.period}</p>
                  )}
                </div>
              )}
            </div>

            {bookingType === 'group' && (
              <div>
                <label htmlFor="players" className="block text-gray-700 font-semibold mb-2">
                  Nombre de joueurs
                </label>
                <select
                  id="players"
                  name="players"
                  value={values.players}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                    errors.players && touched.players ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                >
                  {Array.from(
                    { length: selectedOption?.maxPlayers || 1 },
                    (_, i) => i + 1
                  ).map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                {errors.players && touched.players && (
                  <p className="mt-1 text-red-500 text-sm">{errors.players}</p>
                )}
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message (optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors resize-none"
              />
            </div>

            <div className="mt-4">
              <ReCaptcha onVerify={(token) => setFieldValue('recaptchaToken', token)} />
              <ReCaptchaPrivacy />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Clock className="w-5 h-5 mr-2" />
                    Confirmer la réservation
                  </>
                )}
              </button>
            </div>

            {submitError && (
              <div className="mt-4 text-red-600 text-center">
                {submitError}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}