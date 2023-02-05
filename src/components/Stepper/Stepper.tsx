import { TStepProps, TStepperHeaderProps } from "../../types";
import { range } from "../../utils";
import { CheckIcon } from "./CheckIcon";
import clsx from "clsx";
import * as React from "react";

function Stepper({ numSteps = 4 }) {
  const [steps] = React.useState(range(numSteps));
  const first = steps[0];
  const last = steps[steps.length - 1];
  const [completed, setCompleted] = React.useState(first - 1);

  const handleBack = () =>
    setCompleted((completed) => Math.max(completed - 1, first - 1));
  const handleContinue = () =>
    setCompleted((completed) => Math.min(completed + 1, last));

  return (
    <div className="rounded-xl bg-white py-10 px-12 w-full shadow-2xl flex flex-col gap-12">
      <Header steps={steps} completed={completed} />
      <ContentPlaceholder />
      <FooterActions onBack={handleBack} onContinue={handleContinue} />
    </div>
  );
}

function Header({ steps, completed }: TStepperHeaderProps) {
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

function ContentPlaceholder() {
  return (
    <div>
      <div className="w-1/2 bg-slate-200/70 rounded h-8" />
      <div className="w-4/5 bg-slate-200/70 rounded h-6 mt-4" />
      <div className="w-full bg-slate-200/70 rounded h-6 mt-2" />
      <div className="w-2/3 bg-slate-200/70 rounded h-6 mt-2" />
    </div>
  );
}

function Step({ step, active, inactive, completed }: TStepProps) {
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

function FooterActions({
  onBack,
  onContinue,
}: { onBack: () => void; onContinue: () => void }) {
  return (
    <footer className="flex justify-between">
      <button
        className="text-slate-400 hover:text-slate-600 transition-colors"
        type="button"
        onClick={onBack}
      >
        Back
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-full px-4 py-2"
        type="button"
        onClick={onContinue}
      >
        Continue
      </button>
    </footer>
  );
}

export { Stepper };
