import Image, { StaticImageData } from "next/image"
import { Play } from "lucide-react"
import React from "react"
import Link from "next/link"

interface ArenaImage {
  src: string
  alt: string
  title: string
  slug: string
  description: string
}

const arenaImages: ArenaImage[] = [
  {
    src: "/images/arenas/finges-1.gif",
    alt: "Arènes en plein air",
    title: "Arènes en plein air",
    slug: "outdoor-arena",
    description: "Une expérience immersive dans un cadre naturel exceptionnel"
  },
  {
    src: "/images/arenas/office-corporate.gif",
    alt: "Arène intérieure",
    title: "Votre propre expérience de jeu laser",
    slug: "indoor-arena",
    description: "Transformez votre bâtiment en une arène de jeu laser immersive"
  },
  {
    src: "/images/arenas/event1.jpg",
    alt: "Événement Wild Arena",
    title: "Événements Spéciaux",
    slug: "special-event",
    description: "Des tournois et événements exclusifs"
  },
  {
    src: "/images/arenas/equipment.jpg",
    alt: "Équipement Wild Arena",
    title: "Équipement de Pointe",
    slug: "equipment",
    description: "Technologie laser game dernière génération"
  }
]

export default function ArenaShowcase() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-green-800">
              Découvrez Nos Arènes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Plongez dans l&apos;univers Wild Arena à travers nos installations uniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {arenaImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <div className="aspect-video relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/blog/${image.slug}`} className="bg-white/90 hover:bg-white p-4 rounded-full">
                      <Play className="w-6 h-6 text-green-800" />
                    </Link>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
