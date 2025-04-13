import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Star } from 'lucide-react';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function LegalLayout({ children, title, description }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="flex justify-center mb-6">
          <Star className="w-16 h-16 text-green-300" />
        </div>
        <h1 className="mb-8 text-center text-white font-bold font-manrope leading-tight lg:text-5xl text-3xl">
          {title}
        </h1>
        <p className="text-white text-lg leading-8 text-center font-normal px-4">
          {description}
        </p>
      </div>
      {children}
      <Footer />
    </div>
  );
}
