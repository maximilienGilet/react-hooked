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
    <div className="flex flex-col gap-4 justify-center items-center text-ctp-text">
      <p>
        Current step is <strong>{currentStep}</strong>
      </p>
      <div className="flex gap-4">
        <p>
          Can go to previous step{" "}
          <span
            className={clsx(
              "p-2 text-ctp-base rounded",
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
              "p-2 text-ctp-base rounded",
              canGoToNextStep ? "bg-ctp-green" : "bg-ctp-red",
            )}
          >
            {canGoToNextStep ? "yes" : "no"}
          </span>
        </p>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-ctp-blue text-ctp-base px-4 py-2 rounded"
          onClick={goToNextStep}
        >
          Go to next step
        </button>
        <button
          className="bg-ctp-pink text-ctp-base px-4 py-2 rounded"
          onClick={goToPrevStep}
        >
          Go to previous step
        </button>
        <button
          className="bg-ctp-red text-ctp-base px-4 py-2 rounded"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className="bg-ctp-yellow text-ctp-base px-4 py-2 rounded"
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
