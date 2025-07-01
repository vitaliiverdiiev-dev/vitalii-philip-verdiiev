"use client";

import { useLocaleToggle } from "./hooks/use-locale-toggle";
import { LocaleToggleButton } from "./ui/locale-toggle-button.ui";

export const LocaleToggle: React.FC = () => {
  const { isPending, locale, toggleLocale } = useLocaleToggle();

  return (
    <LocaleToggleButton
      isPending={isPending}
      locale={locale}
      toggleLocale={toggleLocale}
    />
  );
};
