import { useTranslations } from "next-intl";
import { AnimatedUnderlineLink } from "@/shared";
import { AboutParagraph } from "./about-paragraph";

export const AboutText = () => {
  const t = useTranslations("aboutMe");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <div className="flex flex-col items-center justify-center rounded-xl my-6">
      <h2 className="text-3xl md:text-5xl font-light text-center my-5 md:my-10">
        {t("title")}
      </h2>
      <div className="flex flex-col gap-4 md:max-w-10/12">
        {paragraphs.map((paragraph, idx) => (
          <AboutParagraph
            key={`${paragraph.slice(0, 16)}-${idx}`}
            html={paragraph}
            index={idx}
          />
        ))}
      </div>
      <AnimatedUnderlineLink href="/contacts" className="mt-10">
        {t("contactLink")}
      </AnimatedUnderlineLink>
    </div>
  );
};
