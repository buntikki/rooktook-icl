"use client";

export const FloatingNavbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const navOptions = [
    {
      label: "About Event",
      id: "about-tournament",
    },
    {
      label: "Rules & Regulations",
      id: "tournament-rules",
    },
    {
      label: "Schedule",
      id: "tournament-rules",
    },
    {
      label: "Eligibility",
      id: "tournament-rules",
    },
  ];

  return (
    <div className="fixed top-6 left-1/2 z-100 hidden w-auto -translate-x-1/2 justify-center md:flex">
      <div className="flex max-w-fit items-center gap-3 rounded-full bg-white/15 px-3 py-1 shadow-lg ring-1 ring-white/10 backdrop-blur-lg">
        {navOptions.map((nav) => (
          <button
            key={nav.label}
            onClick={() => scrollToSection(nav.id)}
            className="rounded-full px-5 py-2.5 text-sm font-[14px] text-white transition-all focus:outline-none cursor-pointer"
          >
            {nav.label}
          </button>
        ))}
      </div>
    </div>
  );
};
