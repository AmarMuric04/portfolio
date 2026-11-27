import React from "react";
import { otherProjects } from "@/assets/projects";
import ClassicExternalLink from "@/components/atoms/ClassicExternalLink";
import { SmallProjectType } from "@/types";

const SmallProjectList: React.FC = () => {
  return (
    <ul className="mt-4 flex flex-col gap-3">
      {otherProjects.map((project: SmallProjectType) => (
        <ClassicExternalLink
          title={project.title}
          description={project.description}
          href={project.github}
          key={project.title + project.description}
        />
      ))}
    </ul>
  );
};

export default SmallProjectList;
