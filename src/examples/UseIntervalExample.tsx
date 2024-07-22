import { useState } from "react";
import useInterval from "../hooks/useInterval";

export default function UseIntervalExample() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div className="text-ctp-text">Rendered every second: {count}</div>;
}
