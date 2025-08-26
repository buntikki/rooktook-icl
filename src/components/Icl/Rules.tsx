import FrostyImage from "@/../public/images/frosty-noise.webp";
import { ArrowRight, Check } from "lucide-react";
import { AnimatedBishop } from "../ui/AnimatedChessItems";

const rules = [
  "Based on FIDE rapid time-control formats • Multi-stage format • 3 Round for each team to qualify for Finale",
  "Anti-cheating tech and manual monitoring",
  "Minimum age: Open to all (teams of 5 can include both genders)",
  "Players must play on their own devices via RookTook platform",
];

export const JoinTournament = () => {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-screen-xl">
        <RulesCard />

        <div className="mt-4 flex w-full flex-col gap-4 md:mt-16 md:flex-row md:items-stretch md:justify-between md:gap-16">
          <div className="w-full md:w-[calc(50%-0.5rem)]">
            <ScheduleCard />
          </div>
          <div className="w-full md:w-[calc(50%-0.5rem)]">
            <EligibilityCard />
          </div>
        </div>
      </div>
      <div className="relative h-[50dvh] w-full">
        <AnimatedBishop />
      </div>
    </section>
  );
};

export const RulesCard = () => {
  return (
    <section className="w-full">
      <div
        style={{ backgroundImage: `url(${FrostyImage.src})` }}
        className="mx-auto w-full overflow-hidden rounded-2xl bg-[#191f24] ring-1 ring-white/10"
      >
        <div className="grid justify-between gap-8 p-8 md:grid-cols-[minmax(16rem,24rem)_1fr] md:gap-10 md:p-12">
          <header className="leading-none">
            <h2 className="bg-[linear-gradient(180deg,#54c339_0%,#a5f63e_60%,#54c339_100%)] bg-clip-text text-[36px] font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Rules &<br /> Regulations
            </h2>
          </header>

          <div className="flex items-center md:items-start">
            <ol className="grid gap-4 text-sm leading-6 text-white/70 sm:text-base">
              {rules.map((text, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_1fr] items-start gap-3"
                >
                  <span
                    className="inline-flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[#13191d] px-2 py-1 text-xs font-extrabold text-[#fff] ring-1 ring-[transparent]"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                    <span className="text-sm sm:text-base">{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScheduleCard = () => {
  return (
    <section className="h-full w-full">
      <div className="flex h-full min-h-[220px] w-full flex-col overflow-hidden rounded-2xl bg-gradient-to-bl from-[#1f252b] via-[#191f24] to-[#151a1f] ring-1 ring-white/10">
        <div className="flex h-full flex-col justify-between gap-4 sm:gap-10 p-8">
          <header className="flex items-start gap-1">
            <h3 className="text-[36px] font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
              Schedule
            </h3>
          </header>

          <div className="flex flex-col sm:flex-row items-start justify-between text-white gap-6 sm:gap-0">
            <div className="flex flex-col">
              <p className="text-[14px] font-extrabold">Zonal Knockouts</p>
              <p className="text-[20px] font-extralight">November 2025</p>
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#968421] self-start sm:self-start">
              <ArrowRight className="h-4 w-4 transform rotate-90 sm:rotate-0" />
            </div>

            <div className="flex flex-col text-start sm:text-right">
              <p className="text-[14px] font-extrabold">National Final</p>
              <p className="text-[20px] font-extralight">
                1st week of <br /> December 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EligibilityCard = () => {
  return (
    <section className="h-full w-full">
      <div className="flex h-full min-h-[220px] w-full flex-col overflow-hidden rounded-2xl bg-gradient-to-bl from-[#1f252b] via-[#191f24] to-[#151a1f] ring-1 ring-white/10">
        <div className="flex h-full flex-col gap-10 p-8">
          <header className="flex items-start gap-1">
            <h3 className="text-[36px] font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl">
              Eligibility
            </h3>
          </header>

          <div className="flex flex-col gap-2 text-white">
            <p className="text-[16px] font-extralight">Open to:</p>

            <div className="flex w-full flex-row flex-wrap items-center justify-between gap-2">
              {eligibilityText.map((text, index) => (
                <div key={index} className="flex flex-row items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-[16px] font-extralight">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const eligibilityText = [
  "Open for all",
  "No FIDE rating required to participate.",
];
