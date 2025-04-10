import React from 'react';
import Image from 'next/image';

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
    </div>
  );
};

export default Banner;