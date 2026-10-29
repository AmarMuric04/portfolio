import { useLocalStorage } from "usehooks-ts";
import { useEffect } from "react";

type ThemeType = "light" | "dark";

const prefersLight = () =>
  !window.matchMedia("(prefers-color-scheme: dark)").matches;

export const useTheme = () => {
  const [isLight, setIsLight] = useLocalStorage("isLight", prefersLight);

  const theme: ThemeType = isLight ? "light" : "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setIsLight((prev) => !prev);

  return { isDark: !isLight, toggleTheme, isLight, theme };
};
