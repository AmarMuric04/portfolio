import { useEffect, useState } from "react";

import { EMAIL_ADDRESS } from "@/assets";
import { cn } from "@/lib/utils";

import { NavIcon } from "../NavIcon";

const SCROLL_DIRECTION_THRESHOLD = 8;

const MobileContactButton: React.FC = () => {
	const [isScrollingDown, setIsScrollingDown] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const scrollDelta = window.scrollY - lastScrollY;

			if (Math.abs(scrollDelta) < SCROLL_DIRECTION_THRESHOLD) {
				return;
			}

			setIsScrollingDown(scrollDelta > 0);

			lastScrollY = window.scrollY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<a
			className={cn(
				"group/fill fixed right-4 bottom-4 z-50 flex h-14 items-center gap-2 overflow-hidden rounded-2xl border border-hairline bg-surface pl-4.5 text-label text-ink shadow-overlay transition-[width] duration-300 ease-out sm:hidden",
				{
					"w-28": !isScrollingDown,
					"w-14": isScrollingDown,
				},
			)}
			href={`mailto:${EMAIL_ADDRESS}`}
			aria-label="Say Hi"
		>
			<NavIcon name="contact" />

			<span
				className={cn(
					"shrink-0 transition-opacity duration-200 ease-out",
					{ "opacity-0": isScrollingDown },
				)}
				aria-hidden="true"
			>
				Say Hi
			</span>
		</a>
	);
};

export { MobileContactButton };
