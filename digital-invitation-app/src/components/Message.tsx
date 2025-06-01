import Image from "next/image";
import { simonetta } from "@/lib/fonts";
import { tangerine } from "@/lib/fonts";

export default function Message() {
  return (
    <div className=" w-full md:w-2/3 h-fit p-4 md:p-15 flex justify-between items-center">
      {/* Left Leaves Frame */}
      <div className="relative w-[100px] md:w-1/6 aspect-[101/146]">
        <Image
          src="/Vectors/Detail-leaves-save-date-left.svg"
          alt="left leaf frame for waiting message"
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Message */}
      <div className="relative w-3/5 md:w-1/2 h-full p-2 gap-4 md:gap-6 flex flex-col items-center justify-center text-center">
        <h1
          className={`${tangerine.className} font-extrabold text-green-1 text-[44px] md:text-[74px]`}
        >
          Te esperamos...
        </h1>
        <p
          className={`${simonetta.className} font-normal text-black text-xl md:text-[30px]`}
        >
          ¡NO FALTES!
        </p>
        <div className="relative w-[50px] md:w-1/5 aspect-[50/32] flex justify-center items-center">
          <Image
            src="/Vectors/Vector-I-rings.svg"
            alt="Rings icon"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      {/* Left Leaves Frame */}
      <div className="relative w-[100px] md:w-1/6 aspect-[101/146]">
        <Image
          src="/Vectors/Detail-leaves-save-date-right.svg"
          alt="Right leaf frame for waiting message"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
