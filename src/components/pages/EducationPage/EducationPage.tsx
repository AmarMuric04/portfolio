import { EDUCATION } from "@/assets";

import { EducationCard } from "./EducationCard";
import { PageHeader } from "./PageHeader";
import { PageHelmet } from "./PageHelmet";

export const EducationPage = () => {
	return (
		<>
			<PageHelmet />

			<PageHeader />

			<ul>
				{EDUCATION.map((education) => (
					<EducationCard key={education.name} {...education} />
				))}
			</ul>

			<p className="my-4 text-lg">
				But my education doesn’t stop there. Beyond formal courses, I’ve
				immersed myself in an uncountable amount of content related to
				programming, software development, and personal growth. From
				in-depth tutorials and technical deep dives to industry talks
				and self-improvement strategies,{" "}
				<span>
					I constantly seek new knowledge to refine my skills and
					expand my perspective
				</span>
				. Whether it{"'"}s staying up to date with the latest
				technologies, exploring best practices, or improving
				problem-solving abilities,{" "}
				<strong>
					I believe in continuous learning as the key to growth and
					innovation.
				</strong>
			</p>
		</>
	);
};
