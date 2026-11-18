
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
   TAP-G FAQ DATA
================================ */
const faqs = [
  {
    id: "01",
    question: "What is TAP-G?",
    answer:
      "TAP-G is a local platform concept designed to connect Gimhae's neighborhood businesses, university students, and everyday needs in one place. Our goal is to make local discovery and daily life more convenient.",
  },
  {
    id: "02",
    question: "What can I find on TAP-G?",
    answer:
      "TAP-G is designed to help you discover local food, restaurants, cafes, groceries, daily essentials, neighborhood stores, and experiences around Gimhae.",
  },
  {
    id: "03",
    question: "Is TAP-G for Inje University students?",
    answer:
      "Yes! TAP-G is being designed with students in mind, especially those living and studying around Inje University. We want to make finding food, groceries, and everyday essentials easier.",
  },
  {
    id: "04",
    question: "How does delivery work?",
    answer:
      "TAP-G aims to make food and everyday essentials easier to access through convenient local delivery. Delivery availability and service areas will depend on the services introduced as the platform develops.",
  },
  {
    id: "05",
    question: "Can local businesses join TAP-G?",
    answer:
      "We want to connect local businesses with students and residents in Gimhae. If you run a local business and are interested in TAP-G, contact our team to discuss potential opportunities.",
  },
];

/* ================================
   FAQ SECTION
================================ */
const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="bg-[#f9f9f9] py-16 md:py-32 px-6 md:px-12 lg:px-20 font-monosans overflow-hidden">
      <div className="max-w-[1500px] mx-auto text-black">

        {/* HEADER */}
        <div className="mb-12 md:mb-24 border-t border-black/10 pt-8 md:pt-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12">

            {/* HEADING */}
            <div className="max-w-4xl">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2 mb-4 md:mb-8">
                <span className="text-sm">✱</span> Support & Inquiries
              </p>

              <h2 className="flex flex-col text-[14vw] md:text-[8rem] leading-[0.9] font-black uppercase tracking-tighter">
                <ParallaxSplitText
                  text="Quick"
                  className="block"
                />

                <ParallaxSplitText
                  text="Answers."
                  className="block opacity-40"
                />
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="lg:max-w-sm pb-4 lg:pb-2">
              <p className="text-base md:text-xl text-black/60 max-w-md font-medium leading-snug">
                Find answers to common questions about TAP-G, local discovery,
                and making everyday life in Gimhae easier.
              </p>
            </div>

          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-stretch">

          {/* IMAGE BLOCK */}
          <div className="lg:col-span-5 h-full order-2 lg:order-1">
            <motion.div
              className="relative h-[300px] md:h-full w-full min-h-[300px] lg:min-h-[500px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group border border-black/5"
              whileHover={{ scale: 0.99 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src="/images/faq.png"
                alt="Discovering local life with TAP-G in Gimhae"
                className="w-full h-full object-fill transition-transform duration-[1.5s] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/90 backdrop-blur-md px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-xl">
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                  TAP-G Support
                </p>
              </div>
            </motion.div>
          </div>

          {/* ACCORDION BLOCK */}
          <div className="lg:col-span-7 flex flex-col justify-between order-1 lg:order-2">

            <div className="divide-y divide-black/10 border-t border-black/10">
              {faqs.map((faq, index) => {
                const open = expanded === index;

                return (
                  <div key={faq.id} className="group">

                    <button
                      onClick={() => setExpanded(open ? null : index)}
                      aria-expanded={open}
                      className="w-full py-8 md:py-10 flex items-center justify-between text-left transition-colors"
                    >
                      <div className="flex gap-4 md:gap-8 items-start pr-4">

                        <span className="text-xs md:text-[16px] font-black text-black/20 mt-1.5 md:mt-2 uppercase tracking-widest">
                          {faq.id}
                        </span>

                        <h3
                          className={`text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tighter transition-all duration-500 leading-tight ${
                            open
                              ? "translate-x-2 md:translate-x-4 text-primary"
                              : "text-black"
                          }`}
                        >
                          {faq.question}
                        </h3>

                      </div>

                      <div
                        className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${
                          open
                            ? "bg-primary text-white border-primary rotate-45"
                            : "border-black/10 text-black group-hover:border-black"
                        }`}
                      >
                        <span className="text-xl md:text-2xl font-light">
                          ＋
                        </span>
                      </div>
                    </button>

                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 md:pb-10 pl-8 md:pl-20 text-base md:text-xl text-black/60 max-w-2xl font-medium leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </div>

            {/* INTEGRATED CTA BOX */}
            <div className="mt-8 md:mt-12 bg-black text-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden group/cta">

              <div className="relative z-10 text-center sm:text-left">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 md:mb-3 font-black">
                  Need more clarity?
                </p>

                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
                  Ask Us Directly.
                </h4>
              </div>

              <Link
                href="/contact"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10">
                  Ask a Question
                </span>

                <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                  ✦
                </span>

                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
