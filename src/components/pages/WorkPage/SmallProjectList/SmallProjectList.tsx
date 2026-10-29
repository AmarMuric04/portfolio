import { ClassicExternalLink } from "../ClassicExternalLink";
import { OTHER_WORK } from "@/assets";

export const SmallProjectList = () => {
	return (
		<ul className="flex flex-col gap-2">
			{OTHER_WORK.map((project) => (
				<ClassicExternalLink
					key={project.title + project.description}
					description={project.description}
					title={project.title}
					href={project.github}
				/>
			))}
		</ul>
	);
};
