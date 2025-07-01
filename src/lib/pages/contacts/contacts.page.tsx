import { useTranslations } from "next-intl";
import { PageWrapper } from "@/widgets";
import { EXTERNAL_LINKS, ExternalLink } from "@/shared";

export const ContactsPage = () => {
  const t = useTranslations("contacts");

  return (
    <PageWrapper>
      <div className="container flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-light">{t("holla")}</h1>
        <div className="mt-6 flex flex-col items-center justify-center">
          <a
            className="mt-4 text-xl md:text-2xl text-green-700 font-medium"
            href="tel:+380635105769"
          >
            +380 63 510 57 69
          </a>
          <a
            className="mt-4 text-xl md:text-2xl"
            href="mailto:vitaliiverdiiev@gmail.com"
          >
            vitaliiverdiiev@gmail.com
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <ExternalLink href={EXTERNAL_LINKS.INSTAGRAM} icon="instagram" />
          <ExternalLink href={EXTERNAL_LINKS.TELEGRAM} icon="telegram" />
        </div>
      </div>
    </PageWrapper>
  );
};
