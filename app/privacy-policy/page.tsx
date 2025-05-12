import React from 'react';
import LegalLayout from '@/components/legal/LegalLayout';
import LegalNavigation from '@/components/legal/LegalNavigation';
import { Clock } from 'lucide-react';

export const metadata = {
  title: 'Wild Arena | Politique de Confidentialité',
  description: 'Notre politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.',
  keywords: 'politique de confidentialité, protection des données, informations personnelles, wild arena',
}

const navigationItems = [
  { href: '/terms-of-service#terms', label: 'Conditions d\'utilisation' },
  { href: '/privacy-policy', label: 'Politique de confidentialité', isActive: true },
  { href: '/terms-of-service#conduct', label: 'Conduite des utilisateurs' },
  { href: '/terms-of-service#general', label: 'Conditions générales' },
  { href: '/terms-of-service#services', label: 'Services et compte' },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Politique de Confidentialité"
      description="Nous prenons votre vie privée au sérieux. Contactez-nous à info.wild.arena@gmail.com pour toute question concernant la confidentialité."
    >
      <section className="w-full relative overflow-hidden lg:py-28 py-16">
        <div className="px-12 xl:px-20">
          <div className="flex flex-col md:flex-row w-full gap-8">
            <LegalNavigation items={navigationItems} />
            
            <div className="w-full tab-pane max-md:px-4">
              <h2 className="font-manrope font-bold lg:text-4xl text-3xl text-gray-900 mb-5">Politique de Confidentialité</h2>
              <div className="flex items-center gap-3 lg:mb-10 mb-8">
                <Clock className="w-6 h-6 text-green-600" />
                <p className="font-medium text-xl leading-8 text-green-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
              
              <div className="prose max-w-none">
                <p className="font-normal text-lg leading-8 text-gray-500 lg:mb-10 mb-8">
                  Cette politique de confidentialité décrit comment Wild Arena collecte, utilise et protège vos informations personnelles lorsque vous utilisez nos services.
                </p>

                <div id="data-collection" className="mb-12">
                  <h3 className="font-manrope font-bold text-2xl text-gray-900 mb-4">1. Collecte des Données</h3>
                  <p className="text-gray-500 leading-8">Nous collectons les types d&apos;informations suivants :</p>
                  <ul className="list-disc pl-6 text-gray-500 space-y-2">
                    <li>Informations personnelles (nom, email)</li>
                    <li>Détails des réservations</li>
                    <li>Informations de paiement</li>
                    <li>Données d&apos;utilisation et analytiques</li>
                  </ul>
                </div>

                <div id="data-usage" className="mb-12">
                  <h3 className="font-manrope font-bold text-2xl text-gray-900 mb-4">2. Utilisation de vos Données</h3>
                  <p className="text-gray-500 leading-8">Vos données nous permettent de :</p>
                  <ul className="list-disc pl-6 text-gray-500 space-y-2">
                    <li>Traiter vos réservations et paiements</li>
                    <li>Communiquer sur nos services</li>
                    <li>Améliorer nos services</li>
                    <li>Assurer la sécurité</li>
                  </ul>
                </div>

                <div id="data-protection" className="mb-12">
                  <h3 className="font-manrope font-bold text-2xl text-gray-900 mb-4">3. Protection des Données</h3>
                  <p className="text-gray-500 leading-8">
                    Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
                  </p>
                </div>

                <div id="your-rights" className="mb-12">
                  <h3 className="font-manrope font-bold text-2xl text-gray-900 mb-4">4. Vos Droits</h3>
                  <p className="text-gray-500 leading-8">Vous avez le droit de :</p>
                  <ul className="list-disc pl-6 text-gray-500 space-y-2">
                    <li>Accéder à vos données personnelles</li>
                    <li>Demander la correction ou la suppression de vos données</li>
                    <li>Vous désinscrire des communications marketing</li>
                    <li>Déposer une réclamation auprès des autorités de contrôle</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LegalLayout>
  );
}
