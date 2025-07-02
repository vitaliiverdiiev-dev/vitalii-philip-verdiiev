import Link from "next/link";
import { useTranslations } from "next-intl";
import type { LogoType } from "@/widgets";
import { cn } from "@/shared";

type Props = {
  className?: string;
  logoType: LogoType;
};

export const Logo: React.FC<Props> = ({ className, logoType = "main" }) => {
  const t = useTranslations("logo");

  return (
    <Link
      href="/"
      className={cn(
        "font-medium text-lg md:text-2xl px-2 py-1 rounded-md",
        "md:px-4 md:py-2",
        className
      )}
    >
      {t("firstName")}{" "}
      <span className="text-green-700">
        {t(logoType === "main" ? "middleName" : "nick-name")}
      </span>{" "}
      {t("lastName")}
    </Link>
  );
};
