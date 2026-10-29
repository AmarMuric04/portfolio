import type { WORK } from "@/assets";
import { ProjectTech } from "@/components/shared";

const OverviewEntry: React.FC<React.PropsWithChildren<{ title: string }>> = ({
	title,
	children,
}) => {
	return (
		<section className="flex flex-col gap-1">
			<h3 className="text-label text-ink">{title}</h3>
			<p className="text-body">{children}</p>
		</section>
	);
};

const ProjectOverview: React.FC<{ project: (typeof WORK)[number] }> = ({
	project,
}) => {
	return (
		<div className="flex flex-col gap-4">
			<p className="text-body">{project.content}</p>

			<OverviewEntry title="My contribution">
				{project.contributions}
			</OverviewEntry>

			<OverviewEntry title="The challenge">
				{project.challenges}
			</OverviewEntry>

			<OverviewEntry title="What I learned">
				{project.learningOutcomes}
			</OverviewEntry>

			<OverviewEntry title="Deployment">
				{project.deployment}
			</OverviewEntry>

			<OverviewEntry title="Accessibility">
				{project.accessibility}
			</OverviewEntry>

			<section className="flex flex-col gap-2">
				<h3 className="text-label text-ink">Technologies</h3>
				<ProjectTech techs={project.techs} />
			</section>
		</div>
	);
};

export { ProjectOverview };
