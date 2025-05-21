import InvitationTitle from "@/components/InvitationTitle";
import Hero from "@/components/Hero";
import NavBar from"@/components/NavBar";


export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-yellow-1">
      {/* Hero Section */}
      <Hero />
      <NavBar />
      {/* Example Placeholder Section */}
      <section className="w-full sm:px-[16px] lg:px-[80px] mt-[40px]">
          <InvitationTitle />
      </section>

      {/* Add more components below */}
    </main>
  );
}
