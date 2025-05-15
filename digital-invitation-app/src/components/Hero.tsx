import Image from "next/image";
import { tangerine } from "@/lib/fonts";
import CoverLeafDivider from "@/components/CoverLeafDivider";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/cover.png" // image is in /public
        alt="cover"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-items-center place-items-end justify-center text-center text-white px-4">
        <h1
          className={`${tangerine.className} text-7xl md:text-9xl text-gold drop-shadow-lg`}
        >
          América y Alonso
        </h1>
        {/* Cover Leaf Divider Section */}
        <CoverLeafDivider />
        <p
          className={`${tangerine.className} text-2xl md:text-3xl mt-2 text-gold`}
        >
          Sábado, 6 de Diciembre 2025
        </p>
      </div>

      {/* Play Button */}
      <button className="absolute bottom-6 right-6 bg-white/70 hover:bg-white/90 p-3 rounded-full shadow-md transition">
        ▶
      </button>
    </div>
  );
}
