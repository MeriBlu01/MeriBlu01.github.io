import Image from "next/image";
import { tangerine } from "@/lib/fonts";
import CoverLeafDivider from "@/components/CoverLeafDivider";

export default function Hero() {
  return (
    <div className="hero">
      <div className="flex flex-col w-full h-screen mx-auto">
        {/* Background Image */}
        <Image
          src="/Images/cover.png"
          alt="cover"
          fill
          className="relative object-cover brightness-75 sm:object-top-left"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-x-0 bottom-8 h-1/3 flex flex-col items-center justify-start text-white text-center">
          {/* Header Overlay */}
          <h1
            className={`${tangerine.className} text-6xl font-medium sm:text-6xl md:text-7xl lg:text-8xl`}
          >
            América y Alonso
          </h1>

          {/* Cover Leaf Divider Section */}
          <CoverLeafDivider />

          {/* Text Overlay */}
          <p
            className={`${tangerine.className} text-3xl font-bold text-light-glow-gold sm:text-3xl md:text-4xl lg:text-5xl`}
          >
            Sábado, 6 de Diciembre 2025
          </p>
        </div>

        {/* Music Icon Button */}
        <div className="absolute bottom-4 right-4 sm:size-8 md:size-16">
          <button className="relative group rounded-lg bg-white/70 hover:bg-white/90 transition">
            <img
              src="/Vectors/Icon-Music.svg"
              className="fill-current"
              alt="Music Icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
