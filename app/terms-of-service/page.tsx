import React from 'react';
import LegalLayout from '@/components/legal/LegalLayout';
import LegalNavigation from '@/components/legal/LegalNavigation';
import { Clock } from 'lucide-react';

export const metadata = {
  title: 'Wild Arena | Conditions d\'utilisation',
  description: 'Les conditions d\'utilisation et modalités des services de Wild Arena.',
  keywords: 'conditions d\'utilisation, conditions générales, termes, wild arena, légal',
}

const navigationItems = [
  { href: '#terms', label: 'Conditions d\'utilisation', isActive: true },
  { href: '/privacy-policy', label: 'Politique de confidentialité' },
  { href: '#conduct', label: 'Conduite des utilisateurs' },
  { href: '#general', label: 'Conditions générales' },
  { href: '#services', label: 'Services et compte' },
];

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Conditions d'utilisation"
      description="Nous sommes là pour vous aider ! Contactez-nous par email à info.wild.arena@gmail.com pour toute question."
    >
      <section className="w-full relative overflow-hidden lg:py-28 py-16">
        <div className="px-12 xl:px-20">
          <div className="flex flex-col md:flex-row w-full gap-8">
            <LegalNavigation items={navigationItems} />
            
            <div className="w-full tab-pane max-md:px-4">
              <h2 className="font-manrope font-bold lg:text-4xl text-3xl text-gray-900 mb-5">Conditions d&apos;utilisation</h2>
              <div className="flex items-center gap-3 lg:mb-10 mb-8">
                <Clock className="w-6 h-6 text-green-600" />
                <p className="font-medium text-xl leading-8 text-green-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
              
              <div className="prose max-w-none">
                <p className="font-normal text-lg leading-8 text-gray-500 lg:mb-10 mb-8">
                  Ces conditions générales détaillent comment nous fournissons nos services, comment vous et nous pouvons modifier ou mettre fin au contrat, que faire en cas de problème, et d&apos;autres informations importantes.
                </p>

                <div id="terms" className="mb-12">
                  <h3 className="font-manrope font-bold text-2xl text-gray-900 mb-4">1. Acceptation des Conditions</h3>
                  <p className="text-gray-500 leading-8">En accédant et en utilisant les services de Wild Arena, vous acceptez d&apos;être lié par ces conditions d&apos;utilisation et toutes les lois et réglementations applicables.</p>
                </div>

                <div id="conduct" className="mb-12">
                  <h3 className="font-manrope font-bold text-2xl text-gray-900 mb-4">2. Conduite des Utilisateurs</h3>
                  <p className="text-gray-500 leading-8">Les utilisateurs doivent :</p>
                  <ul className="list-disc pl-6 text-gray-500 space-y-2">
                    <li>Suivre toutes les consignes de sécurité</li>
                    <li>Respecter l&apos;équipement fourni</li>
                    <li>Maintenir un comportement respectueux</li>
                    <li>Se conformer aux restrictions d&apos;âge et aux exigences</li>
                  </ul>
                </div>

                <div id="services" className="mb-12">
                  <h3 className="font-manrope font-bold text-2xl text-gray-900 mb-4">3. Services et Compte</h3>
                  <p className="text-gray-500 leading-8">Nos services comprennent :</p>
                  <ul className="list-disc pl-6 text-gray-500 space-y-2">
                    <li>Réservation de sessions de jeu</li>
                    <li>Location d&apos;équipement</li>
                    <li>Organisation d&apos;événements de groupe</li>
                    <li>Formation et briefings de sécurité</li>
                  </ul>
                </div>

                <div id="general" className="mb-12">
                  <h3 className="font-manrope font-bold text-2xl text-gray-900 mb-4">4. Conditions Générales</h3>
                  <p className="text-gray-500 leading-8">
                    Wild Arena se réserve le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur le site web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
}