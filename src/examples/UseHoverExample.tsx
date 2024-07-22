import { useRef } from "react";
import useHover from "../hooks/useHover";

const UseHoverExample = () => {
  const ref = useRef(null);
  const hovered = useHover(ref);

  return (
    <div ref={ref} className="text-ctp-text">
      <p>Is hovered: {hovered ? "yes" : "no"}</p>
    </div>
  );
};

export default UseHoverExample;
