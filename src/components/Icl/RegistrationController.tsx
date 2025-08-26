
import { ArrowUpRight } from "lucide-react";

export const RegisterController = () => {
  return (
    <>
      <a
        href="https://www.rooktook.com/"
        target="_blank"

        className="inline-flex w-full sm:w-[190px] items-center justify-center gap-2 rounded-[10px] bg-[#54C339] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#54C339]/90"
      >
        REGISTER NOW
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
          <ArrowUpRight size={16} stroke="#54C339" />
        </span>
      </a>
      {/* {isOpen && (
        <PlayerDetailsDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmit={() => {
            setIsOpen(false);
            alert("Registrations Not Open Yet! Stay Tuned!");
          }}
        />
      )} */}
    </>
  );
};
