import React from "react";
import { simonetta } from "@/lib/fonts";
import { tangerine } from "@/lib/fonts";
import Image from "next/image";

export default function Invitation() {
  return (
    <div className="bg-yellow-2 w-full h-fit lg:p-[42] gap-[16px] flex flex-col justify-center rounded-[16px] shadow-2xl invitation-background">
      <div className="w-full lg:px-[80px] flex flex-col justify-center">
        <h1 className={`${tangerine.className} font-extrabold text-yellow-4 text-[48px] text-center`}>¡Nos casamos! </h1>
        <span className="w-full flex flex-col gap-[24px] lg:px-[80px]">
          <p className={`${simonetta.className} font-normal text-black text-[24px] text-center`}>&quot;Lo más grande que aprenderás en la vida será a amar y ser amado de vuelta&quot; <br />Moulin Rouge</p>
          <p className={`${simonetta.className} font-normal text-black text-[24px] text-center`}>Queremos compartir contigo la alegría de nuestra unión, y nos gustaría que nos acompañases a celebrar este momento tan especial para nosotros</p>
          <div className="w-full py-[24px] gap-[8px]">
            <p className={`${simonetta.className} font-normal text-black text-[24px] text-center`}>Invitacion valida para:</p>
            <p className={`${tangerine.className} font-bold text-red-brown text-[40px] text-center`}>Nombre de invitado</p>
            <div className="flex flex-row justify-center align-middle gap-[8px]">
              <p className={`${simonetta.className} font-normal text-yellow-4 text-[32px] text-center`}>#</p>
              <p className={`${simonetta.className} font-normal text-black  text-[24px] text-center`}>pases disponibles</p>
            </div>
            <p className={`${tangerine.className} font-extrabold text-yellow-4 text-[48px] text-center`}>¡Te esperamos! </p>
            <div className="w-full flex justify-center align-middle">
              <Image src="/Vectors/Detail-rings.svg" alt="Rings" width={100} height={62.55} />
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
