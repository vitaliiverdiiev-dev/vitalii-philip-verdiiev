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
  DotsSix,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

export const ICON_MAP = {
  instagram: InstagramLogo,
  telegram: TelegramLogo,
  list: List,
  close: X,
  dots: DotsSix,
  apple: AppleLogo,
  spotify: SpotifyLogo,
  youtube: YoutubeLogo,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  "caret-right": CaretRight,
  "download-file": FileArrowDown,
} as const;

export type IIconName = keyof typeof ICON_MAP;
