import React from 'react';
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Music2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Wild Arena</h3>
              <p className="text-sm text-gray-200">Libérez votre côté sauvage</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 sm:mb-4">Liens rapides</h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/about", label: "A propos" },
                  { href: "/game-modes", label: "Modes de jeu" },
                  { href: "/events", label: "Événements" },
                  { href: "/blog", label: "Blog" },
                  { href: "/pricing", label: "Offres" },
                  { href: "/locations", label: "Nos arènes" },
                  { href: "/contact", label: "Nous contacter" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
              <div className="space-y-2.5 text-gray-200">
                <p>3960 Sierre</p>
                <p className="break-words">
                  <a 
                    href="mailto:info.wild.arena@gmail.com" 
                    className="hover:text-white transition-colors"
                  >
                    info.wild.arena@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 sm:mb-4">Informations</h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/faq", label: "FAQ" },
                  { href: "/privacy-policy", label: "Politique de confidentialité" },
                  { href: "/terms-of-service", label: "Conditions générales" },
                  { href: "/careers", label: "Emplois" },
                  { href: "https://linktr.ee/wild_arena_ch", label: "Réseaux sociaux", target: "_blank", rel: "noopener noreferrer" }
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      target={link.target}
                      rel={link.rel}
                      className="text-gray-200 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61573961254019" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/wild_arena_ch/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/wild-arena-637023356/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.tiktok.com/@wild_arena_ch" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                  <Music2 size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-600 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Wild Arena. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
