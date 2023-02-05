import { STEP } from "../../enums";
import { TStepProps } from "../../types";
import { CheckIcon } from "./CheckIcon";
import { motion } from "framer-motion";

const variants = {
  completed: {
    backgroundColor: "var(--color-blue-500)",
    borderColor: "var(--color-blue-500)",
    color: "var(--color-white)",
  },
  active: {
    backgroundColor: "var(--color-white)",
    borderColor: "var(--color-blue-500)",
    color: "var(--color-blue-600)",
  },
  inactive: {
    backgroundColor: "var(--color-white)",
    borderColor: "var(--color-slate-200)",
    color: "var(--color-slate-400)",
  },
};

export function Step({ step, variant }: TStepProps) {
  const stepVariant: keyof typeof variants = variant;
  return (
    <motion.li
      className="h-12 w-12 rounded-full border-2 flex items-center justify-center leading-none"
      variants={variants}
      initial={false}
      animate={stepVariant}
    >
      {variant === STEP.COMPLETED ? (
        <div className="h-6 w-6">
          <CheckIcon
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ type: "tween", ease: "easeOut", delay: 0.2 }}
          />
        </div>
      ) : (
        step
      )}
    </motion.li>
  );
}
