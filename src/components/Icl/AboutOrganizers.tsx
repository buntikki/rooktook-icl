import glowEclipse from "@/../public/images/glow-eclipse.png";
import Image from "next/image";

export const AboutOrganizers = () => {
  return (
    <div className="my-40 sm:my-60 mt-100 flex h-[50dvh] w-full flex-col items-center">
      <Image
        src={glowEclipse}
        alt="glow eclipse"
        className="absolute w-full max-w-[1000px] object-cover "
      />
      <div className="mt-40 flex max-w-[770px] flex-col text-center">
        <p className="text-[20px] font-extrabold">About Us</p>
        <p className="text-[40px] font-extrabold">About The Organizers</p>
        <p className="mt-4 text-[16px] text-[#AAA9A9] font-extralight leading-[2]">
          RookTook is India’s premier platform for competitive chess tournaments
          and puzzle leagues, aiming to elevate chess into a digital sport for
          the masses. STAIRS Foundation is one of India’s largest grassroots
          sports development organizations with a vision to empower youth
          through sport.
        </p>
      </div>
    </div>
  );
};
