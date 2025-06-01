"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/Images/2.jpg",
  "/Images/3.jpg",
  "/Images/4.jpg",
  "/Images/5.jpg",
  "/Images/6.jpg",
  "/Images/7.jpg",
  "/Images/11.png",
];

export default function Carousel() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1 },
      },
    },
  });

  return (
    <div className="relative w-9/10 md:w-5/6 aspect-[1547/419] mx-auto">
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={700}
              height={500}
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition z-10"
      >
        <ChevronLeft className="text-yellow-3" strokeWidth={3} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => slider.current?.next()}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition z-10"
      >
        <ChevronRight className="text-yellow-3" strokeWidth={3} />
      </button>
    </div>
  );
}
