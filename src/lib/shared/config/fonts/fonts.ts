import { Comfortaa, DM_Sans, Geist_Mono } from "next/font/google";

export const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const titles = Comfortaa({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
