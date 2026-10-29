import { useModal } from "@ebay/nice-modal-react";
import { useEffect, useState } from "react";

import {
	MiniArrowDownSVG,
	WORK_HIGHLIGHTS,
	WORK_READMES,
	GithubSVG,
	WorldSVG,
	PlusSVG,
	WORK,
} from "@/assets";
import {
	WorkThoughtsModal,
	WorkDetailsModal,
	READMEmdModal,
} from "@/components/organisms";
import { ExternalLinkButton, ActionButton } from "@/components/atoms";
import { useIntersectionObserver } from "@/hooks";
import { cn } from "@/lib/utils";

import { ProjectStatus } from "./ProjectStatus";
import { Highlights } from "./Highlights";
import ProjectTech from "./ProjectTech";

export const Project = ({ project }: { project: (typeof WORK)[number] }) => {
	const [hideHighlights, setHideHighlights] = useState<boolean>(true);
	const [isContentExpanded, setIsContentExpanded] = useState<boolean>(false);
	const [isShowingFeatures, setIsShowingFeatures] = useState<boolean>(false);
	const [wasInView, setWasInView] = useState<boolean>(false);
	const { isIntersecting, targetRef } = useIntersectionObserver();
	const [section, setSection] = useState<number>(0);
	const images = WORK_HIGHLIGHTS[project.title.toLowerCase()] ?? [];

	const { show: showWorkDetailsModal } = useModal(WorkDetailsModal);
	const { show: showWorkThoughtsModal } = useModal(WorkThoughtsModal);
	const { show: showREADMEmdModal } = useModal(READMEmdModal);

	useEffect(() => {
		if (isIntersecting && !wasInView) {
			setWasInView(true);
		}
	}, [isIntersecting, wasInView]);

	const handleClick = (direction: "prev" | "next") => {
		if (direction === "prev") {
			setSection((prev) => (prev === 0 ? images.length - 1 : prev - 1));
		} else {
			setSection((prev) => (prev === images.length - 1 ? 0 : prev + 1));
		}
	};

	const projectLogo =
		"/" + project.title.replace(" ", "").toLowerCase() + "-logo.png";

	return (
		<li className="theme-surface relative rounded-lg border border-white/10 bg-white/10 p-3 shadow-md transition-all">
			<article ref={targetRef}>
				{wasInView && (
					<img
						className="absolute top-5 right-5 h-[5rem] w-[5rem] rounded-lg object-contain opacity-50"
						alt={`${project.title} logo`}
						src={projectLogo}
					/>
				)}

				<div className="mb-4 flex max-w-1/2 flex-wrap items-center gap-x-2 sm:mb-0 lg:max-w-4/5">
					<p className="theme-title-text py-2 text-lg font-semibold transition-all">
						{project.title}
					</p>
					{"info" in project && (
						<p className="theme-primary-text-border theme-text-primary cursor-pointer rounded-full border-2 px-1 text-xs transition-all">
							{project.info}
						</p>
					)}
					{project.type && (
						<p className="theme-primary-text-border theme-text-primary cursor-pointer rounded-full border-2 px-1 text-xs transition-all">
							{project.type}
						</p>
					)}
				</div>

				<ProjectStatus status={project.status} />

				<div className="relative flex flex-col items-start sm:max-w-4/5">
					<div
						className={cn("pr-12 transition-all", {
							"line-clamp-3": !isContentExpanded,
						})}
					>
						{project.content}
					</div>
					<button
						className="theme-text-primary theme-surface cursor-pointer transition-all hover:underline"
						onClick={() => setIsContentExpanded(!isContentExpanded)}
					>
						{isContentExpanded ? "show less" : "more...."}
					</button>
				</div>

				<ProjectTech techs={project.techs} />

				<div className="mt-1 flex w-full flex-col-reverse items-center justify-between gap-2 text-sm sm:flex-row sm:gap-0">
					<div className="flex w-full gap-1">
						<ActionButton
							onClick={() =>
								setIsShowingFeatures(!isShowingFeatures)
							}
							className="w-1/2 py-1 sm:w-[8rem]"
						>
							<div
								className={cn("transition-all", {
									"rotate-180": isShowingFeatures,
								})}
							>
								<MiniArrowDownSVG />
							</div>
							<p>Features</p>
						</ActionButton>
						<ActionButton
							onClick={() => showWorkDetailsModal({ project })}
							className="w-1/2 py-1 sm:w-[8rem]"
						>
							<div className="transition-all">
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
					<div>
						<ul className="theme-background my-4 list-decimal rounded-xl p-2">
							{project.keyFeatures.map((feature) => (
								<li
									key={feature + project.title}
									className="ml-5"
								>
									<pre>{feature}</pre>
								</li>
							))}
						</ul>
					</div>
				)}

				<div className="mt-1 flex w-full flex-wrap items-center justify-between gap-2 text-sm sm:gap-0">
					<div className="flex w-full gap-1 sm:w-auto">
						{images.length > 0 && (
							<ActionButton
								onClick={() =>
									setHideHighlights(!hideHighlights)
								}
								className="w-1/2 py-1 sm:w-[8rem]"
							>
								<div
									className={cn("transition-all", {
										"rotate-180": !hideHighlights,
									})}
								>
									<MiniArrowDownSVG />
								</div>
								<p>Highlights</p>
							</ActionButton>
						)}
						<ActionButton
							onClick={() => showWorkThoughtsModal({ project })}
							className="w-1/2 py-1 sm:w-[8rem]"
						>
							<div className="transition-all">
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
						{project.github && (
							<ExternalLinkButton
								href={project.github}
								icon={GithubSVG}
							>
								Visit Github
							</ExternalLinkButton>
						)}
					</div>
				</div>

				{!hideHighlights && (
					<Highlights
						handleClick={handleClick}
						setSection={setSection}
						title={project.title}
						section={section}
						images={images}
					/>
				)}

				<ActionButton
					onClick={() =>
						showREADMEmdModal({
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
