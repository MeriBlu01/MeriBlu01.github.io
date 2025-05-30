import Image from "next/image";

interface InvitationSectionProps {
  imageSrc: string;
  altText: string;
}

export default function BigPicture({
  imageSrc,
  altText,
}: InvitationSectionProps) {
  return (
    <section className="relative w-full h-96 md:h-dvh flex flex-col items-center justify-center">
      <div className="absolute mx-auto top-3 md:top-0 w-3/4 md:w-1/3 h-1/6">
        <Image
          src="/Vectors/Detail-leaves-bot.svg"
          alt="Top leaves decoration"
          fill
          className="rotate-180 object-contain"
          priority
        />
      </div>
      <div className="relative w-full h-2/3 md:h-3/4">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="mask-y-from-90% object-contain"
          priority
        />
      </div>
      <div className="absolute mx-auto bottom-3 md:bottom-0 w-3/4 md:w-1/3 h-1/6">
        <Image
          src="/Vectors/Detail-leaves-bot.svg"
          alt="Bottom leaves decoration"
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
