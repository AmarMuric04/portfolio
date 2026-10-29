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
			<header className="mb-28" ref={targetRef}>
				<nav
					className={cn(
						"theme-surface fixed top-4 left-1/2 z-50 h-[3.5rem] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-white/10 pr-4 shadow-md backdrop-blur-sm transition-all select-none",
						{
							"w-[80%] md:w-[38rem]": !isIntersecting,
							"w-[95%] md:w-[45rem]": isIntersecting,
						},
					)}
				>
					<div className="flex h-full w-full items-center justify-between">
						<div className="flex h-full w-full gap-4 sm:w-auto">
							<ToggleThemeButton className="hidden h-full w-[3.5rem] sm:grid" />

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
											className="w-full justify-center opacity-70 transition-opacity data-[state=active]:opacity-100 sm:w-auto sm:justify-start"
											variant="nav"
											value={to}
											key={to}
											asChild
										>
											<Link
												aria-label={`Go to the ${label} page to learn more about me`}
												to={to}
											>
												<NavIcon
													isFilled={
														location.pathname === to
													}
													name={icon}
												/>
												<p className="hidden sm:flex">
													{label}
												</p>

												{location.pathname === to && (
													<motion.div
														className="theme-primary-text-background absolute bottom-0 left-0 h-0.5 w-full"
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
							className="group/fill hidden items-center gap-2 sm:flex"
							aria-label="Say hi through an email"
							href="mailto:muricamar2004@gmail.com"
							id="contact"
						>
							<NavIcon name="contact" />
							<p>Say Hi</p>
						</a>
					</div>
				</nav>
			</header>

			<ToggleThemeButton className="fixed bottom-5 left-5 z-50 flex h-[4rem] w-[4rem] items-center justify-center transition-all sm:hidden" />

			<a
				className={cn(
					"group/fill theme-background theme-title-text fixed right-5 bottom-5 z-50 flex h-[3rem] items-center justify-center gap-2 rounded-2xl shadow-xl transition-all sm:hidden",
					{
						"w-[6rem] rounded-br-none": !isScrollingDown,
						"w-[3rem]": isScrollingDown,
					},
				)}
				href="mailto:muricamar2004@gmail.com"
			>
				<NavIcon name="contact" />

				{!isScrollingDown && <p className="flex-shrink-0">Say Hi</p>}
			</a>
		</>
	);
};

export { Header };
