"use client"
import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const featuredVideo = {
  desktop: "/gallery/videos/featured-video-desktop.mp4",
  mobile: "/gallery/videos/featured-video-mobile.mp4", 
  alt: "Featured Wild Arena video"
};

const galleryImages = [
  {
    src: "/gallery/images/featured-image-1.png",
    alt: "Wild Arena gallery 1"
  },
  {
    src: "/gallery/images/featured-image-2.png",
    alt: "Wild Arena gallery 2"
  },
  {
    src: "/gallery/images/featured-image-3.png",
    alt: "Wild Arena gallery 3"
  },
  {
    src: "/gallery/images/featured-image-4.png",
    alt: "Wild Arena gallery 4"
  },
  {
    src: "/gallery/images/featured-image-5.png",
    alt: "Wild Arena gallery 5"
  },
];

export default function Gallery() {
  const [modalImg, setModalImg] = useState<null | { src: string; alt: string }>(null);
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-4">
        <h2 className="sr-only">
            Galerie
        </h2>
          <div>
            <video
              className="h-auto w-full max-w-full rounded-lg aspect-video object-cover"
              autoPlay
              loop
              muted
              playsInline
              aria-label={featuredVideo.alt}>
            {/* Mobile first */}
            <source
              src={featuredVideo.mobile}
              type="video/mp4"
              media="(max-width: 639px)"
            />
            {/* Desktop fallback */}
            <source
              src={featuredVideo.desktop}
              type="video/mp4"
              media="(min-width: 640px)"
            />
            Your browser does not support the video tag.
          </video>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                className="focus:outline-none"
                onClick={() => setModalImg(img)}
                aria-label={`Voir ${img.alt} en grand`}
                type="button"
              >
                <Image
                  className="h-auto max-w-full rounded-lg transform transition-transform duration-300 hover:opacity-80 transition-opacity cursor-zoom-in"
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                />
              </button>
            ))}
          </div>

          {/* Modal for large image view */}
          {modalImg && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
              onClick={() => setModalImg(null)}
            >
              <div
                className="relative p-2 bg-transparent rounded-lg max-w-5xl w-full flex flex-col items-center"
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 focus:outline-none"
                  onClick={() => setModalImg(null)}
                  aria-label="Fermer la vue de l'image"
                  type="button"
                >
                  <X size={32} />
                </button>
                <Image
                  src={modalImg.src}
                  alt={modalImg.alt}
                  width={1200}
                  height={800}
                  className="rounded-lg max-h-[85vh] w-auto h-auto object-contain"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
