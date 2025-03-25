import { MapPin, Mail, Clock } from "lucide-react"
import { SocialIcon } from "react-social-icons"

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Information de contact</h2>
      <div className="space-y-4 mb-8">
        <div className="flex items-start">
          <MapPin className="text-red-500 mr-4 mt-1" />
          <div>
            <h3 className="font-bold">Siège</h3>
            <p>3960 Sierre</p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="text-red-500 mr-4" />
          <div>
            <h3 className="font-bold">Email</h3>
            <p>info.wild.arena@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="text-red-500 mr-4 mt-1" />
          <div>
            <h3 className="font-bold">Horaires</h3>
            <p>Lundi - Vendredi: 9:00 - 18:00</p>
            <p>Samedi - Dimanche: 12:00 - 16:00</p>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-green-800 mb-4">Suivez nous</h3>
      <div className="flex space-x-4">
        <SocialIcon url="https://www.facebook.com/profile.php?id=61573961254019" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors" />
        <SocialIcon url="https://www.instagram.com/wßild_arena_ch/" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors" />
        <SocialIcon url="https://www.tiktok.com/@wild_arena_ch" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors" />
        <SocialIcon url="https://www.linkedin.com/in/wild-arena-637023356/" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors" />
      </div>
    </div>
  )
}

