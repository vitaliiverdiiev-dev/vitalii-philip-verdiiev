import { PageWrapper } from "@/widgets";
import { useTranslations } from "next-intl";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  title?: string;
};

export const ComingSoon: React.FC<Props> = ({ title, children }) => {
  const t = useTranslations("comingSoon");

  return (
    <PageWrapper>
      <main className="flex flex-col flex-1 items-center justify-center bg-background text-foreground px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-4xl font-light tracking-tight">
            {title ? title + t("is-coming-soon") : t("coming-soon")}
          </h1>
          <p className="text-neutral-500 max-w-md mx-auto">
            {t("description")}
          </p>
        </div>
        {children}
      </main>
    </PageWrapper>
  );
};
