import Link from "next/link"
import { Facebook, Instagram, Linkedin, Music2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Wild Arena</h3>
            <p className="text-sm">"Libérez votre côté sauvage"</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-red-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-red-400 transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">3960 Sierre</p>
            <p>Email: info.wild.arena@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61573961254019" target="_blank" className="hover:text-red-400 transition-colors">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/wßild_arena_ch/" target="_blank" className="hover:text-red-400 transition-colors">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/wild-arena-637023356/" target="_blank" className="hover:text-red-400 transition-colors">
                <Linkedin />
              </a>
              <a href="https://www.linkedin.com/in/wild-arena-637023356/" target="_blank" className="hover:text-red-400 transition-colors">
                <Music2 />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Wild Arena. All rights reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-red-400 transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="#" className="hover:text-red-400 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

