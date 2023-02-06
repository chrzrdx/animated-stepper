import { MotionProps, motion } from "framer-motion";

export function CheckIcon(props: MotionProps) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M 5.0,13.5 L 9.0,17.5 L 19.5,7.0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      />
    </svg>
  );
}
