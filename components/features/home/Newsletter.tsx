'use client';

import { useState } from 'react';
import { subscribeToNewsletter } from '@/services/newsletter';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await subscribeToNewsletter(email);
      setStatus({
        type: response.success ? 'success' : 'error',
        message: response.message,
      });
      if (response.success) {
        setEmail('');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-green-700 to-green-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Restez informé
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-white">
            Inscrivez-vous à notre newsletter pour recevoir les dernières nouvelles, offres spéciales et invitations exclusives aux événements de Wild Arena.
          </p>
          <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre adresse e-mail"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-green-500/10 placeholder:text-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-500 sm:text-sm/6"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg group ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Inscription...' : 'S\'inscrire'}
            </button>
          </form>
          {status.message && (
            <div className={`mt-4 text-center ${
              status.type === 'success' ? 'text-green-200' : 'text-red-200'
            }`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}