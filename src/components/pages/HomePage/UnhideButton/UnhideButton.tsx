import { motion } from "framer-motion";
import { useState } from "react";

import { CodeSVG } from "@/assets";

const UnhideButton: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [isRevealed, setIsRevealed] = useState(false);

	if (!isRevealed) {
		return (
			<button
				className="mx-1 inline-flex h-6 cursor-pointer items-center rounded-lg border border-hairline bg-inset px-1 align-middle text-ink transition-colors duration-200 hover:bg-accent-tint"
				aria-label="Show more of this sentence"
				onClick={() => setIsRevealed(true)}
				type="button"
			>
				<CodeSVG />
			</button>
		);
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
			transition={{ ease: "easeOut", duration: 0.2 }}
			className="inline text-accent-text"
		>
			{children}
		</motion.span>
	);
};

export { UnhideButton };
