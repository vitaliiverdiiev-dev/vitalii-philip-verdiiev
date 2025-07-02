import { ENGLISH, UKRAINIAN } from "./consts";

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = ENGLISH;
export const locales = [ENGLISH, UKRAINIAN] as const;
