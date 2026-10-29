import type { IEducation } from "@/types";

import {
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  Card,
} from "@/components/ui/card";
import { useIntersectionObserver, useAnimatedNumber } from "@/hooks";
import { ProgressBar } from "@/components/atoms";
import { Badge } from "@/components/ui/badge";

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
    1200
  );

  const takeAway = progression > 90 ? 7 : 2;

  const getStatus = () => {
    if (progression === 100) return "Completed";
    if (progression >= 50) return "In Progress";
    return "Started";
  };

  const getStatusVariant = (): "secondary" | "default" | "outline" => {
    if (progression === 100) return "default";
    if (progression >= 50) return "secondary";
    return "outline";
  };

  return (
    <li ref={targetRef}>
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle className="text-xl">{name}</CardTitle>
            <Badge variant="secondary">{type}</Badge>
            <Badge variant={getStatusVariant()}>{getStatus()}</Badge>
          </div>
        </CardHeader>

        <CardContent>
          <em className="block">
            at {institution} {teacher !== "N/A" && "by " + teacher}
          </em>
          <ProgressBar
            currentProgression={currentProgression}
            takeAway={takeAway}
          />

          <ProgressLabel type={type} />
        </CardContent>

        <CardFooter>
          <div className="space-y-3 w-full">
            <p className="font-semibold italic">Acquired Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge variant="outline" key={skill}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    </li>
  );
};
