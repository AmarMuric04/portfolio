import { Link, type LinkProps } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const UnderlineTab: React.FC<
	React.PropsWithChildren<{
		value: string;
		isSelected: boolean;
		layoutId: string;
		to?: LinkProps["to"];
		className?: string;
	}>
> = ({ value, isSelected, layoutId, to, className, children }) => {
	const content = (
		<>
			{children}

			{isSelected && (
				<motion.div
					className="absolute bottom-0 left-0 h-0.5 w-full bg-ink"
					transition={{ ease: "easeOut", duration: 0.3 }}
					layoutId={layoutId}
				/>
			)}
		</>
	);

	return (
		<TabsTrigger
			className={cn(
				"isolate text-label text-ink opacity-70 transition-opacity duration-200 hover:opacity-100 focus-visible:outline-none focus-visible:before:absolute focus-visible:before:inset-x-[-0.5rem] focus-visible:before:inset-y-2 focus-visible:before:-z-10 focus-visible:before:rounded-lg focus-visible:before:bg-accent-tint data-[state=active]:opacity-100",
				className,
			)}
			variant="nav"
			value={value}
			asChild
		>
			{to ? (
				<Link aria-current={isSelected ? "page" : undefined} to={to}>
					{content}
				</Link>
			) : (
				<button type="button">{content}</button>
			)}
		</TabsTrigger>
	);
};

export { UnderlineTab };
