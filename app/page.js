import Script from "next/script";
import ClientScroll from "./components/pages/home/ClientScroll.jsx";
import HeroLayout from "./components/pages/home/HeroLayout.jsx";
import HighTec from "./components/pages/home/HighTec.jsx";
import AboutSection from "./components/pages/home/AboutSection.jsx";
import CaseStudies from "./components/pages/home/CaseStudies.jsx";
import Services from "./components/pages/home/Services.jsx";
import ResultsSection from "./components/pages/home/ResultsSection.jsx";
import FAQSection from "./components/pages/home/FAQSection.jsx";
import CTA from "./components/pages/home/CTA.jsx";
import Footer from "./components/common/Footer.jsx";

export const metadata = {
  title: "TAP-G | Connecting Local Life in Gimhae",

  description:
    "TAP-G connects Gimhae's local stores, university students, and everyday needs in one local platform. Discover food, groceries, and neighborhood businesses.",
  keywords: [
    "TAP-G",
    "Gimhae",
    "local platform Gimhae",
    "Inje University",
    "Gimhae local businesses",
    "local food delivery",
    "grocery delivery Gimhae",
    "campus delivery",
    "local discovery",
    "Gimhae community",
  ],

  alternates: {
    canonical: "https://tap-g.vercel.app",
  },

  // Open Graph
  openGraph: {
    title: "TAP-G | Connecting Local Life in Gimhae",
    description:
      "Discover local stores, food, groceries, and everyday essentials around Gimhae with TAP-G.",
    url: "https://tap-g.vercel.app",
    siteName: "TAP-G",
    images: [
      {
        url: "https://tap-g.vercel.app/og/home.png",
        width: 1200,
        height: 630,
        alt: "TAP-G — Connecting Local Life in Gimhae",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "TAP-G | Connecting Local Life in Gimhae",
    description:
      "Connecting local stores, university students, and everyday life across Gimhae.",
    images: ["https://tap-g.vercel.app/og/home.png"],
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
      publisher: {
        "@id": "https://tap-g.vercel.app/#organization",
      },
      description:
        "Connecting Gimhae's local stores, university students, and everyday needs.",
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
          name: "What can I find on TAP-G?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TAP-G is designed to help people discover local food, restaurants, cafes, groceries, daily essentials, neighborhood stores, and experiences around Gimhae.",
          },
        },
        {
          "@type": "Question",
          name: "Is TAP-G for Inje University students?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TAP-G is being designed with students in mind, especially those living and studying around Inje University.",
          },
        },
        {
          "@type": "Question",
          name: "How does delivery work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TAP-G aims to make food and everyday essentials easier to access through convenient local delivery. Delivery availability and service areas will depend on the services introduced as the platform develops.",
          },
        },
        {
          "@type": "Question",
          name: "Can local businesses join TAP-G?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TAP-G aims to connect local businesses with students and residents in Gimhae. Interested local businesses can contact the team to discuss potential opportunities.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-[#f3f3f3]">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Script
        id="structured-data-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HeroLayout />
      <ClientScroll />
      <AboutSection />
      <Services />
      <HighTec />
      <ResultsSection />
      <CaseStudies />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
}
