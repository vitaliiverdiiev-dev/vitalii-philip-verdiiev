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
                isActive
                  ? "underline underline-offset-4 font-medium text-green-700"
                  : "",
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
