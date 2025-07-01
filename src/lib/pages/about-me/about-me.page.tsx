import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PageWrapper } from "@/widgets";
import { cn } from "@/shared";

export const AboutMePage = () => {
  const t = useTranslations("aboutMe");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <PageWrapper>
      <div className="container flex-1 grid grid-rows-[auto_auto] md:grid-rows-1 md:grid-cols-2 md:gap-4 mt-20">
        <div className="flex flex-col justify-center items-center md:mt-0 md:order-2">
          <Image
            alt="My amiga and I"
            src="/images/about-me/big_amigos.png"
            width={500}
            height={500}
            className="rounded-xl w-full sm:w-10/12 md:w-8/12"
            placeholder="blur"
            blurDataURL="/blur_amigos.png"
            priority={true}
          />
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl my-6">
          <h2 className="text-3xl md:text-5xl font-light text-center my-5 md:my-10">
            {t("title")}
          </h2>
          <div className="flex flex-col gap-4 md:max-w-10/12">
            {paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={cn(
                  idx === 5 ? "font-bold text-center mt-4" : "text-center",
                  "md:text-left leading-[32px]"
                )}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
          <Link
            href="/contacts"
            className="group relative inline-block font-semibold text-foreground mt-10 transition-colors duration-300 hover:text-green-700"
          >
            {t("contactLink")}
            <span
              className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-green-700 transition-all duration-300 group-hover:w-full"
              aria-hidden="true"
            />
          </Link>
        </div>{" "}
      </div>
    </PageWrapper>
  );
};
