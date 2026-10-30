import { FilterSVG, TECH_CATEGORIES, TECH_ICONS } from "@/assets";
import { cycleFilter, filterStateOf } from "@/lib/filters";
import { cn } from "@/lib/utils";

const FILTER_STATES = {
	off: { description: "not filtered", className: "border-border-strong" },
	included: {
		description: "included",
		className: "border-accent-text bg-accent-tint",
	},
	excluded: {
		description: "excluded",
		className: "border-danger bg-danger-tint line-through",
	},
};

const FilterHeading: React.FC<{ title: string }> = ({ title }) => {
	return (
		<h3 className="flex items-center gap-2 text-label text-ink">
			<FilterSVG />
			{title}
		</h3>
	);
};

const FilterChip: React.FC<
	React.PropsWithChildren<{
		label: string;
		filter: { included: string[]; excluded: string[] };
		onClick: () => void;
		className?: string;
	}>
> = ({ label, filter, onClick, className, children }) => {
	const state = filterStateOf({ filter, item: label });

	return (
		<button
			className={cn(
				"flex h-20 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border p-2 text-center text-caption text-ink transition-colors duration-200 hover:bg-accent-tint",
				FILTER_STATES[state].className,
				className,
			)}
			aria-label={`${label}, ${FILTER_STATES[state].description}`}
			onClick={onClick}
			type="button"
		>
			{children}
			<span className="line-clamp-2">{label}</span>
		</button>
	);
};

const ProjectFilters: React.FC<{
	techFilter: { included: string[]; excluded: string[] };
	categoryFilter: {
		included: (typeof TECH_CATEGORIES)[number][];
		excluded: (typeof TECH_CATEGORIES)[number][];
	};
	setTechFilter: React.Dispatch<
		React.SetStateAction<{ included: string[]; excluded: string[] }>
	>;
	setCategoryFilter: React.Dispatch<
		React.SetStateAction<{
			included: (typeof TECH_CATEGORIES)[number][];
			excluded: (typeof TECH_CATEGORIES)[number][];
		}>
	>;
	matchCount: number;
	totalCount: number;
}> = ({
	techFilter,
	categoryFilter,
	setTechFilter,
	setCategoryFilter,
	matchCount,
	totalCount,
}) => {
	const handleTechClick = (tech: string) =>
		setTechFilter((filter) => cycleFilter({ filter, item: tech }));

	const handleCategoryClick = (category: (typeof TECH_CATEGORIES)[number]) =>
		setCategoryFilter((filter) => cycleFilter({ filter, item: category }));

	return (
		<section className="flex flex-col gap-4 rounded-2xl border border-hairline bg-surface sheen p-4 shadow-surface">
			<p className="text-caption text-text-muted">
				Tap once to include, again to exclude, a third time to clear.
			</p>

			<section className="flex flex-col gap-2">
				<FilterHeading title="Technologies" />

				<ul className="grid grid-cols-[repeat(auto-fill,minmax(6rem,1fr))] gap-2">
					{Object.entries(TECH_ICONS).map(([tech, Icon]) => (
						<li key={tech}>
							<FilterChip
								onClick={() => handleTechClick(tech)}
								filter={techFilter}
								label={tech}
							>
								<span className="grid size-6 shrink-0 place-items-center [&>svg]:size-6">
									<Icon />
								</span>
							</FilterChip>
						</li>
					))}
				</ul>
			</section>

			<section className="flex flex-col gap-2 border-t border-hairline pt-4">
				<FilterHeading title="Categories" />

				<ul className="grid grid-cols-[repeat(auto-fill,minmax(6rem,1fr))] gap-2">
					{TECH_CATEGORIES.map((category) => (
						<li key={category}>
							<FilterChip
								onClick={() => handleCategoryClick(category)}
								className="capitalize"
								filter={categoryFilter}
								label={category}
							/>
						</li>
					))}
				</ul>
			</section>

			<p className="text-label text-text tabular-nums" aria-live="polite">
				Showing {matchCount} of {totalCount} projects
			</p>
		</section>
	);
};

export { ProjectFilters };
