"use client";

import { useMemo } from "react";
import Image from "next/image";

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="py-4 h-[50px] relative">
      <div className="container mx-auto text-center">
        <p>
          &copy; {year} There ain&apos;t no rights... what should I reserve then
          though?
        </p>
      </div>
      <Image
        alt="Totoro Keeper"
        src="/totoro.png"
        width={69}
        height={69}
        className="absolute bottom-0 right-0"
      />
    </footer>
  );
};
