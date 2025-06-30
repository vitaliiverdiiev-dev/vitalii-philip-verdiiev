"use client";

import { useState } from "react";
import { navLinks } from "../nav-links/links";
import { NavLinks } from "../nav-links/nav-links";
import { ThemeToggle } from "../theme-toggle";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import LocaleSwitcher from "../locale-switcher";

type HeaderProps = {
  logo: React.ReactNode;
};

export const Header = ({ logo }: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background text-foreground shadow">
      <div className="container flex justify-between items-center h-[50px] md:h-20">
        {logo}
        <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
        <nav className="flex-1 hidden md:flex md:items-center md:justify-end">
          <NavLinks links={navLinks} />
          <div className="ml-10 flex gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[50px] z-50 md:hidden bg-background bg-opacity-100 backdrop-blur-md transform-gpu overflow-y-auto">
          <div className="container h-full flex flex-col items-center justify-center gap-8 py-8 px-4 sm:px-6 lg:px-8">
            <NavLinks
              links={navLinks}
              className="flex-col items-center text-xl space-y-4"
              onLinkClick={toggleMobileMenu}
            />
            <div className="flex gap-2">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
