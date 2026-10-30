import { AnimatePresence, motion } from "framer-motion";
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
		<div className="flex flex-col">
			<ActionButton
				onClick={handleFilterToggle}
				aria-expanded={isFiltering}
				className="self-start"
			>
				<ToggleArrow isOpen={isFiltering} />
				{isFiltering ? "Clear filters" : "Add a filter"}
			</ActionButton>

			<AnimatePresence initial={false}>
				{isFiltering && (
					<motion.div
						exit={{
							height: 0,
							opacity: 0,
							overflow: "hidden",
							transition: { ease: "easeOut", duration: 0.3 },
						}}
						transition={{
							ease: "easeOut",
							duration: 0.3,
							overflow: { delay: 0.3, duration: 0 },
						}}
						initial={{ height: 0, opacity: 0, overflow: "hidden" }}
						animate={{
							height: "auto",
							opacity: 1,
							overflow: "visible",
						}}
					>
						<div className="pt-4">
							<ProjectFilters
								setCategoryFilter={setCategoryFilter}
								categoryFilter={categoryFilter}
								setTechFilter={setTechFilter}
								matchCount={visibleProjects.length}
								totalCount={WORK.length}
								techFilter={techFilter}
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<ul className="mt-4 flex flex-col gap-4">
				<AnimatePresence initial={false} mode="popLayout">
					{visibleProjects.map((project) => (
						<motion.li
							transition={{ ease: "easeOut", duration: 0.3 }}
							initial={{ opacity: 0, scale: 0.98 }}
							exit={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							key={project.title}
							layout="position"
						>
							<Project project={project} />
						</motion.li>
					))}
				</AnimatePresence>
			</ul>
		</div>
	);
};

export { ProjectList };
