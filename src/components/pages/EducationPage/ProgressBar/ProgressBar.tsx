import {
	animate,
	AnimatePresence,
	motion,
	useMotionValue,
	useReducedMotion,
	useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

import { CheckSVG } from "@/assets";

const ProgressBar: React.FC<{ progression: number; isVisible: boolean }> = ({
	progression,
	isVisible,
}) => {
	const isReducedMotion = useReducedMotion();

	const [isCompleted, setIsCompleted] = useState(false);

	const count = useMotionValue(0);
	const width = useTransform(count, (value) => `${value}%`);
	const percentage = useTransform(count, (value) => `${Math.round(value)}%`);

	useEffect(() => {
		if (!isVisible) {
			return;
		}

		const controls = animate(count, progression, {
			duration: isReducedMotion ? 0 : 0.6,
			ease: "easeOut",
			onComplete: () => setIsCompleted(progression === 100),
		});

		return () => controls.stop();
	}, [count, isReducedMotion, isVisible, progression]);

	return (
		<div className="mt-6 flex flex-col gap-1">
			<motion.div
				className="flex min-w-fit justify-end text-caption text-ink tabular-nums"
				style={{ width }}
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
							{percentage}
						</motion.span>
					)}
				</AnimatePresence>
			</motion.div>

			<div className="h-1 w-full rounded-full bg-inset">
				<motion.div
					className="h-full rounded-full bg-accent"
					style={{ width }}
				/>
			</div>
		</div>
	);
};

export { ProgressBar };
