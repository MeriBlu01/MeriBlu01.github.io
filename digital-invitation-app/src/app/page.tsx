import Image from "next/image";
import Invitation from "@/components/InvitationTitle";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import CountdownTimer from "@/components/CountdownTimer";
import Schedule from "@/components/ScheduleCard";
import DressCode from "@/components/DressCodeCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-yellow-1">
      {/* Hero Section */}
      <Hero />
      <NavBar />
      <section className="flex flex-col justify-center w-full sm:px-[16px] lg:px-[80px] mt-[40px] gap-[24px]">
          <Invitation />
          <Schedule />
          <DressCode/>

      </section>

      {/* Save The Date Section */}
      <div className="w-full bg-yellow-1 h-80 flex justify-center items-center">
        <div className="w-3/5 h-4/5 flex justify-between items-center">
          {/* Left Leaves Frame */}
          <div className="relative w-1/6 h-4/5">
            <Image
              src="/Vectors/Detail-leaves-save-date-left.svg"
              alt="left leaf frame for save the date"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Countdown Timer */}
          <div className="relative w-1/2 h-4/5 flex flex-col">
            <CountdownTimer targetDate="2025-12-06T18:00:00" />
          </div>
          {/* Left Leaves Frame */}
          <div className="relative w-1/6 h-4/5">
            <Image
              src="/Vectors/Detail-leaves-save-date-right.svg"
              alt="Right leaf frame for Save the Date"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Example Placeholder Section */}
      

      {/* Add more components below */}
    </main>
  );
}
