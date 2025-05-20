"use client";

import { useState, useEffect } from "react";
import { tangerine, simonetta } from "@/lib/fonts";

interface CountdownTimerProps {
  targetDate: string; // e.g. "2025-12-06T00:00:00"
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <p>¡Ya llegó el día!</p>;
  }

  return (
    <div className="flex flex-col justify-center">
      <h2
        className={`${tangerine.className} text-black text-center text-3xl md:text-7xl`}
      >
        Save the Date
      </h2>
      <div className="absolute bottom-0 w-full h-1/2">
        <div className="grid grid-cols-4 h-full">
          <div className="bg-avocado flex items-center justify-center">
            <div
              className={`${simonetta.className} text-center flex flex-col gap-y-3`}
            >
              <span className="text-black text-2xl md:text-3xl">
                {timeLeft.days}d
              </span>
              <p>
                <span className="text-black text-xl md:text-2xl">Días</span>
              </p>
            </div>
          </div>
          <div className="bg-taupe-gray flex items-center justify-center">
            <div
              className={`${simonetta.className} text-center flex flex-col gap-y-3`}
            >
              <span className="text-black text-2xl md:text-3xl">
                {timeLeft.hours}h
              </span>
              <p>
                <span className="text-black text-xl md:text-2xl">Horas</span>
              </p>
            </div>
          </div>
          <div className="bg-moon-mist flex items-center justify-center">
            <div
              className={`${simonetta.className} text-center flex flex-col gap-y-3`}
            >
              <span className="text-black text-2xl md:text-3xl">
                {timeLeft.minutes}m
              </span>
              <p>
                <span className="text-black text-xl md:text-2xl">Mins</span>
              </p>
            </div>
          </div>
          <div className="bg-cararra flex items-center justify-center">
            <div
              className={`${simonetta.className} text-center flex flex-col gap-y-3`}
            >
              <span className="text-black text-2xl md:text-3xl">
                {timeLeft.seconds}s
              </span>
              <p>
                <span className="text-black text-xl md:text-2xl">Segs</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
