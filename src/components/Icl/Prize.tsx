import Image, { StaticImageData } from "next/image";
import goldTrophy from "@/../public/images/gold-trophy.webp";
import silverTrophy from "@/../public/images/silver-trophy.webp";
import bronzeTrophy from "@/../public/images/bronze-trophy.webp";
import bronzeTrophy2 from "@/../public/images/bronze-2-trophy.webp";
import FrostyImage from "@/../public/images/frosty-noise.webp";


type TPrizeItem = {
  label: string;
  amount: string;
  image: StaticImageData;
};

export const Prize = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full flex-col items-start md:flex-row md:items-end justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-extrabold text-[#AAA9A9]">PRIZE POOL</p>
          <p className="text-[50px] font-extrabold">₹2.3 Crore</p>
        </div>
        <p className="text-[16px] font-extralight text-[#AAA9A9]">
          Sponsored goodies, trophies & certificates <span className="text-white"> for finalists</span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {prizes.map((prize, index) => (
          <PrizeItem
            key={index}
            label={prize.label}
            amount={prize.amount}
            image={prize.image}
          />
        ))}
      </div>
    </div>
  );
};

const PrizeItem = ({ label, amount, image }: TPrizeItem) => {
  return (
    <div style={{ backgroundImage: `url(${FrostyImage.src})` }} className="flex  flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#191f24] p-10 ring-1 ring-white/10">
      <Image src={image} alt={label} className="h-14 w-14 object-contain" />
      <p className="text-[22px] font-extrabold">{amount}</p>
      <p className="text-[14px] font-semibold text-gray-400">{label}</p>
    </div>
  );
};

const prizes = [
  {
    label: "1ST TEAM",
    amount: "₹1,00,00,000",
    image: goldTrophy,
  },
  {
    label: "2ND TEAM",
    amount: "₹50,00,000",
    image: silverTrophy,
  },
  {
    label: "3RD TEAM",
    amount: "₹30,00,000",
    image: bronzeTrophy,
  },
  {
    label: "4TH - 8TH TEAMS",
    amount: "₹10,00,000 Each",
    image: bronzeTrophy2,
  },
];
