import { TStep } from "./types";
import clsx from "clsx";
import * as React from "react";

function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-slate-700 to-slate-900 px-[5%]">
      <div className="w-full max-w-[600px]">
        <Stepper />
      </div>
    </main>
  );
}

function Stepper() {
  const [steps, setSteps] = React.useState([1, 2, 3, 4]);
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <div className="rounded-xl bg-white py-10 px-12 w-full shadow-2xl flex flex-col gap-12">
      <header>
        <ul className="flex justify-between">
          {steps.map((n) => (
            <Step
              step={n}
              inactive={activeStep < n}
              active={activeStep === n}
              completed={activeStep > n}
            />
          ))}
        </ul>
      </header>

      <StepContentPlaceholder />

      <footer className="flex justify-between">
        <button className="text-slate-400" type="button">
          Back
        </button>
        <button
          className="bg-blue-500 text-white rounded-full px-3 py-2"
          type="button"
        >
          Continue
        </button>
      </footer>
    </div>
  );
}

function StepContentPlaceholder() {
  return (
    <div>
      <div className="w-1/2 bg-slate-200/70 rounded h-8" />
      <div className="w-4/5 bg-slate-200/70 rounded h-6 mt-4" />
      <div className="w-full bg-slate-200/70 rounded h-6 mt-2" />
      <div className="w-2/3 bg-slate-200/70 rounded h-6 mt-2" />
    </div>
  );
}

function Step({ step, active, inactive, completed }: TStep) {
  return (
    <li
      className={clsx(
        "h-12 w-12 rounded-full border-2 flex items-center justify-center leading-none",
        active && "border-blue-400 text-blue-600",
        inactive && "border-slate-200 text-slate-400",
      )}
    >
      {step}
    </li>
  );
}

export default App;
