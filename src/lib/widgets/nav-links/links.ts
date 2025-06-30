export const navLinks: NavLink[] = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about-me",
    path: "/about-me",
  },
  {
    label: "dev",
    path: "/dev",
  },
  {
    label: "sound",
    path: "/sound",
  },
  {
    label: "contacts",
    path: "/contacts",
  },
];

export type NavLink = {
  label: string;
  path: string;
  disabled?: boolean;
};
