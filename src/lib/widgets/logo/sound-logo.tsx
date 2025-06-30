import { cn } from "@/shared";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  className?: string;
};

export const SoundLogo: React.FC<Props> = ({ className }) => {
  const t = useTranslations("logo");

  return (
    <Link href="/" className={cn("font-medium text-lg md:text-2xl", className)}>
      {t("firstName")} <span className="text-green-700">{t("nick-name")}</span>{" "}
      {t("lastName")}
    </Link>
  );
};
