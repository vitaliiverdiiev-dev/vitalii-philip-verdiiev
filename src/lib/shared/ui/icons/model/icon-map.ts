import {
  InstagramLogo,
  TelegramLogo,
  List,
  X,
  AppleLogo,
  SpotifyLogo,
  YoutubeLogo,
  GithubLogo,
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
} as const;

export type IIconName = keyof typeof ICON_MAP;
