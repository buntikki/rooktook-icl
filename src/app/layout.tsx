import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  // variable: "--font-bricolage-sans",
  subsets: ["latin"],
});

const meta = {
  title: "Indian Chess League - India’s First and Largest Chess League",
  description:
    "RookTook Indian Chess League (ICL) is India’s first and largest chess League that brings casual, amateur and pro players together to compete in chess.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL("https://indianchessleague.com"),
  alternates: {
    canonical: "https://indianchessleague.com/",
  },
  keywords: [
    "ICL",
    "Indian Chess League",
    "Chess League",
    "Chess Tournament",
    "Chess Competition",
    "Chess Online",
    "Chess Offline",
    "Chess League India",
    "Chess Tournament India",
    "Chess Competition India",
    "Chess Online India",
    "Chess Offline India",
    "Chess League India",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://indianchessleague.com/",
    siteName: "Indian Chess League",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Indian Chess League - India's First and Largest Chess League",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/web-app-manifest-192x192.png",
    shortcut: "/images/web-app-manifest-192x192.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "RookTook",
    statusBarStyle: "default",
    capable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${bricolage.className} antialiased`}
        style={{
          backgroundImage: `url('/bg.webp')`,
          backgroundRepeat: "repeat",
          backgroundPosition: "top center",
          backgroundSize: "100% auto",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
