import type { EXPERIENCE } from "@/assets";
import { SkillList } from "@/components/shared";
import { formatMonth, formatTimeSpent } from "@/lib/dates";

const ExperienceCard: React.FC<{
	experience: (typeof EXPERIENCE)[number];
}> = ({ experience }) => {
	return (
		<li className="rounded-2xl border border-hairline bg-surface p-3 shadow-surface sm:p-4">
			<article className="flex flex-col gap-1">
				<header className="flex items-start justify-between gap-4">
					<div className="flex flex-col gap-1">
						<h2 className="text-card-title text-ink">
							{experience.role}
						</h2>
						<p className="text-body">
							{experience.company}{" "}
							<span className="text-text-muted">·</span>{" "}
							{experience.type}
						</p>
						<p className="text-caption text-text-muted tabular-nums">
							{formatMonth(experience.startDate)} - Present ·{" "}
							{formatTimeSpent(experience.startDate)}
						</p>
						<p className="text-caption text-text-muted">
							{experience.location}
						</p>
					</div>

					{"logo" in experience && (
						<span className="mt-1 text-ink">
							<experience.logo />
						</span>
					)}
				</header>

				{"description" in experience && (
					<p className="mt-3 text-body">{experience.description}</p>
				)}

				{experience.skillGroups.map(({ title, skills }) => (
					<section className="mt-4 flex flex-col gap-2" key={title}>
						<h3 className="text-label text-ink">{title}</h3>

						<SkillList skills={skills} />
					</section>
				))}
			</article>
		</li>
	);
};

export { ExperienceCard };
