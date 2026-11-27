import React, { useState } from "react";
import NiceModal from "@ebay/nice-modal-react";
import {
  GithubSVG,
  MiniArrowDownSVG,
  PlusSVG,
  WorldSVG,
} from "@/assets/svgs";
import Highlights from "@/components/molecules/Highlights";
import ProjectStatus from "@/components/molecules/ProjectStatus";
import ProjectTech from "@/components/molecules/ProjectTech";
import ActionButton from "@/components/atoms/ActionButton";
import ExternalLinkButton from "@/components/atoms/ExternalLinkButton";
import { Badge } from "@/components/ui/badge";
import ReadmeModal from "@/components/organisms/ReadmeModal";
import MoreModal from "@/components/organisms/MoreModal";
import MyThoughtsModal from "@/components/organisms/MyThoughtsModal";
import HighlightsModal from "@/components/organisms/HighlightsModal";
import { cw } from "@/utils/cw";
import { projectImages } from "@/assets/projectHighlights";
import { ProjectType } from "@/types";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [hideHighlights, setHideHighlights] = useState<boolean>(true);
  const [isContentExpanded, setIsContentExpanded] = useState<boolean>(false);
  const [isShowingFeatures, setIsShowingFeatures] = useState<boolean>(false);
  const [section, setSection] = useState<number>(0);

  const images = projectImages[project.title.toLowerCase()];

  const handleClick = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setSection((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setSection((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  // Only ever keep one project modal open: hide any others before showing.
  const showOnly = (modal: typeof ReadmeModal) => {
    [ReadmeModal, MoreModal, MyThoughtsModal].forEach((other) =>
      NiceModal.hide(other)
    );

    NiceModal.show(modal, { project });
  };

  const projectLogo =
    "/" + project.title.replace(" ", "").toLowerCase() + "-logo.png";

  return (
    <li className="relative rounded-lg border border-white/10 bg-card p-3 text-foreground shadow-md transition-all">
      <article>
        <img
          className="absolute right-5 top-5 h-[5rem] w-[5rem] rounded-lg object-contain opacity-50"
          src={projectLogo}
          alt={`${project.title} logo`}
        />

        <div className="mb-4 flex max-w-1/2 flex-wrap items-center gap-x-2 sm:mb-0 lg:max-w-4/5">
          <p className="py-2 text-lg font-semibold text-foreground transition-all">
            {project.title}
          </p>
          {project.info && (
            <Badge
              variant="outline"
              className="rounded-md font-normal text-muted-foreground"
            >
              {project.info}
            </Badge>
          )}
          {project.type && (
            <Badge
              variant="outline"
              className="rounded-md font-normal text-muted-foreground"
            >
              {project.type}
            </Badge>
          )}
        </div>

        <div className="mb-2">
          <ProjectStatus status={project.status} />
        </div>

        <div className="relative flex flex-col items-start sm:max-w-4/5">
          <div
            className={cw(
              "pr-12 transition-all",
              !isContentExpanded && "line-clamp-3"
            )}
          >
            {project.content}
          </div>
          <button
            onClick={() => setIsContentExpanded(!isContentExpanded)}
            className="cursor-pointer bg-card text-primary transition-all hover:underline"
          >
            {isContentExpanded ? "show less" : "more...."}
          </button>
        </div>

        {project.techs && <ProjectTech techs={project.techs} />}

        <div className="mt-1 flex w-full flex-col-reverse items-center justify-between gap-2 text-sm sm:flex-row sm:gap-0">
          <div className="flex w-full gap-1">
            <ActionButton
              classes="w-1/2 sm:w-[8rem]"
              action={() => setIsShowingFeatures(!isShowingFeatures)}
            >
              <div
                className={cw("transition-all", isShowingFeatures && "rotate-180")}
              >
                <MiniArrowDownSVG />
              </div>
              <p>Features</p>
            </ActionButton>

            <ActionButton
              classes="w-1/2 sm:w-[8rem]"
              action={() => showOnly(MoreModal)}
            >
              <div className="transition-all">
                <PlusSVG />
              </div>
              <p>More</p>
            </ActionButton>
          </div>

          <p
            className="flex-shrink-0 select-none text-xs"
            aria-label="Duration"
            title="Duration"
          >
            {project.duration}
          </p>
        </div>

        {isShowingFeatures && (
          <ul className="my-4 list-decimal rounded-xl bg-background p-2">
            {project.keyFeatures.map((feature) => (
              <li className="ml-5" key={feature + project.title}>
                <pre>{feature}</pre>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-1 flex w-full flex-wrap items-center justify-between gap-2 text-sm sm:gap-0">
          <div className="flex w-full gap-1 sm:w-auto">
            {images && images.length > 0 && (
              <ActionButton
                classes="w-1/2 sm:w-[8rem]"
                action={() => setHideHighlights(!hideHighlights)}
              >
                <div
                  className={cw("transition-all", !hideHighlights && "rotate-180")}
                >
                  <MiniArrowDownSVG />
                </div>
                <p>Highlights</p>
              </ActionButton>
            )}

            <ActionButton
              classes="w-1/2 sm:w-[8rem]"
              action={() => showOnly(MyThoughtsModal)}
            >
              <div className="transition-all">
                <PlusSVG />
              </div>
              <p>My Thoughts</p>
            </ActionButton>
          </div>

          <div className="flex w-full flex-shrink-0 items-center justify-center gap-4 sm:w-auto sm:justify-start">
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
            title={project.title}
            images={images}
            section={section}
            setSection={setSection}
            handleClick={handleClick}
            onImageClick={() =>
              NiceModal.show(HighlightsModal, {
                title: project.title,
                images,
                startIndex: section,
              })
            }
          />
        )}

        <ActionButton
          action={() => showOnly(ReadmeModal)}
          classes="mt-4 float-right"
        >
          README.md
        </ActionButton>
      </article>
    </li>
  );
};

export default Project;
