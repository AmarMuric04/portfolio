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
    <li className="relative bg-white/10 shadow-md p-3 border border-white/10 rounded-lg transition-all theme-surface">
      <article ref={targetRef}>
        {wasInView && (
          <img
            className="top-5 right-5 absolute opacity-50 rounded-lg w-[5rem] h-[5rem] object-contain"
            alt={`${project.title} logo`}
            src={projectLogo}
          />
        )}

        <div className="flex flex-wrap items-center gap-x-2 mb-4 sm:mb-0 max-w-1/2 lg:max-w-4/5">
          <p className="py-2 font-semibold text-lg transition-all theme-title-text">
            {project.title}
          </p>
          {"info" in project && (
            <p className="px-1 theme-primary-text-border border-2 rounded-full theme-text-primary text-xs transition-all cursor-pointer">
              {project.info}
            </p>
          )}
          {project.type && (
            <p className="px-1 theme-primary-text-border border-2 rounded-full theme-text-primary text-xs transition-all cursor-pointer">
              {project.type}
            </p>
          )}
        </div>

        <ProjectStatus status={project.status} />

        <div className="relative flex flex-col items-start sm:max-w-4/5">
          <div
            className={cn("transition-all pr-12", {
              "line-clamp-3": !isContentExpanded,
            })}
          >
            {project.content}
          </div>
          <button
            className="theme-text-primary hover:underline transition-all cursor-pointer theme-surface"
            onClick={() => setIsContentExpanded(!isContentExpanded)}
          >
            {isContentExpanded ? "show less" : "more...."}
          </button>
        </div>

        <ProjectTech techs={project.techs} />

        <div className="flex sm:flex-row flex-col-reverse justify-between items-center gap-2 sm:gap-0 mt-1 w-full text-sm">
          <div className="flex gap-1 w-full">
            <ActionButton
              onClick={() => setIsShowingFeatures(!isShowingFeatures)}
              className="py-1 w-1/2 sm:w-[8rem]"
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
              className="py-1 w-1/2 sm:w-[8rem]"
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
            <ul className="my-4 p-2 rounded-xl list-decimal theme-background">
              {project.keyFeatures.map((feature) => (
                <li key={feature + project.title} className="ml-5">
                  <pre>{feature}</pre>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-0 mt-1 w-full text-sm">
          <div className="flex gap-1 w-full sm:w-auto">
            {images.length > 0 && (
              <ActionButton
                onClick={() => setHideHighlights(!hideHighlights)}
                className="py-1 w-1/2 sm:w-[8rem]"
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
              className="py-1 w-1/2 sm:w-[8rem]"
            >
              <div className="transition-all">
                <PlusSVG />
              </div>
              <p>My Thoughts</p>
            </ActionButton>
          </div>
          <div className="flex flex-shrink-0 justify-center sm:justify-start items-center gap-4 w-full sm:w-auto">
            {project.website && (
              <ExternalLinkButton href={project.website} icon={WorldSVG}>
                Visit Website
              </ExternalLinkButton>
            )}
            {project.github && (
              <ExternalLinkButton href={project.github} icon={GithubSVG}>
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
            showREADMEmdModal({ markdown: WORK_READMES[project.title] })
          }
          className="mt-4 float-right"
        >
          README.md
        </ActionButton>
      </article>
    </li>
  );
};
