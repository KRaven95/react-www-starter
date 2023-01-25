import React from "react";

interface IContext {
  children: React.ReactNode;
}

type ThemeType = "light" | "dark";

const Theme = React.createContext(null as any);

export const ThemeProvider = ({ children }: IContext) => {
  const initialTheme =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const [theme, setTheme] = React.useState<ThemeType>(initialTheme);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }
    if (theme === "light") setTheme("dark");
    return;
  };

  React.useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    if (theme === "light") {
      html.classList.remove("dark");
      html.classList.add("light");
    } else if (theme === "dark") {
      html.classList.remove("light");
      html.classList.add("dark");
    }
  }, [theme]);

  return <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>;
};

export const useTheme = () => React.useContext(Theme);
