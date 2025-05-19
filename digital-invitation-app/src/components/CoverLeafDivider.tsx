import Image from "next/image";

export default function CoverLeafDivider() {
  return (
    <div className="flex items-center justify-between sm:w-1/2 md:w-1/3">
      {/* Normal Leaf */}
      <div className="relative sm:w-1/4 md:w-1/2 aspect-[2/1]">
        <Image
          src="/Vectors/leaf_left.svg"
          alt="Left Leaf Divider"
          fill
          className="object-contain"
        />
      </div>

      {/* Mirrored Leaf */}
      <div className="relative sm:w-1/4 md:w-1/2 aspect-[2/1]">
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
