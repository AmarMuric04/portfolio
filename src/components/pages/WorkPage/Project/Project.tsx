import { useModal } from "@ebay/nice-modal-react";
import { useState } from "react";

import {
	GithubSVG,
	GlobeSVG,
	InfoSVG,
	type WORK,
	WORK_HIGHLIGHTS,
} from "@/assets";
import { WorkDetailsModal } from "@/components/modals";
import {
	ActionButton,
	ExternalLinkButton,
	ProjectStatus,
	ProjectTech,
	Tag,
} from "@/components/shared";
import { useIntersectionObserver } from "@/hooks";

import { Highlights } from "../Highlights";
import { ProjectDescription } from "../ProjectDescription";
import { ToggleArrow } from "../ToggleArrow";

const Project: React.FC<{ project: (typeof WORK)[number] }> = ({ project }) => {
	const workDetailsModal = useModal(WorkDetailsModal);

	const { targetRef, wasInView } = useIntersectionObserver<HTMLElement>();

	const [isShowingHighlights, setIsShowingHighlights] = useState(false);

	const images = WORK_HIGHLIGHTS[project.title.toLowerCase()];

	return (
		<article
			className="flex flex-col gap-4 rounded-2xl border border-hairline bg-surface p-3 shadow-surface sm:p-4"
			ref={targetRef}
		>
			<header className="flex items-start gap-4">
				<div className="flex min-w-0 flex-1 flex-col gap-2">
					<div className="flex flex-wrap items-center gap-2">
						<h2 className="text-card-title text-ink">
							{project.title}
						</h2>
						<Tag>{project.type}</Tag>

						{"info" in project && (
							<Tag isFilled>{project.info}</Tag>
						)}

						<ProjectStatus status={project.status} />
					</div>

					<ProjectDescription content={project.content} />
				</div>

				{wasInView && (
					<img
						className="size-12 shrink-0 rounded-xl object-contain opacity-50 sm:size-16"
						src={`/${project.title.replace(" ", "").toLowerCase()}-logo.png`}
						alt=""
					/>
				)}
			</header>

			<ProjectTech techs={project.techs} />

			<footer className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
				<div className="flex gap-2">
					<ActionButton
						onClick={() => workDetailsModal.show({ project })}
						variant="primary"
					>
						<InfoSVG />
						Details
					</ActionButton>

					{images && (
						<ActionButton
							onClick={() =>
								setIsShowingHighlights(!isShowingHighlights)
							}
							aria-expanded={isShowingHighlights}
						>
							<ToggleArrow isOpen={isShowingHighlights} />
							Highlights
						</ActionButton>
					)}
				</div>

				<div className="flex gap-4">
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

				<p className="w-full text-caption text-text-muted tabular-nums">
					{project.duration}
				</p>
			</footer>

			{isShowingHighlights && images && (
				<Highlights title={project.title} images={images} />
			)}
		</article>
	);
};

export { Project };
