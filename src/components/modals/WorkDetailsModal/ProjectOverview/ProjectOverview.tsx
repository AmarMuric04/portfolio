import type { WORK } from "@/assets";

const OVERVIEW_ROWS = [
	{ field: "contributions", label: "My role" },
	{ field: "challenges", label: "Challenge" },
	{ field: "learningOutcomes", label: "Learned" },
	{ field: "deployment", label: "Deployment" },
	{ field: "accessibility", label: "Accessibility" },
] as const;

const ProjectOverview: React.FC<{ project: (typeof WORK)[number] }> = ({
	project,
}) => {
	return (
		<div className="flex flex-col gap-4">
			<p className="text-body">{project.content}</p>

			<dl className="flex flex-col rounded-xl border border-hairline bg-inset">
				{OVERVIEW_ROWS.map(({ field, label }) => (
					<div
						className="grid gap-1 border-b border-hairline px-3 py-2 last:border-b-0 sm:grid-cols-[7rem_1fr] sm:gap-4"
						key={field}
					>
						<dt className="text-caption text-accent-text uppercase sm:pt-1">
							{label}
						</dt>
						<dd className="text-body">{project[field]}</dd>
					</div>
				))}
			</dl>
		</div>
	);
};

export { ProjectOverview };
