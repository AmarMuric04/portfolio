import React from "react";

export const StatusButton: React.FC<{
	icon: React.ElementType;
	status: string;
	color: string;
}> = ({ icon: Icon, status, color }) => {
	return (
		<div
			className="flex cursor-pointer items-center gap-1 rounded-full border-2 px-1 text-xs"
			style={{ borderColor: color, color }}
		>
			<Icon />
			<p>{status}</p>
		</div>
	);
};
