
import React from "react";
import { Sun, Moon } from "lucide-react";

function getStoredTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

export function ColorModeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(getStoredTheme);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="rounded p-1.5 hover:bg-healthcare-600/50 transition flex items-center"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      type="button"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-white" />
      ) : (
        <Moon className="h-5 w-5 text-white" />
      )}
    </button>
  );
}
