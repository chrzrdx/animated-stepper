import { TStepperHeaderProps } from "../../types";
import { Step } from "./Step";

export function Header({ steps, completed }: TStepperHeaderProps) {
  return (
    <header>
      <ul className="flex justify-between">
        {steps.map((step) => (
          <Step
            step={step}
            inactive={step > completed + 1}
            active={step === completed + 1}
            completed={step <= completed}
          />
        ))}
      </ul>
    </header>
  );
}
