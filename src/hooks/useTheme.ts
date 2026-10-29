import { useEffect } from "react";
import { flushSync } from "react-dom";
import { useLocalStorage } from "usehooks-ts";

const prefersLightTheme = () =>
	!window.matchMedia("(prefers-color-scheme: dark)").matches;

const applyTheme = (isLight: boolean) => {
	document.documentElement.dataset.theme = isLight ? "light" : "dark";
};

const useTheme = () => {
	const [isLight, setIsLight] = useLocalStorage("isLight", prefersLightTheme);

	useEffect(() => {
		applyTheme(isLight);
	}, [isLight]);

	const toggleTheme = ({ x, y }: { x: number; y: number }) => {
		const isReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;

		if (!document.startViewTransition || isReducedMotion) {
			setIsLight(!isLight);

			return;
		}

		document.documentElement.dataset.themeSwitching = "true";

		const transition = document.startViewTransition(() => {
			applyTheme(!isLight);
			flushSync(() => setIsLight(!isLight));
		});

		void transition.finished.finally(() => {
			delete document.documentElement.dataset.themeSwitching;
		});

		const radius = Math.hypot(
			Math.max(x, window.innerWidth - x),
			Math.max(y, window.innerHeight - y),
		);

		void transition.ready.then(() => {
			document.documentElement.animate(
				{
					clipPath: [
						`circle(0px at ${x}px ${y}px)`,
						`circle(${radius}px at ${x}px ${y}px)`,
					],
				},
				{
					duration: 500,
					easing: "ease-out",
					pseudoElement: "::view-transition-new(root)",
				},
			);
		});
	};

	return { isLight, toggleTheme };
};

export { useTheme };
