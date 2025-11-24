'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Theme = "light" | "dark";
type ThemeSetting = Theme | "system";

interface ThemeContextValue {
  theme: ThemeSetting;
  resolvedTheme: Theme;
  setTheme: (theme: ThemeSetting) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const getSystemTheme = (): Theme =>
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeSetting>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const saved = window.localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState<Theme>(() =>
    typeof window === "undefined" ? "dark" : getSystemTheme(),
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;

    const applyTheme = () => {
      const effectiveTheme = theme === "system" ? getSystemTheme() : theme;
      root.classList.toggle("dark", effectiveTheme === "dark");
      root.style.setProperty("color-scheme", effectiveTheme);
      setResolvedTheme(effectiveTheme);
    };

    applyTheme();

    if (theme === "system") {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => applyTheme();
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [theme, resolvedTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};

