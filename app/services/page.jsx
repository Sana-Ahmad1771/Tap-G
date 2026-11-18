import React from "react";
import Footer from "../components/common/Footer";
import ServicesHero from "../components/pages/services/ServicesHero";
import CTA from "../components/pages/home/CTA.jsx";
import Script from "next/script";

/* Services Page SEO Metadata */
export const metadata = {
  title: "Services | Local Delivery & Discovery in Gimhae",

  description:
    "Explore TAP-G services: food delivery, groceries, campus delivery, and local discovery for students and residents around Gimhae.",

  keywords: [
    "TAP-G services",
    "Gimhae food delivery",
    "Gimhae grocery delivery",
    "campus delivery Inje University",
    "local discovery Gimhae",
    "express delivery Gimhae",
    "Gimhae community",
  ],

  alternates: {
    canonical: "https://tap-g.vercel.app/services",
  },

  /* Open Graph */
  openGraph: {
    title: "Services | Local Delivery & Discovery in Gimhae | TAP-G",
    description:
      "Food delivery, groceries, campus delivery, and local discovery made for everyday life in Gimhae.",
    url: "https://tap-g.vercel.app/services",
    siteName: "TAP-G",
    images: [
      {
        url: "https://tap-g.vercel.app/og/services.png", // /public/og/services.png
        width: 1200,
        height: 630,
        alt: "TAP-G Services - Local Delivery & Discovery in Gimhae",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Services | Local Delivery & Discovery in Gimhae | TAP-G",
    description:
      "Food delivery, groceries, campus delivery, and local discovery for students and residents in Gimhae.",
    images: ["https://tap-g.vercel.app/og/services.png"],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://tap-g.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://tap-g.vercel.app/services",
    },
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tap-g.vercel.app/#organization",
      name: "TAP-G",
      url: "https://tap-g.vercel.app",
      logo: "https://tap-g.vercel.app/images/Tap-icon.svg",
    },
    {
      "@type": "WebSite",
      "@id": "https://tap-g.vercel.app/#website",
      url: "https://tap-g.vercel.app",
      name: "TAP-G",
      publisher: { "@id": "https://tap-g.vercel.app/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      name: "TAP-G Local Delivery & Discovery",
      provider: { "@id": "https://tap-g.vercel.app/#organization" },
      description:
        "Food delivery, groceries and essentials, campus delivery, and local discovery for students and residents around Gimhae.",
      serviceType: "Local delivery and discovery",
      areaServed: {
        "@type": "City",
        name: "Gimhae",
        containedInPlace: { "@type": "Country", name: "South Korea" },
      },
      audience: {
        "@type": "Audience",
        audienceType: "University students and local residents",
      },
    },
  ],
};

const page = () => {
  return (
    <div>
      {/* Breadcrumb JSON-LD */}
      <Script
        id="breadcrumb-schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="m-2">
        <ServicesHero />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default page;