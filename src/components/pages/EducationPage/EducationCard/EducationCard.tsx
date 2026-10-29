import type { EDUCATION } from "@/assets";
import { useAnimatedNumber, useIntersectionObserver } from "@/hooks";

import { ProgressBar } from "../ProgressBar";
import { ProgressLabel } from "../ProgressLabel";

const EducationCard: React.FC<{
	education: (typeof EDUCATION)[number];
}> = ({ education }) => {
	const { targetRef, wasInView } = useIntersectionObserver<HTMLLIElement>({
		rootMargin: "-150px",
		threshold: 0,
	});

	const progression = useAnimatedNumber({
		target: wasInView ? education.progression : 0,
		duration: 600,
	});

	return (
		<li
			className="theme-surface relative my-4 overflow-hidden rounded-lg border border-white/10 bg-white/10 p-3 shadow-md backdrop-blur-sm transition-all"
			ref={targetRef}
		>
			<article>
				<h1 className="theme-title-text py-2 text-lg font-semibold transition-all">
					{education.name}
				</h1>

				<p>{education.type}</p>

				<em className="block">
					at {education.institution}{" "}
					{education.teacher !== "N/A" && `by ${education.teacher}`}
				</em>

				<ProgressBar
					labelOffset={education.progression > 90 ? 7 : 2}
					progression={progression}
				/>

				<ProgressLabel type={education.type} />

				<p className="my-4 font-semibold italic">Acquired Skills</p>

				<ul className="flex flex-wrap gap-2">
					{education.skills.map((skill) => (
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

export { EducationCard };
