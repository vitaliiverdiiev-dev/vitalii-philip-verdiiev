import { Icon } from "@/shared";
import Image from "next/image";

export const SoundPage = () => {
  return (
    <div className="container flex-1 grid grid-cols-[8fr_4fr]">
      <div className="">
        <ul className="h-full grid grid-rows-3">
          <li className="grid grid-cols-2 items-center overflow-hidden h-full">
            <div className="relative w-full h-full group overflow-hidden">
              <Image
                src="/akai.jpg"
                fill
                alt="Akai MPK"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="perspective-[1000px] h-full flex justify-center items-center">
              <div className="relative w-full h-full hover:cursor-pointer transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden flex justify-center items-center bg-white">
                  <span className="text-4xl font-light text-center">
                    Bark-A-Lot Beats
                  </span>
                </div>

                <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white py-4 px-6 flex flex-col justify-center items-center gap-2">
                  <h2 className="text-2xl font-semibold text-center">
                    Bark-A-Lot Beats
                  </h2>
                  <p className="text-center">
                    Bark-A-Lot Beats crafts emotionally-driven instrumentals
                    that blend analog warmth with digital precision.
                  </p>
                  <p className="text-center">
                    From boom-bap to experimental soundscapes, every beat is
                    made to tell a story worth hearing.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="grid grid-cols-2 items-center overflow-hidden h-full">
            <div className="perspective-[1000px] h-full flex justify-center items-center">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden flex justify-center items-center bg-white">
                  <span className="text-4xl font-light text-center">
                    Bark-A-Lot Records
                  </span>
                </div>

                <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white py-4 px-6 flex flex-col justify-center items-center gap-2">
                  <h2 className="text-2xl font-semibold text-center">
                    Bark-A-Lot Records
                  </h2>
                  <p className="text-center">
                    Bark-A-Lot Records is a home for artists who create with
                    truth, vulnerability, and vision.
                  </p>
                  <p className="text-center">
                    We nurture raw voices and genre-defying sounds that move
                    both heart and mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full h-full group overflow-hidden">
              <Image
                src="/rode-nt1-5th-gen.jpg"
                fill
                alt="Rode Nt1 5th Generation"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </li>
          <li className="grid grid-cols-2 items-center overflow-hidden h-full">
            <div className="relative w-full h-full group overflow-hidden">
              <Image
                src="/phat-phil-bells-cover.png"
                fill
                alt="Phat Phil - Bells Cover"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="perspective-[1000px] h-full flex justify-center items-center">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                <div className="absolute w-full h-full backface-hidden flex justify-center items-center bg-white">
                  <span className="text-4xl font-light text-center">
                    Being Phat Phil
                  </span>
                </div>

                <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white py-4 px-6 flex flex-col justify-center items-center gap-2">
                  <h2 className="text-2xl font-semibold text-center">
                    Being Phat Phil
                  </h2>
                  <p className="text-center">
                    Being Phat Phil blends rich melodies with unapologetic
                    rhythm, creating a sound that&apos;s as emotional as it is
                    raw within its lyrics.
                  </p>
                  <p className="text-center">
                    My music is a journey through hip-hop, soul, and
                    experimental beats, capturing the complexities of life and
                    truth in every track.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10">
          <p className="text-2xl text-center font-semibold">
            Check out my music
          </p>
          <ul className="flex items-center justify-center gap-4 mt-4 transition-colors duration-300">
            <li>
              <a
                href="https://music.apple.com/us/artist/phat-phil/1795527545"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="apple"
                  size="50px"
                  className="hover:text-gray-600 transition-colors duration-300"
                />
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/artist/5pV83NNFvuXkFnDozj5rhP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="spotify"
                  size="50px"
                  className="hover:text-green-600 transition-colors duration-300"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=wZgyfSyi_2Q&list=OLAK5uy_nd6ClFkBPxalSEwDzpGoNDhLIh9mLecoE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="youtube"
                  size="50px"
                  className="hover:text-red-600 transition-colors duration-300"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
