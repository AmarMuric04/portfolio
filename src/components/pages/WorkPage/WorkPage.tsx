import { PageHelmet } from "./PageHelmet";
import { ProjectList } from "./ProjectList";
import { SmallProjectList } from "./SmallProjectList";

const WorkPage: React.FC = () => {
	return (
		<>
			<PageHelmet />

			<h2 className="theme-title-text mb-8 text-2xl font-semibold transition-all">
				Projects
			</h2>

			<p className="text-lg">
				Over the past two years, I’ve taken on a mix of projects—some
				for enjoyment, others to explore concepts, and a few to solve
				specific problems I’ve encountered. Here’s a glimpse at some of
				what I’ve worked on.
			</p>

			<ProjectList />

			<p className="my-4 text-lg">
				Here are a few more projects I’ve tackled. For the full
				collection, feel free to check out my{" "}
				<a
					className="cursor-pointer font-semibold underline transition-all hover:text-sage"
					href="https://github.com/AmarMuric04"
					target="_blank"
					rel="noreferrer"
				>
					GitHub profile
				</a>
				.
			</p>

			<SmallProjectList />
		</>
	);
};

export { WorkPage };
