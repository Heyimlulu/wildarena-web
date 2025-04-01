import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const abcGintoNord = localFont({
  src: [
    { path: "./fonts/ABCGintoNord-Bold.woff2", weight: "700" },
    { path: "./fonts/ABCGintoNord-Medium.woff2", weight: "500" },
    { path: "./fonts/ABCGintoNord-Regular.woff2", weight: "400" },
    { path: "./fonts/ABCGintoNord-Light.woff2", weight: "300" },
    { path: "./fonts/ABCGintoNord-Thin.woff2", weight: "100" },
    { path: "./fonts/ABCGintoNord-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./fonts/ABCGintoNord-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/ABCGintoNord-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/ABCGintoNord-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./fonts/ABCGintoNord-ThinItalic.woff2", weight: "100", style: "italic" },
  ],
  variable: "--font-abc-ginto-nord",
});

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
    <html lang="en">
      <body
        className={`${abcGintoNord.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
