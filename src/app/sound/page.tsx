import { useTranslations } from "next-intl";
import { ComingSoon } from "@/pages";
import { EXTERNAL_LINKS, ExternalLink } from "@/shared";

export default function Page() {
  const t = useTranslations("sound");
  // return <SoundPage />;

  return (
    <ComingSoon title="Sound page">
      <div className="mt-10">
        <p className="text-2xl font-semibold text-center">
          {t("check-my-music")}
        </p>
        <ul className="flex items-center justify-center gap-4 mt-6 transition-colors duration-300">
          <li>
            <ExternalLink
              href={EXTERNAL_LINKS.APPLE_MUSIC}
              icon="apple"
              className="hover:text-gray-500 dark:hover:text-gray-300"
            />
          </li>
          <li>
            <ExternalLink
              href={EXTERNAL_LINKS.SPOTIFY}
              icon="spotify"
              className="hover:text-green-600"
            />
          </li>
          <li>
            <ExternalLink
              href={EXTERNAL_LINKS.YOUTUBE}
              icon="youtube"
              className="hover:text-red-500"
            />
          </li>
        </ul>
      </div>
    </ComingSoon>
  );
}
