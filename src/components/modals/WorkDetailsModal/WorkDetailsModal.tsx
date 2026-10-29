import NiceModal, { useModal } from "@ebay/nice-modal-react";

import { GithubSVG, type WORK, WorldSVG } from "@/assets";
import {
	ActionButton,
	Modal,
	ProjectStatus,
	ProjectTech,
} from "@/components/shared";

import { WorkThoughtsModal } from "../WorkThoughtsModal";
import { NumberedList } from "./NumberedList";

const WorkDetailsModal = NiceModal.create<{
	project: (typeof WORK)[number];
}>(({ project }) => {
	const workThoughtsModal = useModal(WorkThoughtsModal);

	return (
		<Modal title="More Information">
			<section className="flex flex-wrap items-center justify-between gap-4">
				<h1 className="theme-title-text text-lg font-semibold">
					{project.title}
				</h1>

				<div className="flex gap-4">
					<ProjectStatus status={project.status} />

					{project.github && (
						<a
							href={project.github}
							target="_blank"
							rel="noreferrer"
						>
							<GithubSVG />
						</a>
					)}

					{project.website && (
						<a
							href={project.website}
							target="_blank"
							rel="noreferrer"
						>
							<WorldSVG />
						</a>
					)}
				</div>
			</section>

			<section className="flex flex-col items-start xl:w-2/3">
				<strong>Description</strong>
				<em>&quot;{project.content}&quot;</em>

				<ActionButton
					onClick={() => workThoughtsModal.show({ project })}
					className="my-4 px-3"
				>
					My thoughts on this project
				</ActionButton>

				<strong>Duration</strong>
				<p className="mb-4">{project.duration}</p>

				<strong>Challenge I overcame during this project</strong>
				<p className="mb-4">{project.challenges}</p>

				<strong>Key features of this project</strong>
				<NumberedList items={project.keyFeatures} />

				<strong>
					Things I&apos;ve considered adding to the project in the
					future
				</strong>
				<NumberedList items={project.futurePlans} />

				<strong>My contribution to the project</strong>
				<p className="mb-4">{project.contributions}</p>

				<strong>Key thing I learned during this project</strong>
				<p className="mb-4">{project.learningOutcomes}</p>

				<strong>How I chose to deploy this project</strong>
				<p className="mb-4">{project.deployment}</p>

				<strong>Accessibility</strong>
				<p className="mb-4">{project.accessibility}</p>

				<strong>Technologies used</strong>
				<ProjectTech techs={project.techs} />
			</section>
		</Modal>
	);
});

export { WorkDetailsModal };
