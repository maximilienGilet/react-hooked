import clsx from "clsx";
import { capitalize } from "../utils/strings";
import { Suspense, lazy } from "react";

function Fallback() {
  return (
    <div
      className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-ctp-pink rounded-full dark:text-ctp-pink"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export interface ExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export default function Example({ name, className }: ExampleProps) {
  const ExampleComponent = lazy(
    () => import(`../examples/${capitalize(name)}Example.tsx`),
  );
  return (
    <div className="ctp-frappe">
      <div className={clsx("gap-4 p-4 rounded-xl bg-ctp-base", className)}>
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center">
            <Suspense fallback={<Fallback />}>
              <ExampleComponent />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
