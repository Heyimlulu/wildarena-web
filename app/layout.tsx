import type { Metadata } from "next";
import "@/styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import { ABCGintoNord } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Wild Arena",
  description: "Expérience de laser game en pleine nature, destiné à un public très large : familles, entreprises pour des événements de Team Building, groupe scolaire ou particuliers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics />
      </head>
      <body
        className={`${ABCGintoNord.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
