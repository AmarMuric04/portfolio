import type { EXPERIENCE } from "@/assets";
import { SkillList } from "@/components/shared";

const ExperienceCard: React.FC<{
	experience: (typeof EXPERIENCE)[number];
}> = ({ experience }) => {
	return (
		<li className="rounded-2xl border border-hairline bg-surface p-3 shadow-surface sm:p-4">
			<article className="flex flex-col gap-1">
				<h2 className="text-card-title text-ink">{experience.role}</h2>
				<p className="text-body">
					{experience.company}{" "}
					<span className="text-text-muted">·</span> {experience.type}
				</p>
				<p className="text-caption text-text-muted tabular-nums">
					{experience.duration} · {experience.location}
				</p>

				{"description" in experience && (
					<p className="mt-3 text-body">{experience.description}</p>
				)}

				<h3 className="mt-4 mb-2 text-label text-ink">Skills</h3>

				<SkillList skills={experience.skills} />
			</article>
		</li>
	);
};

export { ExperienceCard };
