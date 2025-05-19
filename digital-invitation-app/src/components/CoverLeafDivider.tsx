import Image from "next/image";

export default function CoverLeafDivider() {
  return (
    <div className="flex items-center gap-x-8 md:gap-x-16 w-3/4 sm:w-3/4 md:w-1/2">
      {/* Normal Leaf */}
      <div className="relative aspect-[2/1] w-1/2">
        <Image
          src="/Vectors/leaf_left.svg"
          alt="Left Leaf Divider"
          fill
          className="object-contain"
        />
      </div>

      {/* Mirrored Leaf */}
      <div className="relative aspect-[2/1] w-1/2">
        <Image
          src="/Vectors/leaf_right.svg"
          alt="Mirrored Leaf Divider"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
