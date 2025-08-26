import OGImage from "@/../public/images/og-image.jpg";
import Favicon from "@/../public/images/web-app-manifest-192x192.png";
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
  title: "Play ICL tournament online – win real rewards",
  description:
    "Play free or paid chess tournaments online. Solve puzzles and compete in blitz and bullet. 1v1 VS real players.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [],
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://www.icl.com",
    siteName: "ICL",
    images: [
      {
        url: OGImage.src,
        width: 1200,
        height: 630,
        alt: "RookTook – Discover curated experiences",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [OGImage.src],
  },
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
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
