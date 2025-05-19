import InvitationTitle from "@/components/InvitationTitle";
import Hero from "@/components/Hero";
import NavBar from"@/components/NavBar";


export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-[#FBFAF7]">
      {/* Hero Section */}
      <Hero />
      <NavBar />
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
