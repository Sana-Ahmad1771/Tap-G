import React from "react";
import Footer from "../components/common/Footer";
import AboutHero from "../components/pages/about/AboutHero";
import StorySection from "../components/pages/about/StorySection";
import Timeline from "../components/pages/about/TimeLine";
import Script from "next/script";

/* About Page SEO Metadata */
export const metadata = {
  title: "About TAP-G | Connecting Local Life in Gimhae",

 description:
  "Learn about TAP-G, a local platform connecting Gimhae's stores, university students, and everyday needs. Discover make local life easier.",
   keywords: [
    "About TAP-G",
    "TAP-G Gimhae",
    "local platform Gimhae",
    "Inje University students",
    "Gimhae local businesses",
    "Gimhae community",
    "local discovery",
    "campus delivery",
  ],

  alternates: {
    canonical: "https://tap-g.vercel.app/about",
  },

  /* Open Graph */
  openGraph: {
    title: "About TAP-G | Connecting Local Life in Gimhae",
    description:
      "Discover the story behind TAP-G and how we connect local stores, students, and everyday life across Gimhae.",
    url: "https://tap-g.vercel.app/about",
    siteName: "TAP-G",
    images: [
      {
        url: "https://tap-g.vercel.app/og/about.png", // place in /public/og/about.png
        width: 1200,
        height: 630,
        alt: "About TAP-G - Connecting Local Life in Gimhae",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "About TAP-G | Connecting Local Life in Gimhae",
    description:
      "Learn how TAP-G connects local stores, university students, and everyday life across Gimhae.",
    images: ["https://tap-g.vercel.app/og/about.png"],
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
      name: "About",
      item: "https://tap-g.vercel.app/about",
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
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is TAP-G?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TAP-G is a local platform concept designed to connect Gimhae's neighborhood businesses, university students, and everyday needs in one place.",
          },
        },
        {
          "@type": "Question",
          name: "Where is TAP-G based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TAP-G is made for Gimhae, South Korea, with a focus on students and residents living and studying around Inje University.",
          },
        },
      ],
    },
  ],
};

const page = () => {
  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <Script
        id="breadcrumb-schema-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="m-2 ">
        <AboutHero />
      </main>
      <StorySection />
      <Timeline />
      <Footer />
    </>
  );
};

export default page;
