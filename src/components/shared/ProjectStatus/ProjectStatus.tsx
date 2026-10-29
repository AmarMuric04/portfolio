import { ArchiveSVG, LiveSVG, type WORK, WrenchSVG } from "@/assets";
import { cn } from "@/lib/utils";

const STATUS_APPEARANCES = {
	Live: { icon: LiveSVG, className: "border-status-live text-status-live" },
	Development: {
		icon: WrenchSVG,
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
		<span
			className={cn(
				"inline-flex h-5 items-center gap-1 rounded-full border px-2 text-caption",
				className,
			)}
		>
			<Icon className="size-4" />
			{status}
		</span>
	);
};

export { ProjectStatus };
