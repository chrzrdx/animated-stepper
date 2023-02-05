import { TFooterActionsProps } from "../../types";

export function FooterActions({ onBack, onContinue }: TFooterActionsProps) {
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
