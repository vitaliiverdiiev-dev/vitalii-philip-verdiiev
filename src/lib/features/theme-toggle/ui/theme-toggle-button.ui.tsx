import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/shared";
import { useThemeToggle } from "../hooks/use-theme-toggle";

type Props = ReturnType<typeof useThemeToggle>;

export const ThemeToggleButton: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
