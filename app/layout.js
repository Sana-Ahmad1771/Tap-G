
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";

import "./globals.css";

import ClientErrorLogger from "./components/ClientErrorLogger";
import Header from "./components/common/Header";
import Preloader from "./components/common/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ==========================================
// GLOBAL SEO METADATA
// ==========================================

export const metadata = {
  metadataBase: new URL("https://tap-g.vercel.app"),

  title: {
    default: "TAP-G | Connecting Local Life in Gimhae",
    template: "%s | TAP-G",
  },

  description:
    "TAP-G connects Gimhae's local stores, university students, and everyday needs through one convenient local platform. Discover local food, groceries, neighborhood businesses, and more.",

  keywords: [
    "TAP-G",
    "Gimhae",
    "local platform Gimhae",
    "Inje University",
    "Gimhae local businesses",
    "local food delivery",
    "grocery delivery Gimhae",
    "local discovery",
    "campus delivery",
    "Gimhae community",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://tap-g.vercel.app",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tap-g.vercel.app",
    siteName: "TAP-G",
    title: "TAP-G | Connecting Local Life in Gimhae",
    description:
      "Discover local stores, food, groceries, and everyday essentials around Gimhae with TAP-G.",

    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "TAP-G — Connecting Local Life in Gimhae",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "TAP-G | Connecting Local Life in Gimhae",
    description:
      "Connecting local stores, university students, and everyday life across Gimhae.",
    images: ["/og/home.png"],
  },

  // Favicons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ==========================================
// ROOT LAYOUT
// ==========================================

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Preloader />

        {/* Client-side error logger */}
        <ClientErrorLogger />

        {/* Header wrapped in Suspense to support usePathname() */}
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />

        <Script
          id="ga-setup"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}
