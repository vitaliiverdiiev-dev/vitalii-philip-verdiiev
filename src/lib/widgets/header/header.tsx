"use client";

import { useState } from "react";
import { navLinks } from "../nav-links/links";
import { NavLinks } from "../nav-links/nav-links";
import { ThemeToggle } from "../theme-toggle";
import { MobileMenu } from "../mobile-menu/mobile-menu";

type HeaderProps = {
  logo: React.ReactNode;
};

export const Header = ({ logo }: HeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className="container flex justify-between items-center h-[50px] md:h-[80px] relative">
        {logo}
        <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
        <nav className="flex-1 hidden md:flex md:items-center md:justify-end">
          <NavLinks links={navLinks} />
          <div className="ml-10">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[50px] bg-background z-50 md:hidden">
          <div className="container h-full flex flex-col items-center gap-8 py-8">
            <NavLinks
              links={navLinks}
              className="flex-col items-center text-xl"
              onLinkClick={toggleMobileMenu}
            />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};
