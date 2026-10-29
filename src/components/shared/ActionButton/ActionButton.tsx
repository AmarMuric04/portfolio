import React from "react";

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
	}
> = ({ className, disabled, variant = "secondary", ...props }) => {
	return (
		<button
			className={cn(
				"flex h-8 cursor-pointer items-center justify-center gap-2 rounded-lg px-3 text-label transition-colors duration-200",
				VARIANT_CLASS_NAMES[variant],
				{ "cursor-not-allowed opacity-40": disabled },
				className,
			)}
			disabled={disabled}
			type="button"
			{...props}
		/>
	);
};

export { ActionButton };
