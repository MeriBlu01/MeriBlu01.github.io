import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";

export default function SaveTheDate() {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      {/* Left Leaves Frame */}
      <div className="w-full flex flex-row justify-center gap-1">
        <div className="w-fit flex flex-row relative ">
          <Image
            src="/Vectors/Detail-leaves-save-date-left.svg"
            alt="left leaf frame for save the date"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[80px] md:w-[100px] lg:w-[150px] h-auto "
            priority
          />
        </div>
        {/* Countdown Timer */}
        <div className="relative w-[40%] flex flex-col">
          <CountdownTimer targetDate="2025-12-06T18:00:00" />
        </div>
        {/* Left Leaves Frame */}
        <div className="w-fit flex flex-row relative ">
          <Image
            src="/Vectors/Detail-leaves-save-date-right.svg"
            alt="Right leaf frame for Save the Date"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[80px] md:w-[100px] lg:w-[150px] h-auto "
            priority
          />
        </div>
    </div>
      </div>
  );
}
