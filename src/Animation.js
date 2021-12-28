export const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
    },
  },
};
export const fadeDown = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // transition: { duration: 0.5, ease: "easeOut" },
  },
};
export const fadeRight = {
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
export const bounceRight = {
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};
// export const sliderContainer = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 1.15, ease: "easeOut" },
//   },
// };
