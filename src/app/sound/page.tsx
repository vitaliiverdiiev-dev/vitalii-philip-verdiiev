import { ComingSoon } from "@/pages";
import { Icon } from "@/shared";
import { useTranslations } from "next-intl";

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
            <a
              href="https://music.apple.com/us/artist/phat-phil/1795527545"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="apple"
                size="40px"
                className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors transition-transform hover:-translate-y-1 duration-300"
              />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/5pV83NNFvuXkFnDozj5rhP"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="spotify"
                size="40px"
                className="hover:text-green-600 transition-colors transition-transform hover:-translate-y-1 duration-300"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=wZgyfSyi_2Q&list=OLAK5uy_nd6ClFkBPxalSEwDzpGoNDhLIh9mLecoE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon="youtube"
                size="40px"
                className="hover:text-red-500 transition-colors transition-transform hover:-translate-y-1 duration-300"
              />
            </a>
          </li>
        </ul>
      </div>
    </ComingSoon>
  );
}
