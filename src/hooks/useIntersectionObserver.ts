import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = <T extends HTMLElement = HTMLElement>({
	rootMargin = "0px",
	threshold = 0.1,
	initialIsIntersecting = false,
}: {
	rootMargin?: string;
	threshold?: number;
	initialIsIntersecting?: boolean;
} = {}) => {
	const [isIntersecting, setIsIntersecting] = useState(initialIsIntersecting);
	const [wasInView, setWasInView] = useState(false);

	const targetRef = useRef<T>(null);

	useEffect(() => {
		const target = targetRef.current;

		if (!target) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry) {
					return;
				}

				setIsIntersecting(entry.isIntersecting);

				if (entry.isIntersecting) {
					setWasInView(true);
				}
			},
			{ rootMargin, threshold },
		);

		observer.observe(target);

		return () => observer.disconnect();
	}, [threshold, rootMargin]);

	return { isIntersecting, targetRef, wasInView };
};

export { useIntersectionObserver };
