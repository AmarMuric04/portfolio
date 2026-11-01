import { EDUCATION } from "@/assets";
import { PageHelmet } from "@/components/shared";

import { EducationCard } from "./EducationCard";

const EducationPage: React.FC = () => {
	return (
		<>
			<PageHelmet
				title="Education"
				description="Explore the educational background of Amar Muric, a MERN full-stack developer. Learn about his skills and the institutions that shaped his career."
				keywords="Amar Muric, full-stack developer, MERN, education, learning journey, MongoDB, Express, React, Node.js"
				path="/education"
			/>

			<h1 className="mb-4 text-page-title text-ink">My education</h1>

			<p className="text-lead">
				I’m currently in my third year of university, where I’ve been
				actively exploring a mix of academic and hands-on projects. From
				coursework to personal initiatives, I’ve worked on everything
				from creative hobbies to practical solutions for everyday
				problems. These experiences are helping me build a strong
				foundation and develop skills that I’m excited to grow further.
			</p>

			<ul className="my-8 flex flex-col gap-4">
				{EDUCATION.map((education) => (
					<EducationCard key={education.name} education={education} />
				))}
			</ul>

			<p className="text-lead">
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
