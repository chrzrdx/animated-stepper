import { TStepProps } from "../../types";
import { CheckIcon } from "./CheckIcon";
import clsx from "clsx";

export function Step({ step, active, inactive, completed }: TStepProps) {
  return (
    <li
      className={clsx(
        "h-12 w-12 rounded-full border-2 flex items-center justify-center leading-none",
        active && "border-blue-500 text-blue-600",
        inactive && "border-slate-200 text-slate-400",
        completed && "border-blue-500 bg-blue-500 text-white",
      )}
    >
      {completed ? <CheckIcon /> : step}
    </li>
  );
}
