import { TECH_CATEGORIES, TECH_ICONS, type WORK } from "@/assets";

const ProjectTech: React.FC<{
	techs: (typeof WORK)[number]["techs"];
}> = ({ techs }) => {
	return (
		<ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
			{TECH_CATEGORIES.filter(
				(category) => techs[category].length > 0,
			).map((category) => (
				<li
					className="rounded-xl border border-hairline bg-inset p-3"
					key={category}
				>
					<p className="mb-2 text-caption text-accent-text uppercase">
						{category}
					</p>

					<ul className="flex flex-col gap-2">
						{techs[category].map((tech: string) => {
							const Icon =
								TECH_ICONS[tech as keyof typeof TECH_ICONS];

							return (
								<li
									className="flex min-w-0 items-center gap-2 text-label text-text"
									key={tech}
								>
									<span className="grid size-4 shrink-0 place-items-center [&>svg]:size-4">
										{Icon && <Icon />}
									</span>

									<span className="truncate">{tech}</span>
								</li>
							);
						})}
					</ul>
				</li>
			))}
		</ul>
	);
};

export { ProjectTech };
