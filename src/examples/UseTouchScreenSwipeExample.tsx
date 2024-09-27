import { useEffect, useState } from "react";
import useTouchScreenSwipe, { type Direction } from "@/hooks/useTouchScreenSwipe";


export default function UseTouchScreenSwipeExample() {
  const value = useTouchScreenSwipe();
  const [counts, setCounts] = useState({up: 0, down: 0, left: 0, right: 0});

  useEffect(() => {
    if (value.direction) {
      setCounts((prev) => ({
        ...prev,
        [value.direction as Direction]: prev[value.direction as Direction] + 1
      }))
    }
    
  }, [value, setCounts]);

  return (
    <div>
        counts up: {counts.up}, down: {counts.down}, left: {counts.left}, right: {counts.right}
    </div>
  );
}
