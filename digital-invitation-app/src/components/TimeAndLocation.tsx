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
      <div className="w-full flex flex-col items-center justify-center text-center gap-y-5">
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
          className={`${simonetta.className} font-normal text-black text-[24px]`}
        >
          Te esperamos el día:
        </p>
        <p
          className={`${tangerine.className} font-bold text-red-brown text-[48px]`}
        >
          06 de Diciembre 2025 - 06:00 p.m.*
        </p>
        <div className="relative w-2/5 aspect-[400/300] flex flex-col justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.9200366343266!2d-103.65962260946154!3d19.28584328564265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84255a35a672f383%3A0x149b38d9ae15fa89!2sHacienda%20de%20Negrete!5e0!3m2!1ses-419!2smx!4v1748624566939!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            className="border-yellow-3 rounded-[16px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
