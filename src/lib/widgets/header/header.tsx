"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { type LogoType, Logo, MobileMenu, NavLinks, navLinks } from "@/widgets";
import { LocaleToggle, ThemeToggle } from "@/features";
import { cn } from "@/shared";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const logoType: LogoType = pathname.startsWith("/sound")
    ? "nick-name"
    : "main";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed bg-background top-0 dark:shadow-[#2f2f2f] left-0 w-full z-50 text-foreground shadow"
      )}
    >
      <div className="container flex justify-between items-center h-[50px] md:h-20">
        <Logo logoType={logoType} />
        <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
        <nav className="flex-1 hidden md:flex md:items-center md:justify-end">
          <NavLinks links={navLinks} />
          <div className="ml-10 flex gap-2">
            <LocaleToggle />
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[50px] z-50 md:hidden bg-background transform-gpu overflow-y-auto">
          <div className="container min-h-full flex flex-col items-center justify-center gap-8 my-4 px-4 sm:px-6 lg:px-8">
            <NavLinks
              links={navLinks}
              className="flex-col items-center text-xl space-y-4"
              onLinkClick={toggleMobileMenu}
            />
            <div className="flex gap-2">
              <LocaleToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
