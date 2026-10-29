import type { IEducation } from "@/types";

import { useIntersectionObserver, useAnimatedNumber } from "@/hooks";

import { ProgressBar } from "../ProgressBar";
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
		600,
	);

	const takeAway = progression > 90 ? 7 : 2;

	return (
		<li
			className="theme-surface relative my-4 overflow-hidden rounded-lg border border-white/10 bg-white/10 p-3 shadow-md backdrop-blur-sm transition-all"
			ref={targetRef}
		>
			<article>
				<h1 className="theme-title-text py-2 text-lg font-semibold transition-all">
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

				<p className="my-4 font-semibold italic">Acquired Skills</p>
				<ul className="flex flex-wrap gap-2">
					{skills.map((skill) => (
						<li
							className="theme-secondary-background rounded-md px-2 py-1 text-white transition-all"
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
