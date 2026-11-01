import { useLocation } from "@tanstack/react-router";
import { useLayoutEffect, useRef } from "react";

import { EMAIL_ADDRESS } from "@/assets";
import { UnderlineTab } from "@/components/shared";
import { useIntersectionObserver } from "@/hooks";
import { cn } from "@/lib/utils";

import { MobileContactButton } from "../MobileContactButton";
import { NavIcon } from "../NavIcon";
import { ToggleThemeButton } from "../ToggleThemeButton";

const NAV_ITEMS = [
	{ to: "/", label: "Home", icon: "home" },
	{ to: "/projects", label: "Projects", icon: "projects" },
	{ to: "/education", label: "Education", icon: "education" },
	{ to: "/experience", label: "Experience", icon: "experience" },
] as const;

const Header: React.FC = () => {
	const location = useLocation();

	const { isIntersecting, targetRef } = useIntersectionObserver({
		initialIsIntersecting: true,
	});

	const navRef = useRef<HTMLElement>(null);
	const rowRef = useRef<HTMLDivElement>(null);
	const navItemsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLAnchorElement>(null);

	useLayoutEffect(() => {
		const nav = navRef.current;
		const row = rowRef.current;
		const navItems = navItemsRef.current;
		const contact = contactRef.current;

		if (!nav || !row || !navItems || !contact) {
			return;
		}

		const updateFitWidth = () => {
			const navStyle = getComputedStyle(nav);
			const fitWidth =
				navItems.offsetWidth +
				Number.parseFloat(getComputedStyle(row).columnGap) +
				contact.offsetWidth +
				Number.parseFloat(navStyle.paddingRight) +
				Number.parseFloat(navStyle.borderLeftWidth) +
				Number.parseFloat(navStyle.borderRightWidth);

			nav.style.setProperty("--nav-fit-width", `${fitWidth}px`);
		};

		updateFitWidth();

		const observer = new ResizeObserver(updateFitWidth);

		observer.observe(navItems);
		observer.observe(contact);

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<header className="mb-8 h-18" ref={targetRef}>
				<nav
					className={cn(
						"fixed top-4 left-1/2 z-50 h-14 -translate-x-1/2 overflow-hidden rounded-2xl border border-hairline bg-surface pr-4 text-ink transition-[width,box-shadow] duration-300 ease-out select-none",
						{
							"w-[80%] shadow-accent sm:w-(--nav-fit-width)":
								!isIntersecting,
							"w-[95%] shadow-surface md:w-[45rem]":
								isIntersecting,
						},
					)}
					ref={navRef}
				>
					<div
						className="flex h-full w-full items-center justify-between gap-4"
						ref={rowRef}
					>
						<div
							className="flex h-full w-full gap-4 sm:w-auto sm:shrink-0"
							ref={navItemsRef}
						>
							<ToggleThemeButton className="hidden h-full w-14 sm:grid" />

							<ul className="flex h-full w-full gap-4 sm:w-auto">
								{NAV_ITEMS.map(({ to, label, icon }) => {
									const isSelected = location.pathname === to;

									return (
										<li
											className="flex h-full flex-1 sm:flex-none"
											key={to}
										>
											<UnderlineTab
												className="w-full justify-center sm:w-auto sm:justify-start"
												isSelected={isSelected}
												layoutId="nav-underline"
												to={to}
											>
												<NavIcon
													isFilled={isSelected}
													name={icon}
												/>
												<span className="sr-only sm:not-sr-only">
													{label}
												</span>
											</UnderlineTab>
										</li>
									);
								})}
							</ul>
						</div>

						<a
							className="group/fill hidden shrink-0 items-center gap-2 rounded-lg text-label whitespace-nowrap sm:flex"
							href={`mailto:${EMAIL_ADDRESS}`}
							ref={contactRef}
						>
							<NavIcon name="contact" />
							Say Hi
						</a>
					</div>
				</nav>
			</header>

			<ToggleThemeButton className="fixed bottom-4 left-4 z-50 flex size-14 items-center justify-center sm:hidden" />

			<MobileContactButton />
		</>
	);
};

export { Header };
