import InvitationTitle from "@/components/InvitationTitle";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-[#FBFAF7]">
      {/* Hero Section */}
      <Hero />
      <NavBar />

      {/* Countdown Timer Section */}
      <div className="w-full bg-yellow-1 h-80 flex justify-center items-center">
        <div className="relative w-1/3 h-4/5 mx-auto bg-yellow-2 rounded-lg flex flex-col">
          <CountdownTimer targetDate="2025-12-06T18:00:00" />
        </div>
      </div>
      {/* Example Placeholder Section */}
      <section className="min-h-screenflex items-center justify-center px-4 sm:px-0">
        <div className="text-center">
          <InvitationTitle title="Estás cordialmente invitado" />
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            Acompáñanos a celebrar nuestro amor en una ceremonia especial...
          </p>
        </div>
      </section>

      {/* Add more components below */}
    </main>
  );
}
