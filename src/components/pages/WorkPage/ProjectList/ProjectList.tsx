import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { type TECH_CATEGORIES, WORK } from "@/assets";
import { ActionButton } from "@/components/shared";
import { matchesFilters } from "@/lib/filters";

import { Project } from "../Project";
import { ProjectFilters } from "../ProjectFilters";
import { ToggleArrow } from "../ToggleArrow";

const ProjectList: React.FC = () => {
	const [isFiltering, setIsFiltering] = useState(false);
	const [techFilter, setTechFilter] = useState<{
		included: string[];
		excluded: string[];
	}>({ included: [], excluded: [] });
	const [categoryFilter, setCategoryFilter] = useState<{
		included: (typeof TECH_CATEGORIES)[number][];
		excluded: (typeof TECH_CATEGORIES)[number][];
	}>({ included: [], excluded: [] });

	const visibleProjects = WORK.filter((project) =>
		matchesFilters({ project, techFilter, categoryFilter }),
	);

	const handleFilterToggle = () => {
		setTechFilter({ included: [], excluded: [] });
		setCategoryFilter({ included: [], excluded: [] });
		setIsFiltering(!isFiltering);
	};

	return (
		<>
			<ActionButton
				onClick={handleFilterToggle}
				aria-expanded={isFiltering}
				className="self-start"
			>
				<ToggleArrow isOpen={isFiltering} />
				{isFiltering ? "Clear filters" : "Add a filter"}
			</ActionButton>

			<AnimatePresence>
				{isFiltering && (
					<ProjectFilters
						setCategoryFilter={setCategoryFilter}
						categoryFilter={categoryFilter}
						setTechFilter={setTechFilter}
						matchCount={visibleProjects.length}
						totalCount={WORK.length}
						techFilter={techFilter}
					/>
				)}
			</AnimatePresence>

			<ul className="flex flex-col gap-4">
				{visibleProjects.map((project) => (
					<Project key={project.title} project={project} />
				))}
			</ul>
		</>
	);
};

export { ProjectList };
