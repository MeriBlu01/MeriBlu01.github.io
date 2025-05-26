"use client";
import { JSX } from "react";
import { simonetta, tangerine } from "@/lib/fonts";
import Image from "next/image";

type DressClothes = {
  Icon: () => JSX.Element;
  gender: string;
  txtCode: string;
};

const textIcons: DressClothes[] = [
  {
    Icon: () => (
      <Image
        src="/Vectors/Vector-DC-Suit.svg"
        alt="Rings"
        width={66.85}
        height={200}
      />
    ),
    gender: "Hombres",
    txtCode: "Camisa manga larga, traje, zapato formal",
  },
  {
    Icon: () => (
      <Image
        src="/Vectors/Vector-DC-Dress.svg"
        alt="Rings"
        width={75.37}
        height={200}
      />
    ),
    gender: "Mujeres",
    txtCode:
      "Accesorios, vestido largo, tacones abiertos o cerrados, <br /> NO NUDE, NO BLANCO, <br /> Color lila reservado para las damas de honor",
  },
];

export default function DressCode(): JSX.Element {
  return (
    <section className="h-full flex flex-col justify-center lg:px-[80px] py-[24px] gap-[32px]">
      <div className="h-full flex flex-col justify-center gap-0-">
        <h1
          className={`${tangerine.className} font-extrabold text-center text-[48px] text-yellow-4`}
        >
          Codigo de Vestimenta
        </h1>
        <img
          src="/Vectors/Detail-creeper.svg"
          alt="flower"
          width={290}
          height={80}
          className="mx-auto"
        />
      </div>
      <p
        className={`${simonetta.className} text-red-brown font-black text-[24px] text-center`}
      >
        Etiqueta
      </p>
      <div className="flex flex-row justify-around ">
        {textIcons.map((element, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-center gap-[24px] "
          >
            {element.Icon()}
            <p
              className={`${tangerine.className} text-red-brown font-extrabold text-[30px] text-center`}
            >
              {element.gender}
            </p>
            <p
              className={`${simonetta.className} text-yellow-4 font-medium text-[20px] text-center`}
              dangerouslySetInnerHTML={{ __html: element.txtCode }}
            />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col justify-center align-middle lg:p-[24px] gap-[24px] bg-yellow-2 rounded-[8px]">
        <div className="w-full flex flex-col justify-center align-middle lg:p-[24px] gap-[24px] border border-[#927a20] rounded-[8px]">
          <h2
            className={`${tangerine.className} text-yellow-4 font-extrabold text-[30px] text-center`}
          >
            Consideraciones
          </h2>
          <p
            className={`${simonetta.className} text-yellow-4 font-medium text-[20px] text-center`}
          >
            Queremos muchos a sus niños pero deseamos que esta celebración
            también la disfrutes tanto como nosotros, por eso hemos decidido no
            extender la invitación a los niños. 
          </p>
          <img
            src="/Vectors/Icon-NoKids.svg"
            alt="NoKids"
            width={80}
            height={78}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
