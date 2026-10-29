import React from "react";

import { TECH_CATEGORIES, TECH_ICONS } from "@/assets";

interface ProjectTechProps {
	techs: {
		[category: string]: readonly string[] | string[];
	};
}

const ProjectTech: React.FC<ProjectTechProps> = React.memo(({ techs }) => {
	return (
		<section className="my-4 flex flex-wrap gap-[1%]">
			{TECH_CATEGORIES.map((category) => {
				const techList = techs[category];
				if (!techList?.length) return null;

				return (
					<div
						className="theme-background min-h-[150px] w-[24.2%] min-w-[125px] flex-grow rounded-xl p-2 transition-all lg:flex-none"
						key={category}
					>
						<p className="theme-accent-text mb-2 text-sm uppercase">
							{category}
						</p>
						<div className="flex max-w-full flex-wrap items-center gap-4 overflow-hidden">
							{techList.map((tech) => {
								const Icon =
									TECH_ICONS[tech as keyof typeof TECH_ICONS];
								return (
									<div
										className="flex max-w-full flex-shrink-0 items-center gap-2 overflow-hidden text-sm"
										key={tech}
									>
										{Icon ? (
											<Icon />
										) : (
											<span className="h-6 w-6 flex-shrink-0" />
										)}
										<span className="max-w-full truncate overflow-hidden text-ellipsis whitespace-nowrap">
											{tech}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</section>
	);
});

export default ProjectTech;
