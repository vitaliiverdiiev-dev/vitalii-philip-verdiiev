"use client";

import { useState } from "react";
import Link from "next/link";
import { cn, Icon } from "@/shared";

export function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className="flex flex-col gap-4">
      <li>
        <Link
          href="/dev"
          className="w-full flex items-center justify-between text-left cursor-pointer rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 py-1 px-2"
        >
          <span>Dev Home</span>
        </Link>
      </li>
      <li>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between text-left cursor-pointer rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 py-1 px-2"
        >
          <span>Resume Details</span>
          <Icon
            icon="caret-right"
            size="16px"
            weight="regular"
            className={cn("transition-transform", isOpen && "rotate-90")}
          />
        </button>
        <ul
          className={`mt-2 list-disc overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {[
            { href: "/dev/general-information", label: "General Information" },
            { href: "/dev/experience", label: "Experience" },
            { href: "/dev/tech-stack", label: "Tech Stack" },
            { href: "/dev/education", label: "Education" },
            { href: "/dev/values", label: "Values that I bring" },
          ].map(({ href, label }) => (
            <li key={href} className="hover:bg-gray-200 dark:hover:bg-gray-700 py-1 px-2 rounded-md">
              <Link className="block w-full h-full" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}
