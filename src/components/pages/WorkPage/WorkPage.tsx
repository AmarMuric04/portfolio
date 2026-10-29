import { Suspense, lazy } from "react";

import { ProjectSkeleton } from "./ProjectSkeleton";

import { PageHelmet } from "./PageHelmet";

const ProjectList = lazy(() =>
	import("./ProjectList").then((module) => ({ default: module.ProjectList })),
);
const SmallProjectList = lazy(() =>
	import("./SmallProjectList").then((module) => ({
		default: module.SmallProjectList,
	})),
);

export const WorkPage = () => {
	return (
		<>
			<PageHelmet />

			<h2 className="theme-title-text mb-8 text-2xl font-semibold transition-all">
				Projects
			</h2>
			<p className="text-lg">
				Over the past two years, I’ve taken on a mix of projects—some
				for enjoyment, others to explore concepts, and a few to solve
				specific problems I’ve encountered. Here’s a glimpse at some of
				what I’ve worked on.
			</p>
			<Suspense
				fallback={
					<ul className="mt-15 flex flex-col gap-4">
						{Array.from({ length: 3 }).map((_, index) => (
							<ProjectSkeleton key={index} />
						))}
					</ul>
				}
			>
				<ProjectList />
				<p className="my-4 text-lg">
					Here are a few more projects I’ve tackled. For the full
					collection, feel free to check out my{" "}
					<a
						className="cursor-pointer font-semibold underline transition-all hover:text-[#697565]"
						href="https://github.com/AmarMuric04"
						target="_blank"
					>
						GitHub profile
					</a>
					.
				</p>
				<SmallProjectList />
			</Suspense>
		</>
	);
};
