"use client"; // Required only if you're using Next.js App Router

import { useState } from "react";
import Image from "next/image";
import { tangerine } from "@/lib/fonts";
import CoverLeafDivider from "@/components/CoverLeafDivider";

export default function Hero() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full h-dvh flex flex-col">
      <div className="relative h-full aspect-[5861/3907]">
        {/* Background Image */}
        <Image
          src="/Images/cover.png"
          alt="cover"
          fill
          className="object-cover object-[35%_5%] brightness-75"
          priority
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute w-3/4 left-0 right-0 top-[45vh] md:top-[50vh] gap-y-20 md:gap-y-40 mx-auto flex flex-col items-center justify-start text-white text-center">
        {/* Header Overlay */}
        <h1
          className={`${tangerine.className} text-6xl font-bold md:text-7xl lg:text-9xl flex flex-col md:flex-row gap-x-2 md:gap-x-4`}
        >
          <span>América</span>
          <span>&</span>
          <span>Alonso</span>
        </h1>

        <p
          className={`${tangerine.className} text-3xl font-bold text-light-glow-gold md:text-4xl lg:text-5xl`}
        >
          Sábado, 6 de Diciembre 2025
        </p>
      </div>

      {/* Cover Leaf Divider */}
      <div className="absolute flex w-3/4 left-0 right-0 top-[67vh] md:top-[57vh] mx-auto justify-center">
        <CoverLeafDivider />
      </div>

      {/* Music Icon Button */}
      <div className="absolute bottom-4 right-4 size-12 md:size-16">
        <button
          onClick={() => setActive((prev) => !prev)}
          className={`relative group rounded-lg transition duration-300
            ${active ? "bg-white/90" : "bg-white/70 hover:bg-white/90"}`}
        >
          <div className="relative size-12 md:size-16 aspect-[1/1]">
            <Image
              src="/Vectors/Icon-Music.svg"
              alt="Music Icon"
              fill
              className={`fill-current ${active ? "animate-pulse" : ""}`}
              priority
            />
          </div>
        </button>
      </div>
    </div>
  );
}
