import React from "react";
import { motion } from "framer-motion";
import { Link, useRouterState, type LinkProps } from "@tanstack/react-router";

interface NavBarItemProps {
  to: LinkProps["to"];
  children?: React.ReactNode;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ to, children }) => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const isSelected = pathname === to;

  return (
    <motion.li
      className="relative flex h-full w-full justify-center sm:w-auto sm:justify-start"
      initial={false}
      animate={{ opacity: isSelected ? 1 : 0.7 }}
    >
      <Link
        aria-label={`Go to the ${to} page to learn more about me`}
        to={to}
        className="flex items-center gap-2"
      >
        {children}
      </Link>

      {isSelected && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-foreground"
          layoutId="underline"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.li>
  );
};

export default NavBarItem;
