import React from "react";

import { cn } from "@/lib/utils";

const ActionButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
	className,
	disabled,
	...props
}) => {
	return (
		<button
			className={cn(
				"theme-secondary-background flex cursor-pointer items-center justify-start gap-1 rounded-lg border border-white/10 bg-white/10 px-1 text-white shadow-md backdrop-blur-sm transition-all",
				{ "cursor-not-allowed opacity-50": disabled },
				className,
			)}
			disabled={disabled}
			{...props}
		/>
	);
};

export { ActionButton };
