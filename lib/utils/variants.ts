import type { Variants } from "framer-motion";

export const transition = { ease: "easeInOut", duration: 0.3 };

export const parent: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
  exit: { opacity: 0 },
};

export const opacityV = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition },
  exit: { opacity: 0 },
};

export const opacityFromTopV = {
  initial: { opacity: 0, y: "-5%" },
  animate: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: "-5%" },
};

export const opacityFromBottomV = {
  initial: { opacity: 0, y: "5%" },
  animate: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: "5%" },
};
