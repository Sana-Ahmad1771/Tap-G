import BlogsHero from "../components/pages/blogs/BlogsHero";
import BlogsSection from "../components/pages/blogs/BlogsSection";
import Script from "next/script";

/* Blogs Page SEO Metadata */
export const metadata = {
  title: "Blog | Stories & Local Guides from Gimhae",

  description:
    "Read local tips, student guides, and everyday stories from around Gimhae. Discover hidden gems, food spots, and campus life near Inje University with TAP-G.",
  keywords: [
    "TAP-G blog",
    "Gimhae blog",
    "Gimhae local guide",
    "Gimhae food guide",
    "Inje University student guide",
    "Gimhae hidden gems",
    "campus life Gimhae",
    "local life Korea",
  ],

  alternates: {
    canonical: "https://tap-g.vercel.app/blogs",
  },

  /* Open Graph */
  openGraph: {
    title: "Blog | Stories & Local Guides from Gimhae | TAP-G",
    description:
      "Local tips, student guides, and everyday finds from around Gimhae, shared by TAP-G.",
    url: "https://tap-g.vercel.app/blogs",
    siteName: "TAP-G",
    images: [
      {
        url: "https://tap-g.vercel.app/og/blogs.png", // /public/og/blogs.png
        width: 1200,
        height: 630,
        alt: "TAP-G Blog - Stories from Gimhae",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  /* Twitter Card */
  twitter: {
    card: "summary_large_image",
    title: "Blog | Stories & Local Guides from Gimhae | TAP-G",
    description:
      "Read local tips, student guides, and everyday stories from around Gimhae.",
    images: ["https://tap-g.vercel.app/og/blogs.png"],
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
      name: "Blogs",
      item: "https://tap-g.vercel.app/blogs",
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
      "@type": "Blog",
      "@id": "https://tap-g.vercel.app/blogs/#blog",
      name: "TAP-G Blog",
      description:
        "Local tips, student guides, and everyday stories from around Gimhae.",
      url: "https://tap-g.vercel.app/blogs",
      publisher: { "@id": "https://tap-g.vercel.app/#organization" },
      inLanguage: "en",
    },
  ],
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb JSON-LD */}
      <Script
        id="breadcrumb-schema-blogs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Structured Data JSON-LD */}
      <Script
        id="structured-data-blogs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <BlogsHero />
      <BlogsSection />
    </div>
  );
}
