import { UNIT_PRICE } from '@/utils/constants';
import { Clock, CreditCard, Info, Users } from 'lucide-react';
import Link from 'next/link';

export default function PracticalInfo() {
  return (
    <main className="container mx-auto px-4 py-12 sm:py-16">
      {/* Main Description */}
      <div className="mb-12">
        <div className="mb-8 p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">À propos de notre jeu</h2>
          <p className="mb-4">
            À Wild Arena, vous serez immergé dans une aventure totale en pleine nature ! Vous devrez
            vous adapter et vous entraîner pour maîtriser les armes laser et atteindre vos objectifs.
          </p>
          <p className="mb-4">
            Nos laser games proposent une expérience 100% réelle - pas de réalité virtuelle, tout se passe
            dans des décors naturels.
          </p>
          <p className="mb-4">
          Nos arènes peuvent accueillir jusqu&apos;à 2-8 joueurs en fonction du type de jeu. Pour les groupes
          plus importants, vous pouvez vous diviser en différents groupes. Les activités conviennent à
          tous les âges à partir de 7 ans (avec accompagnement).
          </p>
        </div>
        {/* Key Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Pricing Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Tarifs</h3>
            </div>
            <ul className="space-y-2">
              <li>À partir de CHF {UNIT_PRICE}.- par personne</li>
              <li>Gratuit pour les enfants de moins de 7 ans</li>
              <li>Forfaits familiaux spéciaux disponibles</li>
              <li>Vous pouvez annuler votre réservation sans aucun frais jusqu&apos;à la veille au plus tard.</li>
              <li>En cas d&apos;annulation le jour même, nous vous facturerons des frais d&apos;annulation de CHF 50.- à régler immédiatement.</li>
            </ul>
          </div>
          {/* Opening Hours Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Horaire d&apos;ouverture</h3>
            </div>
            <p>Lundi - Mardi : Fermé</p>
            <p>Mercredi - Dimanche : 09:30 - 22:30</p>
            <p className="mt-2 text-sm text-gray-600">Réservation requise</p>
          </div>
          {/* Age Requirements Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Exigences</h3>
            </div>
            <ul className="space-y-2">
              <li>Conçu pour les âges de 7 ans et plus</li>
              <li>Moins de 14 ans : accompagneur adulte obligatoire</li>
              <li>2-8 joueurs par arène</li>
              <li>Aucune compétence physique requise</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
