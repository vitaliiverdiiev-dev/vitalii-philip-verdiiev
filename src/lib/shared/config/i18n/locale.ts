"use server";

import { cookies } from "next/headers";
import { defaultLocale, Locale } from "./config";
import { COOKIE_NAME } from "./consts";

export const getUserLocale = async () => {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
};

export const setUserLocale = async (locale: Locale) => {
  (await cookies()).set(COOKIE_NAME, locale);
};
