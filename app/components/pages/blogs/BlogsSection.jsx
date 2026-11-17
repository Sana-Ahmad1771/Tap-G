"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogsSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare",
      excerpt: "Exploring how artificial intelligence is transforming patient care and medical diagnostics.",
      date: "January 15, 2026",
      category: "Technology",
      image: "/images/blog1.png",
    },
    {
      id: 2,
      title: "Building Scalable Web Applications",
      excerpt: "Best practices for creating web apps that can handle millions of users.",
      date: "January 10, 2026",
      category: "Development",
      image: "/images/blog2.png",
    },
    {
      id: 3,
      title: "The Rise of Edge Computing",
      excerpt: "Understanding how edge computing is changing the way we process data.",
      date: "January 5, 2026",
      category: "Technology",
      image: "/images/blog3.png",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#f4f4f4] py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 font-monosans">
      <div className="max-w-[1500px] mx-auto border-t border-black/10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-1 lg:gap-10 mb-16">
          <div className="lg:col-span-4 pt-4 md:pt-6">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
              <span className="text-sm">✱</span> OUR BLOG
            </p>
          </div>

          <div className="lg:col-span-8 pt-1 md:pt-6">
            <h2 className="font-monosansnarrow text-[14vw] sm:text-[10vw] md:text-[4.5rem] lg:text-[5rem] leading-[1] md:leading-[1.1] font-black uppercase tracking-tighter">
             Latest Insights &amp; <span className="text-[#8d8d8d]">Articles</span>
            </h2>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.id}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary to-primary/60 relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                    {post.date}
                  </p>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-black group-hover:text-primary transition-colors">
                    Read more
                    <span className="text-base transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
