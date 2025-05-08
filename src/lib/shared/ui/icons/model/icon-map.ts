import {
  InstagramLogo,
  TelegramLogo,
  List,
  X,
} from "@phosphor-icons/react/dist/ssr";

export const ICON_MAP = {
  instagram: InstagramLogo,
  telegram: TelegramLogo,
  list: List,
  close: X,
} as const;

export type IIconName = keyof typeof ICON_MAP;
