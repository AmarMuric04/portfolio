import type { TECH_CATEGORIES, WORK } from "@/assets";

const withoutItem = <T extends string>({
	items,
	item,
}: {
	items: T[];
	item: T;
}) => items.filter((value) => value !== item);

const toggleTechInclusion = ({
	filter,
	tech,
}: {
	filter: { included: string[]; excluded: string[] };
	tech: string;
}) => {
	if (filter.included.includes(tech)) {
		return {
			...filter,
			included: withoutItem({ items: filter.included, item: tech }),
		};
	}

	if (filter.excluded.includes(tech)) {
		return {
			...filter,
			excluded: withoutItem({ items: filter.excluded, item: tech }),
		};
	}

	return { ...filter, included: [...filter.included, tech] };
};

const toggleCategoryInclusion = <T extends string>({
	filter,
	category,
}: {
	filter: { included: T[]; excluded: T[] };
	category: T;
}) => {
	if (filter.included.includes(category)) {
		return {
			...filter,
			included: withoutItem({ items: filter.included, item: category }),
		};
	}

	return {
		included: [...filter.included, category],
		excluded: withoutItem({ items: filter.excluded, item: category }),
	};
};

const toggleExclusion = <T extends string>({
	filter,
	item,
}: {
	filter: { included: T[]; excluded: T[] };
	item: T;
}) => ({
	included: withoutItem({ items: filter.included, item }),
	excluded: filter.excluded.includes(item)
		? withoutItem({ items: filter.excluded, item })
		: [...filter.excluded, item],
});

const matchesFilters = ({
	project,
	techFilter,
	categoryFilter,
}: {
	project: (typeof WORK)[number];
	techFilter: { included: string[]; excluded: string[] };
	categoryFilter: {
		included: (typeof TECH_CATEGORIES)[number][];
		excluded: (typeof TECH_CATEGORIES)[number][];
	};
}) => {
	const projectTechs: string[] = Object.values(project.techs).flat();

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

export {
	matchesFilters,
	toggleCategoryInclusion,
	toggleExclusion,
	toggleTechInclusion,
};
