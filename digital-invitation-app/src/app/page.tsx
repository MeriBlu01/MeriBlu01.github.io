import Invitation from "@/components/InvitationTitle";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import SaveTheDate from "@/components/SaveTheDate";
import Schedule from "@/components/ScheduleCard";
import DressCode from "@/components/DressCodeCard";
import BigPicture from "@/components/BigPicture";
import TimeAndLocation from "@/components/TimeAndLocation";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-yellow-1">
      {/* Hero Section */}
      <Hero />
      <NavBar />
      <section className="flex flex-col justify-center w-full sm:px-[16px] lg:px-[80px] mt-[40px] gap-[24px]">
        <Invitation />
        {/* Big Picture Section */}
        <BigPicture imageSrc="/Images/8.png" altText="Couple in the bridge" />
        <Schedule />
        <DressCode />
      </section>

      {/* Save The Date */}
      <section className="w-full h-60 md:h-80 flex justify-center items-center">
        <SaveTheDate />
      </section>

      {/* Big Picture Section */}
      <BigPicture
        imageSrc="/Images/10.png"
        altText="Couple hugging next to the fence"
      />

      {/* Event time and location details */}
      <TimeAndLocation />

      {/* Gallery - Save The Date session - Carousel */}
      <Gallery />

      {/* Add more components below */}
    </main>
  );
}
