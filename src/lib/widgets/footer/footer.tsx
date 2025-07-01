"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/shared";

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = useTranslations("footer");

  return (
    <footer className="relative">
      <div className="container min-h-[50px] mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {year} {t("copy-rights")}
        </p>
      </div>
      <Image
        alt="Totoro Keeper"
        src="/images/footer/totoro.png"
        width={69}
        height={69}
        className={cn(
          "absolute bottom-0 right-0 size-[50px] md:size-[69px]",
          "transition-transform duration-300 hover:animate-bounce-y"
        )}
      />
    </footer>
  );
};
