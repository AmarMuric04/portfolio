import type { EDUCATION } from "@/assets";
import { SkillList } from "@/components/shared";
import { useIntersectionObserver } from "@/hooks";

import { ProgressBar } from "../ProgressBar";
import { ProgressLabel } from "../ProgressLabel";

const EducationCard: React.FC<{
	education: (typeof EDUCATION)[number];
}> = ({ education }) => {
	const { targetRef, wasInView } = useIntersectionObserver<HTMLLIElement>({
		rootMargin: "-150px",
		threshold: 0,
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
					progression={education.progression}
					isVisible={wasInView}
				/>

				<ProgressLabel type={education.type} />

				<h3 className="mt-4 mb-2 text-label text-ink">
					Acquired skills
				</h3>

				<SkillList skills={education.skills} />
			</article>
		</li>
	);
};

export { EducationCard };
