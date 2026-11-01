import { Link, type LinkProps } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const UnderlineTab: React.FC<
	React.PropsWithChildren<
		{ isSelected: boolean; layoutId: string; className?: string } & (
			{ to: LinkProps["to"] } | { value: string }
		)
	>
> = (props) => {
	const tabClassName = cn(
		"relative isolate inline-flex h-full items-center gap-2 text-label whitespace-nowrap text-ink opacity-70 transition-opacity duration-200 outline-none hover:opacity-100 focus-visible:outline-none focus-visible:before:absolute focus-visible:before:inset-x-[-0.5rem] focus-visible:before:inset-y-2 focus-visible:before:-z-10 focus-visible:before:rounded-lg focus-visible:before:bg-accent-tint",
		{ "opacity-100": props.isSelected },
		props.className,
	);

	const content = (
		<>
			{props.children}

			{props.isSelected && (
				<motion.div
					className="absolute bottom-0 left-0 h-0.5 w-full bg-ink"
					transition={{ ease: "easeOut", duration: 0.3 }}
					layoutId={props.layoutId}
				/>
			)}
		</>
	);

	if ("to" in props) {
		return (
			<Link
				aria-current={props.isSelected ? "page" : undefined}
				className={tabClassName}
				to={props.to}
			>
				{content}
			</Link>
		);
	}

	return (
		<TabsTrigger
			className={tabClassName}
			value={props.value}
			variant="nav"
			asChild
		>
			<button type="button">{content}</button>
		</TabsTrigger>
	);
};

export { UnderlineTab };
