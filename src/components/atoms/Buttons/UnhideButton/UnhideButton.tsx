import React, { type ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { UnhideTextSVG } from "@/assets";

export const UnhideButton: React.FC<{ children: ReactNode }> = React.memo(
  ({ children }) => {
    const [revealed, setRevealed] = useState(false);
    const [enableAnimation, setEnableAnimation] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setEnableAnimation(true), 500);

      return () => clearTimeout(timer);
    }, []);

    if (!revealed) {
      return (
        <span
          className="inline cursor-pointer mx-1"
          onClick={() => setRevealed(true)}
        >
          <span className="inline-flex items-center theme-border-background theme-surface-hover transition-all rounded-md px-1">
            <UnhideTextSVG />
          </span>
        </span>
      );
    }

    if (!enableAnimation) {
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
        initial={{ textShadow: "0px 0px 0px rgba(255,255,255,0)", scale: 0.95 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className="inline text-green-400"
      >
        {children}
      </motion.span>
    );
  }
);
