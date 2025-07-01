import { useThemeToggle } from "./hooks/use-theme-toggle";
import { ThemeToggleButton } from "./ui/theme-toggle-button.ui";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeToggle();

  return <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />;
};
