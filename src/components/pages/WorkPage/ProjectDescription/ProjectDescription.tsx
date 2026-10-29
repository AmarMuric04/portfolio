import { useState } from "react";

import { cn } from "@/lib/utils";

const ProjectDescription: React.FC<{ content: string }> = ({ content }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="relative flex flex-col items-start sm:max-w-4/5">
			<div
				className={cn("pr-12 transition-all", {
					"line-clamp-3": !isExpanded,
				})}
			>
				{content}
			</div>

			<button
				className="theme-text-primary theme-surface cursor-pointer transition-all hover:underline"
				onClick={() => setIsExpanded(!isExpanded)}
			>
				{isExpanded ? "show less" : "more...."}
			</button>
		</div>
	);
};

export { ProjectDescription };
