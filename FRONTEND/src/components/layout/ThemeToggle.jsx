import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text)] transition-transform duration-200 hover:-translate-y-0.5"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
    </button>
  );
}
