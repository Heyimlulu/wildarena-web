import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Contact Information</h2>
      <div className="space-y-4 mb-8">
        <div className="flex items-start">
          <MapPin className="text-red-500 mr-4 mt-1" />
          <div>
            <h3 className="font-bold">Main Office</h3>
            <p>123 Laser Lane, Cityville, ST 12345</p>
          </div>
        </div>
        <div className="flex items-center">
          <Phone className="text-red-500 mr-4" />
          <div>
            <h3 className="font-bold">Phone</h3>
            <p>(555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="text-red-500 mr-4" />
          <div>
            <h3 className="font-bold">Email</h3>
            <p>info@wildwar.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="text-red-500 mr-4 mt-1" />
          <div>
            <h3 className="font-bold">Business Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday - Sunday: 10am - 4pm</p>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-green-800 mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
          <Facebook />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
          <Twitter />
        </a>
        <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
          <Instagram />
        </a>
      </div>
    </div>
  )
}

