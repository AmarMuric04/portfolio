import React from "react";

import { TECH_ICONS } from "@/assets";

interface ProjectTechProps {
  techs: {
    [category: string]: readonly string[] | string[];
  };
}

const ProjectTech: React.FC<ProjectTechProps> = React.memo(({ techs }) => {
  return (
    <section className="flex flex-wrap gap-[1%] my-4">
      {Object.entries(techs).map(([category, techList]) => {
        if (techList.length === 0) return null;

        return (
          <div
            className="transition-all theme-background w-[24.2%] min-w-[125px] min-h-[150px] rounded-xl p-2 flex-grow lg:flex-none"
            key={category}
          >
            <p className="text-sm theme-accent-text uppercase mb-2">
              {category}
            </p>
            <div className="flex items-center gap-4 flex-wrap max-w-full overflow-hidden">
              {techList.map((tech) => {
                const Icon = TECH_ICONS[tech as keyof typeof TECH_ICONS];
                return (
                  <div
                    className="flex items-center gap-2 text-sm flex-shrink-0 overflow-hidden max-w-full"
                    key={tech}
                  >
                    {Icon ? <Icon /> : <span className="w-6 h-6 flex-shrink-0" />}
                    <span className="truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
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
});

export default ProjectTech;
