import { cn } from "@/lib/utils";

const Tag: React.FC<React.PropsWithChildren<{ isFilled?: boolean }>> = ({
	isFilled = false,
	children,
}) => {
	return (
		<span
			className={cn(
				"inline-flex h-5 items-center rounded-md px-1.5 text-caption",
				isFilled ? "bg-accent text-on-accent" : "bg-inset text-text",
			)}
		>
			{children}
		</span>
	);
};

export { Tag };
