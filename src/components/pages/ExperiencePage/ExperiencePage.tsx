import { EXPERIENCE } from "@/assets";

import { ExperienceCard } from "./ExperienceCard";

const ExperiencePage: React.FC = () => {
	return (
		<section className="flex flex-col gap-4">
			<h1 className="text-page-title text-ink">Experience</h1>
			<p className="text-lead">
				Where I’ve put what I’ve learned to work, for a team and for my
				own clients.
			</p>

			<ul className="mt-4 flex flex-col gap-4">
				{EXPERIENCE.map((experience) => (
					<ExperienceCard
						key={experience.role}
						experience={experience}
					/>
				))}
			</ul>
		</section>
	);
};

export { ExperiencePage };
