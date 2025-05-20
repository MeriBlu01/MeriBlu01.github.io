"use client"; // Required only if you're using Next.js App Router

import { useState } from "react";
import Image from "next/image";
import { tangerine } from "@/lib/fonts";
import CoverLeafDivider from "@/components/CoverLeafDivider";

export default function Hero() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-full h-dvh flex flex-col">
      {/* Background Image */}
      <Image
        src="/Images/cover.png"
        alt="cover"
        fill
        className="object-cover object-[35%_50%] brightness-75"
        priority
      />

      <div className="absolute w-3/4 left-0 right-0 top-[40vh] md:top-[50vh] mx-auto flex flex-col items-center justify-start text-white text-center">
        {/* Header Overlay */}
        <h1
          className={`${tangerine.className} text-6xl font-bold sm:text-6xl md:text-7xl lg:text-9xl flex flex-col md:flex-row gap-x-2 md:gap-x-4 justify-end`}
        >
          <span>América</span>
          <span>&</span>
          <span>Alonso</span>
        </h1>

        {/* Cover Leaf Divider Section */}
        <CoverLeafDivider />

        {/* Text Overlay */}
        <p
          className={`${tangerine.className} text-3xl font-bold text-light-glow-gold md:text-4xl lg:text-5xl`}
        >
          Sábado, 6 de Diciembre 2025
        </p>
      </div>
      {/* Music Icon Button */}
      <div className="absolute bottom-4 right-4 size-12 sm:size-12 md:size-16">
        <button
          onClick={() => setActive(!active)}
          className={`relative group rounded-lg transition duration-300
            ${active ? "bg-white/90" : "bg-white/70 hover:bg-white/90"}`}
        >
          <img
            src="/Vectors/Icon-Music.svg"
            alt="Music Icon"
            className={`fill-current ${active ? "animate-pulse" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}
