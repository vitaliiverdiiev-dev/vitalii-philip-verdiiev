import { ComponentType } from "react";
import { navLinks } from "../nav-links/links";
import { NavLinks } from "../nav-links/nav-links";
import { ThemeToggle } from "../theme-toggle";

type HeaderProps = {
  LogoComponent: ComponentType;
};

export const Header = ({ LogoComponent }: HeaderProps) => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center h-[80px]">
        <LogoComponent />
        <nav className="flex-1 flex items-center justify-end">
          <NavLinks links={navLinks} />
          <div className="ml-10">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};
