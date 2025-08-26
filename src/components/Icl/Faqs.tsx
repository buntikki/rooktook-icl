import { Accordion } from "../ui/Accordian";
import { AnimatedRook } from "../ui/AnimatedChessItems";

export const Faqs = () => {
  return (
    <div className="relative mt-60 flex flex-col gap-8">
      <header className="text-center">
        <p className="text-[20px] font-extrabold text-[#AAA9A9]">Faqs</p>
        <p className="text-[40px] font-extrabold">Frequently Asked Questions</p>
      </header>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          question={faq.question}
          answer={faq.answer}
          idx={index}
        />
      ))}
      <AnimatedRook />
    </div>
  );
};

const faqs = [
  {
    question: "Can players be from different cities in one team?",
    answer: "Yes, as long as they play together under one team registration.",
  },
  {
    question: "Do I need a FIDE rating to join?",
    answer:
      "No, the tournament is open to all players regardless of their FIDE rating.",
  },
  {
    question: "Is the tournament online or offline?",
    answer: "The tournament is conducted online.",
  },
  {
    question: "How many teams qualify for the finals?",
    answer:
      "The top 8 teams from the zonal knockouts qualify for the national finals.",
  },
  {
    question: "How long do the finals last?",
    answer:
      "The finals are played over 2 days, with each day consisting of 5 rounds.",
  },
];
