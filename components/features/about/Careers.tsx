import { NAVIGATION_PATHS, NavigationLink } from "@/enums/navigation";
import Link from "next/link";
import React from "react";

export default function Careers() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-green-800 text-center">Rejoignez l'équipe</h2>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Vous souhaitez rejoindre une équipe dynamique et passionnée ? Nous recherchons régulièrement des animateurs, techniciens et volontaires pour agrandir l'équipe !
        </p>
        <div className="text-center">
          <Link
            href={NAVIGATION_PATHS[NavigationLink.CAREERS]}
            className="inline-block px-6 py-3 rounded-lg bg-green-800 text-white font-semibold hover:bg-green-700 transition-colors"
          >
            Postuler / Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
