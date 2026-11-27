import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { UnhideTextSVG } from "@/assets/svgs";

interface UnhideTextProps {
  children: ReactNode;
}

// Memoized to prevent unnecessary re-renders of the revealed content.
const UnhideText: React.FC<UnhideTextProps> = React.memo(({ children }) => {
  const [revealed, setRevealed] = useState<boolean>(false);
  const [enableAnimation, setEnableAnimation] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setEnableAnimation(true), 500);

    return () => clearTimeout(timer);
  }, []);

  if (!revealed) {
    return (
      <span
        onClick={() => setRevealed(true)}
        className="mx-1 inline cursor-pointer"
      >
        <span className="inline-flex items-center rounded-md bg-border px-1 transition-all hover:bg-card">
          <UnhideTextSVG />
        </span>
      </span>
    );
  }

  if (!enableAnimation) {
    return <span className="inline text-primary">{children}</span>;
  }

  return (
    <motion.span
      initial={{ scale: 0.95, textShadow: "0px 0px 0px rgba(255,255,255,0)" }}
      animate={{
        scale: [1.1, 1],
        textShadow: [
          "0px 0px 20px rgba(255,255,255,1)",
          "0px 0px 0px rgba(255,255,255,0)",
        ],
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="inline text-primary"
    >
      {children}
    </motion.span>
  );
});

export default UnhideText;
