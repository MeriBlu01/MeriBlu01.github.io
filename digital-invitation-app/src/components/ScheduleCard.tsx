"use client";
import { JSX } from "react";
import { simonetta, tangerine } from "@/lib/fonts";
import Image from "next/image";

type ScheduleIcon = {
  Icon: () => JSX.Element;
  title: string;
  hour: string;
};

const titleIcons: ScheduleIcon[] = [
  {
    Icon: () => (
      <Image
        src="/Vectors/Vector-I-rings.svg"
        alt="Rings"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[150px] h-auto "
      />
    ),
    title: "Ceremonia",
    hour: "5:00 pm",
  },
  {
    Icon: () => (
      <Image
        src="/Vectors/Vector-I-camera.svg"
        alt="Photos"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[150px] h-auto "
      />
    ),
    title: "Sesión de fotos",
    hour: "6:30 pm",
  },
  {
    Icon: () => (
      <Image
        src="/Vectors/Vector-I-floral-arch.svg"
        alt="floral-arch"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[130px] h-auto "
      />
    ),
    title: "Recepción",
    hour: "7:00 pm",
  },
  {
    Icon: () => (
      <Image
        src="/Vectors/Vector-I-drinking.svg"
        alt="Toast"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[130px] h-auto "
      />
    ),
    title: "Brindis",
    hour: "8:00 pm",
  },
  {
    Icon: () => (
      <Image
        src="/Vectors/Vector-I-Dish.svg"
        alt="Dinner"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[155px] h-auto "
      />
    ),
    title: "Cena",
    hour: "8:30 pm",
  },
  {
    Icon: () => (
      <Image
        src="/Vectors/Vector-I-couple.svg"
        alt="Couple"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[90px] h-auto "
      />
    ),
    title: "Primer baile",
    hour: "9:00 pm",
  },
  {
    Icon: () => (
      <Image
        src="/Vectors/Vector-I-party.svg"
        alt="Party"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[150px] h-auto "
      />
    ),
    title: "Fiesta",
    hour: "9:30 pm",
  },
];

export default function Schedule(): JSX.Element {
  return (
    <section id="itinerary" className=" scroll-mt-[50px] w-full bg-yellow-2 gap-0 ">
      <div className="w-full flex flex-col justify-center items-center px-[16px] md:px-[56px] lg:px-[80px] py-[32px]  max-w-[1730px] mx-auto">
        <h1
          className={`${tangerine.className} font-extrabold text-center text-yellow-4 text-[40px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px]`}
        >
          Itinerario
        </h1>
        <Image
          src="/Vectors/Detail-flower.svg"
          alt="flower"
          width={0}
          height={0}
          sizes="100vw"
          className=" min-w-[150px] md:min-w-[200px] lg:min-w-[225px]  h-auto "
        />
        <div className="w-full flex flex-col gap-[32px] lg:flex-row justify-between lg:gap-0 ">
          {titleIcons.map((element, index) => (
            <div
              key={index}
              className={`
                w-full
                flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
                justify-center items-center
                lg:flex-col lg:justify-end lg:items-center
                gap-[24px]
                `}
            >
              {element.Icon()}
              <div className="w-fit h-fit flex flex-col justify-center items-center">
                <p
                  className={`${tangerine.className} text-black font-black text-[32px] sm:text-[40px] xl:text-[48px]  `}
                >
                  {element.title}
                </p>
                <p
                  className={`${simonetta.className} text-yellow-4 font-medium text-[16px] sm:text-[24px] xl:text-[32px]pb-[26px] `}
                >
                  {element.hour}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
