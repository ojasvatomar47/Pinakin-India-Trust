// src/app/layout.tsx
import "../app/globals.css";
import React from "react";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pinakin India Trust",
    template: "%s | Pinakin India Trust",
  },
  description:
    "Welcome to our Pinakin India Trust. Learn more about our mission, initiatives, and impact in the community.",
  keywords: [
    "trust",
    "non-profit",
    "ngo",
    "charity",
    "community service",
    "social impact",
  ],
  openGraph: {
    title: "Pinakin India Trust",
    description:
      "Discover our work, projects, and initiatives that bring positive change to society.",
    url: "https://yourtrustsite.com",
    siteName: "Pinakin India Trust",
    images: [
      {
        url: "https://yourtrustsite.com/images/trust-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pinakin India Trust - Social Impact",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinakin India Trust",
    description:
      "Learn about our mission and how we’re working to create a positive impact.",
    images: ["https://yourtrustsite.com/images/trust-twitter.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://yourtrustsite.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-800 antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
