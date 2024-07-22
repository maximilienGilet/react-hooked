import { useEffect } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function UseIntersectionObserverExample() {
  const [ref, inView] = useIntersectionObserver();

  useEffect(() => {
    if (inView) {
      alert("In view");
    } else {
      alert("Out of view");
    }
  }, [inView]);

  return (
    <div ref={ref} className="text-ctp-text">
      {inView && <div>In view</div>}
    </div>
  );
}
