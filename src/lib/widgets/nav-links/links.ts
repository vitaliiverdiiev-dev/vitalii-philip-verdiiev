export const navLinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Me",
    path: "/about-me",
  },
  {
    label: "Dev",
    path: "/dev",
  },
  {
    label: "Sound",
    path: "/sound",
  },
  {
    label: "Contacts",
    path: "/contacts",
  },
];

export type NavLink = {
  label: string;
  path: string;
  disabled?: boolean;
};
