import React from "react";
import useHistoryState from "../hooks/useHistoryState";

export default function UseHistoryStateExample() {
  const [state, setState, history] = useHistoryState<number>(0, 20);

  const increment = React.useCallback(() => {
    setState((prev: number) => prev + 1);
  }, [setState]);
  const decrement = React.useCallback(() => {
    setState((prev: number) => prev - 1);
  }, [setState]);
  const revert = React.useCallback(() => {
    history.pop();
  }, [history]);
  const clear = React.useCallback(() => {
    history.clearItems();
  }, [history]);

  return (
    <div className="flex items-start justify-center gap-8 p-4 w-full text-ctp-text">
      <section className="flex flex-col items-center justify-center gap-4 p-4">
        <p className="text-lg">Counter</p>
        <div className="flex gap-4">
          <button className="text-ctp-green" onClick={increment}>
            up
          </button>
          <p>{state}</p>
          <button className="text-ctp-red" onClick={decrement}>
            down
          </button>
        </div>
        <div className="flex gap-4">
          <button className="text-ctp-blue" onClick={revert}>
            revert
          </button>
          <button className="text-ctp-pink" onClick={clear}>
            clear
          </button>
        </div>
      </section>
      <section>
        <h1>Histories</h1>
        <ol>
          {history.histories.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}
