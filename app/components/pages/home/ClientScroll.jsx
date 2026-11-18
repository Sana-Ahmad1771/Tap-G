
"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
  "LOCAL STORES",
  "FOOD & DRINKS",
  "GROCERY DELIVERY",
  "INJE UNIVERSITY",
  "GIMHAE COMMUNITY",
  "DAILY ESSENTIALS",
];

const ClientScroll = () => {
  return (
    <section className="relative w-full bg-[#f4f4f4] py-10 md:py-16 px-4 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Section Label */}
          <div className="w-full lg:col-span-3 text-center lg:text-left">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-black flex items-center justify-center lg:justify-start gap-2 mb-1">
              <span className="text-sm">✱</span>
              Made For Gimhae
            </p>

            <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-black/40">
              Local Life & Everyday Needs
            </p>
          </div>

          {/* Infinite Scrolling Marquee */}
          <div className="w-full lg:col-span-9 overflow-hidden relative">

            {/* Gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-[#f4f4f4] to-transparent z-10 pointer-events-none" />

            <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-[#f4f4f4] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-10 md:gap-16 items-center w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
              {[...items, ...items].map((item, idx) => (
                <div
                  key={idx}
                  className="shrink-0 flex items-center gap-4 group"
                >
                  <span className="text-primary text-xl md:text-2xl">
                    ✳
                  </span>

                  <span className="text-black/50 group-hover:text-black text-xs md:text-sm lg:text-base font-black tracking-[0.12em] whitespace-nowrap transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientScroll;
