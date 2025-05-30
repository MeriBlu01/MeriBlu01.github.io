import React from "react";
import { simonetta } from "@/lib/fonts";
import { tangerine } from "@/lib/fonts";
import Image from "next/image";

export default function TimeAndLocation() {
  return (
    <div className="bg-yellow-2 w-full h-fit p-20 flex flex-col justify-center items-center gap-y-20">
      <div className="relative w-1/6 aspect-[200/125] flex justify-center items-center">
        <Image
          src="/Vectors/Detail-chapel.svg"
          alt="Chapel"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="w-full flex flex-col justify-center text-center gap-y-5">
        <p
          className={`${simonetta.className} font-normal text-black text-[24px]`}
        >
          La ceremonia y recepción se llevarán a cabo en :
        </p>
        <h1
          className={`${tangerine.className} font-extrabold text-red-brown text-[60px]`}
        >
          Hacienda de Negrete
        </h1>
        <p
          className={`${simonetta.className} font-normal text-black text-[24px] text-center`}
        >
          Te esperamos el día:
        </p>
        <p
          className={`${tangerine.className} font-bold text-red-brown text-[48px] text-center`}
        >
          06 de Diciembre 2025 - 06:00 p.m.*
        </p>
      </div>
    </div>
  );
}
