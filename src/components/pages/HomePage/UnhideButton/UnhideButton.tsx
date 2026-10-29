import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { UnhideTextSVG } from "@/assets";

const UnhideButton: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [isRevealed, setIsRevealed] = useState(false);
	const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsAnimationEnabled(true), 500);

		return () => clearTimeout(timeout);
	}, []);

	if (!isRevealed) {
		return (
			<span
				className="mx-1 inline cursor-pointer"
				onClick={() => setIsRevealed(true)}
			>
				<span className="theme-border-background theme-surface-hover inline-flex items-center rounded-lg px-1 transition-all">
					<UnhideTextSVG />
				</span>
			</span>
		);
	}

	if (!isAnimationEnabled) {
		return <span className="inline text-green-400">{children}</span>;
	}

	return (
		<motion.span
			animate={{
				textShadow: [
					"0px 0px 20px rgba(255,255,255,1)",
					"0px 0px 0px rgba(255,255,255,0)",
				],
				scale: [1.1, 1],
			}}
			initial={{
				textShadow: "0px 0px 0px rgba(255,255,255,0)",
				scale: 0.95,
			}}
			transition={{ ease: "easeInOut", duration: 0.2 }}
			className="inline text-green-400"
		>
			{children}
		</motion.span>
	);
};

export { UnhideButton };
