import { useCallback, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

type UseStepActions = {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;
  canGoToNextStep: boolean;
  canGoToPrevStep: boolean;
  setStep: Dispatch<SetStateAction<number>>;
};

type SetStepCallbackType = (step: number | ((step: number) => number)) => void;

/**
 * A hook that allows to manage and navigate between steps in a sequence.
 * @param {number} maxStep - The maximum step value.
 * @returns {[number, UseStepActions]} An array containing the current step value and an object with the following properties:
 * 1. goToNextStep - A function to go to the next step.
 * 2. goToPrevStep - A function to go to the previous step.
 * 3. canGoToNextStep - A boolean indicating whether the next step is available.
 * 4. canGoToPrevStep - A boolean indicating whether the previous step is available.
 * 5. setStep - A function to set the step value.
 * 6. reset - A function to reset the step value to 1.
 */
export default function useStep(maxStep: number): [number, UseStepActions] {
  const [currentStep, setCurrentStep] = useState(1);

  const canGoToNextStep = currentStep + 1 <= maxStep;
  const canGoToPrevStep = currentStep - 1 > 0;

  const setStep = useCallback<SetStepCallbackType>(
    (step) => {
      // Allow value to be a function so we have the same API as useState
      const newStep = step instanceof Function ? step(currentStep) : step;

      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep);
        return;
      }

      throw new Error("Step not valid");
    },
    [maxStep, currentStep],
  );

  const goToNextStep = useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep((step) => step + 1);
    }
  }, [canGoToNextStep]);

  const goToPrevStep = useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep((step) => step - 1);
    }
  }, [canGoToPrevStep]);

  const reset = useCallback(() => {
    setCurrentStep(1);
  }, []);

  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset,
    },
  ];
}
