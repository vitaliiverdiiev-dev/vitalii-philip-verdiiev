import { IIconName } from "@/shared";

export type ResumeLink = {
  href: `/${string}`;
  label: string;
  icon: IIconName;
};

export const resumeLinks = [
  {
    href: "/dev/general-information",
    label: "General Information",
    icon: "info",
  },
  { href: "/dev/experience", label: "Experience", icon: "hardhat" },
  { href: "/dev/tech-stack", label: "Tech Stack", icon: "stack" },
  {
    href: "/dev/education",
    label: "Education",
    icon: "graduation",
  },
  { href: "/dev/values", label: "Values I bring", icon: "lifebuoy" },
] as const satisfies readonly ResumeLink[];
