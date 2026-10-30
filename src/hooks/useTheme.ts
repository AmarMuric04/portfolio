import { useEffect } from "react";
import { flushSync } from "react-dom";
import { useLocalStorage } from "usehooks-ts";

const prefersLightTheme = () =>
	!window.matchMedia("(prefers-color-scheme: dark)").matches;

const applyTheme = (isLight: boolean) => {
	document.documentElement.dataset.theme = isLight ? "light" : "dark";
};

const revealInset = ({
	bounds,
	radius,
	scale,
}: {
	bounds: DOMRect;
	radius: number;
	scale: number;
}) => {
	const centerX = bounds.left + bounds.width / 2;
	const centerY = bounds.top + bounds.height / 2;
	const halfWidth = (bounds.width / 2) * scale;
	const halfHeight = (bounds.height / 2) * scale;

	return `inset(${centerY - halfHeight}px ${window.innerWidth - centerX - halfWidth}px ${window.innerHeight - centerY - halfHeight}px ${centerX - halfWidth}px round ${radius * scale}px)`;
};

const coversViewport = ({
	bounds,
	radius,
	scale,
}: {
	bounds: DOMRect;
	radius: number;
	scale: number;
}) => {
	const centerX = bounds.left + bounds.width / 2;
	const centerY = bounds.top + bounds.height / 2;
	const farthestX = Math.max(centerX, window.innerWidth - centerX);
	const farthestY = Math.max(centerY, window.innerHeight - centerY);
	const halfWidth = (bounds.width / 2) * scale;
	const halfHeight = (bounds.height / 2) * scale;
	const scaledRadius = radius * scale;

	if (farthestX > halfWidth || farthestY > halfHeight) {
		return false;
	}

	const cornerX = farthestX - (halfWidth - scaledRadius);
	const cornerY = farthestY - (halfHeight - scaledRadius);

	if (cornerX <= 0 || cornerY <= 0) {
		return true;
	}

	return Math.hypot(cornerX, cornerY) <= scaledRadius;
};

const coveringScale = ({
	bounds,
	radius,
}: {
	bounds: DOMRect;
	radius: number;
}) => {
	let scale = 1;

	while (!coversViewport({ bounds, radius, scale })) {
		scale *= 1.05;
	}

	return scale;
};

const useTheme = () => {
	const [isLight, setIsLight] = useLocalStorage("isLight", prefersLightTheme);

	useEffect(() => {
		applyTheme(isLight);
	}, [isLight]);

	const toggleTheme = ({
		bounds,
		radius,
	}: {
		bounds: DOMRect;
		radius: number;
	}) => {
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

		void transition.ready.then(() => {
			document.documentElement.animate(
				{
					clipPath: [
						revealInset({ bounds, radius, scale: 1 }),
						revealInset({
							bounds,
							radius,
							scale: coveringScale({ bounds, radius }),
						}),
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
