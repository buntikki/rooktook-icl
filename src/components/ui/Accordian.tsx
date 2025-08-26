"use client";

import { useState } from "react";
import FrostyImage from "@/../public/images/frosty-noise.webp";
import { Minus, Plus } from "lucide-react";

export const Accordion = ({
  question,
  answer,
  idx,
}: {
  question: string;
  answer: string;
  idx: number;
}) => {
  const [isOpen, setIsOpen] = useState(idx == 0);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="w-full overflow-hidden rounded-lg"
      style={{
        backgroundColor: "#171e23",
        maxWidth: "770px",
        alignSelf: "center",
      }}
    >
      <button
        onClick={toggleAccordion}
        className="hover:bg-opacity-80 flex w-full items-center justify-between p-6 text-left transition-all duration-200"
        style={{
          backgroundColor: "#171e23",
          backgroundImage: `url(${FrostyImage.src})`,
        }}
      >
        <span className="pr-4 text-lg font-medium text-white">{question}</span>
        <div className="flex h-6 w-6 p-1 items-center justify-center rounded-full bg-[#54C339]">
          {isOpen ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </div>
      </button>

      {isOpen && (
        <div
          className="px-6 pt-0 pb-6"
          style={{ backgroundImage: `url(${FrostyImage.src})` }}
        >
          <p className="text-base leading-relaxed text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};
