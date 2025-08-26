import { AboutTournamentBackgroundPieces } from "../ui/AnimatedChessItems";

export const AboutTournament = () => {
  return (
    <div>
      <div className="height-full mx-auto flex w-full pt-35 md:pt-50">
        <div className="flex w-full flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-1 flex-col">
            <h1 className="font-['Bricolage Grotesque'] text-[50px] leading-[55px] font-extrabold tracking-[0px] text-white">
              About the
              <br />
              Tournament
            </h1>
          </div>

          <div className="flex-1">
            <p className="font-['Bricolage Grotesque'] max-w-[900px] text-[16px] leading-[32px] font-extralight text-[#AAA9A9]">
              The Indian Chess League is a first-of-its-kind chess
              mega-tournament built to bring chess to the masses, modeled after
              the IPL but built for the mind. Organized by RookTook in
              collaboration with STAIRS Foundation, the ICL promises to be a
              grand spectacle, blending esports-style excitement with
              world-class chess competition.
            </p>
          </div>
        </div>
      </div>
      <BackgroundGradientContainer />
    </div>
  );
};

const BackgroundGradientContainer = () => {
  return (
    <div className="relative h-[40dvh] md:h-[60dvh]">
      <AboutTournamentBackgroundPieces />
    </div>
  );
};
