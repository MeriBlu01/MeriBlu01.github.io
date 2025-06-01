import React from "react";
import { simonetta } from "@/lib/fonts";
import { tangerine } from "@/lib/fonts";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function Gallery() {
  return (
    <div className="bg-yellow-2 w-full h-fit p-5 md:p-5 flex flex-col justify-center items-center gap-y-15">
      <div className="w-full flex flex-col items-center justify-center text-center gap-y-5">
        <h1
          className={`${tangerine.className} font-bold text-yellow-4 text-[44px] md:text-[74px]`}
        >
          Nuestro amor...
        </h1>
        <p
          className={`${simonetta.className} text-red-brown text-[38px] md:text-[30px]`}
        >
          &quot;El amor jamás dejará de existir...&quot;
        </p>
        <div className="relative w-3/4 md:w-2/5 aspect-[100/7] flex justify-center items-center">
          <Image
            src="/Vectors/Detail-leaves-bot.svg"
            alt="Divider for gallery section"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <Carousel />
    </div>
  );
}
