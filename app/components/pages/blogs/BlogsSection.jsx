"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSplitText = ({ text, className = "", isGrey = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const words = el.querySelectorAll(".word");

    const tl = gsap.fromTo(
      words,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap leading-[0.9] ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="relative overflow-hidden inline-block mr-[0.3em] pb-2"
        >
          <span
            className={`word inline-block will-change-transform ${
              isGrey ? "text-black/20" : "text-black"
            }`}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "Hidden Gems Around Gimhae",
    excerpt:
      "Small shops and local spots that are easy to miss, but worth finding.",
    date: "Nov 10, 2026",
    category: "Local Life",
    image: "/images/service3.jpg",
  },
  {
    id: 2,
    title: "Eating in Gimhae",
    excerpt:
      "Korean favorites, cafes and quick snacks for international students new to the area.",
    date: "Nov 5, 2026",
    category: "Food & Drinks",
    image: "/images/service2.jpg",
  },
  {
    id: 3,
    title: "Settling In Near Inje",
    excerpt:
      "Everyday essentials and convenient places that make campus life easier.",
    date: "Oct 28, 2026",
    category: "Campus Life",
    image: "/images/service4.jpg",
  },
];

const BlogsSection = () => {
  return (
    <section className="relative py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 text-black font-monosans overflow-hidden">
      {/* 1. SECTION HEADER */}
      <div className="max-w-[1500px] mx-auto mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-t border-black/10 gap-6">
          <div className="max-w-full pt-4 md:pt-6">
            <p className="text-[10px] md:text-[11px] mb-6 uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
              <span className="text-sm">✱</span> Our Blog
            </p>

            <div className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-wide">
              <ParallaxSplitText text="Stories From" />
              <ParallaxSplitText text="Gimhae." isGrey={true} />
            </div>
          </div>

          <p className="text-[10px] md:text-[12px] uppercase tracking-widest text-primary font-bold max-w-[250px] leading-relaxed border-l border-black/10 pl-6 mb-2">
            Local tips, student guides, and everyday finds from{" "}
            <span className="text-black">around Gimhae.</span>
          </p>
        </div>
      </div>

      {/* 2. BLOG GRID */}
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/blogs/${post.id}`} className="group block">
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f4f4] rounded-3xl transition-all duration-700 shadow-sm group-hover:shadow-2xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
                  />

                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Floating Meta Tag */}
                  <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 rounded-xl overflow-hidden">
                    <div className="bg-white/90 backdrop-blur-sm px-5 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <span className="text-[9px] font-black uppercase tracking-widest text-black">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-black/20">
                      0{index + 1}
                    </span>
                    <div className="w-12 h-[1px] bg-black/10"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {post.category}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.95] group-hover:translate-x-3 transition-transform duration-500 ease-out">
                      {post.title}
                    </h3>
                    <p className="text-sm md:text-base text-black/50 max-w-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-2">
                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                      <FiArrowUpRight className="text-xl transition-transform group-hover:rotate-45" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:tracking-[0.4em] transition-all duration-500">
                      Read Article
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. DECORATIVE ELEMENT */}
      <div className="mt-32 md:mt-48 flex justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-black/20">
            Made for Gimhae
          </span>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;