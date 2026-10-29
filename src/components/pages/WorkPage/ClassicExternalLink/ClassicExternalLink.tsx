import { ExternalLinkSVG } from "@/assets";

const ClassicExternalLink: React.FC<{
	description: string;
	title: string;
	href: string;
}> = ({ description, title, href }) => {
	return (
		<a
			className="theme-surface group flex cursor-pointer gap-2 rounded-xl p-2 transition-all hover:bg-link-hover"
			target="_blank"
			rel="noreferrer"
			href={href}
		>
			<span className="theme-title-text flex items-center gap-2 font-semibold transition-all">
				<div className="group-hover:scale-120">
					<ExternalLinkSVG />
				</div>
				{title}
			</span>{" "}
			- {description}
		</a>
	);
};

export { ClassicExternalLink };
