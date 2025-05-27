import { DM_Sans, Geist_Mono, Quattrocento_Sans } from "next/font/google";

export const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const titles = Quattrocento_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});
