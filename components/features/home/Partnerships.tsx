import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

const partners: Partner[] = [
  {
    name: "INTAGER",
    logo: "/images/partners/intager.png",
    url: "https://intager.com/"
  },
  {
    name: "Infomaniak",
    logo: "/images/partners/infomaniak.png",
    url: "https://www.infomaniak.com/"
  },
  {
    name: "Eco-friendly",
    logo: "/images/partners/ecofriendly.png",
    url: ""
  },
  {
    name: "Swiss Made",
    logo: "/images/partners/swissmade.png",
    url: ""
  },
  {
    name: "Etat du Valais",
    logo: "/images/partners/valais.png",
    url: "https://vs.ch/"
  },
  {
    name: "Ecole des métiers techniques Sion",
    logo: "/images/partners/eptmsion.png",
    url: "https://eptm.ch/"
  }
];

export default function Partnerships() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-800 tracking-tight">
          Nos partenaires
        </h2>
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 items-center justify-center">
          {partners.map((partner) => (
            partner.url ? (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label={partner.name}
              >
                <div className="bg-gray-400/5 hover:bg-gray-400/10 p-6 sm:p-10">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={90}
                    className="max-h-20 h-72 w-full object-contain"
                  />
                </div>
              </a>
            ) : (
              <div key={partner.name} className="bg-gray-400/5 p-6 sm:p-10" aria-label={partner.name}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={90}
                  className="max-h-20 h-72 w-full object-contain"
                />
              </div>
            )
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link className="inline-flex items-center text-gray-600 hover:text-gray-700 font-semibold py-2 px-4 rounded-full border border-gray-300 transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2" href="/contact">
            Vous voulez &ecirc;tre un partenaire ? 
            <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
