import { useTransition } from "react";
import { useLocale } from "next-intl";
import { toast } from "sonner";
import { type Locale, ENGLISH, setUserLocale, UKRAINIAN } from "@/shared";

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
