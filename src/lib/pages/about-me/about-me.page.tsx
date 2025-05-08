import { PageWrapper } from "@/widgets";
import Image from "next/image";
import Link from "next/link";

export const AboutMePage = () => {
  return (
    <PageWrapper>
      <div className="container flex-1 grid grid-rows-[auto_auto] md:grid-rows-1 md:grid-cols-2 md:gap-4">
        <div className="flex flex-col justify-center items-center">
          <Image
            alt="My amiga and I"
            src="/big_amigos.png"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl my-6">
          <h2 className="text-3xl md:text-5xl text-center my-5 md:my-10">
            About Me
          </h2>
          <div className="flex flex-col gap-4 max-w-11/12 md:max-w-10/12">
            <p>
              I&apos;m Vitalii Philip Verdiiev - a React Engineer and music
              producer from Ukraine.
            </p>
            <p>
              I split my time between writing clean TypeScript code and crafting
              honest, emotional music.
            </p>
            <p>
              Bark-A-Lot Records is my label - built to support artists I
              believe in, without hype or compromise. I release music as Phat
              Phil, blending boom bap roots with warmth, soul, and story.
            </p>
            <p>
              In both sound and software, I care about how things feel. Not just
              how they work.
            </p>
            <p>
              I build things with heart. And I&apos;m always looking to connect
              with people who do the same.
            </p>
            <p className="font-semibold">
              If that resonates, maybe we should build something together?
            </p>
          </div>
          <Link
            href="/contacts"
            className="hover:underline hover:underline-offset-4 font-semibold hover:text-green-700 transition-all duration-300 mt-10"
          >
            Contact me
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
};
