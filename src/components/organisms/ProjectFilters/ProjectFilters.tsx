import React from "react";
import { motion } from "framer-motion";
import { techSVGS } from "@/assets/projectTechs";
import FilterChip from "@/components/atoms/FilterChip";
import { collapse, itemVariants, listVariants } from "@/lib/motion";
import { ProjectFilters as ProjectFiltersState } from "@/types";

const PROJECT_CATEGORIES = ["frontend", "backend", "database", "other"];

interface ProjectFiltersProps {
  filters: ProjectFiltersState;
  activeCount: number;
  onCycleTech: (key: string) => void;
  onCycleCategory: (key: string) => void;
  onReset: () => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  filters,
  activeCount,
  onCycleTech,
  onCycleCategory,
  onReset,
}) => {
  return (
    <motion.div {...collapse} className="overflow-hidden">
      <div className="mt-3 space-y-4 rounded-lg border border-border bg-card p-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
          <p className="flex items-center gap-1.5">
            <span className="inline-block size-2 rounded-full border border-emerald-600/50" />
            include
            <span className="ml-1 inline-block size-2 rounded-full border border-red-600/50" />
            exclude
            <span className="ml-1 opacity-70">click a chip to cycle</span>
          </p>

          {activeCount > 0 && (
            <button
              type="button"
              onClick={onReset}
              className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Technologies
          </p>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-1.5"
          >
            {Object.keys(techSVGS).map((key) => (
              <motion.li key={key} variants={itemVariants}>
                <FilterChip
                  mode={filters.techs[key]}
                  onCycle={() => onCycleTech(key)}
                  label={`Filter by ${key}`}
                >
                  {key}
                </FilterChip>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Categories
          </p>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-1.5"
          >
            {PROJECT_CATEGORIES.map((category) => (
              <motion.li key={category} variants={itemVariants}>
                <FilterChip
                  mode={filters.categories[category]}
                  onCycle={() => onCycleCategory(category)}
                  label={`Filter by ${category}`}
                >
                  {category}
                </FilterChip>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectFilters;
