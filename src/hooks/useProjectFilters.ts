import { useMemo, useState } from "react";
import { projects } from "@/assets/projects";
import { filterProjects } from "@/utils/filterProjects";
import { FilterMode, ProjectFilters } from "@/types";

const EMPTY_FILTERS: ProjectFilters = { techs: {}, categories: {} };

// The click cycle for a single filter chip: off → include → exclude → off.
const nextMode = (current: FilterMode | undefined): FilterMode | undefined => {
  if (current === undefined) return "include";
  if (current === "include") return "exclude";
  return undefined;
};

// Advances one key through the cycle, dropping it entirely when it returns
// to the neutral state so the record only ever holds active filters.
const cycleRecord = (
  record: Record<string, FilterMode>,
  key: string
): Record<string, FilterMode> => {
  const updated = { ...record };
  const next = nextMode(updated[key]);

  if (next === undefined) {
    delete updated[key];
  } else {
    updated[key] = next;
  }

  return updated;
};

const useProjectFilters = () => {
  const [filters, setFilters] = useState<ProjectFilters>(EMPTY_FILTERS);

  const filteredProjects = useMemo(
    () => filterProjects(projects, filters),
    [filters]
  );

  const activeCount =
    Object.keys(filters.techs).length + Object.keys(filters.categories).length;

  const cycleTech = (key: string) => {
    setFilters((prev) => ({ ...prev, techs: cycleRecord(prev.techs, key) }));
  };

  const cycleCategory = (key: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: cycleRecord(prev.categories, key),
    }));
  };

  const reset = () => {
    setFilters(EMPTY_FILTERS);
  };

  return {
    filters,
    filteredProjects,
    activeCount,
    cycleTech,
    cycleCategory,
    reset,
  };
};

export default useProjectFilters;
