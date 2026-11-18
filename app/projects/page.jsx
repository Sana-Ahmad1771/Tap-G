import AllProjectsCards from "../components/pages/Projects/AllProjectsCards.jsx";
import Footer from "../components/common/Footer.jsx";
import CTA from "../components/pages/home/CTA.jsx";
import HeroLayout from "../components/pages/Projects/HeroLayout.jsx";
import Script from "next/script";

/* Projects Page SEO Metadata */
export const metadata = {
  title: "Explore Gimhae | Local Stores, Food & Campus Life",

  description:
    "Discover local favorites, food and drinks, campus life, and community experiences around Gimhae with TAP-G. Explore shops and everyday finds for students.",
  keywords: [
    "TAP-G",
    "explore Gimhae",
    "Gimhae local stores",
    "Gimhae restaurants and cafes",
    "Inje University campus life",
    "local favorites Gimhae",
    "Gimhae community experiences",
    "local discovery",
  ],

  alternates: {
    canonical: "https://tap-g.vercel.app/projects",
  },

  /* Open Graph */
  openGraph: {
    title: "Explore Gimhae | Local Stores, Food & Campus Life | TAP-G",
    description:
      "Browse local favorites, food and drinks, campus life, and community experiences across Gimhae with TAP-G.",
    url: "https://tap-g.vercel.app/projects",
    siteName: "TAP-G",
    images: [
      {
        url: "https://tap-g.vercel.app/og/projects.png", // /public/og/projects.png
        width: 1200,
        height: 630,
        alt: "TAP-G - Explore Gimhae",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Explore Gimhae | Local Stores, Food & Campus Life | TAP-G",
    description:
      "Discover local stores, food, campus life, and community experiences around Gimhae with TAP-G.",
    images: ["https://tap-g.vercel.app/og/projects.png"],
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
      name: "Projects",
      item: "https://tap-g.vercel.app/projects",
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
      "@type": "CollectionPage",
      "@id": "https://tap-g.vercel.app/projects/#projects",
      name: "Explore Gimhae",
      description:
        "A curated collection of local favorites, food and drinks, campus life, and community experiences around Gimhae.",
      url: "https://tap-g.vercel.app/projects",
      mainEntityOfPage: { "@id": "https://tap-g.vercel.app/#website" },
    },
  ],
};

const Page = () => {
  return (
    <div className="bg-[#f3f3f3]">
      {/* Breadcrumb JSON-LD */}
      <Script
        id="breadcrumb-schema-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroLayout />
      <AllProjectsCards />
      <CTA />
      <Footer />
    </div>
  );
};

export default Page;
