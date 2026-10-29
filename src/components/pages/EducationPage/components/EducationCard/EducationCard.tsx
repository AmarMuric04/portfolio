import type { IEducation } from "@/types";

import { useIntersectionObserver, useAnimatedNumber } from "@/hooks";
import { ProgressBar } from "@/components/atoms";

import { ProgressLabel } from "../ProgressLabel";

export const EducationCard = ({
  progression,
  institution,
  teacher,
  skills,
  name,
  type,
}: IEducation) => {
  const { targetRef, wasInView } = useIntersectionObserver<HTMLLIElement>({
    rootMargin: "-150px",
    threshold: 0,
  });

  const currentProgression = useAnimatedNumber(
    wasInView ? progression : 0,
    600
  );

  const takeAway = progression > 90 ? 7 : 2;

  return (
    <li
      className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg shadow-md theme-surface transition-all p-3 relative my-4 overflow-hidden"
      ref={targetRef}
    >
      <article>
        <h1 className="transition-all theme-title-text font-semibold text-lg py-2">
          {name}
        </h1>
        <p>{type}</p>
        <em className="block">
          at {institution} {teacher !== "N/A" && "by " + teacher}
        </em>
        <ProgressBar
          currentProgression={currentProgression}
          takeAway={takeAway}
        />
        <ProgressLabel type={type} />

        <p className="my-4 italic font-semibold">Acquired Skills</p>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              className="theme-secondary-background text-white transition-all px-2 py-1 rounded-md"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
};
