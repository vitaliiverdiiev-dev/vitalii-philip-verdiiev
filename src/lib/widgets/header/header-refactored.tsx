"use client";

import {
  FC,
  ReactNode,
  useCallback,
  useState,
  lazy,
  Suspense,
  memo,
} from "react";
import { cn } from "@/shared";
import { navLinks } from "../nav-links/links";
import { NavLinks } from "../nav-links/nav-links";
import { ThemeToggle } from "../../features/theme-toggle";
import { LocaleToggle } from "@/features";

const LazyMobileMenu = lazy(() =>
  import("../mobile-menu/mobile-menu").then((m) => ({
    default: m.MobileMenu,
  }))
);

type HeaderProps = {
  logo: ReactNode;
};

type HeaderActionsProps = {
  className?: string;
};

type HeaderMobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HeaderActions: FC<HeaderActionsProps> = ({ className }) => (
  <div className={cn("flex gap-2", className)}>
    <LocaleToggle />
    <ThemeToggle />
  </div>
);

const HeaderDesktopNav: FC = () => (
  <nav className="hidden flex-1 md:flex md:items-center md:justify-end">
    <NavLinks links={navLinks} />
    <HeaderActions className="ml-10" />
  </nav>
);

const HeaderMobileNav: FC<HeaderMobileNavProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 top-[50px] z-50 bg-background md:hidden transform-gpu overflow-y-auto">
      <div className="container min-h-full flex flex-col items-center justify-center gap-8 my-4 px-4 sm:px-6 lg:px-8">
        <NavLinks
          links={navLinks}
          className="flex-col items-center text-xl space-y-4"
          onLinkClick={onClose}
        />
        <HeaderActions />
      </div>
    </div>
  );
};

export const Header: FC<HeaderProps> = memo(({ logo }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 bg-background text-foreground shadow dark:shadow-[#2f2f2f]"
      )}
    >
      <div className="container flex items-center justify-between h-[50px] md:h-20">
        {logo}

        <Suspense fallback={null}>
          <LazyMobileMenu
            isOpen={isMobileMenuOpen}
            onToggle={toggleMobileMenu}
          />
        </Suspense>

        <HeaderDesktopNav />
      </div>

      <HeaderMobileNav isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </header>
  );
});

Header.displayName = "Header";
