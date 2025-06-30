'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { toast } from 'sonner';
import { Button } from '@/shared/ui/button';
import { setUserLocale } from '../../i18n/locale';
import { Locale } from '../../i18n/config';
import { ENGLISH, UKRAINIAN } from '../../i18n/consts';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const newLocale: Locale = locale === ENGLISH ? UKRAINIAN : ENGLISH;

    startTransition(() => {
      setUserLocale(newLocale);

      if (newLocale === UKRAINIAN) {
        toast.error("Oh, no, don't do that, please! Learn English...");
      } else {
        toast.success('Good choice!');
      }
    });
  };

  return (
    <Button
      aria-label={`Switch to ${locale === ENGLISH ? 'Ukrainian' : 'English'}`}
      className="text-sm"
      variant="outline"
      size="icon"
      onClick={toggleLocale}
      disabled={isPending}
    >
      {locale === ENGLISH ? ENGLISH : UKRAINIAN}
    </Button>
  );
}
