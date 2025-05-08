"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import { cn } from "@/shared";
import { NavLink } from "./links";

type NavLinksProps = ComponentProps<"ul"> & {
  links: NavLink[];
  onLinkClick?: () => void;
  exactMatch?: boolean;
  disabledLinkProps?: ComponentProps<"a">;
};

export const NavLinks = ({
  links,
  className,
  onLinkClick,
  disabledLinkProps = { className: "opacity-50 cursor-not-allowed" },
  ...props
}: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <ul className={cn("flex gap-4", className)} {...props}>
      {links.map((link) => {
        const isActive = pathname === link.path;

        const isDisabled = link.disabled;

        return (
          <li key={`${link.label}-${link.path}`}>
            <Link
              className={cn(
                "p-4 rounded-md transition-colors",
                "hover:text-green-700",
                isActive
                  ? "underline underline-offset-4 font-medium text-green-700"
                  : "text-foreground",
                isDisabled && disabledLinkProps.className
              )}
              href={isDisabled ? "#" : link.path}
              onClick={(e) => {
                if (isDisabled) {
                  e.preventDefault();
                  return;
                }
                onLinkClick?.();
              }}
              aria-disabled={isDisabled}
              {...(isDisabled ? disabledLinkProps : {})}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
