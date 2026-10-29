import { motion } from "framer-motion";

import { FilterSVG, TECH_CATEGORIES, TECH_ICONS } from "@/assets";
import {
	toggleCategoryInclusion,
	toggleExclusion,
	toggleTechInclusion,
} from "@/lib/filters";
import { cn } from "@/lib/utils";

const FilterHeading: React.FC<{ subject: string }> = ({ subject }) => {
	return (
		<div className="mb-2 flex items-center gap-2">
			<FilterSVG />
			<p>
				Filter by {subject}{" "}
				<em>
					(Double click to <strong>exclude</strong>)
				</em>
			</p>
		</div>
	);
};

const TechFilterButton: React.FC<{
	icon: React.ElementType;
	isIncluded: boolean;
	isExcluded: boolean;
	onClick: () => void;
	onDoubleClick: () => void;
}> = ({ icon: Icon, isIncluded, isExcluded, onClick, onDoubleClick }) => {
	return (
		<button
			className={cn(
				"grid size-10 cursor-pointer place-items-center rounded-full border-2 hover:bg-tech-hover",
				{
					"theme-accent-background border-green-500": isIncluded,
					"border-red-500 hover:bg-excluded-faded": isExcluded,
					"border-transparent": !isIncluded && !isExcluded,
				},
			)}
			onDoubleClick={onDoubleClick}
			onClick={onClick}
		>
			<Icon />
		</button>
	);
};

const CategoryFilterButton: React.FC<{
	category: string;
	isIncluded: boolean;
	isExcluded: boolean;
	onClick: () => void;
	onDoubleClick: () => void;
}> = ({ category, isIncluded, isExcluded, onClick, onDoubleClick }) => {
	return (
		<button
			className={cn(
				"cursor-pointer rounded-lg px-2 py-1 transition-colors hover:bg-category-hover",
				{
					"theme-border-background": isIncluded,
					"bg-excluded": isExcluded,
					"theme-secondary-background": !isIncluded && !isExcluded,
				},
			)}
			onDoubleClick={onDoubleClick}
			onClick={onClick}
		>
			{category}
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
}> = ({ techFilter, categoryFilter, setTechFilter, setCategoryFilter }) => {
	const handleTechClick = (tech: string) =>
		setTechFilter((filter) => toggleTechInclusion({ filter, tech }));

	const handleTechDoubleClick = (tech: string) =>
		setTechFilter((filter) => toggleExclusion({ filter, item: tech }));

	const handleCategoryClick = (category: (typeof TECH_CATEGORIES)[number]) =>
		setCategoryFilter((filter) =>
			toggleCategoryInclusion({ filter, category }),
		);

	const handleCategoryDoubleClick = (
		category: (typeof TECH_CATEGORIES)[number],
	) =>
		setCategoryFilter((filter) =>
			toggleExclusion({ filter, item: category }),
		);

	return (
		<motion.section
			className="theme-surface flex flex-col rounded-2xl p-3 shadow-xl"
			transition={{ ease: "easeOut", duration: 0.3 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
		>
			<section className="theme-border border-b-2 py-2">
				<FilterHeading subject="inclusion" />

				<ul className="flex flex-wrap gap-2">
					{Object.entries(TECH_ICONS).map(([tech, icon]) => (
						<li className="flex items-center gap-2" key={tech}>
							<TechFilterButton
								onDoubleClick={() =>
									handleTechDoubleClick(tech)
								}
								onClick={() => handleTechClick(tech)}
								isIncluded={techFilter.included.includes(tech)}
								isExcluded={techFilter.excluded.includes(tech)}
								icon={icon}
							/>
						</li>
					))}
				</ul>
			</section>

			<section className="theme-border border-t-2 py-2">
				<FilterHeading subject="category" />

				<ul className="flex flex-wrap gap-2">
					{TECH_CATEGORIES.map((category) => (
						<li key={category}>
							<CategoryFilterButton
								onDoubleClick={() =>
									handleCategoryDoubleClick(category)
								}
								onClick={() => handleCategoryClick(category)}
								isIncluded={categoryFilter.included.includes(
									category,
								)}
								isExcluded={categoryFilter.excluded.includes(
									category,
								)}
								category={category}
							/>
						</li>
					))}
				</ul>
			</section>
		</motion.section>
	);
};

export { ProjectFilters };
