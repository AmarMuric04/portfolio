import { useModal } from "@ebay/nice-modal-react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";

import { CloseSVG } from "@/assets";

const Modal: React.FC<React.PropsWithChildren<{ title: string }>> = ({
	children,
	title,
}) => {
	const modal = useModal();

	const handleOpenChange = (isOpen: boolean) => {
		if (isOpen) {
			return;
		}

		modal.resolve();
		void modal.hide();
	};

	return (
		<Dialog.Root open={modal.visible} onOpenChange={handleOpenChange}>
			<AnimatePresence onExitComplete={modal.remove}>
				{modal.visible && (
					<Dialog.Portal forceMount>
						<Dialog.Overlay forceMount asChild>
							<motion.div
								className="fixed inset-0 z-50 bg-overlay backdrop-blur-xs"
								transition={{ ease: "easeOut", duration: 0.2 }}
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
							/>
						</Dialog.Overlay>

						<Dialog.Content
							aria-describedby={undefined}
							forceMount
							asChild
						>
							<motion.div
								className="fixed top-1/2 left-1/2 z-50 flex h-[min(42rem,calc(100dvh-2rem))] w-[min(56rem,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl border border-hairline bg-surface sheen p-4 text-text shadow-overlay sm:p-6"
								transition={{ ease: "easeOut", duration: 0.2 }}
								initial={{ opacity: 0, scale: 0.98, y: 16 }}
								exit={{ opacity: 0, scale: 0.98, y: 16 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
							>
								<header className="mb-4 flex items-center justify-between gap-4">
									<Dialog.Title className="text-card-title text-ink">
										{title}
									</Dialog.Title>

									<Dialog.Close
										className="grid size-8 shrink-0 cursor-pointer place-items-center rounded-lg text-ink transition-colors duration-200 hover:bg-accent-tint"
										aria-label="Close"
									>
										<CloseSVG />
									</Dialog.Close>
								</header>

								<div className="flex min-h-0 flex-1 flex-col">
									{children}
								</div>
							</motion.div>
						</Dialog.Content>
					</Dialog.Portal>
				)}
			</AnimatePresence>
		</Dialog.Root>
	);
};

export { Modal };
