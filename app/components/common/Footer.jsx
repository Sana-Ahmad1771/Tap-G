"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinFill, RiFacebookFill, RiKakaoTalkFill } from "react-icons/ri";
import { FiArrowUp } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const iconSlideVariants = {
    initial: { y: 0 },
    hover: { y: -40 },
  };

  const iconSlideVariants2 = {
    initial: { y: 40 },
    hover: { y: 0 },
  };

  const socialLinks = [
    { id: "ig", icon: <IoLogoInstagram size={20} />, url: "#" },
    { id: "fb", icon: <RiFacebookFill size={20} />, url: "#" },
    { id: "li", icon: <RiLinkedinFill size={20} />, url: "#" },
    { id: "kakao", icon: <RiKakaoTalkFill size={20} />, url: "#" },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Explore", href: "/explore" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full font-monosans bg-[#fefefe] overflow-hidden">
      {/* WHITE TOP SECTION */}
      <div className="py-10 md:py-18 lg:py-20 px-4 md:px-12 lg:px-20 relative">
        {/* Ghost Text Background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none w-full text-center">
          <span className="text-[24vw] md:text-[19vw] font-black text-black opacity-[0.035] leading-none uppercase tracking-tighter block">
            TAP-G
          </span>
        </div>

        <div className="max-w-[1500px] mx-auto relative z-10">
          {/* RESPONSIVE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-y-20 lg:gap-16 items-start">
            {/* COLUMN 1: BRANDING & SOCIALS */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-6">
                {/* TAP-G LOGO */}
                <Link href="/" className="flex items-center gap-3 group w-fit">
                  <div className="relative border-2 border-black rounded-sm px-2 py-1 group-hover:bg-black transition-colors duration-300">
                    <div className="relative w-8 h-7 md:w-10 md:h-9">
                      <Image
                        src="/images/Tap-icon.svg"
                        alt="TAP-G Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  <span className="font-bold text-black tracking-widest uppercase text-xs md:text-sm">
                    TAP-G®
                  </span>
                </Link>

                {/* SOCIAL LINKS */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial="initial"
                      whileHover="hover"
                      className="relative w-10 h-10 overflow-hidden bg-black rounded-full flex items-center justify-center group"
                      aria-label={social.id}
                    >
                      <div className="relative h-5 w-5 overflow-hidden">
                        <motion.div
                          variants={iconSlideVariants}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="absolute inset-0 flex items-center justify-center text-white"
                        >
                          {social.icon}
                        </motion.div>

                        <motion.div
                          variants={iconSlideVariants2}
                          transition={{ duration: 0.4, ease: "circOut" }}
                          className="absolute inset-0 flex items-center justify-center text-white"
                        >
                          {social.icon}
                        </motion.div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* BRAND DESCRIPTION */}
              <div className="space-y-4 text-xs md:text-sm text-gray-500 font-medium tracking-wide">
                <p className="max-w-[260px] leading-relaxed">
                  Connecting local stores, university students, and everyday
                  life across Gimhae, South Korea.
                </p>

                <div className="flex flex-col gap-1">
                  <Link
                    href="/contact"
                    className="text-black font-bold hover:text-primary transition-colors"
                  >
                    Get in touch
                  </Link>

                  <span className="text-gray-400">
                    Made for Gimhae, South Korea
                  </span>
                </div>
              </div>
            </div>

            {/* COLUMN 2: NAVIGATION */}
            <div className="md:col-span-2 lg:col-span-5 flex justify-start lg:justify-center order-3 lg:order-2">
              <div className="flex flex-col gap-6 w-full">
                <span className="text-gray-400 text-[10px] uppercase tracking-[0.4em] font-black">
                  Navigation
                </span>

                <div className="flex flex-wrap gap-2 bg-black p-2 md:p-3 rounded-2xl border border-black/5 shadow-xl">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex-1 min-w-[90px] px-4 py-2 md:py-3 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-black hover:bg-white transition-all duration-300 text-center"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUMN 3: CTA */}
            <div className="lg:col-span-4 flex flex-col items-start md:items-end justify-between md:min-h-[220px] lg:min-h-[300px] order-2 lg:order-3">
              <div className="flex items-center gap-2 mb-8 md:mb-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  Local Connections
                </span>

                <span className="w-8 h-[1px] bg-gray-200" />

                <span className="text-[10px] font-black uppercase tracking-widest text-black">
                  TAP-G
                </span>
              </div>

              <div className="space-y-6 flex flex-col items-start md:items-end w-full">
                <p className="text-gray-400 text-[10px] md:text-[11px] uppercase tracking-widest font-bold md:text-right leading-relaxed">
                  Discover local life.
                  <br className="hidden md:block" /> Connect with your
                  community.
                </p>

                <Link
                  href="/contact"
                  className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-[13px] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10">Connect With TAP-G</span>

                  <span className="text-lg relative z-10 group-hover:rotate-45 transition-transform duration-500">
                    ✦
                  </span>

                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLACK BOTTOM DOCK */}
      <div className="bg-[#080808] rounded-t-[1.5rem] sm:rounded-t-[2rem] md:rounded-t-[3rem] px-6 md:px-12 lg:px-20 py-8 md:py-10 text-white relative z-20">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* COPYRIGHT */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-[8px] md:text-[9px] font-bold text-gray-500 uppercase tracking-[0.2em] text-center md:text-left">
            <span className="text-gray-400 w-full md:w-auto mb-1 md:mb-0">
              © {currentYear} TAP-G
            </span>

            <p className="flex gap-2">
              Connecting <span className="text-white">Gimhae</span>
            </p>

            <p className="flex gap-2 border-l border-white/10 pl-4">
              Built for <span className="text-white">Local Life</span>
            </p>
          </div>

          {/* BACK TO TOP */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-6 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
              <Link
                href="/"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-white/10"
              >
                Licenses
              </Link>

              <Link
                href="/"
                className="hover:text-white transition-colors underline underline-offset-4 decoration-white/10"
              >
                Changelog
              </Link>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group cursor-pointer flex items-center gap-3 bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 px-5 py-2.5 rounded-full transition-all duration-500"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Top
              </span>

              <span className="text-lg group-hover:-translate-y-1 transition-transform italic">
                <FiArrowUp />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;