import { useModal } from "@ebay/nice-modal-react";
import { useState } from "react";

import {
	GithubSVG,
	PlusSVG,
	type WORK,
	WORK_HIGHLIGHTS,
	WORK_READMES,
	WorldSVG,
} from "@/assets";
import {
	ReadmeModal,
	WorkDetailsModal,
	WorkThoughtsModal,
} from "@/components/modals";
import { ActionButton, ProjectStatus, ProjectTech } from "@/components/shared";
import { useIntersectionObserver } from "@/hooks";

import { ExternalLinkButton } from "../ExternalLinkButton";
import { Highlights } from "../Highlights";
import { ProjectDescription } from "../ProjectDescription";
import { ToggleArrow } from "../ToggleArrow";

const ProjectTag: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<p className="theme-primary-text-border theme-text-primary cursor-pointer rounded-full border-2 px-1 text-xs transition-all">
			{children}
		</p>
	);
};

const Project: React.FC<{ project: (typeof WORK)[number] }> = ({ project }) => {
	const workDetailsModal = useModal(WorkDetailsModal);
	const workThoughtsModal = useModal(WorkThoughtsModal);
	const readmeModal = useModal(ReadmeModal);

	const { targetRef, wasInView } = useIntersectionObserver<HTMLElement>();

	const [isShowingFeatures, setIsShowingFeatures] = useState(false);
	const [isShowingHighlights, setIsShowingHighlights] = useState(false);

	const images = WORK_HIGHLIGHTS[project.title.toLowerCase()];

	return (
		<li className="theme-surface relative rounded-lg border border-white/10 bg-white/10 p-3 shadow-md transition-all">
			<article ref={targetRef}>
				{wasInView && (
					<img
						className="absolute top-5 right-5 h-[5rem] w-[5rem] rounded-lg object-contain opacity-50"
						src={`/${project.title.replace(" ", "").toLowerCase()}-logo.png`}
						alt={`${project.title} logo`}
					/>
				)}

				<div className="mb-4 flex max-w-1/2 flex-wrap items-center gap-x-2 sm:mb-0 lg:max-w-4/5">
					<p className="theme-title-text py-2 text-lg font-semibold transition-all">
						{project.title}
					</p>

					{"info" in project && (
						<ProjectTag>{project.info}</ProjectTag>
					)}

					<ProjectTag>{project.type}</ProjectTag>
				</div>

				<ProjectStatus status={project.status} />

				<ProjectDescription content={project.content} />

				<ProjectTech techs={project.techs} />

				<div className="mt-1 flex w-full flex-col-reverse items-center justify-between gap-2 text-sm sm:flex-row sm:gap-0">
					<div className="flex w-full gap-1">
						<ActionButton
							onClick={() =>
								setIsShowingFeatures(!isShowingFeatures)
							}
							className="w-1/2 py-1 sm:w-[8rem]"
						>
							<ToggleArrow isOpen={isShowingFeatures} />
							<p>Features</p>
						</ActionButton>

						<ActionButton
							onClick={() => workDetailsModal.show({ project })}
							className="w-1/2 py-1 sm:w-[8rem]"
						>
							<div>
								<PlusSVG />
							</div>
							<p>More</p>
						</ActionButton>
					</div>

					<p
						className="flex-shrink-0 text-xs select-none"
						aria-label="Duration"
						title="Duration"
					>
						{project.duration}
					</p>
				</div>

				{isShowingFeatures && (
					<ul className="theme-background my-4 list-decimal rounded-xl p-2">
						{project.keyFeatures.map((feature) => (
							<li className="ml-5" key={feature}>
								<pre>{feature}</pre>
							</li>
						))}
					</ul>
				)}

				<div className="mt-1 flex w-full flex-wrap items-center justify-between gap-2 text-sm sm:gap-0">
					<div className="flex w-full gap-1 sm:w-auto">
						{images && (
							<ActionButton
								onClick={() =>
									setIsShowingHighlights(!isShowingHighlights)
								}
								className="w-1/2 py-1 sm:w-[8rem]"
							>
								<ToggleArrow isOpen={isShowingHighlights} />
								<p>Highlights</p>
							</ActionButton>
						)}

						<ActionButton
							onClick={() => workThoughtsModal.show({ project })}
							className="w-1/2 py-1 sm:w-[8rem]"
						>
							<div>
								<PlusSVG />
							</div>
							<p>My Thoughts</p>
						</ActionButton>
					</div>

					<div className="flex w-full flex-shrink-0 items-center justify-center gap-4 sm:w-auto sm:justify-start">
						{project.website && (
							<ExternalLinkButton
								href={project.website}
								icon={WorldSVG}
							>
								Visit Website
							</ExternalLinkButton>
						)}

						<ExternalLinkButton
							href={project.github}
							icon={GithubSVG}
						>
							Visit Github
						</ExternalLinkButton>
					</div>
				</div>

				{isShowingHighlights && images && (
					<Highlights title={project.title} images={images} />
				)}

				<ActionButton
					onClick={() =>
						readmeModal.show({
							markdown: WORK_READMES[project.title],
						})
					}
					className="float-right mt-4"
				>
					README.md
				</ActionButton>
			</article>
		</li>
	);
};

export { Project };
