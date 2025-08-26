import gpayIcon from "@/../public/icons/gpay.svg";
import mastercardIcon from "@/../public/icons/mastercard.svg";
import paytmIcon from "@/../public/icons/paytm.svg";
import phonePay from "@/../public/icons/phone-pay.svg";
import upiIcon from "@/../public/icons/upi.svg";
import visaIcon from "@/../public/icons/visa.svg";
import FrostyImage from "@/../public/images/frosty-noise.webp";
import Image from "next/image";
import { AnimatedKnight } from "../ui/AnimatedChessItems";
import { RegisterController } from "./RegistrationController";
import { differenceInDays, differenceInHours } from "date-fns";

const RegistrationDate = new Date("2025-10-30T00:00:00");
const days = differenceInDays(RegistrationDate, new Date());
const hours = differenceInHours(RegistrationDate, new Date()) % 24;

const paymentItemIcons = [
  mastercardIcon,
  visaIcon,
  gpayIcon,
  paytmIcon,
  phonePay,
  upiIcon,
];
type RegistrationFieldItem = (typeof registrationFields)[0];

export const TournamentRegistration = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-20">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {registrationFields.map((field, index) => (
            <RegistrationField
              key={index}
              label={field.label}
              heading={field.heading}
              component={field.component}
            />
          ))}
        </div>
      </div>
      <div className="hidden sm:block">
        <RegisterController />
      </div>
      <div className="relative h-[15dvh] sm:h-[60dvh] w-full">
        <AnimatedKnight />
      </div>
    </section>
  );
};

const registrationFields = [
  {
    label: "Registration",
    heading: "Fees",
    component: (
      <div className="flex flex-col">
        <p className="text-[20px] font-bold">₹200 per participant</p>
        <p className="text-[14px] text-[#848484]">per team member</p>
      </div>
    ),
  },
  {
    label: "Payment",
    heading: "Option",
    component: (
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          {paymentItemIcons.map((icon, index) => (
            <div
              key={index}
              className="h-[25px] w-[25px] overflow-hidden rounded-full"
            >
              <Image
                src={icon.src}
                alt={`Payment option ${index + 1}`}
                height={25}
                width={25}
              />
            </div>
          ))}
        </div>
        <p className="text-[14px] text-[#848484]">
          Team leaders can pay for all members together
        </p>
      </div>
    ),
  },
  {
    label: "Registration",
    heading: "Deadline",
    component: (
      <div className="flex flex-col">
        <p className="text-[20px] font-bold">October 30, 2025</p>
        <p className="text-[14px] text-[#FF7272]">
          {days} days : {hours} hrs remaining
        </p>
      </div>
    ),
  },
  {
    label: "Cancellation / Refund ",
    heading: "Policy",
    component: (
      <div className="flex flex-col">
        <p className="text-[20px] font-bold">No Refund</p>
        <p className="text-[14px] text-[#848484]">
          Refund initiated only in case of event cancellation.
        </p>
      </div>
    ),
  },
];

const RegistrationField = ({
  label,
  heading,
  component,
}: RegistrationFieldItem) => {
  return (
    <section className="h-full w-full">
      <div
        style={{ backgroundImage: `url(${FrostyImage.src})` }}
        className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#191f24] ring-1 ring-white/10"
      >
        <div className="flex h-full flex-col justify-between gap-2 p-8">
          <header className="leading-none ">
            <p className="font-extrabold mb-1">{label}</p>
            <h2 className="bg-[linear-gradient(180deg,#6EF57B_0%,#35C34A_60%,#21A538_100%)] bg-clip-text text-[36px] sm:text-4xl font-extrabold tracking-tight text-transparent ">
              {heading}
            </h2>
          </header>

          <div className="flex-grow">{component}</div>
        </div>
      </div>
    </section>
  );
};
