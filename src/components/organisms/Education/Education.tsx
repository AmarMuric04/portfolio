import React from "react";
import useAnimatedNumber from "@/hooks/useAnimateNumber";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import ProgressBar from "@/components/atoms/ProgressBar";
import ProgressLabel from "@/components/atoms/ProgressLabel";
import SkillList from "@/components/molecules/SkillList";
import { EducationType } from "@/types";

interface EducationProps {
  edu: EducationType;
}

const Education: React.FC<EducationProps> = ({ edu }) => {
  const { targetRef, wasInView } = useIntersectionObserver<HTMLLIElement>({
    threshold: 0,
    rootMargin: "-150px",
  });
  const currentProgression = useAnimatedNumber(
    wasInView ? edu.progression : 0,
    600
  );

  const takeAway = edu.progression > 90 ? 7 : 2;

  return (
    <li
      ref={targetRef}
      className="relative my-4 overflow-hidden rounded-lg border border-white/10 bg-card p-3 shadow-md backdrop-blur-sm transition-all"
    >
      <article>
        <h1 className="py-2 text-lg font-semibold text-foreground transition-all">
          {edu.name}
        </h1>
        <p>{edu.type}</p>
        <em className="block">
          at {edu.institution} {edu.teacher !== "N/A" && "by " + edu.teacher}
        </em>

        <ProgressBar
          currentProgression={currentProgression}
          takeAway={takeAway}
        />
        <ProgressLabel type={edu.type} />

        <p className="my-4 font-semibold italic">Acquired Skills</p>
        <SkillList skills={edu.skills} />
      </article>
    </li>
  );
};

export default Education;
