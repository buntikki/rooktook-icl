import { AboutTournament } from "@/components/Icl/About";
import { AboutOrganizers } from "@/components/Icl/AboutOrganizers";
import { Contact } from "@/components/Icl/Contact";
import { Faqs } from "@/components/Icl/Faqs";
import { FloatingNavbar } from "@/components/Icl/FloatingNavbar";
import { TournamentHeader } from "@/components/Icl/Header";
import { Prize } from "@/components/Icl/Prize";
import { TournamentRegistration } from "@/components/Icl/Registration";
import { RegisterController } from "@/components/Icl/RegistrationController";
import { JoinTournament } from "@/components/Icl/Rules";
import { BackgroundGlow } from "@/components/ui/BackgroundGlow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICL Registration",
  description:
    "Register on ICL to play chess online and win real rewards. Join free or paid tournaments, solve puzzles, and compete in blitz and bullet formats against real players.",
};

export default function Home() {
  return (
      <div>
        <FloatingNavbar />
        <TournamentHeader />
        <div className="relative flex flex-col items-center self-center overflow-hidden bg-[#13191D]">
          <div className="flex w-full max-w-[1200px] flex-col px-8">
            <div id="about-tournament" className="scroll-mt-24">
              <AboutTournament />
            </div>
  
            <BackgroundGlow height={330} width={330} left={"0%"} top={"15%"} />
  
            <div id="tournament-rules" className="scroll-mt-24">
              <JoinTournament />
            </div>
  
            <div id="tournament-registration" className="scroll-mt-24">
              <TournamentRegistration />
            </div>
  
            <BackgroundGlow height={330} width={330} top="45%" left="90%" />
  
            <div id="tournament-prize" className="scroll-mt-24">
              <Prize />
            </div>
  
            <BackgroundGlow height={330} width={330} top="50%" left="0%" />
  
            <div id="tournament-contact" className="scroll-mt-24">
              <Contact />
            </div>
  
            <div id="tournament-faqs" className="scroll-mt-24">
              <Faqs />
            </div>
  
            <div id="about-organizers" className="scroll-mt-24">
              <AboutOrganizers />
            </div>
          </div>
        </div>
        <BottomBarCTA />
      </div>
  );
}



const BottomBarCTA = () => {
  return (
    <div className="relative z-100">
      <div className="fixed bottom-0 flex w-full items-center justify-center self-center bg-[#13191D]/80 p-3 py-4 shadow-lg shadow-black/20 backdrop-blur-md sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        <RegisterController />
      </div>
    </div>
  );
};
