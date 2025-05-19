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

        <div className="absolute inset-x-0 bottom-0 md:bottom-14 h-1/2 md:h-2/5 flex flex-col items-center justify-start text-white text-center">
          {/* Header Overlay */}
          <h1
            className={`${tangerine.className} text-6xl font-bold sm:text-6xl md:text-7xl lg:text-9xl flex flex-col sm:flex-row gap-2 sm:gap-4`}
          >
            <span>América</span>
            <span>&</span>
            <span>Alonso</span>
          </h1>

          {/* Cover Leaf Divider Section */}
          <CoverLeafDivider />

          {/* Text Overlay */}
          <p
            className={`${tangerine.className} mt-11 md:mt-0 text-4xl font-bold text-light-glow-gold sm:text-4xl md:text-4xl lg:text-5xl`}
          >
            Sábado, 6 de Diciembre 2025
          </p>
        </div>

        {/* Music Icon Button */}
        <div className="absolute bottom-4 right-4 size-12 sm:size-12 md:size-16">
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
