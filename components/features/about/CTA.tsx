import { NAVIGATION_PATHS, NavigationLink } from "@/enums/navigation";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 bg-green-800">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          Prêt à vivre l&apos;aventure Wild Arena ?
        </h2>
        <p className="text-lg text-gray-100 mb-8">
          Rejoignez-nous pour une expérience de laser game unique en pleine nature
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={NAVIGATION_PATHS[NavigationLink.PRICING]}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-green-800 font-semibold hover:bg-gray-100 transition-colors"
          >
            Réserver maintenant
          </Link>
          <Link
            href={NAVIGATION_PATHS[NavigationLink.CONTACT]}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-green-700 text-white font-semibold hover:bg-green-600 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}
