import { useLocalStorage } from "usehooks-ts";
import { useEffect } from "react";

const prefersLightTheme = () =>
	!window.matchMedia("(prefers-color-scheme: dark)").matches;

const useTheme = () => {
	const [isLight, setIsLight] = useLocalStorage("isLight", prefersLightTheme);

	useEffect(() => {
		document.documentElement.dataset.theme = isLight ? "light" : "dark";
	}, [isLight]);

	const toggleTheme = () => setIsLight((previous) => !previous);

	return { isLight, toggleTheme };
};

export { useTheme };
