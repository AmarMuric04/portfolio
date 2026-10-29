import NiceModal from "@ebay/nice-modal-react";

import { GithubSVG, GlobeSVG, type WORK, WORK_READMES } from "@/assets";
import {
	ExternalLinkButton,
	Modal,
	ProjectStatus,
	Tag,
} from "@/components/shared";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { NumberedList } from "./NumberedList";
import { ProjectOverview } from "./ProjectOverview";
import { Readme } from "./Readme";

const WorkDetailsModal = NiceModal.create<{
	project: (typeof WORK)[number];
}>(({ project }) => {
	const readme = WORK_READMES[project.title];

	return (
		<Modal title={project.title}>
			<div className="flex flex-wrap items-center gap-2">
				<Tag>{project.type}</Tag>

				{"info" in project && <Tag isFilled>{project.info}</Tag>}

				<ProjectStatus status={project.status} />

				<p className="text-caption text-text-muted tabular-nums">
					{project.duration}
				</p>
			</div>

			<div className="mt-3 flex flex-wrap gap-4">
				{project.website && (
					<ExternalLinkButton href={project.website} icon={GlobeSVG}>
						Visit website
					</ExternalLinkButton>
				)}

				<ExternalLinkButton href={project.github} icon={GithubSVG}>
					Visit GitHub
				</ExternalLinkButton>
			</div>

			<Tabs className="mt-4 gap-4" defaultValue="overview">
				<TabsList variant="line">
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="features">Features</TabsTrigger>
					<TabsTrigger value="thoughts">My thoughts</TabsTrigger>
					{readme && <TabsTrigger value="readme">README</TabsTrigger>}
				</TabsList>

				<TabsContent value="overview">
					<ProjectOverview project={project} />
				</TabsContent>

				<TabsContent className="flex flex-col gap-4" value="features">
					<section className="flex flex-col gap-2">
						<h3 className="text-label text-ink">What it does</h3>
						<NumberedList items={project.keyFeatures} />
					</section>

					<section className="flex flex-col gap-2">
						<h3 className="text-label text-ink">
							What I’d add next
						</h3>
						<NumberedList items={project.futurePlans} />
					</section>
				</TabsContent>

				<TabsContent value="thoughts">
					<p className="text-body">{project.myThoughts}</p>
				</TabsContent>

				{readme && (
					<TabsContent value="readme">
						<Readme markdown={readme} />
					</TabsContent>
				)}
			</Tabs>
		</Modal>
	);
});

export { WorkDetailsModal };
