import { useState } from "react";

import { cn } from "@/lib/utils";

const ProjectDescription: React.FC<{ content: string }> = ({ content }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="flex flex-col items-start gap-1">
			<p className={cn("text-body", { "line-clamp-2": !isExpanded })}>
				{content}
			</p>

			<button
				className="cursor-pointer rounded-lg text-label text-accent-text hover:underline"
				onClick={() => setIsExpanded(!isExpanded)}
				aria-expanded={isExpanded}
				type="button"
			>
				{isExpanded ? "Show less" : "Show more"}
			</button>
		</div>
	);
};

export { ProjectDescription };
