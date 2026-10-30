import { PageHelmet } from "./PageHelmet";
import { ProjectList } from "./ProjectList";
import { SmallProjectList } from "./SmallProjectList";

const WorkPage: React.FC = () => {
	return (
		<>
			<PageHelmet />

			<div className="flex flex-col gap-8">
				<section className="flex flex-col gap-4">
					<h1 className="text-page-title text-ink">Projects</h1>
					<p className="text-lead">
						Over the past two years, I’ve taken on a mix of
						projects: some for enjoyment, others to explore
						concepts, and a few to solve specific problems I’ve
						encountered. Here’s a glimpse at some of what I’ve
						worked on.
					</p>
				</section>

				<section className="flex flex-col gap-4">
					<ProjectList />
				</section>

				<section className="flex flex-col gap-4">
					<p className="text-lead">
						Here are a few more projects I’ve tackled. For the full
						collection, feel free to check out my{" "}
						<a
							className="text-ink underline transition-colors duration-200 hover:text-accent-text"
							href="https://github.com/AmarMuric04"
							target="_blank"
							rel="noreferrer"
						>
							GitHub profile
						</a>
						.
					</p>

					<SmallProjectList />
				</section>
			</div>
		</>
	);
};

export { WorkPage };
