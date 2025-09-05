import BackgroundGraphic from "@/../public/images/background-graphic.png";
import CalenderIcon from "@/../public/icons/calender-icon.png";
import FileBackground from "@/../public/images/file.png";

import MoneyIcon from "@/../public/icons/money-icon.png";
import PinIcon from "@/../public/icons/participants-icon.png";
import TrophyIcon from "@/../public/images/trophy-icon.png";

import Image from "next/image";
import { RegisterController } from "./RegistrationController";
import { BackgroundPieces } from "../ui/AnimatedChessItems";

export const TournamentHeader = () => {
  return (
    <div className="relative min-h-[100dvh] md:h-[100dvh]">
      <Image
        alt="tournament-details-background-graphic"
        src={BackgroundGraphic}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      <BackgroundPieces />
      <div className="relative h-full w-full">
        <div className="mx-auto flex h-full w-full max-w-[1300px] items-center px-4 pt-30 pb-4 sm:pt-24 md:pt-0 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-50">
            <div className="max-w-xl text-center md:text-left">
              <div className="mb-5 inline-block rounded-full bg-[#26B970] px-4 py-1 text-[12px] font-bold tracking-wider text-white">
                ✨ Tournament
              </div>

              <h1 className="text-4xl leading-[1.1] font-black text-white md:text-5xl lg:text-6xl">
                India&apos;s Biggest
                <br className="hidden sm:block" /> Chess Revolution
                <br className="hidden sm:block" /> Starts Now
              </h1>

              <p className="mt-5 text-base leading-7 text-white/80">
                Join the movement to transform chess into a nationwide sporting
                sensation. With{" "}
                <span className="font-semibold text-white">
                  20+ Lakh participants
                </span>{" "}
                across
                <span className="font-semibold text-white"> 46 cities</span> and
                a <span className="font-semibold text-white">₹2 Cr+</span> prize
                pool, ICL is India&apos;s largest chess tournament, setting the
                stage for a Guinness World Record.
              </p>

              <div className="mt-7 hidden md:flex flex-wrap items-stretch justify-center gap-4 md:justify-start">
                <a
                  href=""
                  className="inline-flex items-center justify-center rounded-[12px] border border-white bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 cursor-pointer"
                >
                  EXPLORE TOURNAMENT
                </a>
                <RegisterController />
              </div>
            </div>

            <InfoFolders />
          </div>
        </div>
      </div>
    </div>
  );
};

const folderData = [
  {
    mainText: "1st week of\nDecember 2025",
    subLabel: "FINALE",
    icon: TrophyIcon,
  },
  { mainText: "5 Players\nper Team", subLabel: "TEAM FORMAT", icon: PinIcon },
  {
    mainText: "November\n2025",
    subLabel: "ZONAL EVENTS BEGIN",
    icon: CalenderIcon,
  },
  { mainText: "₹1000\nper Team", subLabel: "ENTRY FEE", icon: MoneyIcon },
];

const InfoFolders = () => (
  <div className="grid grid-cols-2 gap-4 sm:gap-6 md:justify-end md:gap-8">
    {folderData.map((item, index) => (
      <div
        key={index}
        className="relative h-[200px] max-w-[220px] min-w-[120px] p-4 sm:p-5"
      >
        <Image
          src={FileBackground}
          alt="folder background"
          fill
          style={{
            pointerEvents: "none",
            userSelect: "none",
            opacity: 1,
          }}
        />

        <div className="relative z-20 mt-6 pl-1 text-left">
          <Image alt="sub-icon" height={44} width={44} src={item.icon} />
          <p className="mt-4 text-lg leading-6 font-semibold whitespace-pre-line text-white">
            {item.mainText}
          </p>
          <p className="mt-1 text-[11px] font-semibold tracking-widest text-gray-200 uppercase">
            {item.subLabel}
          </p>
        </div>
      </div>
    ))}
  </div>
);
