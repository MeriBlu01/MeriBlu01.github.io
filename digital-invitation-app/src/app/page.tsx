import Image from "next/image";
import Invitation from "@/components/InvitationTitle";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import SaveTheDate from "@/components/SaveTheDate";
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
        <DressCode />
      </section>

      {/* Save The Date */}
      <section className="w-full bg-yellow-1 h-60 md:h-80 flex justify-center items-center">
        <SaveTheDate />
      </section>

      {/* Big Picture Section */}

      {/* Add more components below */}
    </main>
  );
}
