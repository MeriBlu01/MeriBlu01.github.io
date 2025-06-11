"use client";

import { simonetta } from "@/lib/fonts";

type ButtonsElement = {
  btnText: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function GreenButton({
  btnText,
  onClick,
  type = "button",
}: ButtonsElement) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${simonetta.className} font-light text-[24px] flex justify-center text-center py-[8px] px-[16px] bg-[#4a4700] rounded-[8px] hover:bg-[#927a20] hover:cursor-pointer hover:shadow-2xl hover:scale-110 transition-colors text-[#f4f2eb] `}
    >
      {btnText}
    </button>
  );
}
