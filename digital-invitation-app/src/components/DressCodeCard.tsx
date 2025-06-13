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
    Icon: () => <Image src="/Vectors/Vector-DC-Suit.svg" alt="Rings" width={66.85} height={200} />,
    gender: "Hombres",
    txtCode: "Camisa manga larga, traje, zapato formal",
  },
  {
    Icon: () => <Image src="/Vectors/Vector-DC-Dress.svg" alt="Rings" width={75.37} height={200} />,
    gender: "Mujeres",
    txtCode:
      "Accesorios, vestido largo, tacones abiertos o cerrados, <br /> NO NUDE, NO BLANCO, <br /> Color lila reservado para las damas de honor",
  },
];

export default function DressCode(): JSX.Element {
  return (
    <section
      id="dressCode"
      className="scroll-mt-[50px] w-full flex flex-col justify-center px-[16px] lg:px-[80px] py-[24px] gap-[32px] max-w-[1730px] mx-auto "
    >
      <div className="w-full flex flex-col justify-center gap-0-">
        <h1
          className={`${tangerine.className} font-extrabold text-center text-yellow-4 text-[40px] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px]`}
        >
          Codigo de Vestimenta
        </h1>
        <Image
          src="/Vectors/Detail-creeper.svg"
          alt="flower"
          width={0}
          height={0}
          sizes="100vw"
          className=" h-auto mx-auto w-[250px] md:w-[400px] lg:w-[500px] "
        />
      </div>
      <p
        className={`${simonetta.className} text-red-brown font-black text-center text-[24px] xl:text-[32px] `}
      >
        Etiqueta
      </p>
      <div className="flex flex-col justify-center gap-[32px] md:flex-row md:justify-around ">
        {textIcons.map((element, index) => (
          <div key={index} className="flex flex-col justify-start items-center gap-[8px] ">
            {element.Icon()}
            <p
              className={`${tangerine.className} text-red-brown font-extrabold text-center text-[32px] sm:text-[40px] xl:text-[56px] `}
            >
              {element.gender}
            </p>
            <p
              className={`${simonetta.className} text-yellow-4 font-medium text-center text-[16px] sm:text-[24px] xl:text-[32px]`}
              dangerouslySetInnerHTML={{ __html: element.txtCode }}
            />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col justify-center align-middle lg:p-[24px] gap-[24px] bg-yellow-2 rounded-[8px]">
        <div className="w-full flex flex-col justify-center align-middle lg:p-[24px] gap-[24px] border border-[#927a20] rounded-[8px]">
          <h2
            className={`${tangerine.className} text-yellow-4 font-extrabold text-center text-[32px] sm:text-[40px] xl:text-[56px] `}
          >
            Consideraciones
          </h2>
          <p
            className={`${simonetta.className} text-yellow-4 font-medium text-center px-[16px] text-[16px] sm:text-[24px] xl:text-[32px] `}
          >
            Queremos muchos a sus niños pero deseamos que esta celebración también la disfrutes
            tanto como nosotros, por eso hemos decidido no extender la invitación a los niños. 
          </p>
          <Image
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
