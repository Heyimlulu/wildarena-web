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
                  { href: "/", label: "Accueil" },
                  { href: "/about", label: "A propos" },
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
              <h4 className="text-lg font-semibold mb-3 sm:mb-4">Suivez nous</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { href: "https://www.facebook.com/profile.php?id=61573961254019", icon: Facebook, label: "Facebook" },
                  { href: "https://www.instagram.com/wild_arena_ch/", icon: Instagram, label: "Instagram" },
                  { href: "https://www.linkedin.com/in/wild-arena-637023356/", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://www.tiktok.com/@wild_arena_ch", icon: Music2, label: "TikTok" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 p-2.5 rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-green-700 text-center">
            <p className="text-sm text-gray-200">
              &copy; {new Date().getFullYear()} Wild Arena. All rights reserved.
            </p>
            <div className="mt-4 space-x-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-gray-200 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-gray-200 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
