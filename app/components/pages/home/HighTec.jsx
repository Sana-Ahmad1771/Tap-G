"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const DISABLE_MOTION = true;
const MotionAP = DISABLE_MOTION
  ? ({ children }) => <>{children}</>
  : AnimatePresence;

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================================
   WORD-BY-WORD PARALLAX COMPONENT
================================ */
const ParallaxSplitText = ({ text, className = "", isGrey = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");

    const tween = gsap.fromTo(
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
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap leading-[1.05] tracking-[-0.04em] ${className}`}
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
   TAP-G / LOCAL INNOVATION SECTION
================================ */
const HighTec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Responsive transformations
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  // On mobile, keep the width closer to 100%
  const width = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? ["95%", "100%", "95%"] : ["85%", "100%", "85%"],
  );

  // Taller frame on mobile so the portrait video isn't tiny
  const height = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? ["50vh", "65vh", "50vh"] : ["40vh", "70vh", "40vh"],
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6],
  );

  return (
    <>
      <section
        ref={containerRef}
        className="bg-[#f4f4f4] py-16 md:py-24 lg:py-32 px-4 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="max-w-[1500px] mx-auto border-t border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-1 lg:gap-10">
            <div className="lg:col-span-4 pt-4 md:pt-6">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2">
                <span className="text-sm">✱</span> Local Innovation
              </p>
            </div>

            {/* RIGHT: Main Content */}
            <div className="lg:col-span-8 pt-1 md:pt-6">
              <h2 className="font-monosansnarrow text-[14vw] sm:text-[10vw] md:text-[4.5rem] lg:text-[5rem] leading-[1] md:leading-[1.1] font-black uppercase tracking-tighter">
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <ParallaxSplitText
                    className="tracking-wide"
                    text="Connecting"
                  />
                  <ParallaxSplitText
                    className="text-[8vw] md:text-[4rem] lg:text-[4.5rem] tracking-[-0.1em] opacity-100 font-normal"
                    text="𝄃𝄃𝄂𝄂𝄀𝄁𝄃𝄂𝄂𝄃"
                  />
                </div>

                <ParallaxSplitText
                  text="local life through"
                  className="mt-1 tracking-wide"
                />

                <ParallaxSplitText
                  className="tracking-wide"
                  text="one simple connection"
                  isGrey={true}
                />
              </h2>

              {/* Body Text */}
              <div className="mt-8 md:mt-12 max-w-full md:max-w-2xl">
                <p className="text-lg sm:text-xl md:text-2xl leading-[1.4] md:leading-[1.5] text-black font-medium opacity-90">
                  TAP-G brings local stores, students, and everyday needs closer
                  together. Discover Gimhae, explore neighborhood businesses,
                  and get the food and essentials you need — all through one
                  convenient local platform.
                </p>
              </div>
            </div>
          </div>

          {/* Video Section - Centered */}
          <div className="flex justify-center items-center mt-10 md:mt-20 relative">
            <motion.div
              style={{
                scale,
                width,
                height,
                opacity,
                willChange: "transform, width, height",
              }}
              className="relative cursor-pointer group overflow-hidden rounded-xl md:rounded-3xl shadow-2xl bg-[#080808]"
              onClick={() => setIsOpen(true)}
            >
              {/* Blurred backdrop: same video, enlarged to fill the wide frame */}
              <video
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-60 pointer-events-none"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/video/finaltap-g.mp4" type="video/mp4" />
              </video>

              {/* Dark overlay so the portrait video stands out */}
              <div className="absolute inset-0 bg-black/30 pointer-events-none" />

              {/* Portrait video, centered and never cropped */}
              <video
                className="relative z-10 w-full h-full object-contain"
                muted
                loop
                autoPlay
                playsInline
              >
                <source src="/video/finaltap-g.mp4" type="video/mp4" />
              </video>

              {/* Play Button */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary/60 border border-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-130 transition-all duration-500">
                  <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[14px] md:border-l-[20px] border-l-white border-b-[8px] md:border-b-[12px] border-b-transparent ml-1.5 md:ml-2" />
                </div>
              </div>

              {/* Overlay Label */}
              <div className="absolute z-20 bottom-4 left-4 md:bottom-8 md:left-8">
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/90 font-bold bg-primary/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  Discover Local Life — TAP-G
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Video Modal */}
        <MotionAP>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/98 p-4 md:p-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 md:top-8 md:right-8 z-[10000] flex items-center cursor-pointer justify-center text-white text-xs font-bold uppercase tracking-widest bg-white/10 border border-white/20 backdrop-blur-md px-4 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Close <span className="ml-2 text-base">×</span>
              </button>

              {/* Video */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative z-[9999] h-[85vh] max-w-full aspect-[9/16] rounded-xl overflow-hidden bg-black"
              >
                <video
                  src="/video/finaltap-g.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </MotionAP>
      </section>
    </>
  );
};

export default HighTec;
