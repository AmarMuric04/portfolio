import { TECH_CATEGORIES, TECH_ICONS, type WORK } from "@/assets";

const ProjectTech: React.FC<{
	techs: (typeof WORK)[number]["techs"];
}> = ({ techs }) => {
	return (
		<section className="my-4 flex flex-wrap gap-[1%]">
			{TECH_CATEGORIES.filter(
				(category) => techs[category].length > 0,
			).map((category) => (
				<div
					className="theme-background min-h-[150px] w-[24.2%] min-w-[125px] flex-grow rounded-xl p-2 transition-all lg:flex-none"
					key={category}
				>
					<p className="theme-accent-text mb-2 text-sm uppercase">
						{category}
					</p>

					<div className="flex max-w-full flex-wrap items-center gap-4 overflow-hidden">
						{techs[category].map((tech: string) => {
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
			))}
		</section>
	);
};

export { ProjectTech };
