import React from "react";
import { simonetta } from "@/lib/fonts";
import { tangerine } from "@/lib/fonts";
import Image from "next/image";

export default function TimeAndLocation() {
  return (
    <div id="location" className="w-full p-5 md:p-20 flex flex-col justify-center items-center">
      <div className="relative w-1/2 md:w-1/6 flex justify-center items-center pb-[8px] sm:pb-[16px] lg:pb-[24px]">
        <Image
          src="/Vectors/Detail-chapel.svg"
          alt="Chapel"
          width={0}
          height={0}
          sizes="100vw"
          className="min-w-[150px] md:min-w-[225px] lg:min-w-[300px] h-auto "
          priority
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center text-center gap-[8px] sm:gap-[16px] lg:gap-[24px]">
        <p
          className={`${simonetta.className} font-normal text-black text-center px-[40px] text-[16px] sm:text-[24px] xl:text-[32px]`}
        >
          La ceremonia y recepción se llevarán a cabo en :
        </p>
        <h1
          className={`${tangerine.className} font-extrabold text-red-brown text-center text-[40px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px]`}
        >
          Hacienda de Negrete
        </h1>
        <p
          className={`${simonetta.className} font-normal text-black text-center px-[40px] text-[16px] sm:text-[24px] xl:text-[32px]`}
        >
          Te esperamos el día:
        </p>
        <p
          className={`${tangerine.className} font-bold text-red-brown text-[38px] md:text-[48px] flex flex-col md:flex-row gap-x-2 md:gap-x-4`}
        >
          <span>06 de Diciembre 2025</span>
          <span className="hidden md:block"> - </span>
          <span className="text-center text-[32px] sm:text-[40px] xl:text-[56px] ">
            06:00 p.m.*
          </span>
        </p>
        <div className="relative w-9/10 md:w-2/5 aspect-[400/300] flex flex-col justify-center items-center">
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
