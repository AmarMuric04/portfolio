import { ExternalLinkSVG } from "@/assets";

const ClassicExternalLink: React.FC<{
	description: string;
	title: string;
	href: string;
}> = ({ description, title, href }) => {
	return (
		<li>
			<a
				className="group flex gap-3 rounded-xl border border-hairline bg-surface glow p-3 text-body transition-colors duration-200 hover:bg-accent-tint"
				target="_blank"
				rel="noreferrer"
				href={href}
			>
				<span className="mt-0.5 shrink-0 text-ink">
					<ExternalLinkSVG />
				</span>

				<span className="flex min-w-0 flex-col sm:flex-row sm:gap-2">
					<span className="truncate text-ink">{title}</span>
					<span className="hidden text-text-muted sm:inline">·</span>
					<span className="truncate text-text">{description}</span>
				</span>
			</a>
		</li>
	);
};

export { ClassicExternalLink };
