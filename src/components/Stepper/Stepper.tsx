import { range } from "../../utils";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { FooterActions } from "./FooterActions";
import { Header } from "./Header";
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
    <div className="rounded-xl bg-white py-7 px-9 sm:py-10 sm:px-12 w-full shadow-2xl flex flex-col gap-9 sm:gap-12">
      <Header steps={steps} completed={completed} />
      <ContentPlaceholder />
      <FooterActions onBack={handleBack} onContinue={handleContinue} />
    </div>
  );
}

export { Stepper };
