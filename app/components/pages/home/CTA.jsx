"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef(null);

  // Each grid box has its own image
  const gridMedia = [
    { src: "/images/service1.jpg", alt: "Food delivery" },
    { src: "/images/service2.jpg", alt: "Groceries and essentials" },
    { src: "/images/service3.jpg", alt: "Drinks and beverages" },
    { src: "/images/tap-hero.png", alt: "Everyday essentials" },
    { src: "/images/case1.png", alt: "TAP-G local delivery" },
    { src: "/images/tap-hero2.png", alt: "Shopping and groceries" },
    { src: "/images/service4.jpg", alt: "Fresh fruits and vegetables" },
    { src: "/images/tap-hero3.png", alt: "Local delivery rider" },
    { src: "/images/service5.jpg", alt: "Express delivery" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // Initial states
      gsap.set(".grid-item", {
        scale: 0.8,
        opacity: 0,
      });

      gsap.set(".grid-item:nth-child(5)", {
        scale: 1,
        opacity: 1,
      });

      gsap.set(".final-cta", {
        pointerEvents: "none",
      });

      // Reveal all images
      tl.to(".grid-item", {
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 0.5,
          from: "center",
        },
        duration: 1,
      })

        // Move surrounding images away
        .to(".grid-item:not(:nth-child(5))", {
          x: (i) => {
            const xValues = isMobile
              ? [-150, 0, 150, -150, 150, -150, 0, 150]
              : [-1000, 0, 1000, -1000, 1000, -1000, 0, 1000];

            return xValues[i] || 0;
          },

          y: (i) => {
            const yValues = isMobile
              ? [-150, -150, -150, 0, 0, 150, 150, 150]
              : [-1000, -1000, -1000, 0, 0, 1000, 1000, 1000];

            return yValues[i] || 0;
          },

          scale: isMobile ? 1.5 : 2.5,
          opacity: 0,
          filter: "blur(15px)",
          duration: 3,
          ease: "power2.in",
        })

        // Expand center image
        .to(
          ".grid-item:nth-child(5)",
          {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            duration: 2.5,
            ease: "expo.inOut",
          },
          "-=2.5",
        )

        // Darken center image
        .to(
          ".center-overlay",
          {
            opacity: 0.7,
            duration: 1,
          },
          "-=1.5",
        )

        // Hide scroll hint
        .to(
          ".scroll-indicator",
          {
            opacity: 0,
            duration: 0.5,
          },
          "-=2",
        )

        // Reveal final CTA
        .to(
          ".final-cta",
          {
            opacity: 1,
            y: 0,
            pointerEvents: "auto",
            duration: 1.5,
            ease: "power4.out",
          },
          "-=0.5",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] bg-[#080808] overflow-hidden flex items-center justify-center font-monosans"
    >
      {/* IMAGE GRID */}
      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 md:gap-8 w-[95vw] h-[60vh] md:w-[70vw] md:h-[80vh] place-items-center">
          {gridMedia.map((item, idx) => (
            <div
              key={idx}
              className={`grid-item relative isolate overflow-hidden rounded-2xl md:rounded-4xl shadow-2xl w-full h-full ${
                idx === 4 ? "z-20 origin-center" : "z-10"
              }`}
            >
              {/* IMAGE */}
              <Image
                src={item.src}
                width={600}
                height={600}
                alt={item.alt}
                priority={idx === 4}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 32vw, 25vw"
              />

              {/* HERO-STYLE DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />

              {/* HERO-STYLE BOTTOM FADE */}
              <div className="absolute inset-0 bg-linear-to-t from-[#080808]/45 via-transparent to-[#080808]/10 pointer-events-none" />

              {/* CENTER IMAGE OVERLAY */}
              {idx === 4 && (
                <div className="center-overlay absolute inset-0 bg-black opacity-0 pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL HINT */}
      <div className="scroll-indicator absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3">
        <span className="text-white text-[8px] md:text-[10px] uppercase tracking-[0.4em] whitespace-nowrap">
          Keep Scrolling
        </span>

        <div className="w-[1px] h-8 md:h-12 bg-white/40 animate-bounce" />
      </div>

      {/* FINAL CONTENT */}
      <div className="final-cta relative z-[100] py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 text-center opacity-0 translate-y-10 flex flex-col items-center pointer-events-none">
        <p className="text-primary text-[8px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.8em] font-black mb-4 md:mb-6">
          Discover Local Life
        </p>

        <h2 className="flex flex-col items-center text-[10vw] sm:text-[11vw] md:text-[11vw] xl:text-[8.5rem] leading-[0.9] font-black uppercase text-white tracking-tighter mb-5 md:mb-12 whitespace-nowrap">
          <span>Let&apos;s bring</span>
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px #fff" }}
          >
            Gimhae closer.
          </span>
        </h2>

        <Link
          href="/contact"
          className="group relative cursor-pointer inline-flex items-center gap-4 bg-primary text-white px-8 py-4 md:px-12 md:py-6 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-transform active:scale-95"
        >
          <span className="relative z-10">Get Started</span>

          <span className="relative z-10 transition-transform duration-500 group-hover:rotate-45 text-lg">
            ✦
          </span>

          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>

        <p className="text-white/30 pt-6 text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-medium">
          Tap-G
        </p>
      </div>

      {/* DECORATIVE SIDES */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-20 opacity-20">
        <span className="rotate-90 text-[10px] text-white tracking-[1em] uppercase whitespace-nowrap">
          Local
        </span>

        <span className="rotate-90 text-[10px] text-white tracking-[1em] uppercase whitespace-nowrap">
          Community
        </span>
      </div>
    </section>
  );
}
