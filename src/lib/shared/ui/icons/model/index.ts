import { InstagramLogo, TelegramLogo } from "@phosphor-icons/react/dist/ssr";

export const ICON_MAP = {
  instagram: InstagramLogo,
  telegram: TelegramLogo,
} as const;

export type IIconName = keyof typeof ICON_MAP;
