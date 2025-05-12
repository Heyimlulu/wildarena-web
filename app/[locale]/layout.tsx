import type { Metadata } from "next";
import "@/styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import { ABCGintoNord } from "@/utils/fonts";
import I18nProvider from "./i18n-provider";

export const metadata: Metadata = {
  title: "Wild Arena",
  description: "Expérience de laser game en pleine nature, destiné à un public très large : familles, entreprises pour des événements de Team Building, groupe scolaire ou particuliers.",
  keywords: "laser game, plein air, team building, activité groupe, laser tag, Valais, Suisse",
  alternates: {
    canonical: "https://wildarena.ch/",
  },
  openGraph: {
    title: "Wild Arena",
    description: "Expérience de laser game en pleine nature, destiné à un public très large : familles, entreprises pour des événements de Team Building, groupe scolaire ou particuliers.",
    type: "website",
    url: "https://wildarena.ch/",
  },
  twitter: {
    title: "Wild Arena",
    description: "Expérience de laser game en pleine nature, destiné à un public très large : familles, entreprises pour des événements de Team Building, groupe scolaire ou particuliers.",
    card: "summary_large_image",
    site: "@wildarena",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Detect locale from URL or default to 'en'
  const locale = typeof window !== 'undefined' ? (window.location.pathname.split('/')[1] || 'en') : 'en';
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Wild Arena" />
        <link rel="manifest" href="/site.webmanifest" />
        <GoogleAnalytics />
      </head>
      <body
        className={`${ABCGintoNord.variable} antialiased min-h-screen flex flex-col`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
