import { ArchiveSVG, DevelopmentSVG, LiveSVG, type WORK } from "@/assets";
import { cn } from "@/lib/utils";

const STATUS_APPEARANCES = {
	Live: { icon: LiveSVG, className: "border-status-live text-status-live" },
	Development: {
		icon: DevelopmentSVG,
		className: "border-status-development text-status-development",
	},
	Archived: {
		icon: ArchiveSVG,
		className: "border-status-archived text-status-archived",
	},
};

const ProjectStatus: React.FC<{
	status: (typeof WORK)[number]["status"];
}> = ({ status }) => {
	const { icon: Icon, className } = STATUS_APPEARANCES[status];

	return (
		<div className="mb-2 flex">
			<div
				className={cn(
					"flex cursor-pointer items-center gap-1 rounded-full border-2 px-1 text-xs",
					className,
				)}
			>
				<Icon />
				<p>{status}</p>
			</div>
		</div>
	);
};

export { ProjectStatus };
