import React from "react";
import { simonetta } from "@/lib/fonts";
import { tangerine } from "@/lib/fonts";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function Gallery() {
  return (
    <div
      id="gallery"
      className="scroll-mt-[50px] bg-yellow-2 w-full h-fit p-5 md:p-5 flex flex-col justify-center items-center gap-y-8 md:gap-y-15"
    >
      <div className="w-full flex flex-col items-center justify-center text-center gap-[8px] md:gap-[16px] ">
        <h1
          className={`${tangerine.className} font-bold text-yellow-4 text-center text-[40px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px]`}
        >
          Nuestro amor...
        </h1>
        <p className={`${simonetta.className} text-red-brown text-[24px] md:text-[32px]`}>
          &quot;El amor jamás dejará de existir...&quot;
        </p>
        <div className="relative w-3/4 md:w-2/5 aspect-[100/7] flex justify-center items-center">
          <Image
            src="/Vectors/Detail-leaves-bot.svg"
            alt="Divider for gallery section"
            width={0}
            height={0}
            sizes="100vw"
            className="min-w-[400px] sm:min-w-[500px] md:min-w-[600px] h-auto "
            priority
          />
        </div>
      </div>
      <Carousel />
    </div>
  );
}
