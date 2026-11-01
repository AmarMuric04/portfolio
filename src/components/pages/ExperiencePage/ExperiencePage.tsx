import { EXPERIENCE } from "@/assets";
import { PageHelmet } from "@/components/shared";

import { ExperienceCard } from "./ExperienceCard";

const ExperiencePage: React.FC = () => {
	return (
		<section className="flex flex-col gap-4">
			<PageHelmet
				title="Experience"
				description="The professional experience of Amar Muric, a software engineer at NIMA Labs building trading interfaces with React, TypeScript and React Native."
				keywords="Amar Muric, software engineer, NIMA Labs, experience, React, TypeScript, React Native, Next.js"
				path="/experience"
			/>

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
