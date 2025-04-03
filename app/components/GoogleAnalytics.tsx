'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Default configuration with privacy-focused settings
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            restricted_data_processing: true
          });

          // Initialize with basic consent mode
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'personalization_storage': 'denied'
          });
        `}
      </Script>
    </>
  );
}
