import { DevelopmentSVG, ArchiveSVG, LiveSVG } from "@/assets";
import { StatusButton } from "@/components/atoms";

export const ProjectStatus: React.FC<{ status: string }> = ({ status }) => {
	return (
		<div className="mb-2 flex">
			{status === "Live" && (
				<StatusButton color="#df2038" status={status} icon={LiveSVG} />
			)}
			{status === "Development" && (
				<StatusButton
					icon={DevelopmentSVG}
					status={status}
					color="yellow"
				/>
			)}
			{status === "Archived" && (
				<StatusButton icon={ArchiveSVG} status={status} color="gray" />
			)}
		</div>
	);
};
