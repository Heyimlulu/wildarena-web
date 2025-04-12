import { Metadata } from 'next';
import PracticalInfo from '@/components/features/practical-info/PracticalInfo';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PracticalInfoHero } from '@/components/features/practical-info/PracticalInfoHero';
import { PracticalInfoCTA } from '@/components/features/practical-info/PracticalInfoCTA';

export const metadata: Metadata = {
  title: 'Practical Information | Wild Arena',
  description: 'Find all practical information about Wild Arena laser game, including pricing, opening hours, and frequently asked questions.',
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
