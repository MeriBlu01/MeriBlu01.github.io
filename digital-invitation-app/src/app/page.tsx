import Image from "next/image";
import InvitationTitle from "@/components/InvitationTitle";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Example Placeholder Section */}
      <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-0">
        <div className="text-center">
          <InvitationTitle title="Estás cordialmente invitado" />
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            Acompáñanos a celebrar nuestro amor en una ceremonia especial...
          </p>
        </div>
      </section>

      {/* Add more components below like <Location />, <Gallery />, <RSVP /> */}
    </div>
  );
}
