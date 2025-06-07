"use client"; // Required only if you're using Next.js App Router

import { useState } from "react";
import Image from "next/image";
import { tangerine } from "@/lib/fonts";
import CoverLeafDivider from "@/components/CoverLeafDivider";

export default function Hero() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full h-dvh flex flex-col">
      <div className="h-full aspect-[5861/3907]">
        {/* Background Image */}
        <Image
          src="/Images/cover.png"
          alt="cover"
          fill
          className="object-cover object-[35%_5%] brightness-75"
          priority
        />
      </div>

      <div className="absolute flex flex-col justify-center w-3/4 left-1/2 transform -translate-x-1/2 top-1/3 md:top-[50vh]">
        {/* Text Overlay */}
        <div className="relative w-full flex flex-col items-center justify-start -space-y-5 md:-space-y-17 text-white text-center">
          {/* Header Overlay */}
          <h1
            className={`${tangerine.className} text-6xl font-bold md:text-7xl lg:text-9xl flex flex-col md:flex-row gap-x-2 md:gap-x-4`}
          >
            <span>América</span>
            <span>&</span>
            <span>Alonso</span>
          </h1>

          {/* Cover Leaf Divider */}
          <CoverLeafDivider />
        </div>

        {/* Date Overlay */}
        <p
          className={`${tangerine.className} text-3xl font-bold text-center text-white text-light-glow-gold md:text-4xl lg:text-5xl`}
        >
          Sábado, 6 de Diciembre 2025
        </p>
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
