import Image from "next/image";
import { tangerine } from "@/lib/fonts";
import CoverLeafDivider from "@/components/CoverLeafDivider";

export default function Hero() {
  return (
    <div className="hero">
      <div className="flex flex-col w-full h-screen items-center mx-auto">
        {/* Background Image */}
        <Image
          src="/cover.png"
          alt="cover"
          fill
          className="relative object-cover sm:object-top-left"
          priority
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1
            className={`${tangerine.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gold drop-shadow-lg`}
          >
            América y Alonso
          </h1>

          {/* Cover Leaf Divider Section */}
          <div className="my-4">
            <CoverLeafDivider />
          </div>
          <p
            className={`${tangerine.className} text-xl sm:text-2xl md:text-3xl text-gold`}
          >
            Sábado, 6 de Diciembre 2025
          </p>
        </div>

        {/* Play Button */}
        <button className="absolute bottom-4 right-4 bg-white/70 hover:bg-white/90 p-3 rounded-full shadow-md transition">
          ▶
        </button>
      </div>
    </div>
  );
}
