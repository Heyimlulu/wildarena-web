"use client"

import React from 'react';
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { NavigationLink, NAVIGATION_LABELS, NAVIGATION_PATHS } from "@/enums/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false)
    window.addEventListener("resize", closeMenu)
    return () => window.removeEventListener("resize", closeMenu)
  }, [])

  const navItems = [
    NavigationLink.ABOUT,
    NavigationLink.PRACTICAL_INFO,
    NavigationLink.GAME_MODES,
    NavigationLink.EVENTS,
    NavigationLink.PRICING,
    NavigationLink.LOCATIONS,
    NavigationLink.BLOG,
    NavigationLink.CONTACT,
  ]

  return (
    <header className="bg-green-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2 sm:py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-[96px] h-[96px] sm:mr-2 relative">
              <Image src="/images/logo.png" alt="Wild Arena logo" fill className="object-cover" priority />
            </div>
            <span className="text-xl sm:text-2xl font-bold">Wild Arena</span>
          </Link>
          <button 
            className="md:hidden p-2 hover:bg-green-700 rounded-lg transition-colors" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-6">
              {navItems.map((nav) => (
                <li key={NAVIGATION_PATHS[nav]}>
                  <Link
                    href={NAVIGATION_PATHS[nav]}
                    className={`px-3 py-2 rounded-lg hover:bg-green-700 transition-colors ${
                      pathname === NAVIGATION_PATHS[nav] ? "bg-green-700" : ""
                    }`}
                  >
                    {NAVIGATION_LABELS[nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-1 bg-green-700 rounded-lg p-2">
              {navItems.map((nav) => (
                <li key={NAVIGATION_PATHS[nav]}>
                  <Link
                    href={NAVIGATION_PATHS[nav]}
                    className={`block px-4 py-3 rounded-lg hover:bg-green-600 transition-colors ${
                      pathname === NAVIGATION_PATHS[nav] ? "bg-green-600" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {NAVIGATION_LABELS[nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
