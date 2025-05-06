export const navLinks: NavLink[] = [
  {
    label: "Home",
    path: "/",
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
    label: "About Me",
    path: "/about-me",
  },
  {
    label: "Contacts",
    path: "/contacts",
  },
];

export type NavLink = {
  label: string;
  path: string;
};
