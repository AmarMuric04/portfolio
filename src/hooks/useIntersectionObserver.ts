import { useEffect, useState, useRef } from "react";

interface IntersectionObserverProps {
	root?: Element | null;
	rootMargin?: string;
	threshold?: number;
}

export const useIntersectionObserver = <T extends HTMLElement = HTMLElement>({
	rootMargin = "0px",
	threshold = 0.1,
	root = null,
}: IntersectionObserverProps = {}) => {
	const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
	const [wasInView, setWasInView] = useState<boolean>(false);
	const targetRef = useRef<null | T>(null);

	useEffect(() => {
		const target = targetRef.current;
		if (!target) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry) return;

				setIsIntersecting(entry.isIntersecting);
				if (entry.isIntersecting) setWasInView(true);
			},
			{ rootMargin, threshold, root },
		);

		observer.observe(target);

		return () => {
			observer.unobserve(target);
			observer.disconnect();
		};
	}, [threshold, root, rootMargin]);

	return { isIntersecting, targetRef, wasInView };
};
