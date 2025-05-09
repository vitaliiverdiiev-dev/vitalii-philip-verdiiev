import { FlipCard } from "./ui/flip-card";
import { GrayImage } from "./ui/gray-image";
import { CheckMusic } from "./ui/check-music";

export const SoundPage = () => {
  return (
    <div className="container flex-1">
      <ul className="h-full grid grid-rows-[repeat(9,_minmax(250px,_auto))] md:grid-rows-3 md:grid-cols-3">
        <li className="min-h-20">
          <GrayImage alt="Akai MPK" src="/akai-mk-ii.jpg" />
        </li>
        <li>
          <FlipCard
            title="Bark-A-Lot Beats"
            description="Bark-A-Lot Beats crafts emotionally-driven instrumentals that blend analog warmth with digital precision. From boom-bap to experimental soundscapes, every beat is made to tell a story worth hearing."
          />
        </li>
        <li>
          <GrayImage
            alt="Rode Nt1 5th Generation"
            src="/rode-nt1-5th-gen.jpg"
          />
        </li>
        <li>
          <FlipCard
            title="Bark-A-Lot Records"
            description="Bark-A-Lot Records is a home for artists who create with truth, vulnerability, and vision. We nurture raw voices and genre-defying sounds that move both heart and mind."
          />
        </li>
        <li className="flex flex-col items-center justify-center bg-white dark:bg-black -order-1 md:order-none">
          <CheckMusic />
        </li>
        <li className="order-2 md:order-none">
          <FlipCard
            title="Being Phat Phil"
            description=" Being Phat Phil blends rich melodies with unapologetic rhythm, creating a sound that's as emotional as it is raw within its lyrics.  My music is a journey through hip-hop, soul, and experimental beats, capturing the complexities of life and truth in every track."
          />
        </li>
        <li className="order-1 md:order-none">
          <GrayImage src="/adams.jpg" alt="Adam Audio D3V" />
        </li>
        <li className="flex flex-col items-center justify-center bg-white dark:bg-black order-4 md:order-none p-4">
          <p className="text-center text-sm">Am I being frank?</p>
        </li>
        <li className="order-3 md:order-none">
          <GrayImage src="/ssl.jpg" alt="SSL 2+" />
        </li>
      </ul>
    </div>
  );
};
