import Image from "next/image";
import { bigAmigosBlur } from "@/shared";

export const AboutImage = () => (
  <div className="flex flex-col justify-center items-center md:mt-0 md:order-2">
    <Image
      src="/images/about-me/big_amigos.png"
      alt="My amiga and I"
      width={500}
      height={500}
      placeholder="blur"
      blurDataURL={bigAmigosBlur}
      priority={true}
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 83vw, 66vw"
      className="rounded-xl"
    />
  </div>
);
