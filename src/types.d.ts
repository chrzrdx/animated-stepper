import { STEP } from "./enums";

export type TStepProps = {
  step: number;
  variant: STEP;
};

export type TStepperHeaderProps = {
  steps: number[];
  completed: number;
};

type TFooterActionsProps = {
  onBack: () => void;
  onContinue: () => void;
};
