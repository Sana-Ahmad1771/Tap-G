
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [shouldShow, setShouldShow] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [year, setYear] = useState(null);

  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Particle positions
  const [particles, setParticles] = useState(() =>
    Array.from({ length: 15 }, (_, i) => ({
      x: `${(i * 7) % 100}vw`,
      y: `${(i * 11) % 100}vh`,
    }))
  );

  // Check session and initialize particles
  useEffect(() => {
    setIsMounted(true);
    setYear(new Date().getFullYear());

    try {
      const shown = sessionStorage.getItem("tapg_preloader_shown");

      if (shown) {
        setShouldShow(false);
        setIsVisible(false);

        const ph = document.getElementById("preloader-placeholder");
        if (ph) ph.remove();

        return;
      }
    } catch (e) {}

    setParticles(
      Array.from({ length: 15 }, () => ({
        x: `${Math.random() * 100}vw`,
        y: `${Math.random() * 100}vh`,
      }))
    );
  }, []);

  // Loading progress
  useEffect(() => {
    if (!shouldShow || !isMounted) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 2 + 0.5;
        const nextValue = Math.min(prev + increment, 100);

        if (nextValue >= 100) {
          clearInterval(interval);

          setTimeout(() => setIsExiting(true), 500);
        }

        return nextValue;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [shouldShow, isMounted]);

  if (!isVisible) return null;

  return (
    <AnimatePresence
      onExitComplete={() => {
        try {
          sessionStorage.setItem("tapg_preloader_shown", "1");
        } catch (e) {}

        const ph = document.getElementById("preloader-placeholder");
        if (ph) ph.remove();

        setIsVisible(false);
        setShouldShow(false);
      }}
    >
      {!isExiting && shouldShow && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-dark-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* BACKGROUND ABSTRACT ELEMENTS */}
          <div className="absolute inset-0 pointer-events-none select-none">

            {/* Left Purple Abstract Shape */}
            <div className="absolute -left-[15%] bottom-[-20%] w-[50%] h-[120%] bg-gradient-to-tr from-primary via-dark-black to-primary -rotate-12 opacity-90 blur-sm z-0" />

            {/* Right Purple Abstract Shape */}
            <div className="absolute -right-[15%] -top-[30%] w-[60%] h-[130%] bg-gradient-to-bl from-primary via-dark-black to-primary rotate-[15deg] opacity-90 blur-sm z-0" />
          </div>

          {/* BACKGROUND GRADIENT */}
          <motion.div className="absolute inset-0" />

          {/* PARTICLE SYSTEM */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-purple-400/40 rounded-full"
                initial={{
                  x: p.x,
                  y: p.y,
                  opacity: 0,
                }}
                animate={{
                  y: ["-10vh", "110vh"],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* MAIN CONTENT */}
          <div className="relative h-full flex flex-col justify-between p-6 md:p-10">

            {/* CENTER BRANDING */}
            <div className="flex flex-1 items-center justify-center">
              <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4">

                  {/* TAP-G LOGO */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20">
                    <Image
                      src="/images/Tap-icon.svg"
                      alt="TAP-G Logo"
                      fill
                      priority
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>

                  <motion.h2 className="text-3xl md:text-4xl text-white font-monosans font-semibold tracking-wide">
                    TAP-G
                  </motion.h2>
                </div>

                {/* PROGRESS BAR */}
                <div className="w-full max-w-md">
                  <div className="relative h-1.5 w-64 bg-slate-200/20 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM RIGHT DETAILS */}
            <motion.div className="flex flex-col items-end gap-2">
              <span className="text-6xl font-bold text-white font-mono">
                {Math.floor(progress)}%
              </span>

              <p className="text-xs text-gray-50 tracking-wide">
                © {year ?? ""} TAP-G — Made for Gimhae.
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
