import { AnimatePresence, motion } from "framer-motion";

import { CheckSVG } from "@/assets";

const ProgressBar: React.FC<{ progression: number }> = ({ progression }) => {
	const isCompleted = progression === 100;

	return (
		<div className="mt-6 flex flex-col gap-1">
			<div
				className="flex min-w-fit justify-end text-caption text-ink tabular-nums"
				style={{ width: `${progression}%` }}
			>
				<AnimatePresence initial={false} mode="popLayout">
					{isCompleted ? (
						<motion.span
							className="flex items-center gap-1 text-accent-text [&>svg]:size-3.5 [&>svg]:[stroke-width:2.5]"
							initial={{ opacity: 0, y: 6, scale: 0.9 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{ ease: "easeOut", duration: 0.3 }}
							key="completed"
						>
							<CheckSVG />
							Completed
						</motion.span>
					) : (
						<motion.span
							exit={{ opacity: 0, y: -6 }}
							transition={{ ease: "easeOut", duration: 0.2 }}
							key="percentage"
						>
							{progression}%
						</motion.span>
					)}
				</AnimatePresence>
			</div>

			<div className="h-1 w-full rounded-full bg-inset">
				<div
					className="h-full rounded-full bg-accent"
					style={{ width: `${progression}%` }}
				/>
			</div>
		</div>
	);
};

export { ProgressBar };
