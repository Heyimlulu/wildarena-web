import React from 'react';
import Image from 'next/image';
import { ArrowDown } from "lucide-react";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <Image className='opacity-75' src="/Mountain.jpg" alt="Mountains alps" layout="fill" objectFit="cover" />
      <div className="text-white text-[3rem] sm:text-[8rem] font-bold text-center z-10">
        <h1 className='text-green-500 font-black'>Wild Arena</h1>
        <p className="text-[1rem] sm:text-[2rem] font-extrabold">Libérez votre côté sauvage</p>
        <button className="text-5xl hover:text-green-500 transition-colors duration-300 mt-8" disabled>
          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Banner;