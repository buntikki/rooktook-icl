"use client";

import { motion } from "framer-motion";
import kingImage from "@/../public/chess/king.png";
import knightImage from "@/../public/chess/knight.png";
import Image from "next/image";
import bishopImage from "@/../public/chess/bishop.png";

const MotionImage = motion(Image);

export const BackgroundPieces = () => {
  return (
    <>
      <MotionImage
        src={kingImage}
        alt="rook blurred"
        aria-hidden="true"
        className="pointer-events-none hidden select-none sm:block"
        style={{
          position: "absolute",
          left: "5%",
          top: "20%",
          width: "130px",
          height: "auto",
          filter: "blur(4px)",
          opacity: 0.35,
        }}
        initial={{ y: 0, rotate: -25, scale: 1 }}
        animate={{
          y: [-4, 4, -4],
          rotate: [-25, -22, -25],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
        priority={false}
      />

      <MotionImage
        src={knightImage}
        alt="knight blurred"
        aria-hidden="true"
        className="pointer-events-none hidden select-none sm:block"
        style={{
          position: "absolute",
          right: "4%",
          bottom: "12%",
          width: "136px",
          height: "230px",
          filter: "blur(4px)",
          opacity: 0.35,
        }}
        initial={{ y: 0, rotate: 20, scale: 1 }}
        animate={{
          y: [5, -5, 5],
          rotate: [30, 23, 20],
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          times: [0, 0.5, 1],
          delay: 0.3,
        }}
        priority={false}
      />
    </>
  );
};

export const AboutTournamentBackgroundPieces = () => {
  return (
    <>
      <MotionImage
        src={kingImage}
        alt="rook blurred"
        aria-hidden="true"
        className="pointer-events-none hidden select-none sm:block"
        style={{
          position: "absolute",
          right: "20%",
          bottom: "20%",
          width: "130px",
          height: "auto",
          filter: "blur(6px)",
          opacity: 0.35,
        }}
        initial={{ y: 0, rotate: -25, scale: 1 }}
        animate={{
          y: [-4, 4, -4],
          rotate: [-25, -22, -25],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
        priority={false}
      />

      <MotionImage
        src={knightImage}
        alt="knight blurred"
        aria-hidden="true"
        className="pointer-events-none select-none block"
        style={{
          position: "absolute",
          left: "4%",
          top: "12%",
          width: "106px",
          height: "170px",
          filter: "blur(7px)",
          opacity: 0.35,
        }}
        initial={{ y: 0, rotate: 20, scale: 1, scaleX: -1 }}
        animate={{
          y: [5, -5, 5],
          rotate: [30, 23, 20],
          scale: [1, 1.015, 1],
          scaleX: -1,
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          times: [0, 0.5, 1],
          delay: 0.3,
        }}
        priority={false}
      />
    </>
  );
};

export const AnimatedBishop = () => {
  return (
    <MotionImage
      src={bishopImage}
      alt="knight blurred"
      aria-hidden="true"
      className="pointer-events-none select-none sm:block left-[25%] sm:left-[10%]"
      style={{
        position: "absolute",
        // left: "10%",
        top: "22%",
        width: "93px",
        height: "211px",
        filter: "blur(6px)",
        opacity: 0.35,
      }}
      initial={{ y: 0, rotate: 20, scale: 1 }}
      animate={{
        y: [5, -5, 5],
        rotate: [30, 23, 20],
        scale: [1, 1.015, 1],
      }}
      transition={{
        duration: 7.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        times: [0, 0.5, 1],
        delay: 0.3,
      }}
      priority={false}
    />
  );
};

export const AnimatedKnight = () => {
  return (
    <MotionImage
      src={knightImage}
      alt="knight blurred"
      aria-hidden="true"
      className="pointer-events-none select-none sm:block top-[-150%] right-[-30%] sm:top-[22%] sm:right-[16%]"
      style={{
        position: "absolute",
        // right: "16%",
        // top: "22%",
        width: "182px",
        height: "291px",
        filter: "blur(5px)",
        opacity: 0.35,
      }}
      initial={{ y: 0, rotate: 20, scale: 1 }}
      animate={{
        y: [5, -5, 5],
        rotate: [30, 23, 20],
        scale: [1, 1.015, 1],
      }}
      transition={{
        duration: 7.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        times: [0, 0.5, 1],
        delay: 0.3,
      }}
      priority={false}
    />
  );
};

export const AnimatedKing = () => {
  return (
    <MotionImage
      src={kingImage}
      alt="knight blurred"
      aria-hidden="true"
      className="pointer-events-none absolute top-[80%] right-[30%] z-50 select-none sm:block md:top-[100%] md:right-[70%]"
      style={{
        position: "absolute",
        // right: "70%",
        width: "106px",
        height: "232px",
        filter: "blur(5px)",
        opacity: 0.35,
      }}
      initial={{ y: 0, rotate: 20, scale: 1, scaleX: -1 }}
      animate={{
        y: [5, -5, 5],
        rotate: [30, 23, 20],
        scale: [1, 1.015, 1],
      }}
      transition={{
        duration: 7.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        times: [0, 0.5, 1],
        delay: 0.3,
      }}
      priority={false}
    />
  );
};


export const AnimatedRook = () => {
    return (
      <MotionImage
        src={bishopImage}
        alt="knight blurred"
        aria-hidden="true"
        className="pointer-events-none select-none sm:block"
        style={{
          position: "absolute",
          right: "0%",
          top: "90%",
          width: "132px",
          height: "291px",
          filter: "blur(5px)",
          opacity: 0.35,
        }}
        initial={{ y: 0, rotate: 20, scaleX: -1 }}
        animate={{
          y: [5, -5, 5],
          rotate: [30, 23, 20],
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          times: [0, 0.5, 1],
          delay: 0.3,
        }}
        priority={false}
      />
    );
  };
  