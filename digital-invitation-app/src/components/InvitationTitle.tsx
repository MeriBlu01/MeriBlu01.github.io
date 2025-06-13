import React from "react";
import { simonetta } from "@/lib/fonts";
import { tangerine } from "@/lib/fonts";
import Image from "next/image";

export default function Invitation() {
  return (
    <section
      id="invitation"
      className=" scroll-mt-[50px] w-full sm:px-[16px] lg:px-[80px] max-w-[1730px] mx-auto"
    >
      <div className="bg-yellow-2 w-full h-fit flex flex-col justify-center rounded-[16px] lg:p-[42] lg:gap-[16px] invitation-background">
        <div className="w-full lg:px-[80px] flex flex-col justify-center">
          <h1
            className={`${tangerine.className} font-extrabold text-yellow-4 text-center text-[40px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px]`}
          >
            ¡Nos casamos!{" "}
          </h1>
          <span className="w-full flex flex-col gap-[24px] lg:px-[80px]">
            <p
              className={`${simonetta.className} font-normal text-black text-center px-[40px] text-[16px] sm:text-[24px] xl:text-[32px] `}
            >
              &quot;Lo más grande que aprenderás en la vida será a amar y ser amado de vuelta&quot;{" "}
              <br />
              Moulin Rouge
            </p>
            <p
              className={`${simonetta.className} font-normal text-black text-center px-[56px] text-[16px] sm:text-[24px] xl:text-[32px] `}
            >
              Queremos compartir contigo la alegría de nuestra unión, y nos gustaría que nos
              acompañases a celebrar este momento tan especial para nosotros
            </p>
            <div className="w-full  gap-[8px]">
              <p
                className={`${simonetta.className} font-normal text-black text-center text-[16px] sm:text-[24px] xl:text-[32px] `}
              >
                Invitacion valida para:
              </p>
              <p
                className={`${tangerine.className} font-bold text-red-brown text-center text-[32px] sm:text-[40px] xl:text-[56px] `}
              >
                Nombre de invitado
              </p>
              <div className="flex flex-row justify-center align-middle gap-[8px]">
                <p
                  className={`${simonetta.className} font-normal text-yellow-4 text-center text-[16px] sm:text-[24px] xl:text-[32px] `}
                >
                  #
                </p>
                <p
                  className={`${simonetta.className} font-normal text-black text-center text-[16px] sm:text-[24px] xl:text-[32px] `}
                >
                  pases disponibles
                </p>
              </div>
              <p
                className={`${tangerine.className} font-extrabold text-yellow-4 pt-[16px] text-center text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px]`}
              >
                ¡Te esperamos!{" "}
              </p>
              <div className="w-full flex justify-center align-middle">
                <Image src="/Vectors/Detail-rings.svg" alt="Rings" width={100} height={62.55} />
              </div>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
