import Image from "next/image";

export default function CoverLeafDivider() {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* Normal Leaf */}
      <Image
        src="/cover_leaf_divider.svg"
        alt="Leaf Divider"
        width={100}
        height={50}
      />

      {/* Mirrored Leaf */}
      <Image
        src="/cover_leaf_divider.svg"
        alt="Mirrored Leaf Divider"
        width={100}
        height={50}
        className="rotate-180"
      />
    </div>
  );
}
