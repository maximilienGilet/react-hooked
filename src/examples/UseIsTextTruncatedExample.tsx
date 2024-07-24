import useIsTextTruncated from "@/hooks/useIsTextTruncated";
import { useRef } from "react";

export default function UseIsTextTruncated() {
  const refOfValue = useRef(null);
  const refOfValue2 = useRef(null);

  const itsTruncatedValue = useIsTextTruncated(refOfValue);
  const notTruncatedValue = useIsTextTruncated(refOfValue2);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-col gap-2">
        <p>
          <b>Is Text Truncated:</b> {itsTruncatedValue ? "Yes" : "No"}
        </p>
        <div className="h-10 w-40 overflow-hidden whitespace-nowrap">
          <p className="truncate" ref={refOfValue}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quas, quos, quae, quia quidem quibusdam
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          <b>Is Text Truncated:</b> {notTruncatedValue ? "Yes" : "No"}
        </p>
        <div className="whitespace-nowrap">
          <p ref={refOfValue2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quas, quos, quae, quia quidem quibusdam
          </p>
        </div>
      </div>
    </div>
  );
}
