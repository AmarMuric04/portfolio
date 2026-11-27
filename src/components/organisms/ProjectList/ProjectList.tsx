import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FilterSVG, MiniArrowDownSVG } from "@/assets/svgs";
import { Badge } from "@/components/ui/badge";
import Project from "@/components/organisms/Project";
import ProjectFilters from "@/components/organisms/ProjectFilters";
import useProjectFilters from "@/hooks/useProjectFilters";
import { cw } from "@/utils/cw";

const ProjectList: React.FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  const {
    filters,
    filteredProjects,
    activeCount,
    cycleTech,
    cycleCategory,
    reset,
  } = useProjectFilters();

  return (
    <div className="my-6">
      <button
        type="button"
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <FilterSVG />
        <span>Filters</span>

        {activeCount > 0 && (
          <Badge className="h-5 rounded-md px-1.5">{activeCount}</Badge>
        )}

        <span
          className={cw(
            "transition-transform duration-200",
            isPanelOpen && "rotate-180"
          )}
        >
          <MiniArrowDownSVG />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isPanelOpen && (
          <ProjectFilters
            filters={filters}
            activeCount={activeCount}
            onCycleTech={cycleTech}
            onCycleCategory={cycleCategory}
            onReset={reset}
          />
        )}
      </AnimatePresence>

      {filteredProjects.length > 0 ? (
        <ul className="mt-6 flex flex-col gap-4">
          {filteredProjects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          No projects match these filters.
        </p>
      )}
    </div>
  );
};

export default ProjectList;
