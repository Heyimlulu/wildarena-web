import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Wild War</h3>
            <p className="text-sm">Experience the ultimate laser tag adventure</p>
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
            <p className="mb-2">123 Laser Lane, Cityville, ST 12345</p>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p>Email: info@wildwar.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Wild War. All rights reserved.</p>
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

