import NiceModal from "@ebay/nice-modal-react";

import { GithubSVG, GlobeSVG, type WORK, WORK_READMES } from "@/assets";
import {
	ExternalLinkButton,
	Modal,
	ProjectStatus,
	Tag,
} from "@/components/shared";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DetailTile } from "./DetailTile";
import { NumberedList } from "./NumberedList";
import { ProjectOverview } from "./ProjectOverview";
import { Readme } from "./Readme";

const WorkDetailsModal = NiceModal.create<{
	project: (typeof WORK)[number];
}>(({ project }) => {
	const readme = WORK_READMES[project.title];

	return (
		<Modal title={project.title}>
			<div className="flex flex-col gap-3 border-b border-hairline pb-4">
				<div className="flex flex-wrap items-center gap-2">
					<Tag>{project.type}</Tag>

					{"info" in project && <Tag isFilled>{project.info}</Tag>}

					<ProjectStatus status={project.status} />

					<p className="text-caption text-text-muted tabular-nums">
						{project.duration}
					</p>
				</div>

				<div className="flex flex-wrap gap-4">
					{project.website && (
						<ExternalLinkButton
							href={project.website}
							icon={GlobeSVG}
						>
							Visit website
						</ExternalLinkButton>
					)}

					<ExternalLinkButton href={project.github} icon={GithubSVG}>
						Visit GitHub
					</ExternalLinkButton>
				</div>
			</div>

			<Tabs className="mt-4 min-h-0 flex-1 gap-4" defaultValue="overview">
				<TabsList variant="line">
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="features">Features</TabsTrigger>
					<TabsTrigger value="thoughts">My thoughts</TabsTrigger>
					{readme && <TabsTrigger value="readme">README</TabsTrigger>}
				</TabsList>

				<TabsContent
					className="min-h-0 overflow-y-auto"
					value="overview"
				>
					<ProjectOverview project={project} />
				</TabsContent>

				<TabsContent
					className="grid min-h-0 content-start gap-2 overflow-y-auto sm:grid-cols-2"
					value="features"
				>
					<DetailTile title="What it does">
						<NumberedList items={project.keyFeatures} />
					</DetailTile>

					<DetailTile title="What I’d add next">
						<NumberedList items={project.futurePlans} />
					</DetailTile>
				</TabsContent>

				<TabsContent
					className="min-h-0 overflow-y-auto"
					value="thoughts"
				>
					<p className="rounded-xl bg-inset p-3 text-body whitespace-pre-line">
						{project.myThoughts.trim()}
					</p>
				</TabsContent>

				{readme && (
					<TabsContent
						className="min-h-0 overflow-y-auto rounded-xl border border-hairline p-4"
						value="readme"
					>
						<Readme markdown={readme} />
					</TabsContent>
				)}
			</Tabs>
		</Modal>
	);
});

export { WorkDetailsModal };
