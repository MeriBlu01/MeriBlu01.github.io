"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type DropdownProps = {
  options: string[];
  initial: string;
  value: string | null;
  onChange?: (value: string) => void;
  labelTemplate?: (value: string) => string;
  toggleButtonType?: "button" | "submit" | "reset";
};

export default function CustomDropdown({
  options,
  initial,
  value,
  onChange,
  labelTemplate,
  toggleButtonType = "button",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // <- ref to wrapper

  const handleSelect = (option: string) => {
    setIsOpen(false);
    onChange?.(option); // optional callback
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type={toggleButtonType}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-4 text-white px-6 py-3 w-full rounded-md flex justify-between items-center text-lg"
      >
        {initial}
        <ChevronDown className="size-[28px] ml-2" />
      </button>

      {isOpen && (
        <ul className="absolute w-full mt-2 bg-neutral rounded-md shadow-md z-10">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-6 py-2 hover:bg-moon-mist cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {/* Show selection below the dropdown */}
      {value && (
        <div className="mt-2 text-lg text-red-brown">
          {labelTemplate?.(value) ?? value}
        </div>
      )}
    </div>
  );
}
