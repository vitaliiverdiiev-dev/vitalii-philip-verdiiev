import { Icon } from "@/shared";
import { PageWrapper } from "@/widgets";
import { useTranslations } from "next-intl";

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
            href="mail:+vitaliiverdiiev@gmail.com"
          >
            vitaliiverdiiev@gmail.com
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://instagram.com/ukrainiancustomer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:-translate-y-1"
          >
            <Icon icon="instagram" size="40px" />
          </a>
          <a
            href="https://t.me/ukrainiancustomer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:-translate-y-1"
          >
            <Icon icon="telegram" size="40px" />
          </a>
        </div>
      </div>
    </PageWrapper>
  );
};
