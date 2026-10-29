import { cn } from "@/lib/utils";

const NAV_ICON_SHAPES = {
	home: {
		outline: (
			<path d="M3.5 10.2 12 3.5l8.5 6.7V19a1.5 1.5 0 0 1-1.5 1.5h-4.2v-5.8H9.2v5.8H5A1.5 1.5 0 0 1 3.5 19z" />
		),
		filled: (
			<path
				className="fill-current"
				d="M3.5 10.2 12 3.5l8.5 6.7V19a1.5 1.5 0 0 1-1.5 1.5h-4.2v-5.8H9.2v5.8H5A1.5 1.5 0 0 1 3.5 19z"
			/>
		),
	},
	projects: {
		outline: (
			<>
				<path d="M3.5 6.5A1.5 1.5 0 0 1 5 5h4.4l1.9 2.2H19a1.5 1.5 0 0 1 1.5 1.5v9.8A1.5 1.5 0 0 1 19 20H5a1.5 1.5 0 0 1-1.5-1.5z" />
				<path d="M3.5 10h17" />
			</>
		),
		filled: (
			<>
				<path
					className="fill-current"
					d="M3.5 6.5A1.5 1.5 0 0 1 5 5h4.4l1.9 2.2H19a1.5 1.5 0 0 1 1.5 1.5v9.8A1.5 1.5 0 0 1 19 20H5a1.5 1.5 0 0 1-1.5-1.5z"
				/>
				<path
					className="stroke-[var(--surface-color)]"
					d="M4.5 10h15"
				/>
			</>
		),
	},
	education: {
		outline: (
			<>
				<path d="M2.5 9.5 12 5l9.5 4.5L12 14z" />
				<path d="M6.5 11.6V16c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.4" />
				<path d="M21.5 9.5V15" />
			</>
		),
		filled: (
			<>
				<path
					className="fill-current"
					d="M2.5 9.5 12 5l9.5 4.5L12 14z"
				/>
				<path
					className="fill-current"
					d="M6.5 11.6V16c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.4L12 14.2z"
				/>
				<path d="M21.5 9.5V15" />
			</>
		),
	},
	experience: {
		outline: (
			<>
				<path d="M3.5 8.5A1.5 1.5 0 0 1 5 7h14a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 19 20H5a1.5 1.5 0 0 1-1.5-1.5z" />
				<path d="M9 7V5.2A1.2 1.2 0 0 1 10.2 4h3.6A1.2 1.2 0 0 1 15 5.2V7" />
				<path d="M3.5 13h17" />
			</>
		),
		filled: (
			<>
				<path
					className="fill-current"
					d="M3.5 8.5A1.5 1.5 0 0 1 5 7h14a1.5 1.5 0 0 1 1.5 1.5v10A1.5 1.5 0 0 1 19 20H5a1.5 1.5 0 0 1-1.5-1.5z"
				/>
				<path d="M9 7V5.2A1.2 1.2 0 0 1 10.2 4h3.6A1.2 1.2 0 0 1 15 5.2V7" />
				<path
					className="stroke-[var(--surface-color)]"
					d="M4.5 13h15"
				/>
			</>
		),
	},
	contact: {
		outline: (
			<path d="M12 3.8c4.6 0 8.2 3.3 8.2 7.5s-3.6 7.5-8.2 7.5c-1.1 0-2.2-.2-3.1-.5L4.2 19.7l1.3-3.8C4.4 14.6 3.8 13 3.8 11.3 3.8 7.1 7.4 3.8 12 3.8z" />
		),
		filled: (
			<path
				className="fill-current"
				d="M12 3.8c4.6 0 8.2 3.3 8.2 7.5s-3.6 7.5-8.2 7.5c-1.1 0-2.2-.2-3.1-.5L4.2 19.7l1.3-3.8C4.4 14.6 3.8 13 3.8 11.3 3.8 7.1 7.4 3.8 12 3.8z"
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
				className="col-start-1 row-start-1 size-full fill-none stroke-current [stroke-width:1.7] [stroke-linecap:round] [stroke-linejoin:round]"
				viewBox="0 0 24 24"
			>
				{NAV_ICON_SHAPES[name].outline}
			</svg>

			<svg
				className={cn(
					"col-start-1 row-start-1 size-full fill-none stroke-current [stroke-width:1.7] transition-[clip-path] duration-[340ms] ease-[cubic-bezier(0.34,1.4,0.64,1)] [stroke-linecap:round] [stroke-linejoin:round] group-hover/fill:[clip-path:inset(0)] group-focus-visible/fill:[clip-path:inset(0)]",
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
