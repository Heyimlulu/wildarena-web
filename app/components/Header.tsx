"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import logo from "../images/big-logo.png";

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
    { href: "/", label: "Accueil" },
    { href: "/about", label: "A propos" },
    { href: "/pricing", label: "Offres" },
    { href: "/locations", label: "Nos arènes" },
    { href: "/contact", label: "Nous contacter" },
  ]

  return (
    <header className="bg-green-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Wild Arena logo" width={72} height={72} />
            <span className="text-2xl font-bold">Wild Arena</span>
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`hover:text-red-400 transition-colors ${pathname === href ? "text-red-400" : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block py-2 hover:text-red-400 transition-colors ${pathname === href ? "text-red-400" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
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

