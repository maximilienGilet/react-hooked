import clsx from "clsx";
import useStep from "@/hooks/useStep";

export default function UseStepExample() {
  const [currentStep, helpers] = useStep(5);

  const {
    canGoToPrevStep,
    canGoToNextStep,
    goToNextStep,
    goToPrevStep,
    reset,
    setStep,
  } = helpers;

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-ctp-text">
      <p>
        Current step is <strong>{currentStep}</strong>
      </p>
      <div className="flex gap-4">
        <p>
          Can go to previous step{" "}
          <span
            className={clsx(
              "rounded p-2 text-ctp-base",
              canGoToPrevStep ? "bg-ctp-green" : "bg-ctp-red",
            )}
          >
            {canGoToPrevStep ? "yes" : "no"}
          </span>
        </p>
        <p>
          Can go to next step{" "}
          <span
            className={clsx(
              "rounded p-2 text-ctp-base",
              canGoToNextStep ? "bg-ctp-green" : "bg-ctp-red",
            )}
          >
            {canGoToNextStep ? "yes" : "no"}
          </span>
        </p>
      </div>
      <div className="flex gap-4">
        <button
          className="rounded bg-ctp-blue px-4 py-2 text-ctp-base"
          onClick={goToNextStep}
        >
          Go to next step
        </button>
        <button
          className="rounded bg-ctp-pink px-4 py-2 text-ctp-base"
          onClick={goToPrevStep}
        >
          Go to previous step
        </button>
        <button
          className="rounded bg-ctp-red px-4 py-2 text-ctp-base"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="rounded bg-ctp-yellow px-4 py-2 text-ctp-base"
          onClick={() => {
            setStep(3);
          }}
        >
          Set to step 3
        </button>
      </div>
    </div>
  );
}
