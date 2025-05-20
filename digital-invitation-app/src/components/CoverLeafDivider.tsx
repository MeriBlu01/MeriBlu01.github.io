import Image from "next/image";

export default function CoverLeafDivider() {
  return (
    <div className="flex gap-x-8 md:gap-x-16 w-full h-full md:h-2/3 md:w-3/4 mb-10 md:mb-0">
      {/* Normal Leaf */}
      <div className="relative aspect-[2/1] w-1/2">
        <Image
          src="/Vectors/leaf_left_white.svg"
          alt="Left Leaf Divider"
          fill
          className="object-contain"
        />
      </div>

      {/* Mirrored Leaf */}
      <div className="relative aspect-[2/1] w-1/2">
        <Image
          src="/Vectors/leaf_right_white.svg"
          alt="Mirrored Leaf Divider"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
