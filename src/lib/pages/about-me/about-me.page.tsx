import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PageWrapper } from "@/widgets";

export const AboutMePage = () => {
  const t = useTranslations("aboutMe");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <PageWrapper>
      <div className="container flex-1 grid grid-rows-[auto_auto] md:grid-rows-1 md:grid-cols-2 md:gap-4 mt-20">
        <div className="flex flex-col justify-center items-center md:mt-0">
          <Image
            alt="My amiga and I"
            src="/big_amigos.png"
            width={500}
            height={500}
            className="rounded-xl w-full sm:w-10/12 md:w-8/12"
            placeholder="blur"
            blurDataURL="/blur_amigos.png"
            priority={true}
          />
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl my-6">
          <h2 className="text-3xl md:text-5xl text-center my-5 md:my-10">
            {t("title")}
          </h2>
          <div className="flex flex-col gap-4 md:max-w-10/12">
            {paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={idx === 5 ? "font-bold" : ""}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
          <Link
            href="/contacts"
            className="hover:underline hover:underline-offset-4 font-semibold hover:text-green-700 transition-all duration-300 mt-10"
          >
            {t("contactLink")}
          </Link>
        </div>{" "}
      </div>
    </PageWrapper>
  );
};
