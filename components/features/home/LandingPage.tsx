'use client'

import Banner from "@/components/shared/ui/Banner";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LandingPage() {
    const { t } = useTranslation();
    return (
    <div className="relative">
      <Banner />
      <div className="absolute inset-0 h-full flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-green-500 tracking-tight">
          {t("home.landing_page.title")}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white mt-4">
          {t("home.landing_page.description")}
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
    )
}