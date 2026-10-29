import { Suspense, lazy } from "react";

import { ProjectSkeleton } from "@/components/project/ProjectSkeleton";

import { PageHelmet } from "./components";

const ProjectList = lazy(() => import("@/components/project/ProjectList"));
const SmallProjectList = lazy(
  () => import("@/components/project/SmallProjectList")
);

export const WorkPage = () => {
  return (
    <>
      <PageHelmet />

      <h2 className="mb-8 font-semibold text-2xl transition-all theme-title-text">
        Projects
      </h2>
      <p className="text-lg">
        Over the past two years, I’ve taken on a mix of projects—some for
        enjoyment, others to explore concepts, and a few to solve specific
        problems I’ve encountered. Here’s a glimpse at some of what I’ve worked
        on.
      </p>
      <Suspense
        fallback={
          <ul className="flex flex-col gap-4 mt-15">
            {Array.from({ length: 3 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))}
          </ul>
        }
      >
        <ProjectList />
        <p className="my-4 text-lg">
          Here are a few more projects I’ve tackled. For the full collection,
          feel free to check out my{" "}
          <a
            className="font-semibold hover:text-[#697565] underline transition-all cursor-pointer"
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
