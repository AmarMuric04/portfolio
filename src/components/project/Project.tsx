import { Lightbulb, FileText, Globe, Image, Info, List } from "lucide-react";
import { useModal } from "@ebay/nice-modal-react";
import { useEffect, useState } from "react";

import {
  WorkThoughtsModal,
  WorkDetailsModal,
  READMEmdModal,
} from "@/components/organisms";
import { WORK_HIGHLIGHTS } from "@/assets/WORK_HIGHLIGHTS";
import { WORK_READMES, GithubSVG, WORK } from "@/assets";
import { useIntersectionObserver } from "@/hooks";
import { cn } from "@/lib/utils";

import {
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "../ui/card";
import { TooltipContent, TooltipTrigger, Tooltip } from "../ui/tooltip";
import { Highlights } from "./Highlights";
import ProjectTech from "./ProjectTech";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export const Project = ({ project }: { project: (typeof WORK)[number] }) => {
  const [hideHighlights, setHideHighlights] = useState<boolean>(true);
  const [isContentExpanded, setIsContentExpanded] = useState<boolean>(false);
  const [isShowingFeatures, setIsShowingFeatures] = useState<boolean>(false);
  const [wasInView, setWasInView] = useState<boolean>(false);
  const { isIntersecting, targetRef } = useIntersectionObserver<HTMLLIElement>();
  const [section, setSection] = useState<number>(0);
  const images = WORK_HIGHLIGHTS[project.title.toLowerCase()];

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
    <li className="relative group" ref={targetRef}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {wasInView && projectLogo && (
          <img
            className="top-4 right-4 absolute opacity-30 group-hover:opacity-50 rounded-lg w-16 h-16 object-contain transition-opacity duration-300"
            alt={`${project.title} logo`}
            src={projectLogo}
          />
        )}

        <CardHeader className="pb-3">
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <Badge variant="secondary">{project.type}</Badge>
            <Badge variant="outline">{project.status}</Badge>
          </div>
          <CardDescription className="mt-3">
            <div
              className={cn("transition-all duration-300 pr-16", {
                "line-clamp-2": !isContentExpanded,
              })}
            >
              {project.content}
            </div>
            {project.content.length > 120 && (
              <button
                className="mt-1 text-primary hover:underline text-xs transition-all"
                onClick={() => setIsContentExpanded(!isContentExpanded)}
              >
                {isContentExpanded ? "Less" : "More"}
              </button>
            )}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {project.techs && <ProjectTech techs={project.techs} />}

          {/* Action Bar */}
          <div className="flex flex-wrap justify-between items-center gap-3 pt-2 border-t">
            {/* Left side - Info actions */}
            <div className="flex items-center gap-1">
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    onClick={() => setIsShowingFeatures(!isShowingFeatures)}
                    variant={isShowingFeatures ? "default" : "outline"}
                    size="sm"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Key Features</p>
                </TooltipContent>
              </Tooltip>

              {images?.length > 0 && (
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      onClick={() => setHideHighlights(!hideHighlights)}
                      variant={!hideHighlights ? "default" : "outline"}
                      size="sm"
                    >
                      <Image className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Screenshots</p>
                  </TooltipContent>
                </Tooltip>
              )}

              <Tooltip>
                <TooltipTrigger>
                  <Button
                    onClick={() => showWorkDetailsModal({ project })}
                    variant="outline"
                    size="sm"
                  >
                    <Info className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More Details</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Button
                    onClick={() => showWorkThoughtsModal({ project })}
                    variant="outline"
                    size="sm"
                  >
                    <Lightbulb className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>My Thoughts</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Button
                    onClick={() =>
                      showREADMEmdModal({
                        markdown: WORK_READMES[project.title],
                      })
                    }
                    variant="outline"
                    size="sm"
                  >
                    <FileText className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View README</p>
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Right side - External links */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground mr-2">
                {project.duration}
              </span>

              {project.website && (
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        rel="noopener noreferrer"
                        href={project.website}
                        target="_blank"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit Live Website</p>
                  </TooltipContent>
                </Tooltip>
              )}

              {project.github && (
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        rel="noopener noreferrer"
                        href={project.github}
                        target="_blank"
                      >
                        <div className="w-4 h-4">
                          <GithubSVG />
                        </div>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View GitHub Repository</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>

          {/* Features Section */}
          {isShowingFeatures && (
            <div className="pt-3 border-t animate-in fade-in slide-in-from-top-2 duration-300">
              <h3 className="mb-2 font-semibold text-sm">Key Features</h3>
              <ul className="space-y-1.5 text-sm">
                {project.keyFeatures.map((feature) => (
                  <li
                    className="flex items-start gap-2"
                    key={feature + project.title}
                  >
                    <span className="mt-1.5 bg-primary rounded-full w-1.5 h-1.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlights Section */}
          {!hideHighlights && images?.length > 0 && (
            <div className="pt-3 border-t animate-in fade-in slide-in-from-top-2 duration-300">
              <Highlights
                handleClick={handleClick}
                setSection={setSection}
                title={project.title}
                section={section}
                images={images}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </li>
  );
};
