import { OTHER_WORK } from "@/assets";

import { ClassicExternalLink } from "../ClassicExternalLink";

const SmallProjectList: React.FC = () => {
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

export { SmallProjectList };
