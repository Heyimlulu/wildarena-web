import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Offer } from '@/types/models/offers';
import { Clock, Shield, Users } from 'lucide-react';
import React from 'react';

const offers: Offer[] = [
  // Available job offers can be added here
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="w-full">
        <div className="xl:py-28 md:py-20 py-10 xl:px-0 px-10">
          <span className="w-fit mx-auto flex items-center justify-center bg-emerald-50 rounded-full text-emerald-600 text-center text-sm font-medium leading-5 px-3 py-1 mb-5">Emplois chez Wild Arena</span>
          <h1 className="text-gray-900 text-center font-manrope lg:text-5xl text-4xl font-bold leading-tight mb-8">Travailler pour <br /> Wild Arena</h1>
          <p className="text-gray-900 text-center text-lg font-normal leading-7">Wild Arena offre des opportunités de travail passionnantes pour les étudiants et jeunes diplômés <br /> souhaitant acquérir une expérience unique dans le domaine du divertissement.</p>
        </div>
        <div className="lg:py-24 md:py-16 py-10 bg-slate-50 xl:px-0 px-10">
          <h2 className="text-gray-900 text-center font-manrope lg:text-4xl text-3xl font-bold leading-10 mb-14">Postes disponibles</h2>
          <div className="lg:max-w-3xl md:max-w-xl sm:max-w-md max-w-sm mx-auto border border-slate-200 bg-white rounded-2xl p-12">
            {offers.length === 0 && (
              <p className="text-gray-500 text-center text-lg font-normal leading-7">Aucun poste disponible actuellement.</p>
            )}
            {offers.map((offer, index) => (
              <div key={index} className={`flex justify-between gap-x-8 py-6 ${index === offers.length - 1 ? '' : 'border-b'} border-gray-200`}>
                <div>
                  <h3 className="text-green-800 text-xl font-medium leading-8">{offer.title}</h3>
                  <p className="text-green-600 text-sm mt-2">{offer.duration} - {offer.percentage}</p>
                </div>
                <button className="w-24 h-9 rounded-full bg-green-50 hover:bg-green-100 transition-all duration-700 text-green-600 text-xs font-semibold leading-4">Postuler</button>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:max-w-6xl w-auto mx-auto xl:py-28 md:py-16 py-10 xl:px-0 px-10">
          <h3 className="text-gray-900 text-center lg:text-4xl text-3xl font-bold leading-10 mb-5">Pourquoi rejoindre Wild Arena ?</h3>
          <p className="text-gray-500 text-center text-lg font-normal leading-7 lg:mb-14 mb-6">Nous offrons un environnement dynamique et stimulant où vous pourrez développer <br /> vos compétences et contribuer à des projets innovants.</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-4 lg:pb-24 pb-10 border-b border-gray-200 max-w-lg mx-auto md:max-w-3xl lg:max-w-full">
            <div className="p-8 group rounded-2xl transition-all duration-500 bg-white hover:shadow-md">
              <div className="w-20 h-20 bg-green-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">Formation pratique</h4>
              <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">Acquérez une expérience concrète dans l&apos;organisation d&apos;événements et la gestion de projets innovants.</p>
            </div>
            <div className="p-8 group rounded-2xl transition-all duration-500 bg-white hover:shadow-md">
              <div className="w-20 h-20 bg-green-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">Flexibilité</h4>
              <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">Des horaires adaptés à vos études avec la possibilité de travailler à temps partiel.</p>
            </div>
            <div className="p-8 group rounded-2xl transition-all duration-500 bg-white hover:shadow-md">
              <div className="w-20 h-20 bg-green-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">Développement</h4>
              <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">Opportunités d&apos;apprentissage continues et possibilité d&apos;évolution vers un poste permanent.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
