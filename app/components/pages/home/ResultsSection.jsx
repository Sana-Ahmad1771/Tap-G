
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ================================
   WORD BY WORD PARALLAX COMPONENT
================================ */
const ParallaxSplitText = ({ text, className = "", isGrey = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");

    const tl = gsap.fromTo(
      words,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "none",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "top 70%",
          scrub: 1.2,
        },
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap leading-[1.05] ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="relative overflow-hidden inline-block mr-[0.2em]"
        >
          <span
            className={`word inline-block will-change-transform ${
              isGrey ? "text-[#8d8d8d]" : "text-black"
            }`}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

/* ================================
   TAP-G / LOCAL IMPACT SECTION
================================ */
const ResultsSection = () => {
  const sectionRef = useRef(null);
  const statsRefs = useRef([]);

  const stats = [
    {
      value: 1,
      symbol: "",
      label:
        "Discover neighborhood stores, local favorites, and businesses that make Gimhae unique.",
      title: "Local Stores",
    },
    {
      value: 2,
      symbol: "",
      label:
        "Find food, groceries, and everyday essentials through one convenient local platform.",
      title: "Everyday Convenience",
      lowOpacityValue: true,
    },
    {
      value: 3,
      symbol: "",
      label:
        "Bring students, local businesses, and the wider Gimhae community closer together.",
      title: "Community Connection",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        onEnter: () => {
          statsRefs.current.forEach((el, index) => {
            if (!el) return;

            const targetValue = stats[index].value;
            const obj = { val: 0 };

            gsap.to(obj, {
              val: targetValue,
              duration: 2.5,
              ease: "expo.out",
              delay: index * 0.2,
              onUpdate: () => {
                el.innerText = String(Math.round(obj.val)).padStart(2, "0");
              },
            });
          });
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="text-black py-10 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 font-sans"
    >
      <div className="max-w-[1500px] mx-auto border-t border-black/10">
        {/* TOP HEADER AREA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 py-8 mb-12 lg:mb-32">
          <div className="w-full lg:w-[65%]">
            <p className="text-[10px] mb-6 uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
              <span className="text-sm">✱</span> Our Impact
            </p>

            <h2 className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-wide">
              <ParallaxSplitText text="Local" className="block" />
              <ParallaxSplitText
                text="life, closer."
                className="opacity-40 block"
              />
            </h2>
          </div>

          <div className="w-full lg:w-1/3">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-md">
              TAP-G is built around the things that make local life easier.
              From discovering neighborhood businesses to connecting people
              with everyday needs, we're bringing Gimhae closer, one connection
              at a time.
            </p>

            <Link
              href="/about"
              className="group w-full sm:w-fit relative flex items-center justify-center sm:justify-start gap-3 bg-primary text-white px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Discover</span>

              <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                ✦
              </span>

              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* IMPACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 text-center sm:gap-y-16 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center py-5 lg:py-10 ${
                index !== 0 ? "lg:border-l border-black/10 lg:pl-12" : ""
              } ${index !== 2 ? "lg:pr-12" : ""}`}
            >
              <h3 className="text-8xl font-mononarrowbold md:text-[9rem] font-medium tracking-tighter mb-6 flex items-baseline">
                <span
                  ref={(el) => (statsRefs.current[index] = el)}
                  className={
                    stat.lowOpacityValue ? "opacity-50" : "opacity-100"
                  }
                >
                  00
                </span>
              </h3>

              <h4 className="text-lg md:text-xl font-black uppercase tracking-tight mb-4">
                {stat.title}
              </h4>

              <p className="text-sm text-gray-600 max-w-[280px] leading-relaxed text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
