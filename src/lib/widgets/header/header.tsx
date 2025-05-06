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
      <div className="container mx-auto flex justify-between py-4">
        <LogoComponent />
        <nav className="flex-1 flex items-center justify-center">
          <NavLinks links={navLinks} />
        </nav>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
