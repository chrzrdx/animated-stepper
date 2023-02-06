import { STEP } from "../../enums";
import { TStepProps } from "../../types";
import { CheckIcon } from "./CheckIcon";
import { Variants, motion } from "framer-motion";

const stepVariants = {
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
} satisfies Variants;

const backdropVariants = {
  completed: {
    scale: 1.2,
    transition: {
      delay: 0.2,
      type: "tween",
      ease: "circOut",
    },
  },
  active: {
    scale: 1,
    transition: { duration: 0, delay: 0 },
  },
} satisfies Variants;

export function Step({ step, variant }: TStepProps) {
  const stepVariant: keyof typeof stepVariants = variant;
  return (
    <li className="h-12 w-12 relative">
      <motion.div
        className="absolute inset-0 bg-blue-200 rounded-full"
        variants={backdropVariants}
        animate={stepVariant}
      />
      <motion.div
        className="relative h-full w-full rounded-full border-2 flex items-center justify-center leading-none"
        variants={stepVariants}
        initial={false}
        animate={stepVariant}
        transition={{ duration: 0.2 }}
      >
        {variant === STEP.COMPLETED ? (
          <div className="h-6 w-6">
            <CheckIcon
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ type: "tween", ease: "easeOut", delay: 0.2 }}
            />
          </div>
        ) : (
          <span>{step}</span>
        )}
      </motion.div>
    </li>
  );
}
