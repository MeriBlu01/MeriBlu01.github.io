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

  const [timeLeft, setTimeLeft] = useState<ReturnType<
    typeof calculateTimeLeft
  > | null>(null);

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // It runs only on client side
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted || !timeLeft) {
    return <p className="text-center">¡Ya llegó el día!</p>;
  }

  return (
    <div className="flex flex-col justify-center">
      <h2
        className={`${tangerine.className} text-black tracking-wide md:tracking-normal text-center text-4xl md:text-7xl`}
      >
        Save the Date
      </h2>
      <div className="absolute bottom-5 md:bottom-0 w-full h-1/2">
        <div className="grid grid-cols-4 h-full">
          <CountdownBox label="Días" value={timeLeft.days} bg="bg-avocado" />
          <CountdownBox
            label="Horas"
            value={timeLeft.hours}
            bg="bg-taupe-gray"
          />
          <CountdownBox
            label="Mins"
            value={timeLeft.minutes}
            bg="bg-moon-mist"
          />
          <CountdownBox label="Segs" value={timeLeft.seconds} bg="bg-cararra" />
        </div>
      </div>
    </div>
  );
}

function CountdownBox({
  label,
  value,
  bg,
}: {
  label: string;
  value: number;
  bg: string;
}) {
  return (
    <div className={`${bg} flex items-center justify-center`}>
      <div
        className={`${simonetta.className} text-center flex flex-col gap-y-3`}
      >
        <span className="text-black text-xl md:text-3xl">{value}</span>
        <p>
          <span className="text-black text-base md:text-2xl">{label}</span>
        </p>
      </div>
    </div>
  );
}
