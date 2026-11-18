import React from "react";
import Footer from "../components/common/Footer";
import ContactHero from "../components/pages/contact/ContactHero";
import Script from "next/script";

/* Contact Page SEO Metadata */
export const metadata = {
  title: "Contact TAP-G | Connect With Us in Gimhae",

  description:
    "Get in touch with TAP-G for partnerships, local business opportunities, and student communities in Gimhae. Let's make local life more connected.",

  keywords: [
    "Contact TAP-G",
    "TAP-G Gimhae",
    "Gimhae local business partnership",
    "Inje University student community",
    "local platform Gimhae",
    "Gimhae community",
    "TAP-G KakaoTalk",
  ],

  alternates: {
    canonical: "https://tap-g.vercel.app/contact",
  },

  /* Open Graph */
  openGraph: {
    title: "Contact TAP-G | Connect With Us in Gimhae",
    description:
      "Reach out to TAP-G to discuss partnerships, local businesses, and student communities across Gimhae.",
    url: "https://tap-g.vercel.app/contact",
    siteName: "TAP-G",
    images: [
      {
        url: "https://tap-g.vercel.app/og/contact.png", // /public/og/contact.png
        width: 1200,
        height: 630,
        alt: "Contact TAP-G - Connecting Local Life in Gimhae",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Contact TAP-G | Connect With Us in Gimhae",
    description:
      "Contact TAP-G for partnerships, local businesses, and student communities in Gimhae.",
    images: ["https://tap-g.vercel.app/og/contact.png"],
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
      name: "Contact",
      item: "https://tap-g.vercel.app/contact",
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
      "@type": "ContactPage",
      "@id": "https://tap-g.vercel.app/contact/#contactpage",
      name: "Contact TAP-G",
      url: "https://tap-g.vercel.app/contact",
      isPartOf: { "@id": "https://tap-g.vercel.app/#website" },
    },
  ],
};

const page = () => {
  return (
    <div className="bg-[#fefefe]">
      <Script
        id="breadcrumb-schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="m-2">
        <ContactHero />
      </main>
      <Footer />
    </div>
  );
};

export default page;