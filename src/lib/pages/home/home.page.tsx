import { useTranslations } from "next-intl";
import { Logo, PageWrapper } from "@/widgets";

export const HomePage = () => {
  const t = useTranslations("home");

  return (
    <PageWrapper>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <Logo
            logoType="main"
            className="text-3xl md:text-5xl font-light tracking-[1.3px]"
          />
          <h2 className="text-lg mt-4 md:text-2xl">{t("description")}</h2>
        </div>
      </div>
    </PageWrapper>
  );
};
