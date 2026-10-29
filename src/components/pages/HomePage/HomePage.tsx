import { GithubSVG, LinkedInSVG, MailSVG } from "@/assets";

import { PageHelmet } from "./PageHelmet";
import { UnhideButton } from "./UnhideButton";

const SOCIAL_LINKS = [
	{
		label: "GitHub",
		href: "https://github.com/AmarMuric04",
		icon: GithubSVG,
		isExternal: true,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/amar-muri%C4%87-52564b2a2/",
		icon: LinkedInSVG,
		isExternal: true,
	},
	{
		label: "Email",
		href: "mailto:muricamar2004@gmail.com",
		icon: MailSVG,
		isExternal: false,
	},
];

const HomePage: React.FC = () => {
	return (
		<>
			<PageHelmet />

			<section className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-start">
				<img
					className="size-16 rounded-full sm:size-20"
					alt="Amar Murić"
					src="/myself.webp"
				/>

				<div>
					<h1 className="text-display text-ink">Amar Murić</h1>
					<p className="text-lead text-text-muted">
						Fullstack Software Engineer based in Serbia
					</p>
				</div>
			</section>

			<section className="my-8 flex flex-col gap-4 text-lead">
				<p>
					I’m a 20-year-old full-stack developer with a deep passion
					for building polished, impactful, and innovative products.
					My journey into programming began in 2022-2023
					<UnhideButton>
						, and it’s been an exhilarating ride ever since
						<UnhideButton>
							, captivated by the art of creating beautiful and
							responsive user interfaces
						</UnhideButton>
					</UnhideButton>
					, but my curiosity quickly led me to explore the backend,
					databases, and DevOps, transforming me into a well-rounded
					full-stack developer.
					<strong>
						<em>
							{" "}
							My primary stack is the MERN (MongoDB, Express.js,
							React, Node.js)
						</em>
					</strong>{" "}
					ecosystem{" "}
					<UnhideButton>
						but I’m always experimenting with modern tools like{" "}
						<strong>
							{" "}
							Next.js for server-side rendering, WebSocket for
							real-time communication
						</strong>
						, and other cutting-edge technologies that push the
						boundaries of what’s possible on the web
					</UnhideButton>
					.
				</p>

				<p>
					<UnhideButton>
						{"Although I don’t have formal work experience yet, "}
					</UnhideButton>
					I’ve spent countless hours building personal projects,
					contributing to open-source, and immersing myself in the
					developer community.{" "}
					<UnhideButton>
						I thrive on taking rough, abstract ideas and turning
						them into fully functional, well-designed products
						<UnhideButton>
							—whether it’s crafting intuitive user interfaces,
							designing scalable and efficient backends,
							optimizing databases, or automating deployment{" "}
							<strong>pipelines with CI/CD tools.</strong>
						</UnhideButton>
					</UnhideButton>{" "}
					I’m a <strong>quick learner</strong> and love diving into
					new frameworks, libraries, and tools to expand my skill set
					and stay ahead in the ever-evolving tech landscape.
				</p>

				<p>
					So far, I’ve built a variety of projects
					<UnhideButton>
						, from dynamic web applications and e-commerce platforms
						to real-time chat systems and interactive dashboards
					</UnhideButton>
					. Each project has been a learning experience, helping me
					refine my
					<strong> problem-solving skills</strong> and deepen my
					understanding of the full development lifecycle.{" "}
					<UnhideButton>
						I’m particularly fascinated by the intersection of
						design and technology, and
					</UnhideButton>{" "}
					I strive to create products that are <em>not</em>{" "}
					<strong>
						only functional and performant but also visually
						appealing, accessible, and user-friendly
					</strong>
					.{" "}
					<UnhideButton>
						I believe that great software is a{" "}
						<strong>
							blend of technical excellence and thoughtful design
						</strong>
						.
					</UnhideButton>
				</p>

				<p>
					While I’m still early in my career, I’m incredibly excited
					about the future and the opportunities to{" "}
					<UnhideButton>
						grow <UnhideButton>, collaborate,</UnhideButton> and
					</UnhideButton>{" "}
					make a meaningful impact in the tech world. I’m always{" "}
					<strong>
						eager to learn, share knowledge, and connect with
						like-minded developers
					</strong>{" "}
					who are passionate about building cool things and solving
					real-world problems.{" "}
					<UnhideButton>
						Whether it’s through open-source contributions,
						hackathons, or personal projects,{" "}
						<UnhideButton>
							I’m committed to continuously improving my craft and
							contributing to the developer community in
							meaningful ways.
						</UnhideButton>
					</UnhideButton>
				</p>
			</section>

			<section className="flex flex-wrap items-center gap-6">
				{SOCIAL_LINKS.map(({ label, href, icon: Icon, isExternal }) => (
					<a
						className="flex h-8 items-center gap-2 rounded-lg text-label text-ink transition-colors duration-200 hover:text-accent-text"
						target={isExternal ? "_blank" : undefined}
						rel={isExternal ? "noreferrer" : undefined}
						href={href}
						key={label}
					>
						<span className="grid size-5 shrink-0 place-items-center [&>svg]:size-5">
							<Icon />
						</span>
						{label}
					</a>
				))}
			</section>
		</>
	);
};

export { HomePage };
