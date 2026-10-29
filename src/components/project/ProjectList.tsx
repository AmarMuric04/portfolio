import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
	MiniArrowDownSVG,
	TECH_CATEGORIES,
	TECH_ICONS,
	FilterSVG,
	WORK,
} from "@/assets";
import * as FilterActions from "@/actions/filter.actions";
import { ActionButton } from "@/components/atoms";
import { cn } from "@/lib/utils";

import { Project } from "./Project";

type TechName = keyof typeof TECH_ICONS;

export default function ProjectList() {
	const [addingFilter, setAddingFilter] = useState<boolean>(false);
	const [showedProjects, setShowedProjects] = useState<
		Array<(typeof WORK)[number]>
	>([...WORK]);
	const [mustInclude, setMustInclude] = useState<Array<string>>([]);
	const [mustNotInclude, setMustNotInclude] = useState<Array<string>>([]);
	const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
		[],
	);
	const [excludedCategories, setExcludedCategories] = useState<Array<string>>(
		[],
	);

	useEffect(() => {
		if (!addingFilter) {
			setMustInclude([]);
			setMustNotInclude([]);
			setSelectedCategories([]);
			setExcludedCategories([]);
		}
	}, [addingFilter]);

	useEffect(() => {
		if (
			mustInclude.length === 0 &&
			mustNotInclude.length === 0 &&
			selectedCategories.length === 0 &&
			excludedCategories.length === 0
		) {
			setShowedProjects([...WORK]);
			return;
		}

		setShowedProjects(
			[...WORK].filter((project) => {
				const projectTechs: string[] = Object.values(
					project.techs,
				).flat();
				const techMatch = mustInclude.every((tech) =>
					projectTechs.includes(tech),
				);
				const notTechMatch = mustNotInclude.every(
					(tech) => !projectTechs.includes(tech),
				);

				const categoryMatch =
					selectedCategories.length === 0 ||
					selectedCategories.some(
						(category) =>
							project.techs[
								category as keyof typeof project.techs
							]?.length > 0,
					);
				const notCategoryMatch = excludedCategories.every(
					(category) =>
						!project.techs[
							category as keyof typeof project.techs
						] ||
						project.techs[category as keyof typeof project.techs]
							.length === 0,
				);

				return (
					techMatch &&
					notTechMatch &&
					categoryMatch &&
					notCategoryMatch
				);
			}),
		);
	}, [mustInclude, mustNotInclude, selectedCategories, excludedCategories]);

	const availableTechs = Object.keys(TECH_ICONS) as TechName[];

	return (
		<>
			<ActionButton
				onClick={() => setAddingFilter(!addingFilter)}
				className="my-4 px-2"
			>
				<div
					className={cn("transition-all", {
						"rotate-180": addingFilter,
					})}
				>
					<MiniArrowDownSVG />
				</div>
				<p>Add a filter</p>
			</ActionButton>

			<AnimatePresence>
				{addingFilter && (
					<motion.section
						className="theme-surface flex flex-col rounded-lg p-3 shadow-xl"
						transition={{ ease: "easeOut", duration: 0.3 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
					>
						<section className="theme-border border-b-2 py-2">
							<div className="mb-2 flex items-center gap-2">
								<FilterSVG />
								<p>
									Filter by inclusion{" "}
									<em>
										(Double click to{" "}
										<strong>exclude</strong>)
									</em>
								</p>
							</div>
							<ul className="flex flex-wrap gap-2">
								{availableTechs.map((key) => {
									const Icon = TECH_ICONS[key];
									const included = mustInclude.includes(key);
									const excluded =
										mustNotInclude.includes(key);
									return (
										<li
											className="flex items-center gap-2"
											key={key}
										>
											<button
												className={cn(
													"grid size-10 cursor-pointer place-items-center rounded-full border-2 hover:bg-[#3C3D37]",
													{
														"border-red-500 hover:bg-[#b91c1c70]":
															!included &&
															excluded,
														"theme-accent-background border-green-500":
															included,
														"border-transparent":
															!included &&
															!excluded,
													},
												)}
												onClick={() =>
													FilterActions.handleToggleInclusion(
														key,
														setMustInclude,
														setMustNotInclude,
														excluded,
													)
												}
												onDoubleClick={() =>
													FilterActions.handleDoubleClickInclusion(
														key,
														setMustInclude,
														setMustNotInclude,
													)
												}
											>
												<Icon />
											</button>
										</li>
									);
								})}
							</ul>
						</section>

						<section className="theme-border border-t-2 py-2">
							<div className="mb-2 flex items-center gap-2">
								<FilterSVG />
								<p>
									Filter by category{" "}
									<em>
										(Double click to{" "}
										<strong>exclude</strong>)
									</em>
								</p>
							</div>
							<ul className="flex flex-wrap gap-2">
								{TECH_CATEGORIES.map((category) => {
									const isSelected =
										selectedCategories.includes(category);
									const isExcluded =
										excludedCategories.includes(category);
									return (
										<li key={category}>
											<button
												className={cn(
													"cursor-pointer rounded-md px-2 py-1 transition-colors hover:bg-[#53594E]",
													{
														"theme-secondary-background":
															!isSelected &&
															!isExcluded,
														"bg-[#b91c1c]":
															!isSelected &&
															isExcluded,
														"theme-border-background":
															isSelected,
													},
												)}
												onDoubleClick={() =>
													FilterActions.handleDoubleClickCategory(
														category,
														setSelectedCategories,
														setExcludedCategories,
													)
												}
												onClick={() =>
													FilterActions.handleToggleCategory(
														category,
														setSelectedCategories,
														setExcludedCategories,
													)
												}
											>
												{category}
											</button>
										</li>
									);
								})}
							</ul>
						</section>
					</motion.section>
				)}
			</AnimatePresence>
			<ul className="my-4 flex flex-col gap-4">
				{showedProjects.map((project) => (
					<Project key={project.title} project={project} />
				))}
			</ul>
		</>
	);
}
