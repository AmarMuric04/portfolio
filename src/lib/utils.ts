import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
	extend: {
		theme: {
			text: [
				"display",
				"page-title",
				"card-title",
				"lead",
				"body",
				"label",
				"caption",
			],
		},
	},
});

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cn };
