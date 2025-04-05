import Link from 'next/link';
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Conditions de Service</h1>
        <p className="mb-4">Ces conditions régissent votre utilisation de nos services. En utilisant nos services, vous acceptez ces conditions.</p>
        {/* Ajoutez plus de contenu au besoin */}
        <div className="mt-8">
          <Link href="/" className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg">
            Retour à la page d&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService; 