import { type Variants } from "framer-motion";

// One motion vocabulary for the whole app. Durations in seconds, named easings
// so framer typing stays happy. Use Tailwind transitions for hover/press/color
// and these framer tokens for enter/exit/height/reorder.

export const DUR = { fast: 0.15, base: 0.25, slow: 0.4 } as const;

export const EASE = {
  standard: "easeInOut",
  out: "easeOut",
  in: "easeIn",
} as const;

// Expand / collapse a block by animating its height (wrapper needs overflow-hidden).
export const collapse = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: DUR.base, ease: EASE.standard },
};

// Staggered list entrance: parent runs "show", children ride the stagger.
export const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE.out } },
};

// Swap one piece of content for another.
export const crossFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: DUR.fast, ease: EASE.standard },
};
