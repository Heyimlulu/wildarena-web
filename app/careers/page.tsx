import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Offer } from '@/types/models/offers';
import { ArrowRight, Briefcase, Calendar, TrendingUp, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const opporunities = [
  {
    title: 'Innovation',
    description: 'Une culture d\'innovation et de créativité qui vous permet d\'apporter votre touche personnelle.',
    icon: <TrendingUp className="w-8 h-8 text-green-600" />
  },
  {
    title: 'Flexibilité',
    description: 'Des horaires flexibles pour vous aider à gérer vos priorités et à trouver un équilibre idéal entre vie personnelle et professionnelle.',
    icon: <Calendar className="w-8 h-8 text-green-600" />
  },
  {
    title: 'Social',
    description: 'Rejoignez une équipe dynamique et passionnée qui s\'engage à vous aider à atteindre vos objectifs.',
    icon: <MessageCircle className="w-8 h-8 text-green-600" />
  }
]

const internshipsOpportunities = [
  {
    title: 'Formation pratique',
    description: 'Acquérez une expérience concrète dans l\'organisation d\'événements et la gestion de projets innovants.',
    icon: <Briefcase className="w-8 h-8 text-green-600" />
  },
  {
    title: 'Développement',
    description: 'Opportunités d\'apprentissage continues et possibilité d\'évolution vers un poste permanent.',
    icon: <TrendingUp className="w-8 h-8 text-green-600" />
  }
]

const offers: Offer[] = [
  // Available job offers can be added here
]

export const metadata = {
  title: 'Wild Arena | Emplois',
  description: 'Découvrez les emplois disponibles chez Wild Arena',
  keywords: "laser game, plein air, team building, activité groupe, laser game, Valais, Suisse",
}

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

        <div className="xl:max-w-6xl w-auto mx-auto xl:py-28 md:py-16 py-10 xl:px-0 px-10">
          <h3 className="text-gray-900 text-center lg:text-4xl text-3xl font-bold leading-10 mb-5">Pourquoi rejoindre Wild Arena ?</h3>
          <p className="text-gray-500 text-center text-lg font-normal leading-7 lg:mb-14 mb-6">Nous offrons un environnement dynamique et stimulant où vous pourrez développer <br /> vos compétences et contribuer à des projets innovants.</p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-4 lg:pb-24 pb-10 max-w-lg mx-auto md:max-w-3xl lg:max-w-full">
            {opporunities.map((opportunity, index) => (
              <div key={index} className="p-8 group rounded-2xl transition-all duration-500 bg-white hover:shadow-md">
                <div className="w-20 h-20 bg-green-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500">
                  {opportunity.icon}
                </div>
                <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">{opportunity.title}</h4>
                <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">{opportunity.description}</p>
              </div>
            ))}
          </div>


          {/* <h3 className="text-gray-900 text-center lg:text-4xl text-3xl font-bold leading-10 mb-5">Stages et opportunités pour les étudiants et jeunes diplômés</h3>
          <p className="text-gray-500 text-center text-lg font-normal leading-7 lg:mb-14 mb-6">Nous offrons des stages et des opportunités pour les étudiants et jeunes diplômés souhaitant acquérir une expérience unique dans le domaine du divertissement.</p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-4 lg:pb-24 pb-10 max-w-lg mx-auto md:max-w-3xl lg:max-w-full">
            {internshipsOpportunities.map((opportunity, index) => (
              <div key={index} className="p-8 group rounded-2xl transition-all duration-500 bg-white hover:shadow-md">
                <div className="w-20 h-20 bg-green-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500">
                  {opportunity.icon}
                </div>
                <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">{opportunity.title}</h4>
                <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">{opportunity.description}</p>
              </div>
            ))}
          </div> */}
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
        <div className="lg:mt-24 lg:pb-24 pb-10 mt-10 bg-green-700 p-12">
          <div className="lg:flex items-center justify-between gap-6">
            <div className="lg:mb-0 mb-10">
              <h3 className="text-white font-manrope lg:text-4xl text-3xl font-semibold leading-10 mb-5">Vous ne voyez pas le poste qui vous intéresse?</h3>
              <p className="text-white text-xl font-normal leading-8">Nous sommes toujours à la recherche de personnes talentueuses pour rejoindre notre équipe. Envoyez-nous votre CV et nous vous contacterons pour tout poste futur.</p>
            </div>
            <Link href="mailto:info.wild.arena@gmail.com" className="px-8 h-14 flex items-center justify-center text-green-700 text-lg font-semibold leading-7 gap-2 rounded-full bg-white hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-all duration-700 whitespace-nowrap"> 
              Envoyez votre CV 
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
