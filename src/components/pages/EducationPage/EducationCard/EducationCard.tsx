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
			className="rounded-2xl border border-hairline bg-surface p-3 shadow-surface sm:p-4"
			ref={targetRef}
		>
			<article className="flex flex-col gap-1">
				<h2 className="text-card-title text-ink">{education.name}</h2>
				<p className="text-body">{education.type}</p>
				<p className="text-body text-text-muted">
					at {education.institution}{" "}
					{education.teacher !== "N/A" && `by ${education.teacher}`}
				</p>

				<ProgressBar
					labelOffset={education.progression > 90 ? 7 : 2}
					progression={progression}
				/>

				<ProgressLabel type={education.type} />

				<h3 className="mt-4 mb-2 text-label text-ink">
					Acquired skills
				</h3>

				<ul className="flex flex-wrap gap-2">
					{education.skills.map((skill) => (
						<li
							className="rounded-lg bg-accent px-2 py-1 text-label text-on-accent"
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
