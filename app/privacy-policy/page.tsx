import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Politique de Confidentialité | Wild Arena',
  description: 'Notre politique de confidentialité détaille comment nous protégeons vos données personnelles.',
  keywords: 'politique de confidentialité, protection des données, rgpd, wild arena',
}

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold leading-tight mt-0 mb-2 text-gray-800">Politique de Confidentialité</h1>
          <p className="text-gray-600 leading-relaxed mb-4">Votre vie privée est importante pour nous. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.</p>
          
          <p className="text-gray-600 leading-relaxed mb-4">Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</p>
          
          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">1. Collecte des Données</h2>
            <p className="text-gray-600 leading-relaxed">Nous collectons uniquement les données nécessaires pour vous fournir nos services:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600 leading-relaxed">Informations de contact (nom, email, téléphone)</li>
              <li className="text-gray-600 leading-relaxed">Informations de réservation</li>
              <li className="text-gray-600 leading-relaxed">Données de navigation anonymisées</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">2. Utilisation des Données</h2>
            <p className="text-gray-600 leading-relaxed">Vos données sont utilisées pour:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600 leading-relaxed">Gérer vos réservations</li>
              <li className="text-gray-600 leading-relaxed">Vous contacter concernant nos services</li>
              <li className="text-gray-600 leading-relaxed">Améliorer notre site web et nos services</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">3. Protection des Données</h2>
            <p className="text-gray-600 leading-relaxed">Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisée.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">4. Vos Droits</h2>
            <p className="text-gray-600 leading-relaxed">Conformément au RGPD, vous disposez des droits suivants:</p>
            <ul className="list-disc list-inside">
              <li className="text-gray-600 leading-relaxed">Droit d&apos;accès à vos données</li>
              <li className="text-gray-600 leading-relaxed">Droit de rectification</li>
              <li className="text-gray-600 leading-relaxed">Droit à l&apos;effacement</li>
              <li className="text-gray-600 leading-relaxed">Droit à la limitation du traitement</li>
              <li className="text-gray-600 leading-relaxed">Droit à la portabilité des données</li>
            </ul>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">5. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez contrôler l&apos;utilisation des cookies via les paramètres de votre navigateur.</p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold leading-tight mt-0 mb-2 text-gray-800">6. Contact</h2>
            <p className="text-gray-600 leading-relaxed">Pour toute question concernant notre politique de confidentialité, contactez-nous à:</p>
            <p className="text-gray-600 leading-relaxed">Email: info.wild.arena@gmail.com</p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
