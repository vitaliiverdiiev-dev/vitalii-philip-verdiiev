import {
  InstagramLogo,
  TelegramLogo,
  List,
  X,
  AppleLogo,
  SpotifyLogo,
  YoutubeLogo,
  GithubLogo,
  FileArrowDown,
  CaretRight,
} from "@phosphor-icons/react/dist/ssr";

export const ICON_MAP = {
  instagram: InstagramLogo,
  telegram: TelegramLogo,
  list: List,
  close: X,
  apple: AppleLogo,
  spotify: SpotifyLogo,
  youtube: YoutubeLogo,
  githib: GithubLogo,
  "caret-right": CaretRight,
  "download-file": FileArrowDown,
} as const;

export type IIconName = keyof typeof ICON_MAP;
