import useVisibilityChange from "../hooks/useVisibilityChange";
import { useEffect, useState } from "react";

export default function UseCopyToClipboardExample() {
  const isDocumentVisible = useVisibilityChange();
  const [tabAwayCount, setTabAwayCount] = useState(0);

  useEffect(() => {
    if (isDocumentVisible === false) {
      setTabAwayCount(tabAwayCount + 1);
    }
  }, [isDocumentVisible]);

  return (
    <div className="text-ctp-text">
      <p>Tab away count: {tabAwayCount}</p>
    </div>
  );
}
