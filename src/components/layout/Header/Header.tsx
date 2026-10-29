import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIntersectionObserver } from "@/hooks";
import { cn } from "@/lib/utils";

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
	const navigate = useNavigate();

	const { isIntersecting, targetRef } = useIntersectionObserver();

	const [isScrollingDown, setIsScrollingDown] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			setIsScrollingDown(window.scrollY > lastScrollY);

			lastScrollY = window.scrollY;
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleTabChange = (path: string) => {
		const item = NAV_ITEMS.find((navItem) => navItem.to === path);

		if (item) {
			void navigate({ to: item.to });
		}
	};

	return (
		<>
			<header className="mb-8 h-18" ref={targetRef}>
				<nav
					className={cn(
						"fixed top-4 left-1/2 z-50 h-14 -translate-x-1/2 overflow-hidden rounded-2xl border border-hairline bg-surface pr-4 text-ink shadow-surface transition-[width] duration-300 ease-out select-none",
						{
							"w-[80%] md:w-[38rem]": !isIntersecting,
							"w-[95%] md:w-[45rem]": isIntersecting,
						},
					)}
				>
					<div className="flex h-full w-full items-center justify-between">
						<div className="flex h-full w-full gap-4 sm:w-auto">
							<ToggleThemeButton className="hidden h-full w-14 sm:grid" />

							<Tabs
								className="h-full w-full gap-4 data-[orientation=horizontal]:flex-row sm:w-auto"
								onValueChange={handleTabChange}
								value={location.pathname}
							>
								<TabsList
									className="w-full gap-4 sm:w-auto"
									variant="nav"
								>
									{NAV_ITEMS.map(({ to, label, icon }) => (
										<TabsTrigger
											className="w-full justify-center text-label opacity-70 transition-opacity duration-200 hover:opacity-100 data-[state=active]:opacity-100 sm:w-auto sm:justify-start"
											variant="nav"
											value={to}
											key={to}
											asChild
										>
											<Link
												aria-current={
													location.pathname === to
														? "page"
														: undefined
												}
												to={to}
											>
												<NavIcon
													isFilled={
														location.pathname === to
													}
													name={icon}
												/>
												<span className="sr-only sm:not-sr-only">
													{label}
												</span>

												{location.pathname === to && (
													<motion.div
														className="absolute bottom-0 left-0 h-0.5 w-full bg-ink"
														transition={{
															type: "spring",
															duration: 0.6,
															bounce: 0.2,
														}}
														layoutId="underline"
													/>
												)}
											</Link>
										</TabsTrigger>
									))}
								</TabsList>
							</Tabs>
						</div>

						<a
							className="group/fill hidden items-center gap-2 rounded-lg text-label sm:flex"
							href="mailto:muricamar2004@gmail.com"
							id="contact"
						>
							<NavIcon name="contact" />
							Say Hi
						</a>
					</div>
				</nav>
			</header>

			<ToggleThemeButton className="fixed bottom-4 left-4 z-50 flex size-14 items-center justify-center sm:hidden" />

			<a
				className={cn(
					"group/fill fixed right-4 bottom-4 z-50 flex h-14 items-center justify-center gap-2 rounded-2xl border border-hairline bg-surface text-label text-ink shadow-overlay transition-[width] duration-300 ease-out sm:hidden",
					{
						"w-28": !isScrollingDown,
						"w-14": isScrollingDown,
					},
				)}
				href="mailto:muricamar2004@gmail.com"
				aria-label="Say Hi"
			>
				<NavIcon name="contact" />

				{!isScrollingDown && <span className="shrink-0">Say Hi</span>}
			</a>
		</>
	);
};

export { Header };
