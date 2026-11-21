"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinFill, RiKakaoTalkFill } from "react-icons/ri";

const TRAIL_IMAGES = [
  "/images/tapscroll1.png",
  "/images/tapscroll2.png",
  "/images/tapscroll3.png",
];

// Hero backgroug images
const HERO_SLIDES = [
  "/images/tap-hero11.png",
  "/images/tap-hero22.png",
  "/images/tap-hero3.png",
];

const SOCIAL_LINKS = [
  { id: "ig", icon: <IoLogoInstagram size={22} />, url: "#" },
  { id: "li", icon: <RiLinkedinFill size={22} />, url: "#" },
  { id: "kakao", icon: <RiKakaoTalkFill size={22} />, url: "#" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const imageCount = useRef(0);
  const zCount = useRef(1);
  const sectionRef = useRef(null);
  const trailRef = useRef(null);

  // Automatically change background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Preload trail images so they don't pop in, and clean up on unmount
  useEffect(() => {
    TRAIL_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    const layer = trailRef.current;

    return () => {
      if (!layer) return;
      gsap.killTweensOf(layer.children);
      layer.innerHTML = "";
    };
  }, []);

  // Spawns one image at the cursor and animates it with GSAP
  const spawnTrailImage = (x, y) => {
    const layer = trailRef.current;
    if (!layer) return;

    const img = document.createElement("img");
    img.src = TRAIL_IMAGES[imageCount.current % TRAIL_IMAGES.length];
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.className =
      "absolute w-32 h-44 md:w-48 md:h-64 object-cover rounded-xl shadow-2xl border border-white/10 will-change-transform";
    imageCount.current++;

    layer.appendChild(img);

    // Anchor on the cursor point and center the image on it
    gsap.set(img, {
      left: x,
      top: y,
      xPercent: -50,
      yPercent: -50,
      zIndex: zCount.current++,
      rotation: gsap.utils.random(-10, 10),
    });

    gsap
      .timeline({ onComplete: () => img.remove() })
      .fromTo(
        img,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" },
      )
      .to(
        img,
        {
          scale: 0.8,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.5,
          ease: "power2.in",
        },
        "+=0.4",
      );
  };

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const distance = Math.hypot(
      x - lastMousePos.current.x,
      y - lastMousePos.current.y,
    );

    if (distance > 90) {
      lastMousePos.current = { x, y };
      spawnTrailImage(x, y);
    }
  };

  const iconSlideVariants = {
    initial: { y: 0, rotateX: 0 },
    hover: { y: "-120%", rotateX: 45 },
  };

  const iconSlideVariants2 = {
    initial: { y: "120%", rotateX: -45 },
    hover: { y: 0, rotateX: 0 },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onTouchMove={(e) => handleMouseMove(e.touches[0])}
      className="relative md:h-screen h-[70vh] max-h-[1000px] w-full bg-[#080808] overflow-hidden flex flex-col items-center justify-center cursor-default"
    >
      {/* 1. DELIVERY BACKGROUND IMAGE SLIDESHOW */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentSlide}
            src={HERO_SLIDES[currentSlide]}
            alt="heroimage"
            aria-hidden="true"
            fetchPriority={currentSlide === 0 ? "high" : "auto"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Extra subtle fade near the bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-[#080808]/45 via-transparent to-[#080808]/10" />
      </div>

      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 lg:px-16 xl:px-24">
        {/* 2. GSAP IMAGE TRAIL LAYER (images are created here on mouse move) */}
        <div
          ref={trailRef}
          className="absolute inset-0 pointer-events-none z-20 overflow-hidden"
        />

        {/* 3. EXISTING PURPLE ABSTRACT VECTORS */}
        <div className="absolute inset-0 z-[1] pointer-events-none select-none">
          <div className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-linear-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-sm" />

          <div className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-linear-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-sm" />
        </div>

        {/* 4. MAIN TYPOGRAPHY */}
        <div className="relative z-10 text-center px-4">
          <div className="relative inline-block">
            <span className="absolute -top-2 -right-4 md:-top-4 md:-right-6 text-gray-300 text-sm md:text-2xl font-bold">
              ®
            </span>

            <h1 className="text-[17vw] leading-[0.85] font-black uppercase text-white tracking-tighter">
              TAP-G
            </h1>
          </div>

          <p className="mt-8 text-gray-200 text-sm md:text-lg uppercase tracking-[0.3em] font-medium">
            Local Finds. Delivered to You.
          </p>
        </div>

        {/* 5. BOTTOM STATUS BAR */}
        <div className="absolute bottom-0 left-0 w-full z-30 px-6 py-8 flex justify-between items-end text-gray-300 text-[10px] md:text-xs font-bold tracking-widest uppercase">
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.id}
                initial="initial"
                whileHover="hover"
                className="relative w-12 h-12 overflow-hidden border border-white/10 bg-white/5 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
              >
                <div className="relative h-6 w-6 overflow-hidden">
                  <motion.div
                    variants={iconSlideVariants}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center text-white"
                  >
                    {social.icon}
                  </motion.div>

                  <motion.div
                    variants={iconSlideVariants2}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-center justify-center text-white"
                  >
                    {social.icon}
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block tracking-[0.5em]">
            MADE FOR GIMHAE
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;