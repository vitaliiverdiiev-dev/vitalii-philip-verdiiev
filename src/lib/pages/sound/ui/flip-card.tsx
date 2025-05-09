'use client';

import { useState } from "react";

type Props = {
  title: string;
  description: string;
};

export const FlipCard: React.FC<Props> = ({ title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-[1000px] h-full w-full flex justify-center items-center cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        } md:hover:rotate-y-180`}
      >
        <div className="absolute w-full h-full backface-hidden flex justify-center items-center bg-white dark:bg-black">
          <span className="text-lg font-light text-center">{title}</span>
        </div>

        <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white dark:bg-black py-4 px-6 flex flex-col justify-center items-center gap-2">
          <h2 className="text-lg font-semibold text-center mb-1">{title}</h2>
          {description.split(".").map((sentence, i) =>
            sentence.trim() ? (
              <p key={i} className="text-center text-sm">
                {sentence.trim()}.
              </p>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};
