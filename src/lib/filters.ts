import type { TECH_CATEGORIES, TECH_NAMES, WORK } from "@/assets";

const withoutItem = <T extends string>({
	items,
	item,
}: {
	items: T[];
	item: T;
}) => items.filter((value) => value !== item);

const cycleFilter = <T extends string>({
	filter,
	item,
}: {
	filter: { included: T[]; excluded: T[] };
	item: T;
}) => {
	if (filter.included.includes(item)) {
		return {
			included: withoutItem({ items: filter.included, item }),
			excluded: [...filter.excluded, item],
		};
	}

	if (filter.excluded.includes(item)) {
		return {
			...filter,
			excluded: withoutItem({ items: filter.excluded, item }),
		};
	}

	return { ...filter, included: [...filter.included, item] };
};

const filterStateOf = <T extends string>({
	filter,
	item,
}: {
	filter: { included: T[]; excluded: T[] };
	item: T;
}) => {
	if (filter.included.includes(item)) {
		return "included";
	}

	if (filter.excluded.includes(item)) {
		return "excluded";
	}

	return "off";
};

const matchesFilters = ({
	project,
	techFilter,
	categoryFilter,
}: {
	project: (typeof WORK)[number];
	techFilter: {
		included: (typeof TECH_NAMES)[number][];
		excluded: (typeof TECH_NAMES)[number][];
	};
	categoryFilter: {
		included: (typeof TECH_CATEGORIES)[number][];
		excluded: (typeof TECH_CATEGORIES)[number][];
	};
}) => {
	const projectTechs: readonly (typeof TECH_NAMES)[number][] = Object.values(
		project.techs,
	).flat();

	return (
		techFilter.included.every((tech) => projectTechs.includes(tech)) &&
		techFilter.excluded.every((tech) => !projectTechs.includes(tech)) &&
		(categoryFilter.included.length === 0 ||
			categoryFilter.included.some(
				(category) => project.techs[category].length > 0,
			)) &&
		categoryFilter.excluded.every(
			(category) => project.techs[category].length === 0,
		)
	);
};

export { cycleFilter, filterStateOf, matchesFilters };
