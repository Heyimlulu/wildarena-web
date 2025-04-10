import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Conditions Générales | Wild Arena',
  description: 'Les conditions générales d\'utilisation de Wild Arena.',
  keywords: 'conditions générales, termes, utilisation, wild arena',
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>
        <article className="prose prose-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold leading-tight mt-0 mb-2 text-gray-800">Conditions Générales d&apos;Utilisation</h1>

          <p className="text-gray-600 leading-relaxed mb-4">Ces conditions régissent votre utilisation de nos services. En utilisant nos services, vous acceptez ces conditions.</p>
          
          <p className="text-gray-600 leading-relaxed mb-4">Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</p>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">1. Acceptation des Conditions</h2>
            <p className="text-gray-600 leading-relaxed">En accédant et en utilisant ce site web, vous acceptez d&apos;être lié par ces conditions d&apos;utilisation, toutes les lois et réglementations applicables.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">2. Réservations</h2>
            <p className="text-gray-600 leading-relaxed">Les réservations sont soumises aux conditions suivantes:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600 leading-relaxed">Un acompte peut être demandé pour confirmer la réservation</li>
              <li className="text-gray-600 leading-relaxed">Les annulations doivent être effectuées au moins 48h à l&apos;avance</li>
              <li className="text-gray-600 leading-relaxed">Le nombre final de participants doit être confirmé 24h avant l&apos;événement</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">3. Sécurité et Comportement</h2>
            <p className="text-gray-600 leading-relaxed">Les participants s&apos;engagent à:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600 leading-relaxed">Suivre les instructions de sécurité</li>
              <li className="text-gray-600 leading-relaxed">Respecter l&apos;équipement fourni</li>
              <li className="text-gray-600 leading-relaxed">Maintenir un comportement respectueux</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">4. Responsabilité</h2>
            <p className="text-gray-600 leading-relaxed">Wild Arena ne peut être tenu responsable:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600 leading-relaxed">Des accidents dus au non-respect des consignes de sécurité</li>
              <li className="text-gray-600 leading-relaxed">Des objets perdus ou volés</li>
              <li className="text-gray-600 leading-relaxed">Des conditions météorologiques défavorables</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">5. Propriété Intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">Tout le contenu de ce site web est la propriété de Wild Arena et est protégé par les lois sur la propriété intellectuelle.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">6. Modifications</h2>
            <p className="text-gray-600 leading-relaxed">Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur le site.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">7. Contact</h2>
            <p className="text-gray-600 leading-relaxed">Pour toute question concernant ces conditions, contactez-nous à:</p>
            <p className="text-gray-600 leading-relaxed">Email: info.wild.arena@gmail.com</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}