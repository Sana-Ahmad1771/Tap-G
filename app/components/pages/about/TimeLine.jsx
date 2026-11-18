
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ==========================================
// PARALLAX SPLIT TEXT COMPONENT
// ==========================================

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
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "top 70%",
          scrub: 1,
        },
      }
    );

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap justify-start leading-[0.85] ${className}`}
    >
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="relative overflow-hidden inline-block mr-[0.2em] md:mr-[0.3em]"
        >
          <span
            className={`word inline-block will-change-transform ${
              isGrey ? "text-white/20" : "text-white"
            }`}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

// ==========================================
// TAP-G COMMUNITY JOURNEY
// ==========================================

export default function Timeline() {
  const sectionRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () =>
      setIsLargeScreen(window.innerWidth >= 1280);

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax values
  const moveUp = useTransform(scrollYProgress, [0, 1], [80, -120]);
  const moveDown = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  // ==========================================
  // TAP-G JOURNEY STEPS
  // ==========================================

  const steps = [
    {
      id: 1,
      title: "Understanding",
      description:
        "Listening to international students, local residents, and businesses to understand their everyday needs, challenges, and expectations in Gimhae.",
      color: "bg-white/[0.03]",
    },
    {
      id: 2,
      title: "Discovery",
      description:
        "Exploring Gimhae's neighborhoods, local shops, hidden places, and cultural experiences to uncover opportunities for meaningful connections.",
      color: "bg-white/[0.05]",
    },
    {
      id: 3,
      title: "Connection",
      description:
        "Bringing international students, local businesses, and residents together to build relationships and make local life more accessible.",
      color: "bg-white/[0.03]",
    },
    {
      id: 4,
      title: "Experiences",
      description:
        "Creating opportunities for people to explore, participate, exchange cultures, and enjoy memorable activities together.",
      color: "bg-white/[0.05]",
    },
    {
      id: 5,
      title: "Participation",
      description:
        "Encouraging communities and local businesses to take part in activities, share ideas, and support a more connected Gimhae.",
      color: "bg-white/[0.03]",
    },
    {
      id: 6,
      title: "Growing Together",
      description:
        "Learning from community feedback, improving experiences, and continuously creating new opportunities for local connection.",
      color: "bg-white/[0.05]",
    },
  ];

  // Logic to handle columns based on screen size
  const columns = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];

  return (
    <section
      ref={sectionRef}
      className="rounded-[2rem] md:rounded-[4.5rem] py-16 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 bg-[#050505] overflow-hidden border border-white/5"
    >
      <div className="max-w-[1500px] mx-auto">

        {/* HEADER SECTION */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 md:mb-24 lg:mb-32 gap-8 md:gap-10">

          <div className="w-full lg:w-2/3">

            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-white flex items-center gap-2 mb-4 md:mb-8">
              <span className="text-white text-sm">✱</span>
              THE TAP-G JOURNEY
            </p>

            <h2 className="font-monosansnarrow text-[15vw] lg:text-[8.5rem] leading-[0.9] font-black uppercase tracking-wide">

              <ParallaxSplitText text="Building Local" />

              <ParallaxSplitText
                text="Connections"
                isGrey={true}
              />

            </h2>

          </div>

          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 lg:pb-6">

            <p className="text-xs md:text-sm lg:text-base text-white/40 uppercase tracking-[0.15em] leading-relaxed border-l border-white/10 pl-5 md:pl-6">
              From understanding local needs to creating
              meaningful experiences, every step brings
              Gimhae's communities closer together.
            </p>

          </div>

        </div>

        {/* RESPONSIVE GRID */}

        {!isLargeScreen ? (

          /* SMALL + MEDIUM SCREENS */

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {steps.map((step) => (

              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative p-8 md:p-10 lg:p-12 min-h-[320px] md:min-h-[400px]
                rounded-[1.5rem] md:rounded-3xl border border-white/5 backdrop-blur-3xl
                transition-all duration-700 hover:border-white/20 flex flex-col
                justify-between overflow-hidden ${step.color}`}
              >

                {/* CARD HOVER EFFECT */}

                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex justify-between items-start relative z-10">

                  <span className="text-4xl md:text-5xl font-black text-white/5 group-hover:text-white/20 transition-colors duration-500">
                    {String(step.id).padStart(2, "0")}
                  </span>

                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-lg md:text-xl group-hover:bg-primary group-hover:scale-110 group-hover:rotate-[45deg] transition-all duration-500">
                    ✦
                  </div>

                </div>

                <div className="relative z-10">

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 uppercase tracking-tighter text-white/90 group-hover:text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-white/30 group-hover:text-white/70 transition-colors duration-500">
                    {step.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        ) : (

          /* LARGE SCREENS ONLY */

          <div className="grid grid-cols-3 gap-6 md:gap-8">

            {columns.map((column, colIndex) => {

              const isZag = colIndex % 2 === 0;
              const parallax = isZag ? moveUp : moveDown;

              return (

                <div
                  key={colIndex}
                  className={`flex flex-col gap-6 md:gap-8 ${
                    isZag ? "pt-32" : "pt-0"
                  }`}
                >

                  {column.map((stepIndex) => {

                    const step = steps[stepIndex];

                    return (

                      <motion.div
                        key={step.id}
                        style={{ y: parallax }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{
                          duration: 0.8,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`group relative p-8 md:p-10 lg:p-12 min-h-[320px] md:min-h-[400px]
                        rounded-[1.5rem] md:rounded-3xl border border-white/5 backdrop-blur-3xl
                        transition-all duration-700 hover:border-white/20 flex flex-col
                        justify-between overflow-hidden ${step.color}`}
                      >

                        {/* CARD HOVER EFFECT */}

                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="flex justify-between items-start relative z-10">

                          <span className="text-4xl md:text-5xl font-black text-white/5 group-hover:text-white/20 transition-colors duration-500">
                            {String(step.id).padStart(2, "0")}
                          </span>

                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-lg md:text-xl group-hover:bg-primary group-hover:scale-110 group-hover:rotate-[45deg] transition-all duration-500">
                            ✦
                          </div>

                        </div>

                        <div className="relative z-10">

                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 uppercase tracking-tighter text-white/90 group-hover:text-white">
                            {step.title}
                          </h3>

                          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-white/30 group-hover:text-white/70 transition-colors duration-500">
                            {step.description}
                          </p>

                        </div>

                      </motion.div>

                    );

                  })}

                </div>

              );

            })}

          </div>

        )}

      </div>
    </section>
  );
}
