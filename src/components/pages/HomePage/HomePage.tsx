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
				description="Amar Murić is a full-stack developer in Serbia. He works at NIMA Labs with React, TypeScript, Next.js and React Native, and builds his own projects with Node.js and MongoDB."
				keywords="Amar Muric, full-stack developer, MERN, portfolio, MongoDB, Express, React, Node.js"
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
						Full-stack software engineer based in Serbia
					</p>
				</div>
			</section>

			<section className="my-8 flex flex-col gap-4 text-lead">
				<p>
					I’m a {age}-year-old full-stack developer. I started
					programming around 2022
					<UnhideButton>
						, building user interfaces first because I liked seeing
						the result straight away
					</UnhideButton>
					, and soon moved on to backends, databases and deployment.
					<strong>
						<em>
							{" "}
							Day to day I work with React, TypeScript, Next.js
							and React Native
						</em>
					</strong>
					<UnhideButton>
						, and for my own projects I use{" "}
						<strong>
							Node.js and Express on the backend, with WebSockets
							when something has to update in real time
						</strong>
					</UnhideButton>
					.
				</p>

				<p>
					I’m a software engineer at NIMA Labs
					<UnhideButton>
						{", where I build trading interfaces and tooling"}
					</UnhideButton>
					. Outside work I build my own projects and take part in
					hackathons.{" "}
					<UnhideButton>
						My team won first place at the UNINP Hackathon 2024 with
						a course platform we built in about 12 hours.
					</UnhideButton>{" "}
					I’m a <strong>quick learner</strong> and I like picking up a
					new framework by building something real with it.
				</p>

				<p>
					So far I’ve built
					<UnhideButton>
						{" "}
						a Telegram-style chat app, a Binance-style exchange
						interface, an online shop with Stripe payments, a
						password manager and
					</UnhideButton>{" "}
					a market-making game you can play against bots or friends.
					Each one taught me something about{" "}
					<strong>solving problems</strong> across the whole stack,
					from the database to the last animation.{" "}
					<UnhideButton>
						I care about how a product looks and feels as much as
						whether it works.
					</UnhideButton>
				</p>

				<p>
					I’m early in my career and keen to keep learning.{" "}
					<strong>
						If you want to talk about a project or just about code,
						get in touch.
					</strong>
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
