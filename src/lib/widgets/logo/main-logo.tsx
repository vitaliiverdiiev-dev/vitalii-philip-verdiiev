import Link from "next/link";
import { useTranslations } from "next-intl";
import { cn } from "@/shared";

type Props = {
  className?: string;
};

export const MainLogo: React.FC<Props> = ({ className }) => {
  const t = useTranslations("logo");

  return (
    <Link href="/" className={cn("font-medium text-lg md:text-2xl", className)}>
      {t("firstName")} <span className="text-green-700">{t("middleName")}</span>{" "}
      {t("lastName")}
    </Link>
  );
};
