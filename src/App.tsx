import { TStep } from "./types";
import clsx from "clsx";
import * as React from "react";

function range(n: number) {
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1);
}

function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-slate-700 to-slate-900 px-[5%]">
      <div className="w-full max-w-[600px]">
        <Stepper />
      </div>
    </main>
  );
}

function Stepper({ numSteps = 4 }) {
  const [steps] = React.useState(range(numSteps));
  const first = steps[0];
  const last = steps[steps.length - 1];
  const [completed, setCompleted] = React.useState(first - 1);

  return (
    <div className="rounded-xl bg-white py-10 px-12 w-full shadow-2xl flex flex-col gap-12">
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

      <StepContentPlaceholder />

      <footer className="flex justify-between">
        <button
          className="text-slate-400"
          type="button"
          onClick={() =>
            setCompleted((completed) => Math.max(completed - 1, first - 1))
          }
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white rounded-full px-3 py-2"
          type="button"
          onClick={() =>
            setCompleted((completed) => Math.min(completed + 1, last))
          }
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
        active && "border-blue-500 text-blue-600",
        inactive && "border-slate-200 text-slate-400",
        completed && "border-blue-500 bg-blue-500 text-white",
      )}
    >
      {completed ? <CheckIcon /> : step}
    </li>
  );
}

function CheckIcon() {
  return (
    <div className="h-6 w-6">
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5 7L9 17.5L5 13.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default App;
