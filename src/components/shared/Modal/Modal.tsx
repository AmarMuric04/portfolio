import { useModal } from "@ebay/nice-modal-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

import { CrossSVG } from "@/assets";

const Modal: React.FC<React.PropsWithChildren<{ title: string }>> = ({
	children,
	title,
}) => {
	const modal = useModal();

	useEffect(() => {
		if (!modal.visible) {
			return;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				handleClose();
			}
		};

		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = "auto";
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [modal.visible]);

	const handleClose = () => {
		modal.resolve();
		void modal.hide();
	};

	return (
		<AnimatePresence onExitComplete={modal.remove}>
			{modal.visible && (
				<motion.div
					className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
					transition={{ ease: "easeInOut", duration: 0.3 }}
					aria-labelledby="modal-title"
					animate={{ opacity: 1 }}
					initial={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					onClick={handleClose}
					aria-modal="true"
					role="dialog"
				>
					<motion.div
						className="theme-surface theme-container-text absolute top-1/2 left-1/2 min-h-[40vh] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 p-8 shadow-md backdrop-blur-sm lg:w-[40rem]"
						transition={{
							type: "spring",
							stiffness: 200,
							damping: 20,
						}}
						initial={{ opacity: 0, scale: 0.9, y: 50 }}
						exit={{ opacity: 0, scale: 0.9, y: 50 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						onClick={(event) => event.stopPropagation()}
					>
						<header className="mb-8 flex items-center justify-between">
							<h1
								className="text-2xl font-semibold"
								id="modal-title"
							>
								{title}
							</h1>

							<button
								className="cursor-pointer rounded-lg p-1 transition-all hover:bg-close-hover"
								aria-label="Close modal"
								onClick={handleClose}
							>
								<CrossSVG />
							</button>
						</header>

						<main className="max-h-[60vh] overflow-y-auto">
							{children}
						</main>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export { Modal };
