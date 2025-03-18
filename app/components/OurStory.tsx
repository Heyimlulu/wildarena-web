import Image from "next/image"
import Logo from "../images/logoWA.png";

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src={Logo}
              alt="Wild Arena Arena"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6 text-green-800">Notre Histoire</h2>
            <p className="text-gray-600 mb-4">
              Wild Arena a été fondée en 2025 par un groupe de passionnés du laser tag qui va pour objectif de proposer une expérience de jeu en pleine nature.
            </p>
            <p className="text-gray-600 mb-4">
              Des joueurs occasionnels aux équipes compétitives, Wild Arena offre quelque chose pour tout le monde grâce à nos arènes et notre équipement de pointe
            </p>
            <p className="text-gray-600">
              Nous sommes engagés dans une innovation continue, garantissant que chaque visite soit remplie d&apos;excitation, de stratégie et de moments inoubliables.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

