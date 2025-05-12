import { Metadata } from 'next';
import PracticalInfo from '@/components/features/practical-info/PracticalInfo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PracticalInfoHero } from '@/components/features/practical-info/PracticalInfoHero';
import { PracticalInfoCTA } from '@/components/features/practical-info/PracticalInfoCTA';

export const metadata: Metadata = {
  title: 'Wild Arena | Informations pratiques',
  description: 'Informations pratiques sur Wild Arena - Tarifs, horaires d\'ouverture et FAQ',
  keywords: "laser game, plein air, team building, activité groupe, laser tag, Valais, Suisse",
};

export default function PracticalInfoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <PracticalInfoHero />
      <PracticalInfo />
      <PracticalInfoCTA />
      <Footer />
    </div>
  )
}
