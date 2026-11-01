import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const VARIANT_CLASS_NAMES = {
	primary: "bg-accent text-on-accent hover:opacity-90",
	secondary:
		"border border-border-strong bg-inset text-ink hover:bg-accent-tint",
	ghost: "text-ink hover:bg-accent-tint",
};

const ActionButton: React.FC<
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		variant?: keyof typeof VARIANT_CLASS_NAMES;
		asChild?: boolean;
	}
> = ({
	className,
	disabled,
	variant = "secondary",
	asChild = false,
	...props
}) => {
	const Component = asChild ? Slot : "button";

	return (
		<Component
			className={cn(
				"flex h-8 cursor-pointer items-center justify-center gap-2 rounded-lg px-3 text-label transition-colors duration-200",
				VARIANT_CLASS_NAMES[variant],
				{ "cursor-not-allowed opacity-40": disabled },
				className,
			)}
			type={asChild ? undefined : "button"}
			disabled={disabled}
			{...props}
		/>
	);
};

export { ActionButton };
