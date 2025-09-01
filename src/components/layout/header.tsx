"use client";

import StairsLogo from "@/../public/images/stairs-logo.webp";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RookTookLogo from "@/../public/images/logo.svg";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
          className={`fixed top-0 right-0 left-0 z-50 w-full px-6 py-7 transition-all duration-300 md:py-4 ${
            scrolled
              ? "header-border bg-[#161E23]/10 backdrop-blur-xl"
              : "border-0 bg-transparent"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-xl font-bold text-white focus:outline-0"
            >
              <Image src={RookTookLogo} alt="rooktook" width={210} height={32} />
            </Link>

            <Image src={StairsLogo} height={85} width={85} alt="stairs-logo" />
          </div>
        </motion.header>
      </AnimatePresence>
    </>
  );
}
