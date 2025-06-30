import * as React from "react";
import { useThemeToggler } from "./hooks/use-theme-toggler";
import { ThemeToggleButton } from "./ui/theme-toggle-button.ui";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeToggler();

  return <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />;
};
