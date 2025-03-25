import React from 'react';
import Image from 'next/image';
import { ArrowDown } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-full h-screen relative">
      <Image src="/banners/Mountain.jpg" alt="Mountain" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[8rem] font-bold">
        <h1>Wild Arena</h1>
        <p className="text-[2rem] font-semibold mt-4">Libérez votre côté sauvage</p>
        <div className="mt-8 text-center">
          <button className="text-5xl hover:text-green-500 transition-colors duration-300" disabled>
            <ArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;