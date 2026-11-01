import dayjs from "dayjs";

import { EMAIL_ADDRESS, GithubSVG, LinkedInSVG, MailSVG } from "@/assets";
import { ExternalLinkButton, PageHelmet } from "@/components/shared";

import { UnhideButton } from "./UnhideButton";

const BIRTH_DATE = "2004-12-27";

const SOCIAL_LINKS = [
	{
		label: "GitHub",
		href: "https://github.com/AmarMuric04",
		icon: GithubSVG,
		opensInNewTab: true,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/amar-muric-52564b2a2/",
		icon: LinkedInSVG,
		opensInNewTab: true,
	},
	{
		label: "Email",
		href: `mailto:${EMAIL_ADDRESS}`,
		icon: MailSVG,
		opensInNewTab: false,
	},
];

const HomePage: React.FC = () => {
	const age = dayjs().diff(BIRTH_DATE, "year");

	return (
		<>
			<PageHelmet
				title="About Me"
				description="Learn more about Amar Muric, a passionate MERN full-stack developer. Discover his journey, skills, and projects built using MongoDB, Express, React, and Node.js."
				keywords="Amar Muric, full-stack developer, MERN, portfolio, developer journey, MongoDB, Express, React, Node.js"
				path="/"
			/>

			<section className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-start">
				<img
					className="size-16 rounded-2xl sm:size-20"
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
					I’m a {age}-year-old full-stack developer with a deep
					passion for building polished, impactful, and innovative
					products. My journey into programming began in 2022-2023
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
							, whether it’s crafting intuitive user interfaces,
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
				{SOCIAL_LINKS.map(({ label, href, icon, opensInNewTab }) => (
					<ExternalLinkButton
						opensInNewTab={opensInNewTab}
						href={href}
						icon={icon}
						key={label}
					>
						{label}
					</ExternalLinkButton>
				))}
			</section>
		</>
	);
};

export { HomePage };
