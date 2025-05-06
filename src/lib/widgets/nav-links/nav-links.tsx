"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "./links";
import { cn } from "@/shared";

export const NavLinks = ({ links }: { links: NavLink[] }) => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4">
      {links.map((link) => {
        const isActive = pathname === link.path;

        return (
          <li key={`${link.label}-${link.path}`}>
            <Link
              className={cn(
                isActive ? "color-white bg-green-500 text-white font-semibold" : "",
                "p-4 rounded-md"
              )}
              href={link.path}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
