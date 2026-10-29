import { cn } from "@/lib/utils";

const Tag: React.FC<React.PropsWithChildren<{ isFilled?: boolean }>> = ({
	isFilled = false,
	children,
}) => {
	return (
		<span
			className={cn(
				"inline-flex h-5 items-center rounded-full px-2 text-caption text-ink",
				isFilled ? "bg-accent-tint" : "border border-border-strong",
			)}
		>
			{children}
		</span>
	);
};

export { Tag };
