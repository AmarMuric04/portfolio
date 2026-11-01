import { FilterSVG, TECH_CATEGORIES, TECH_ICONS, TECH_NAMES } from "@/assets";
import { cycleFilter, filterStateOf } from "@/lib/filters";
import { cn } from "@/lib/utils";

const FILTER_STATES = {
	off: {
		description: "not filtered",
		className: "bg-inset text-text hover:bg-accent-tint hover:text-ink",
	},
	included: {
		description: "included",
		className: "bg-accent text-on-accent",
	},
	excluded: {
		description: "excluded",
		className: "bg-danger text-on-danger",
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
				"flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg p-2 text-center text-caption",
				FILTER_STATES[state].className,
				className,
			)}
			aria-label={`${label}, ${FILTER_STATES[state].description}`}
			onClick={onClick}
			type="button"
		>
			{children}
			<span
				className={cn("line-clamp-2 max-w-full", {
					"line-through": state === "excluded",
				})}
			>
				{label}
			</span>
		</button>
	);
};

const ProjectFilters: React.FC<{
	techFilter: {
		included: (typeof TECH_NAMES)[number][];
		excluded: (typeof TECH_NAMES)[number][];
	};
	categoryFilter: {
		included: (typeof TECH_CATEGORIES)[number][];
		excluded: (typeof TECH_CATEGORIES)[number][];
	};
	setTechFilter: React.Dispatch<
		React.SetStateAction<{
			included: (typeof TECH_NAMES)[number][];
			excluded: (typeof TECH_NAMES)[number][];
		}>
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
	const handleTechClick = (tech: (typeof TECH_NAMES)[number]) =>
		setTechFilter((filter) => cycleFilter({ filter, item: tech }));

	const handleCategoryClick = (category: (typeof TECH_CATEGORIES)[number]) =>
		setCategoryFilter((filter) => cycleFilter({ filter, item: category }));

	return (
		<section className="flex flex-col gap-4 rounded-2xl border border-hairline bg-surface p-4 shadow-surface">
			<p className="text-caption text-text-muted">
				Tap once to include, again to exclude, a third time to clear.
			</p>

			<section className="flex flex-col gap-2">
				<FilterHeading title="Technologies" />

				<ul className="grid grid-cols-4 gap-2 sm:grid-cols-6">
					{TECH_NAMES.map((tech) => {
						const Icon = TECH_ICONS[tech];

						return (
							<li key={tech}>
								<FilterChip
									onClick={() => handleTechClick(tech)}
									className="aspect-square"
									filter={techFilter}
									label={tech}
								>
									<span className="grid size-6 shrink-0 place-items-center [&>svg]:size-6">
										<Icon />
									</span>
								</FilterChip>
							</li>
						);
					})}
				</ul>
			</section>

			<section className="flex flex-col gap-2 border-t border-hairline pt-4">
				<FilterHeading title="Categories" />

				<ul className="grid grid-cols-4 gap-2">
					{TECH_CATEGORIES.map((category) => (
						<li key={category}>
							<FilterChip
								onClick={() => handleCategoryClick(category)}
								className="h-10 capitalize"
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
