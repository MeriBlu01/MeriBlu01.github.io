import Image from "next/image";
import { tangerine } from "@/lib/fonts";

interface InvitationSectionProps {
  imageSrc: string;
  altText: string;
}

export default function BigPicture({
  imageSrc,
  altText,
}: InvitationSectionProps) {
  return (
    <section className="w-full h-dvh flex flex-col items-center justify-center">
      <div className="relative w-1/3 h-1/6">
        <Image
          src="/Vectors/Detail-leaves-bot.svg"
          alt="Top leaves decoration"
          fill
          className="rotate-180 mask-y-from-90% object-contain"
          priority
        />
      </div>
      <div className="relative w-5/6 h-2/3">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="mask-y-from-90% object-contain"
          priority
        />
      </div>
      <div className="relative w-1/3 h-1/6">
        <Image
          src="/Vectors/Detail-leaves-bot.svg"
          alt="Bottom leaves decoration"
          fill
          className="mask-y-from-90% object-contain"
          priority
        />
      </div>
    </section>
  );
}
