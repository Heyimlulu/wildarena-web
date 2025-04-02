import React from 'react';
import Image from 'next/image';
import { ArrowDown } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative w-full h-[100svh] bg-black overflow-hidden">
      <Image 
        src="/Mountain.jpg" 
        alt="Mountains alps" 
        priority
        fill
        sizes="100vw"
        className="object-cover opacity-75 transform scale-105 animate-subtle-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
      <div className="relative h-full flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-green-500 tracking-tight">
          Wild Arena
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white mt-4">
          Libérez votre côté sauvage
        </p>
        <button 
          className="mt-12 sm:mt-16 text-white hover:text-green-500 transition-all duration-500 transform hover:-translate-y-1 animate-bounce-slow"
          aria-label="Défiler vers le bas"
          disabled
        >
          <ArrowDown className="w-8 h-8 sm:w-12 sm:h-12" />
        </button>
      </div>
    </div>
  );
};

export default Banner;