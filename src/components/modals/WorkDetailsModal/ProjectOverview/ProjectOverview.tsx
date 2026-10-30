import type { WORK } from "@/assets";

import { DetailTile } from "../DetailTile";

const ProjectOverview: React.FC<{ project: (typeof WORK)[number] }> = ({
	project,
}) => {
	return (
		<div className="flex flex-col gap-4">
			<p className="text-body">{project.content}</p>

			<div className="grid gap-2 sm:grid-cols-2">
				<DetailTile title="My contribution">
					<p className="text-body">{project.contributions}</p>
				</DetailTile>

				<DetailTile title="The challenge">
					<p className="text-body">{project.challenges}</p>
				</DetailTile>

				<DetailTile title="What I learned">
					<p className="text-body">{project.learningOutcomes}</p>
				</DetailTile>

				<DetailTile title="Deployment and accessibility">
					<p className="text-body">{project.deployment}</p>
					<p className="text-body">{project.accessibility}</p>
				</DetailTile>
			</div>
		</div>
	);
};

export { ProjectOverview };
