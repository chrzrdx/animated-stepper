import { TStepProps } from "../../types";
import { CheckIcon } from "./CheckIcon";
import { motion } from "framer-motion";

export function Step({ step, active, inactive, completed }: TStepProps) {
  return (
    <motion.li
      className="h-12 w-12 rounded-full border-2 flex items-center justify-center leading-none"
      initial={false}
      animate={{
        backgroundColor: completed
          ? "var(--color-blue-500)"
          : "var(--color-white)",
        borderColor:
          completed || active
            ? "var(--color-blue-500)"
            : "var(--color-slate-200)",
        color: completed
          ? "var(--color-white)"
          : active
          ? "var(--color-blue-600)"
          : "var(--color-slate-400)",
      }}
    >
      {completed ? <CheckIcon /> : step}
    </motion.li>
  );
}
