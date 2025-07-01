import { useTransition } from "react";
import { useLocale } from "next-intl";
import { toast } from "sonner";

import { Locale } from "../../../../i18n/config";
import { ENGLISH, UKRAINIAN } from "../../../../i18n/consts";
import { setUserLocale } from "../../../../i18n/locale";

export const useLocaleToggle = () => {
  const locale = useLocale() as Locale;
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const newLocale: Locale = locale === ENGLISH ? UKRAINIAN : ENGLISH;

    startTransition(() => {
      setUserLocale(newLocale);

      if (newLocale === UKRAINIAN) {
        toast.error("Oh no, don't do that. Learn English!");
      } else {
        toast.success("Good choice!");
      }
    });
  };

  return {
    locale,
    isPending,
    toggleLocale,
  };
};
