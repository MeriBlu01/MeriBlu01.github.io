import Image from "next/image";

export default function SocialNetworks() {
  return (
    <div className="bg-yellow-2 w-full h-fit p-12 md:p-15">
      <div className="flex justify-center">
        <div className="flex gap-10 items-center w-fit mx-auto">
          {/* Social Network Icon No 1 */}
          <div className="relative w-[40px] md:w-[40px] aspect-[1/1]">
            <Image
              src="/Vectors/Icon-Instagram.svg"
              alt="Instagram social network icon"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Social Network Icon No 2 */}
          <div className="relative w-[40px] md:w-[40px] aspect-[1/1]">
            <Image
              src="/Vectors/Icon-Facebook.svg"
              alt="Facebok social network icon"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Social Network Icon No 3 */}
          <div className="relative w-[40px] md:w-[40px] aspect-[1/1]">
            <Image
              src="/Vectors/Icon-whatsapp.svg"
              alt="WhatsApp social network icon"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
