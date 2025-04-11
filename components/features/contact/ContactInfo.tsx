import React from 'react';
import { MapPin, Mail, Clock } from "lucide-react"
import { SocialIcon } from "react-social-icons"

export default function ContactInfo() {
  return (
    <div className="h-full bg-white rounded-lg shadow-lg p-6 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8">Information de contact</h2>
      <div className="space-y-6 sm:space-y-8">
        <div className="flex items-start group">
          <MapPin className="w-6 h-6 text-green-600 mr-4 mt-1 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Siège</h3>
            <p className="text-gray-600">3960 Sierre</p>
          </div>
        </div>
        <div className="flex items-start group">
          <Mail className="w-6 h-6 text-green-600 mr-4 mt-1 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Email</h3>
            <a 
              href="mailto:info.wild.arena@gmail.com" 
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              info.wild.arena@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-start group">
          <Clock className="w-6 h-6 text-green-600 mr-4 mt-1 group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Horaires</h3>
            <div className="text-gray-600 space-y-1">
              <p>Lundi - Mardi : Fermé</p>
              <p>Mercredi - Dimanche : 09:30 - 22:30</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-6 sm:pt-8 mt-6 sm:mt-8">
        <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-6">Suivez nous</h3>
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          <SocialIcon 
            url="https://www.facebook.com/profile.php?id=61573961254019" 
            target="_blank" 
            className="hover:scale-110 transition-transform !w-12 !h-12" 
            bgColor="#4CAF50"
          />
          <SocialIcon 
            url="https://www.instagram.com/wild_arena_ch/" 
            target="_blank" 
            className="hover:scale-110 transition-transform !w-12 !h-12" 
            bgColor="#4CAF50"
          />
          <SocialIcon 
            url="https://www.tiktok.com/@wild_arena_ch" 
            target="_blank" 
            className="hover:scale-110 transition-transform !w-12 !h-12" 
            bgColor="#4CAF50"
          />
          <SocialIcon 
            url="https://www.linkedin.com/in/wild-arena-637023356/" 
            target="_blank" 
            className="hover:scale-110 transition-transform !w-12 !h-12" 
            bgColor="#4CAF50"
          />
        </div>
      </div>
    </div>
  )
}
