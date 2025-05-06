import { ComponentType } from "react";
import { navLinks } from "../nav-links/links";
import { NavLinks } from "../nav-links/nav-links";

type HeaderProps = {
  LogoComponent: ComponentType;
};

export const Header = ({ LogoComponent }: HeaderProps) => {
  return (
    <header>
      <div className="container mx-auto flex justify-between py-4">
        <LogoComponent />
        <nav>
          <NavLinks links={navLinks} />
        </nav>
      </div>
    </header>
  );
};
