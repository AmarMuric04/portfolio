import { FilterMode, ProjectFilters, ProjectType } from "@/types";

// Collects every key in a filter record that is set to the given mode.
const keysWithMode = (
  record: Record<string, FilterMode>,
  mode: FilterMode
): Array<string> => {
  const keys: Array<string> = [];

  for (const [key, value] of Object.entries(record)) {
    if (value === mode) {
      keys.push(key);
    }
  }

  return keys;
};

// A project passes when it has every included tech/category and none of the
// excluded ones. An empty filter set passes everything.
export const filterProjects = (
  projects: Array<ProjectType>,
  filters: ProjectFilters
): Array<ProjectType> => {
  const includedTechs = keysWithMode(filters.techs, "include");
  const excludedTechs = keysWithMode(filters.techs, "exclude");
  const includedCategories = keysWithMode(filters.categories, "include");
  const excludedCategories = keysWithMode(filters.categories, "exclude");

  return projects.filter((project) => {
    const projectTechs = Object.values(project.techs).flat();

    const hasEveryIncludedTech = includedTechs.every((tech) =>
      projectTechs.includes(tech)
    );
    const hasNoExcludedTech = excludedTechs.every(
      (tech) => !projectTechs.includes(tech)
    );

    const hasEveryIncludedCategory = includedCategories.every(
      (category) => (project.techs[category]?.length ?? 0) > 0
    );
    const hasNoExcludedCategory = excludedCategories.every(
      (category) => (project.techs[category]?.length ?? 0) === 0
    );

    return (
      hasEveryIncludedTech &&
      hasNoExcludedTech &&
      hasEveryIncludedCategory &&
      hasNoExcludedCategory
    );
  });
};
