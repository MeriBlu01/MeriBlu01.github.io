import Image from "next/image";

export default function CoverLeafDivider() {
  return (
    <div className="flex items-center max-w-md gap-6">
      {/* Normal Leaf */}
      <Image
        src="/leaf_left.svg"
        alt="Mirrored Leaf Divider"
        width={100}
        height={50}
      />

      {/* Mirrored Leaf */}
      <Image
        src="/leaf_right.svg"
        alt="Mirrored Leaf Divider"
        width={100}
        height={50}
      />
    </div>
  );
}
