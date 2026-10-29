import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect } from "react";
import { useModal } from "@ebay/nice-modal-react";

import { CrossSVG } from "@/assets";

export const Modal: React.FC<React.PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  const modal = useModal();

  const closeModal = useCallback(() => {
    modal.resolve();
    modal.hide();
  }, [modal]);

  useEffect(() => {
    if (!modal.visible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modal.visible, closeModal]);

  return (
    <AnimatePresence onExitComplete={modal.remove}>
      {modal.visible && (
        <motion.div
          className="bg-black/50 backdrop-blur-sm fixed inset-0 z-50"
          transition={{ ease: "easeInOut", duration: 0.3 }}
          aria-labelledby="modal-title"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg shadow-md p-8 lg:w-[40rem] w-[95%] min-h-[40vh] theme-surface theme-container-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <header className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-semibold" id="modal-title">
                {title}
              </h1>
              <button
                className="hover:bg-[#ffffff20] cursor-pointer transition-all p-1 rounded-md"
                aria-label="Close modal"
                onClick={closeModal}
              >
                <CrossSVG />
              </button>
            </header>
            <main className="overflow-y-auto max-h-[60vh]">{children}</main>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
