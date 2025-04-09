'use client';

import { useState, useEffect } from 'react';
import { GA_TRACKING_ID } from '@/app/constants';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Enable full GA4 tracking
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        personalization_storage: 'granted'
      });
      // Update configuration for full analytics
      window.gtag('config', GA_TRACKING_ID!, {
        anonymize_ip: false,
        allow_google_signals: true,
        allow_ad_personalization_signals: true,
        restricted_data_processing: false
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    // Keep restricted GA4 tracking
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        personalization_storage: 'denied'
      });
      // Ensure privacy-focused settings
      window.gtag('config', GA_TRACKING_ID!, {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        restricted_data_processing: true
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-green-900 text-white p-4 shadow-lg z-50">
      <div className="container sm:py-8 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col w-full sm:w-3/5 text-sm space-y-2">
          <h3 className="font-bold text-lg sm:text-2xl">
            Nous accordons de l&apos;importance à votre vie privée
          </h3>
          <p className="text-sm sm:text-base">
            Les cookies nous aident &agrave; am&eacute;liorer votre exp&eacute;rience sur notre site en nous permettant d&apos;analyser vos interactions et de vous proposer des contenus plus pertinents.
          </p>
        </div>
        <div className="flex w-full h-12 sm:h-16 sm:w-2/5 gap-3">
          <button
            onClick={acceptCookies}
            className="w-2/3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Oui, accepter les cookies
          </button>
          <button
            onClick={declineCookies}
            className="w-1/3 bg-white hover:bg-gray-100 border border-gray-700 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Non, merci
          </button>
        </div>
      </div>
    </div>
  );
}
