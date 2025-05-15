// components/Hero.tsx
import Image from "next/image";
import { greatVibes, garamond } from "@/lib/fonts";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/cover.png" // image is in /public
        alt="America y Alonso"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1
          className={`${greatVibes.className} text-5xl md:text-7xl text-gold drop-shadow-lg`}
        >
          America y Alonso
        </h1>
        <div className="my-4">
          <Image
            src="/cover_leaf_divider.svg"
            alt="divider"
            className="mx-auto w-48"
          />
        </div>
        <p
          className={`${garamond.className} text-lg md:text-xl mt-2 text-gold`}
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
