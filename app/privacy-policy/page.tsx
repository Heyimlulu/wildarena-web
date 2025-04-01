import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Politique de confidentialité</h1>
        <p className="mb-4">Votre vie privée est importante pour nous. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.</p>
        {/* Add more content as needed */}
        <div className="mt-8">
          <Link href="/" className="text-green-500 hover:underline">
            Retour à la page d&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 