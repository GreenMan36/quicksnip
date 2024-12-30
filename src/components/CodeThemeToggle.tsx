import { useState, useEffect } from "react";
import Button from "./Button";

type ThemeToggleProps = {
  onThemeChange?: (theme: "dark" | "light") => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CodeThemeToggle = ({ onThemeChange, ...props }: ThemeToggleProps) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("code-theme") || "dark";
    setTheme(savedTheme as "dark" | "light");
    onThemeChange?.(savedTheme as "dark" | "light");
  }, [onThemeChange]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("code-theme", newTheme);
    onThemeChange?.(newTheme);
  };

  return (
    <Button isIcon={true} onClick={toggleTheme} {...props}>
      {theme === "dark" ? "🌞" : "🌚"}
    </Button>
  );
};

export default CodeThemeToggle;
