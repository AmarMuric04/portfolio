import { cn } from "@/lib/utils";

const NAV_ICON_SHAPES = {
	home: {
		outline: (
			<path d="M4 10 12 4l8 6v8a2 2 0 0 1-2 2h-3.5v-5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5H6a2 2 0 0 1-2-2z" />
		),
		filled: (
			<path
				className="fill-current"
				d="M4 10 12 4l8 6v8a2 2 0 0 1-2 2h-3.5v-5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v5H6a2 2 0 0 1-2-2z"
			/>
		),
	},
	projects: {
		outline: (
			<>
				<path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
				<path d="M3 11h18" />
			</>
		),
		filled: (
			<>
				<path
					className="fill-current"
					d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
				/>
				<path className="stroke-surface" d="M4.5 11h15" />
			</>
		),
	},
	education: {
		outline: (
			<>
				<path d="M3 9.5 12 5.5l9 4-9 4z" />
				<path d="M6.5 11.5V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.5" />
				<path d="M21 9.5V15" />
			</>
		),
		filled: (
			<>
				<path className="fill-current" d="M3 9.5 12 5.5l9 4-9 4z" />
				<path
					className="fill-current"
					d="M6.5 11.5V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.5L12 13.5z"
				/>
				<path d="M21 9.5V15" />
			</>
		),
	},
	experience: {
		outline: (
			<>
				<path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
				<path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
				<path d="M3 12.5h18" />
			</>
		),
		filled: (
			<>
				<path
					className="fill-current"
					d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
				/>
				<path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
				<path className="stroke-surface" d="M4.5 12.5h15" />
			</>
		),
	},
	contact: {
		outline: (
			<path d="M12 4c4.7 0 8.5 3.4 8.5 7.5S16.7 19 12 19c-1.2 0-2.3-.2-3.3-.6L4 20l1.3-3.9C4.1 14.8 3.5 13.2 3.5 11.5 3.5 7.4 7.3 4 12 4z" />
		),
		filled: (
			<path
				className="fill-current"
				d="M12 4c4.7 0 8.5 3.4 8.5 7.5S16.7 19 12 19c-1.2 0-2.3-.2-3.3-.6L4 20l1.3-3.9C4.1 14.8 3.5 13.2 3.5 11.5 3.5 7.4 7.3 4 12 4z"
			/>
		),
	},
};

const NavIcon: React.FC<{
	name: keyof typeof NAV_ICON_SHAPES;
	isFilled?: boolean;
}> = ({ name, isFilled = false }) => {
	return (
		<span className="grid size-5 shrink-0" aria-hidden="true">
			<svg
				className="col-start-1 row-start-1 size-full fill-none stroke-current [stroke-width:1.5] [stroke-linecap:round] [stroke-linejoin:round]"
				viewBox="0 0 24 24"
			>
				{NAV_ICON_SHAPES[name].outline}
			</svg>

			<svg
				className={cn(
					"col-start-1 row-start-1 size-full fill-none stroke-current [stroke-width:1.5] transition-[clip-path] duration-[340ms] ease-[cubic-bezier(0.34,1.4,0.64,1)] [stroke-linecap:round] [stroke-linejoin:round] group-hover/fill:[clip-path:inset(0)] group-focus-visible/fill:[clip-path:inset(0)]",
					isFilled
						? "[clip-path:inset(0)]"
						: "[clip-path:inset(0_0_100%_0)]",
				)}
				viewBox="0 0 24 24"
			>
				{NAV_ICON_SHAPES[name].filled}
			</svg>
		</span>
	);
};

export { NavIcon };
