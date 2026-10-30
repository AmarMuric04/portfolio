import { ArchiveSVG, LiveSVG, type WORK, WrenchSVG } from "@/assets";
import { cn } from "@/lib/utils";

const STATUS_APPEARANCES = {
	Live: { icon: LiveSVG, className: "bg-status-live" },
	Development: {
		icon: WrenchSVG,
		className: "bg-status-development",
	},
	Archived: {
		icon: ArchiveSVG,
		className: "bg-status-archived",
	},
};

const ProjectStatus: React.FC<{
	status: (typeof WORK)[number]["status"];
}> = ({ status }) => {
	const { icon: Icon, className } = STATUS_APPEARANCES[status];

	return (
		<span
			className={cn(
				"inline-flex h-5 items-center gap-1 rounded-md px-1.5 text-caption text-on-status",
				className,
			)}
		>
			<Icon className="size-3.5" />
			{status}
		</span>
	);
};

export { ProjectStatus };
