import { STEP } from "../../enums";
import { TStepperHeaderProps } from "../../types";
import { Step } from "./Step";

export function Header({ steps, completed }: TStepperHeaderProps) {
  return (
    <header>
      <ul className="flex justify-between">
        {steps.map((step) => (
          <Step
            step={step}
            variant={
              step <= completed
                ? STEP.COMPLETED
                : step === completed + 1
                ? STEP.ACTIVE
                : STEP.INACTIVE
            }
            key={step}
          />
        ))}
      </ul>
    </header>
  );
}
