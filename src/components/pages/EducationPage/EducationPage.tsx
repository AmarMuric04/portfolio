import { EDUCATION } from "@/assets";

import { EducationCard } from "./EducationCard";
import { PageHelmet } from "./PageHelmet";

const EducationPage: React.FC = () => {
	return (
		<>
			<PageHelmet />

			<h2 className="theme-title-text mb-8 text-2xl font-semibold transition-all">
				My Education
			</h2>

			<p className="text-lg">
				I’m currently in my second year of university, where I’ve been
				actively exploring a mix of academic and hands-on projects. From
				coursework to personal initiatives, I’ve worked on everything
				from creative hobbies to practical solutions for everyday
				problems. These experiences are helping me build a strong
				foundation and develop skills that I’m excited to grow further.
			</p>

			<ul>
				{EDUCATION.map((education) => (
					<EducationCard key={education.name} education={education} />
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
				. Whether it&apos;s staying up to date with the latest
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

export { EducationPage };
