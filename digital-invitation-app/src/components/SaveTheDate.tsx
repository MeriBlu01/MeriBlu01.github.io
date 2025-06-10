import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";

export default function SaveTheDate() {
  return (
    <div className="w-5/6 h-9/10 md:w-3/5 md:h-4/5 flex justify-between items-center ">
      {/* Left Leaves Frame */}
      <div className="relative w-1/4 md:w-1/6 h-4/5">
        <Image
          src="/Vectors/Detail-leaves-save-date-left.svg"
          alt="left leaf frame for save the date"
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Countdown Timer */}
      <div className="relative w-3/5 md:w-1/2 h-4/5 flex flex-col">
        <CountdownTimer targetDate="2025-12-06T18:00:00" />
      </div>
      {/* Left Leaves Frame */}
      <div className="relative w-1/4 md:w-1/6 h-4/5">
        <Image
          src="/Vectors/Detail-leaves-save-date-right.svg"
          alt="Right leaf frame for Save the Date"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
