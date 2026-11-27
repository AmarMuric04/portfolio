import React from "react";
import { techSVGS } from "@/assets/projectTechs";
import { TechsType } from "@/types";

interface ProjectTechProps {
  techs: TechsType;
}

const ProjectTech: React.FC<ProjectTechProps> = ({ techs }) => {
  return (
    <section className="my-4 flex flex-wrap gap-[1%]">
      {Object.entries(techs).map(([category, techList]) => {
        if (techList.length === 0) return null;

        return (
          <div
            key={category}
            className="min-h-[150px] w-[24.2%] min-w-[125px] flex-grow rounded-xl bg-background p-2 transition-all lg:flex-none"
          >
            <p className="mb-2 text-sm uppercase text-primary">{category}</p>

            <div className="flex max-w-full flex-wrap items-center gap-4 overflow-hidden">
              {techList.map((tech) => {
                const Icon = techSVGS[tech];

                return (
                  <div
                    key={tech}
                    className="flex max-w-full flex-shrink-0 items-center gap-2 overflow-hidden text-sm"
                  >
                    {Icon ? (
                      <Icon className="h-6 w-6 flex-shrink-0" />
                    ) : (
                      <span className="h-6 w-6 flex-shrink-0" />
                    )}

                    <span className="max-w-full truncate overflow-hidden text-ellipsis whitespace-nowrap">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectTech;
