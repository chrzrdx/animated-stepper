export type TStepProps = {
  step: number;
  active: boolean;
  inactive: boolean;
  completed: boolean;
};

export type TStepperHeaderProps = {
  steps: number[];
  completed: number;
};
