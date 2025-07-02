import { useLocaleToggle } from "../hooks/use-locale-toggle";
import { Button, ENGLISH, UKRAINIAN } from "@/shared";

type Props = ReturnType<typeof useLocaleToggle>;

export const LocaleToggleButton: React.FC<Props> = ({
  locale,
  isPending,
  toggleLocale,
}) => {
  return (
    <Button
      aria-label={`Switch to ${locale === ENGLISH ? "Ukrainian" : "English"}`}
      className="text-sm"
      variant="outline"
      size="icon"
      onClick={toggleLocale}
      disabled={isPending}
    >
      {locale === ENGLISH ? ENGLISH : UKRAINIAN}
    </Button>
  );
};
