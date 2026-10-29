import { useLocation, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

import { EducationSVG, ContactSVG, FolderSVG, HomeSVG } from "@/assets";
import { ToggleThemeButton } from "@/components/atoms";
import { useIntersectionObserver } from "@/hooks";
import { cn } from "@/lib/utils";

const NavBarItem: React.FC<React.PropsWithChildren<{ to: string }>> = ({
	children,
	to,
}) => {
	const location = useLocation();
	const isSelected = location.pathname === to;

	return (
		<motion.li
			className="relative flex h-full w-full justify-center sm:w-auto sm:justify-start"
			animate={{ opacity: isSelected ? 1 : 0.7 }}
			initial={false}
		>
			<Link
				aria-label={`Go to the ${to} page to learn more about me`}
				className="flex items-center gap-2"
				to={to}
			>
				{children}
			</Link>

			{isSelected && (
				<motion.div
					className="theme-primary-text-background absolute bottom-0 left-0 h-0.5 w-full"
					transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
					layoutId="underline"
				/>
			)}
		</motion.li>
	);
};

export const Header: React.FC = () => {
	const { isIntersecting, targetRef } = useIntersectionObserver();

	const [scrollY, setScrollY] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > scrollY) {
				setIsVisible(true);
			} else setIsVisible(false);
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrollY]);

	return (
		<>
			<header className="mb-28" ref={targetRef}>
				<nav
					className={cn(
						"theme-surface fixed top-4 left-1/2 z-50 h-[3.5rem] -translate-x-1/2 overflow-hidden rounded-full border border-white/10 bg-white/10 pr-4 shadow-md backdrop-blur-sm transition-all select-none",
						{
							"w-[80%] md:w-[38rem]": !isIntersecting,
							"w-[95%] md:w-[45rem]": isIntersecting,
						},
					)}
				>
					<div className="flex h-full w-full items-center justify-between">
						<ul className="flex h-full w-full gap-4 rounded-full transition-all duration-300 sm:w-auto">
							<ToggleThemeButton className="hidden h-full w-[3.5rem] sm:grid" />

							<NavBarItem to="/">
								<HomeSVG />
								<p className="hidden sm:flex">Home</p>
							</NavBarItem>

							<NavBarItem to="/projects">
								<FolderSVG />
								<p className="hidden sm:flex">Projects</p>
							</NavBarItem>

							<NavBarItem to="/education">
								<EducationSVG />
								<p className="hidden sm:flex">Education</p>
							</NavBarItem>

							<NavBarItem to="/experience">
								<Briefcase />
								<p className="hidden sm:flex">Experience</p>
							</NavBarItem>
						</ul>

						<button
							aria-label="Say hi through an email"
							id="contact"
						>
							<a
								className="hidden items-center gap-2 sm:flex"
								href="mailto:muricamar2004@gmail.com"
							>
								<ContactSVG />
								<p>Say Hi</p>
							</a>
						</button>
					</div>
				</nav>
			</header>

			<ToggleThemeButton className="fixed bottom-5 left-5 z-50 flex h-[4rem] w-[4rem] items-center justify-center transition-all sm:hidden" />
			<a
				className={cn(
					"theme-background theme-title-text fixed right-5 bottom-5 z-50 flex h-[3rem] items-center justify-center gap-2 rounded-full shadow-xl transition-all sm:hidden",
					{
						"w-[6rem] rounded-br-none": !isVisible,
						"w-[3rem]": isVisible,
					},
				)}
				href="mailto:muricamar2004@gmail.com"
			>
				<ContactSVG />
				{!isVisible && <p className="flex-shrink-0">Say Hi</p>}
			</a>
		</>
	);
};
