"use client";

import AppStore from "@/../public/images/appstore.svg";
import PlayStore from "@/../public/images/playstore.svg";
import RTImage from "@/../public/images/rt-footer-text.svg";
import FrostyImage from "@/../public/images/frosty-noise.webp";
// import FacebookIcon from "@/public/images/facebook.svg";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

const Footer = () => {
  const year = new Date().getFullYear();

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const animationVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 2.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        bounce: 0.15,
      },
    },
  };

  return (
    <footer className="relative px-0 md:px-4" ref={ref}>
      <motion.div
        className="relative overflow-hidden rounded-t-xl border border-white/5 bg-contain bg-center bg-repeat pt-[100px] pb-[80px] md:pb-[280px]"
        style={{
          backgroundImage: `url(${FrostyImage.src})`,
          backgroundColor: "rgba(22, 30, 35, 1)",
          backgroundBlendMode: "overlay",
        }}
        initial="hidden"
        animate={controls}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        variants={animationVariants as any}
      >
        <div className="container mx-auto px-4 pb-20">
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="mb-14">
                <div className="mb-2 text-[18px] font-normal text-[#AAA9A9]">
                  Contact us @{" "}
                </div>
                <a
                  className="text-2xl font-extralight text-[#EFEDED] md:text-5xl"
                  href="mailto:support@rooktook.com"
                >
                  support@rooktook.com
                </a>
              </div>
              <div className="mb-5">
                <h4 className="mb-2 text-[18px] font-normal text-[#AAA9A9]">
                  Business Address:
                </h4>
                <address className="text-base font-normal text-white/40 not-italic">
                  Stockation Private Limited <br />
                  30/35, 35-A 4th Floor West Patel Nagar, <br />
                  New Delhi 110008
                </address>
              </div>
              <ul className="mb-5 flex items-center gap-4">
                <li>
                  <a
                    href="https://www.linkedin.com/company/rooktook/"
                    target="_blank"
                    className="group text-[#787878] hover:text-[#54C339]"
                  >
                    <LinkedinIcon
                      width={24}
                      height={24}
                      className="transition-colors duration-200"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/playrooktook/"
                    target="_blank"
                    className="group text-[#787878] hover:text-[#54C339]"
                  >
                    <InstagramIcon
                      width={24}
                      height={24}
                      className="transition-colors duration-200"
                    />
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-2 text-[14px] font-normal text-[#AAA9A9] md:flex-row md:text-base">
                <li className="hidden md:block">&copy;Copyright {year}</li>
                <span className="mx-1 hidden text-sm text-[#54C339] md:block">
                  |
                </span>
                <li>
                  <Link
                    className="transition-all delay-100 hover:text-[#54C339]"
                    href="https://rooktook.com/privacy-policy"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <span className="mx-1 hidden text-sm text-[#54C339] md:block">
                  |
                </span>
                <li>
                  <Link
                    className="transition-all delay-100 hover:text-[#54C339]"
                    href="https://rooktook.com/refund-policy"
                    target="_blank"
                  >
                    Refund Policy
                  </Link>
                </li>
                <span className="mx-1 hidden text-sm text-[#54C339] md:block">
                  |
                </span>
                <li>
                  <Link
                    className="transition-all delay-100 hover:text-[#54C339]"
                    href="https://rooktook.com/terms-and-conditions"
                    target="_blank"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <div className="mb-14 flex items-center gap-2 md:justify-end">
                <a href="https://onelink.to/u9ktwp" target="_blank">
                  <Image
                    src={PlayStore.src}
                    alt="Play Store"
                    width={142}
                    height={48}
                  />
                </a>
                <a href="https://onelink.to/u9ktwp" target="_blank">
                  <Image
                    src={AppStore.src}
                    alt="App Store"
                    width={142}
                    height={48}
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#a9a9a9]">Disclaimer</p>
            <ul className="text-sm text-white/40">
              {/* <li>You must be 16 or older to create an account on RookTook.</li> */}
              <li>
                This is for entertainment purposes only. Winning a tournament on
                RookTook depends on knowledge and skill. It is available to play
                for free.
              </li>
              <li>We don&apos;t offer Refunds or cancellation.</li>
            </ul>
          </div>
          <p className="block pt-5 text-sm font-normal text-white/40 md:hidden">
            &copy;Copyright {year}
          </p>
        </div>
        <Image
          src={RTImage.src}
          alt="Rooktook"
          width={2200}
          height={275}
          className="absolute bottom-0 left-0"
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
