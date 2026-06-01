import { useSystemTheme } from "../hooks/useSystemTheme";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./primitives/Icons";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const systemTheme = useSystemTheme();
  const [userTheme, setUserTheme] = useState<Theme | null>(
    () => localStorage.getItem("theme") as Theme | null,
  );

  const currentTheme = userTheme ?? systemTheme;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    document.documentElement.classList.toggle(
      "light",
      currentTheme === "light",
    );
  }, [currentTheme]);

  const toggleTheme = () => {
    const next = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    setUserTheme(next);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {currentTheme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
