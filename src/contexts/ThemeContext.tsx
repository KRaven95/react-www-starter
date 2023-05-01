import React, { ReactNode, createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {}
});

export const ThemeProvider = (children: ReactNode) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme as Theme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  const handleSetTheme = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>{children}</ThemeContext.Provider>;
};
